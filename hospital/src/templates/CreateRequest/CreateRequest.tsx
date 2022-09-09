import { Typography } from 'src/Typography'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getChoosenPatientsInfo, getPatientsInfo } from 'src/redux/patients/selectors'
import { useEffect, useRef, useState } from 'react'
import { requestPatientsInfo, saveChoosenPatient } from 'src/redux/patients/actions'
import { Button, Checkbox } from 'src/atoms'
import './CreateRequest.scss'
import { Form } from 'antd'
import { PersonalCard } from 'src/organisms'
import { CheckedListType, ICreateRequest, PatientListType, RequestType } from './CreateRequestType'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { PATIENT_TYPE } from 'src/constants'
import { Header } from 'src/molecules'
import React from 'react'
import { useMobile } from 'src/hooks'

export const CreateRequest = ({ setStep, step }: ICreateRequest) => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const { patients } = useAppSelector(getPatientsInfo)

  const [showScrollButton, setShowScrollButton] = useState(false)
  const { choosenPatient } = useAppSelector(getChoosenPatientsInfo)

  const [checkedList, setCheckedList] = useState<CheckedListType>({
    family: [],
    friends: [],
    other: [],
    familyChecked: false,
    friendsChecked: false,
    otherChecked: false
  })

  const patientsList = {
    family: patients
      .filter((patient) => patient.client_patient_relationship === 'family')
      .map((item) => item.uuid),
    friends: patients
      .filter((patient) => patient.client_patient_relationship === 'friends')
      .map((item) => item.uuid),
    other: patients
      .filter((patient) => patient.client_patient_relationship === 'other')
      .map((item) => item.uuid)
  }

  const patientsIds = {
    family: patients
      .filter((patient) => patient.client_patient_relationship === 'family')
      .filter((found_patient) => choosenPatient?.selectedPatientsIds.includes(found_patient.uuid))
      .map((item) => item.uuid),
    friends: patients
      .filter((patient) => patient.client_patient_relationship === 'friends')
      .filter((found_patient) => choosenPatient?.selectedPatientsIds.includes(found_patient.uuid))
      .map((item) => item.uuid),
    other: patients
      .filter((patient) => patient.client_patient_relationship === 'other')
      .filter((found_patient) => choosenPatient?.selectedPatientsIds.includes(found_patient.uuid))
      .map((item) => item.uuid),
    personal: choosenPatient?.selectedPatientsIds.filter(
      (selectedPatientsId) =>
        selectedPatientsId ===
        patients.find((patient) => patient.client_patient_relationship === null)?.uuid
    )
  }

  useEffect(() => {
    dispatch(requestPatientsInfo())
  }, [])

  const [form] = Form.useForm()

  const onCheckAllChange = (checkType: string) => (e: CheckboxChangeEvent) => {
    form.setFieldsValue(
      e.target.checked
        ? { [`${checkType}_data`]: patientsList[checkType as keyof PatientListType] }
        : { [`${checkType}_data`]: [] }
    )
    setCheckedList({
      ...checkedList,
      [checkType]: e.target.checked ? patientsList[checkType as keyof PatientListType] : [],
      [`${checkType}Checked`]: e.target.checked
    })
  }

  const onChange = (checkType: string) => (checkedValues: CheckboxValueType[]) => {
    setCheckedList({
      ...checkedList,
      [checkType]: checkedValues,
      [`${checkType}Checked`]:
        checkedValues.length === patientsList[checkType as keyof PatientListType].length
    })
  }

  const onFinish = (values: RequestType) => {
    dispatch(
      saveChoosenPatient(
        Object.values(values)
          .filter((item) => !!item)
          .reduce(
            (prev: { selectedPatientsIds: string[] }, current) => ({
              selectedPatientsIds: [...prev.selectedPatientsIds, ...current]
            }),
            {
              selectedPatientsIds: []
            }
          )
      )
    )
    setStep((step: number) => step + 1)
  }

  const isButtonHandler = () => {
    if (window.visualViewport.width < window.innerWidth) {
      setShowScrollButton(true)
      if (ref.current && ref.current.getBoundingClientRect().bottom - 150 <= window.innerHeight) {
        setShowScrollButton(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isButtonHandler)
    return () => window.removeEventListener('scroll', isButtonHandler)
  }, [])

  return (
    <div className="request-list wrapper" ref={ref}>
      {isMobile ? (
        <Header.RequestPage
          step={step}
          strokeDasharray="15 85"
          title="Who Needs The Visit?"
          subtitle="Please Select Patients From Below And/Or Add New Patient"
        />
      ) : (
        <Header.RequestPage
          step={step}
          strokeDasharray="15 85"
          title="Who Needs The Visit?"
          subtitle="Select People For Whom You Are Requesting The Visit"
        />
      )}

      <Form
        initialValues={{
          other_data: patientsIds.other,
          family_data: patientsIds.family,
          personal_data: patientsIds.personal,
          friends_data: patientsIds.friends
        }}
        form={form}
        onFinish={onFinish}
        className="request-list__card-wrapper"
      >
        <div className="request-list__subtitle-container">
          <Typography.Subtitle2 className="request-list__subtitle">You</Typography.Subtitle2>
        </div>
        <Checkbox.Group
          className="request-list__info"
          propsItem={{ name: 'personal_data' }}
          propsGroupCheckbox={{
            options: patients
              .filter((patient) => patient.client_patient_relationship === null)
              .map((item) => ({
                value: item.uuid,
                label: <PersonalCard.CheckboxCard patient={item} />
              }))
          }}
        />
        <div>
          {PATIENT_TYPE.map(
            (type: string) =>
              !!patientsList[type as keyof PatientListType].length && (
                <React.Fragment key={type}>
                  <div className="request-list__checkbox-wrapper">
                    <Checkbox.Single
                      propsChecbox={{
                        onChange: onCheckAllChange(type),
                        checked: checkedList[`${type}Checked` as keyof CheckedListType & boolean]
                      }}
                    >
                      <Typography.Subtitle2 className="request-list__subtitle">
                        {type[0].toUpperCase() + type.substring(1)}
                      </Typography.Subtitle2>
                    </Checkbox.Single>
                  </div>
                  <Checkbox.Group
                    className="request-list__info"
                    propsItem={{
                      name: `${type}_data`
                    }}
                    propsGroupCheckbox={{
                      value: checkedList[type as keyof PatientListType],
                      onChange: onChange(type),
                      options: patients
                        .filter((patient) => patient.client_patient_relationship === type)
                        .map((item) => ({
                          value: item.uuid,
                          label: <PersonalCard.CheckboxCard patient={item} />
                        }))
                    }}
                  />
                </React.Fragment>
              )
          )}
        </div>
        {isMobile ? (
          <div className={`request-list__button-wrapper ${showScrollButton ? 'active' : ''}`}>
            <div className="request-list__cancel-wrapper">
              <Button.Default variant="secondary" className="request-list__cancel-button">
                <Typography.Button2>Cancel</Typography.Button2>
              </Button.Default>
            </div>
            <div className="request-list__button-container">
              <Button.Default variant="secondary" className="request-list__cancel-button">
                <Typography.Button2>Cancel</Typography.Button2>
              </Button.Default>
              <Button.Default
                className="request-list__next-button"
                variant="primary"
                htmlType="submit"
              >
                <Typography.Button2>Next</Typography.Button2>
              </Button.Default>
            </div>
          </div>
        ) : (
          <div className={`request-list__button-wrapper ${showScrollButton ? 'active' : ''}`}>
            <div className="request-list__cancel-wrapper">
              <Button.Default variant="secondary">
                <Typography.Button2 className="request-list__cancel-button">
                  Cancel
                </Typography.Button2>
              </Button.Default>
            </div>
            <div className="request-list__button-container">
              <Button.Default variant="secondary">
                <Typography.Button2>Cancel</Typography.Button2>
              </Button.Default>
              <Button.Default
                className="request-list__next-button"
                variant="primary"
                htmlType="submit"
              >
                <Typography.Button2>Next</Typography.Button2>
              </Button.Default>
            </div>
          </div>
        )}
      </Form>
    </div>
  )
}
