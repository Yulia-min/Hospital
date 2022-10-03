import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PATIENTS_TYPE } from 'src/constants'
import { Header } from 'src/molecules'
import { PersonalCard } from 'src/organisms'
import { getRequestDetailsInfo } from 'src/redux/cards/actions'
import { getRequestDetails } from 'src/redux/cards/selectors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { requestServiceType } from 'src/redux/services/actions'
import { getServiceInfo } from 'src/redux/services/selectors'
import { ListOfPatientsType } from 'src/templates/CreateRequest/CreateRequestType'
import { Typography } from 'src/Typography'
import './ListOfPatients.scss'

export const ListOfPatients = () => {
  const dispatch = useAppDispatch()
  const { requestId } = useParams() as { requestId: string }
  const { requestDetails } = useAppSelector(getRequestDetails)
  const { services } = useAppSelector(getServiceInfo)

  const listOfPatients = {
    you: requestDetails?.patients
      ?.filter((patient) => patient.patient_info.client_patient_relationship === null)
      .map((item) => item),
    family: requestDetails?.patients
      ?.filter((patient) => patient.patient_info.client_patient_relationship === 'family')
      .map((item) => item),
    friends: requestDetails?.patients
      ?.filter((patient) => patient.patient_info.client_patient_relationship === 'friends')
      .map((item) => item),
    other: requestDetails?.patients
      ?.filter((patient) => patient.patient_info.client_patient_relationship === 'other')
      .map((item) => item)
  }

  useEffect(() => {
    dispatch(getRequestDetailsInfo(requestId))
  }, [requestId])

  useEffect(() => {
    dispatch(requestServiceType())
  }, [])

  return (
    <div className="request-list">
      <Header.RequestDetails isArrow={true} />
      {PATIENTS_TYPE.map(
        (type: string) =>
          !!listOfPatients[type as keyof ListOfPatientsType]?.length && (
            <div className="request-list__personal-card-wrapper" key={type}>
              <Typography.Subtitle2 className="request-list__title request-list__title-wrapper">
                {type}
              </Typography.Subtitle2>
              {listOfPatients[type as keyof ListOfPatientsType]?.map((item) => (
                <div key={item.uuid} className="request-list__card">
                  <PersonalCard
                    symptoms={services
                      .find((service_type) => service_type.name === 'common')
                      ?.symptoms.filter((symptom_id) =>
                        item.symptoms.map((symptom) => symptom).includes(symptom_id.uuid)
                      )
                      .map((item) => item.name)}
                    patient={item.patient_info}
                    isDefault={true}
                  />
                </div>
              ))}
            </div>
          )
      )}
    </div>
  )
}
