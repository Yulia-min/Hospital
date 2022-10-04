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
import { IRequestDetails } from '../RequestDetailsType'
import './ListOfPatients.scss'

export const ListOfPatients = ({ setPage }: IRequestDetails) => {
  const dispatch = useAppDispatch()
  const { requestId } = useParams() as { requestId: string }
  const { requestDetails } = useAppSelector(getRequestDetails)
  const { services } = useAppSelector(getServiceInfo)

  const backClickHandler = () => {
    setPage((page: number) => page - 1)
  }

  const listOfPatients = {
    you: requestDetails?.patients?.filter(
      (patient) => patient.patient_info.client_patient_relationship === null
    ),
    family: requestDetails?.patients?.filter(
      (patient) => patient.patient_info.client_patient_relationship === 'family'
    ),
    friends: requestDetails?.patients?.filter(
      (patient) => patient.patient_info.client_patient_relationship === 'friends'
    ),
    other: requestDetails?.patients?.filter(
      (patient) => patient.patient_info.client_patient_relationship === 'other'
    )
  }

  useEffect(() => {
    dispatch(getRequestDetailsInfo(requestId))
  }, [requestId])

  useEffect(() => {
    dispatch(requestServiceType())
  }, [])

  return (
    <div className="request-list">
      <Header.RequestPage
        className="request-list__header-wrapper"
        onClick={backClickHandler}
        headerTitle="List Of Patients"
        isHeaderFixed
      />
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
                    isDefault
                  />
                </div>
              ))}
            </div>
          )
      )}
    </div>
  )
}
