import moment from 'moment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'src/atoms'
import { Header } from 'src/molecules'
import { MapCard, RequestTicket, RequestTypeCard } from 'src/organisms'
import { getRequestDetailsInfo } from 'src/redux/cards/actions'
import { getRequestDetails } from 'src/redux/cards/selectors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { Typography } from 'src/Typography'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import './RequestDetails.scss'
import { CoordinatesType } from '../CreateRequest/CreateRequestType'
import { STATUS_VARIANTS } from 'src/constants'

export const RequestDetails = () => {
  const dispatch = useAppDispatch()
  const { requestId } = useParams()
  const { requestDetails } = useAppSelector(getRequestDetails)

  const [coordinates, setCoordinates] = useState<CoordinatesType>({ lat: 0, lng: 0 })

  useEffect(() => {
    requestDetails &&
      geocodeByAddress(requestDetails.location.address_line)
        .then((results) => getLatLng(results[0]))
        .then((latLng) => setCoordinates(latLng))
  }, [requestDetails])

  useEffect(() => {
    requestId && dispatch(getRequestDetailsInfo(requestId))
  }, [])

  return (
    <div className="request-details">
      <Header.RequestDetails />
      <div className="request-details__info-contanier">
        <div className="request-details__time-container">
          <Typography.Subtitle2 className="request-details__time-title">
            Approximate ETA
          </Typography.Subtitle2>
        </div>
        <div className="request-details__ticket-container">
          {requestDetails && (
            <RequestTicket
              className="request-details__request-ticket-wrapper"
              request_type={requestDetails.service_type}
              date={moment(requestDetails.application_can_start_at).format('DD/MM/YYYY')}
              time={
                moment(requestDetails.application_can_start_at).format('HH:mm a') +
                ' - ' +
                moment(requestDetails.application_time).format('HH:mm a')
              }
              isTime={requestDetails.application_can_start_at}
              first_name={requestDetails.client_user_info.first_name}
              last_name={requestDetails.client_user_info.last_name}
              phone_number={requestDetails.client_user_info.phone_number}
              email={requestDetails.client_user_info.email}
              is_group={requestDetails.is_group}
              status={requestDetails.status as keyof typeof STATUS_VARIANTS}
              isRequestStatus={true}
            />
          )}
        </div>
        <div className="request-details__patients-container">
          <Typography.Subtitle2 className="request-details__patients-title">
            Patients
          </Typography.Subtitle2>
          <div className="request-details__patients">
            <div className="request-details__more-patients">
              <Typography.Body2>
                {requestDetails?.patients
                  .map((patient) => patient.patient_info.first_name)
                  .slice(0, 3)
                  .join(', ')}
              </Typography.Body2>
              {requestDetails && requestDetails?.patients_number > 3 && (
                <Typography.Button2 className="request-details__more-title">
                  + 3 More
                </Typography.Button2>
              )}
            </div>
            <Button.Default variant="text" className="request-details__show-all-button">
              <Typography.Button2>SHOW ALL</Typography.Button2>
            </Button.Default>
          </div>
        </div>
        <MapCard
          className="request-details__map-card-wrapper"
          address_line={requestDetails?.location.address_line}
          coordinates={coordinates}
        />
        <RequestTypeCard
          request_type={requestDetails?.service_type}
          patients_number={requestDetails?.patients_number}
          total_visit_price={requestDetails?.total_visit_price}
        />
      </div>
    </div>
  )
}
