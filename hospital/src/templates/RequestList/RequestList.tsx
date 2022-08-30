import { Typography } from 'src/Typography'
import { ReactComponent as FirstStep } from 'src/public/FirstStep.svg'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getPatientsInfo } from 'src/redux/patients/selectors'
import { useEffect } from 'react'
import { requestPatientsInfo, saveChoosenPatient } from 'src/redux/patients/actions'
import { Button, Checkbox } from 'src/atoms'
import './RequestList.scss'
import { Form } from 'antd'
import { PersonalCard } from 'src/organisms'
import { RequestType } from './RequestListType'

export const RequestList = () => {
  const dispatch = useAppDispatch()

  const { patients } = useAppSelector(getPatientsInfo)

  useEffect(() => {
    dispatch(requestPatientsInfo())
  }, [])

  const onFinish = (values: RequestType) => {
    dispatch(
      saveChoosenPatient(
        Object.values(values)
          .filter((item) => !!item)
          .reduce((prev: { uuid: string[] }, current) => ({ uuid: [...prev.uuid, ...current] }), {
            uuid: []
          })
      )
    )
  }

  return (
    <div className="request-list wrapper">
      <Typography.Headline1 className="request-list__title">
        Requesting The Doctor
      </Typography.Headline1>
      <div className="request-list__step-wrapper">
        <FirstStep />
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
        <Checkbox
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
        <Typography.Subtitle2 className="request-list__subtitle">Other</Typography.Subtitle2>
        <Checkbox
          className="request-list__info"
          propsItem={{ name: 'other_data' }}
          propsGroupCheckbox={{
            options: patients
              .filter((patient) => patient.client_patient_relationship === 'other')
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
