import { Typography } from 'src/Typography'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { ReactComponent as Cross } from 'src/public/Cross.svg'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getPatientsInfo } from 'src/redux/patients/selectors'
import { useEffect, useState } from 'react'
import { requestPatientsInfo, saveChoosenPatient } from 'src/redux/patients/actions'
import { Button, Checkbox, Stepper } from 'src/atoms'
import './CreateRequest.scss'
import { Form } from 'antd'
import { PersonalCard } from 'src/organisms'
import { RequestType } from './CreateRequestType'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

export const CreateRequest = () => {
  const dispatch = useAppDispatch()

  const { patients } = useAppSelector(getPatientsInfo)

  const checkedPatients = patients
    .filter((patient) => patient.client_patient_relationship === 'family')
    .map((item) => ({
      value: item.uuid,
      label: PersonalCard(item)
    }))

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>()
  const [checkAll, setCheckAll] = useState(false)

  useEffect(() => {
    dispatch(requestPatientsInfo())
  }, [])

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const values = checkedPatients.map((patient) => patient.value)
    setCheckedList(e.target.checked ? values : [])
    setCheckAll(e.target.checked)
  }

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues)
    setCheckAll(checkedValues.length === checkedPatients.length)
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
  }

  return (
    <div className="request-list wrapper">
      <div className="request-list__header">
        <MainArrow />
        <Typography.Headline1 className="request-list__title">
          Requesting The Doctor
        </Typography.Headline1>
        <Cross />
      </div>
      <div className="request-list__step-wrapper">
        <Stepper strokeDasharray="15 85" step={1} />
        <div className="request-list__step-description">
          <Typography.Headline6 className="request-list__step-title">
            Who Needs The Visit?
          </Typography.Headline6>
          <Typography.Body1 className="request-list__step-subtitle">
            Select People For Whom You Are Requesting The Visit
          </Typography.Body1>
        </div>
      </div>
      <div />
      <Form onFinish={onFinish} className="request-list__card-wrapper">
        <Typography.Subtitle2 className="request-list__subtitle">You</Typography.Subtitle2>
        <Checkbox.Group
          className="request-list__info"
          propsItem={{ name: 'personal_data' }}
          propsGroupCheckbox={{
            options: patients
              .filter((patient) => patient.client_patient_relationship === null)
              .map((item) => ({
                value: item.uuid,
                label: PersonalCard(item)
              }))
          }}
        />
        <Checkbox.Single propsChecbox={{ onChange: onCheckAllChange, checked: checkAll }}>
          <Typography.Subtitle2 className="request-list__subtitle">Family</Typography.Subtitle2>
        </Checkbox.Single>
        <Checkbox.Group
          className="request-list__info"
          propsItem={{ name: 'family_data' }}
          propsGroupCheckbox={{
            value: checkedList,
            onChange: onChange,
            options: patients
              .filter((patient) => patient.client_patient_relationship === 'family')
              .map((item) => ({
                value: item.uuid,
                label: PersonalCard(item)
              }))
          }}
        />
        <div className="request-list__button-wrapper">
          <Button.Default variant="secondary">
            <Typography.Button2>Cancel</Typography.Button2>
          </Button.Default>
          <div>
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
      </Form>
    </div>
  )
}
