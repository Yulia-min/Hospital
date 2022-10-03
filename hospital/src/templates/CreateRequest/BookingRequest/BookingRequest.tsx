import { useState } from 'react'
import { Button, Checkbox } from 'src/atoms'
import { Header } from 'src/molecules'
import { MapCard, PersonalCard, RequestTicket, RequestTypeCard } from 'src/organisms'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from 'src/redux/hooks'
import {
  getPaientsAddress,
  getPaientsWithSymptoms,
  getPatientsDate,
  getPatientsInfo,
  getRequestType
} from 'src/redux/patients/selectors'
import { Typography } from 'src/Typography'
import { ICreateRequest, ListOfPatientsType } from '../CreateRequestType'
import './BookingRequest.scss'
import { Link, useNavigate } from 'react-router-dom'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { PATIENTS_TYPE } from 'src/constants'
import moment from 'moment'
import { getServiceInfo } from 'src/redux/services/selectors'
import { createRequest } from 'src/api/Patients/Patients'

export const BookingRequest = ({ setStep, step }: ICreateRequest) => {
  const { patients } = useAppSelector(getPatientsInfo)
  const { patientWithSymptoms } = useAppSelector(getPaientsWithSymptoms)
  const { patientsAddress } = useAppSelector(getPaientsAddress)
  const { patientsDate } = useAppSelector(getPatientsDate)
  const { choosenRequestType } = useAppSelector(getRequestType)
  const { services } = useAppSelector(getServiceInfo)

  const navigate = useNavigate()

  const price = services.find((service) => service.name === choosenRequestType)?.price

  const [disabled, isDisabled] = useState(true)

  const backClickHandler = () => {
    setStep((step: number) => step - 1)
  }
  const currentPatient = patients.find((patient) => patient.client_patient_relationship === null)

  const patientsAddressList = {
    full_address: patientsAddress.full_address.find((item) => ({
      address: item.address,
      city: item.city,
      street: item.street,
      state: item.state
    }))
  }
  const patientsWithSymptomsList = {
    you: patientWithSymptoms
      .filter((patient) => patient.client_patient_relationship === null)
      .map((item) => item),
    family: patientWithSymptoms
      .filter((patient) => patient.client_patient_relationship === 'family')
      .map((item) => item),
    friends: patientWithSymptoms
      .filter((patient) => patient.client_patient_relationship === 'friends')
      .map((item) => item),
    other: patientWithSymptoms
      .filter((patient) => patient.client_patient_relationship === 'other')
      .map((item) => item)
  }
  const checkboxSelectHandler = (e: CheckboxChangeEvent) => {
    isDisabled(!e.target.checked)
  }

  const completeBookingHandler = () => {
    let patientsFullInfo = {
      idempotency_key: uuidv4(),
      urgency_type: patientsDate.request_type,
      service_type: choosenRequestType,
      location: {
        zip_code: patientsAddress.zip_code,
        address_line: patientsAddressList.full_address?.address,
        apartment: null,
        comment: patientsAddress.additional_info,
        address: patientsAddressList.full_address?.street,
        state: patientsAddressList.full_address?.state,
        city: patientsAddressList.full_address?.city
      },
      single_service_requests: patientWithSymptoms.map((item) => ({
        service_type: choosenRequestType,
        symptoms: item.symptomsId,
        patient: item.uuid
      })),
      payment_profile_id: '1517080046'
    }

    if (patientsDate.request_type === 'later') {
      const timeList = {
        application_can_start_at: patientsDate.time.split(',')[0],
        application_time: patientsDate.time.split(',')[1]
      }
      patientsFullInfo = { ...patientsFullInfo, ...timeList }
    }

    createRequest(patientsFullInfo).then(() => navigate('/visits-list'))
  }

  return (
    <div className="booking-request">
      <Header.RequestPage
        step={step}
        strokeDasharray="100 0"
        title="Review Your Information Before Requesting"
        onClick={backClickHandler}
      />
      <div className="booking-request__info-wrapper">
        <RequestTicket
          className="booking-request__request-ticket"
          request_type={patientsDate.request_type}
          date={patientsDate.date}
          isTime={patientsDate.time}
          time={
            moment(patientsDate.time.split(',')[0]).format('HH:mm a') +
            ' - ' +
            moment(patientsDate.time.split(',')[1]).format('HH:mm a')
          }
          first_name={currentPatient?.first_name}
          last_name={currentPatient?.last_name}
          phone_number={currentPatient?.phone_number}
          email={currentPatient?.email}
        />
        <div>
          {PATIENTS_TYPE.map(
            (type: string) =>
              !!patientsWithSymptomsList[type as keyof ListOfPatientsType].length && (
                <div className="booking-request__cards-block-wrapper">
                  <div className="booking-request__checkbox-title-wrapper">
                    <Typography.Subtitle2 className="booking-request__checkbox-title">
                      {type[0].toUpperCase() + type.substring(1)}
                    </Typography.Subtitle2>
                  </div>
                  {patientsWithSymptomsList[type as keyof ListOfPatientsType].map((item) => (
                    <div key={item.uuid} className="booking-request__card-wrapper">
                      <PersonalCard
                        patient={item}
                        isDefault={true}
                        symptoms={item.symptoms}
                        comment={item.comment}
                      />
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
        <MapCard
          className="booking-request__map-card-wrapper"
          address_line={patientsAddress.full_address.map((item) => item.address)}
          coordinates={patientsAddress?.latLng}
        />
        <RequestTypeCard
          className="booking-request__request-type-wrapper"
          request_type={choosenRequestType}
          patients_number={patientWithSymptoms.length}
          total_visit_price={price}
        />
        <Checkbox.Single
          className="booking-request__checkbox-wrapper"
          propsChecbox={{ onChange: checkboxSelectHandler }}
        >
          <Typography.Subtitle1 className="booking-request__agreement-title">
            By Clicking “Send Doctor” You Agree To The <Link to={''}>HIPAA</Link>,
            <Link to={''}> Financial Disclosures </Link>
            And <Link to={''}>User Agreement</Link>
          </Typography.Subtitle1>
        </Checkbox.Single>
        <div className="booking-request__button-container">
          <div />
          <div className="booking-request__button-wrapper">
            <Button.Default variant="secondary">
              <Typography.Button2>Cancel</Typography.Button2>
            </Button.Default>
            <Button.Default variant="primary" disabled={disabled} onClick={completeBookingHandler}>
              <Typography.Button2>Complete booking</Typography.Button2>
            </Button.Default>
          </div>
        </div>
      </div>
    </div>
  )
}
