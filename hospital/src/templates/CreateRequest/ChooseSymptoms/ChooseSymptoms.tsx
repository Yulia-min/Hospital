import { Tabs } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { ChangeEvent, useEffect, useState } from 'react'
import { Button, Checkbox, Input } from 'src/atoms'
import { useMobile } from 'src/hooks'
import { Header } from 'src/molecules'
import { Collapse } from 'src/molecules/Collapse/Collapse'
import { PersonalCard, SymptomsCards } from 'src/organisms'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestPatientsInfo, savePatientWithSymptoms } from 'src/redux/patients/actions'
import { getChoosenPatientsInfo, getPatientsInfo } from 'src/redux/patients/selectors'
import { requestServiceType } from 'src/redux/services/actions'
import { getServiceInfo } from 'src/redux/services/selectors'
import { ICreateRequest } from '../CreateRequestType'
import './ChooseSymptoms.scss'
import { PatientsWithSymptomsType } from './ChooseSymptomsType'

export const ChooseSymptoms = ({ setStep, step }: ICreateRequest) => {
  const dispatch = useAppDispatch()

  const { services } = useAppSelector(getServiceInfo)
  const { patients } = useAppSelector(getPatientsInfo)
  const { choosenPatient } = useAppSelector(getChoosenPatientsInfo)
  const isMobile = useMobile()

  const [patientsWithSymptoms, setPatientsWithSymptoms] = useState<PatientsWithSymptomsType>(
    patients
      .filter((patient) => choosenPatient?.selectedPatientsIds.includes(patient.uuid))
      .reduce((prev, current) => ({ ...prev, [current.uuid]: current }), {})
  )

  useEffect(() => {
    dispatch(requestServiceType())
    dispatch(requestPatientsInfo())
  }, [])

  const onSelectSymptomsChange = (id: string) => (checkedValues: CheckboxValueType[]) => {
    setPatientsWithSymptoms(() => {
      if (!checkedValues.length) {
        delete patientsWithSymptoms[id].comment
      }
      return {
        ...patientsWithSymptoms,
        [id]: {
          ...patientsWithSymptoms[id],
          symptoms: checkedValues
        }
      }
    })
  }

  const onInputChange = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPatientsWithSymptoms({
      ...patientsWithSymptoms,
      [id]: { ...patientsWithSymptoms[id], comment: e.target.value }
    })
  }

  const onClick = () => {
    dispatch(savePatientWithSymptoms(Object.values(patientsWithSymptoms)))
  }

  const backClickHandler = () => {
    setStep((step: number) => step - 1)
  }

  return (
    <div className="choose-symptoms">
      {isMobile ? (
        <div>
          <Header.RequestPage
            step={step}
            strokeDasharray="40 60"
            title="What Are The Symptoms?"
            subtitle="Select Each Patient’s Symptoms"
            onClick={backClickHandler}
          />
          <div className="choose-symptoms__collapse-wrapper">
            {Object.values(patientsWithSymptoms).map((patient) => (
              <Collapse
                className="choose-symptoms__collapse"
                title={PersonalCard.DefaultCard(patient)}
              >
                <div>
                  {services
                    .filter((service) => service.name === 'common')
                    .map((symptom) => (
                      <Checkbox.Group
                        className="choose-symptoms__symptoms-list"
                        propsGroupCheckbox={{
                          onChange: onSelectSymptomsChange(patient.uuid),
                          options: symptom.symptoms.map((item) => ({
                            value: item.name,
                            label: SymptomsCards(item)
                          }))
                        }}
                      />
                    ))}
                </div>
                {!!patient.symptoms?.length && (
                  <Input.TextArea
                    row={5}
                    propsTextArea={{ onChange: onInputChange(patient.uuid) }}
                    propsItem={{ label: 'Please Describe How You’re Feeling' }}
                  />
                )}
              </Collapse>
            ))}
          </div>
          <div className="choose-symptoms__button-container">
            <Button.Default className="choose-symptoms__cancel-button" variant="secondary">
              Cancel
            </Button.Default>
            <Button.Default
              onClick={onClick}
              disabled={
                !Object.values(patientsWithSymptoms).every((patient) => patient.symptoms?.length)
              }
              className="choose-symptoms__next-button"
              variant="primary"
            >
              Next
            </Button.Default>
          </div>
        </div>
      ) : (
        <>
          <Header.RequestPage
            step={step}
            strokeDasharray="40 60"
            title="What Are The Symptoms?"
            subtitle="Select People For Whom You Are Requesting The Visit"
            onClick={backClickHandler}
          />
          <Tabs
            className="choose-symptoms__tab"
            tabPosition="left"
            defaultActiveKey={choosenPatient?.selectedPatientsIds[0]}
          >
            {Object.values(patientsWithSymptoms).map((patient) => (
              <Tabs.TabPane key={patient.uuid} tab={PersonalCard.DefaultCard(patient)}>
                <>
                  {services
                    .filter((service) => service.name === 'common')
                    .map((symptom) => (
                      <Checkbox.Group
                        className="choose-symptoms__symptoms-list"
                        propsGroupCheckbox={{
                          onChange: onSelectSymptomsChange(patient.uuid),
                          options: symptom.symptoms.map((item) => ({
                            value: item.name,
                            label: SymptomsCards(item)
                          }))
                        }}
                      />
                    ))}
                  {!!patient.symptoms?.length && (
                    <Input.TextArea
                      className="choose-symptoms__text-area"
                      propsTextArea={{ onChange: onInputChange(patient.uuid) }}
                      propsItem={{ label: 'Please Describe How You’re Feeling' }}
                      row={5}
                    />
                  )}
                </>
              </Tabs.TabPane>
            ))}
          </Tabs>
          <div className="choose-symptoms__button-container">
            <Button.Default className="choose-symptoms__cancel-button" variant="secondary">
              Cancel
            </Button.Default>
            <Button.Default
              disabled={
                !Object.values(patientsWithSymptoms).every((patient) => patient.symptoms?.length)
              }
              className="choose-symptoms__next-button"
              variant="primary"
              onClick={onClick}
            >
              Next
            </Button.Default>
          </div>
        </>
      )}
    </div>
  )
}
