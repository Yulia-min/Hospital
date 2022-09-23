import { useMemo, useState } from 'react'
import { Button, Checkbox, Chips } from 'src/atoms'
import { Header } from 'src/molecules'
import { PersonalCard } from 'src/organisms'
import { useAppSelector } from 'src/redux/hooks'
import { ReactComponent as AddressMarker } from 'src/public/Marker.svg'
import {
  getPaientsAddress,
  getPaientsWithSymptoms,
  getPatientsInfo
} from 'src/redux/patients/selectors'
import { Typography } from 'src/Typography'
import { ICreateRequest, PatientWithSymptomsListType } from '../CreateRequestType'
import GoogleMapReact from 'google-map-react'
import './BookingRequest.scss'
import { Link } from 'react-router-dom'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { PATIENTS_TYPE } from 'src/constants'

export const BookingRequest = ({ setStep, step }: ICreateRequest) => {
  const { patients } = useAppSelector(getPatientsInfo)
  const { patientWithSymptoms } = useAppSelector(getPaientsWithSymptoms)
  const { patientsAddress } = useAppSelector(getPaientsAddress)

  const [disabled, isDisabled] = useState(true)

  const backClickHandler = () => {
    setStep((step: number) => step - 2)
  }

  const currentPatient = patients.find((patient) => patient.client_patient_relationship === null)

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

  const Marker = ({}: any) => <div className="booking-request__marker" />

  const map = useMemo(
    () =>
      patientsAddress.latLng.lat &&
      patientsAddress.latLng.lng && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDdm7tYTjT39nEbzBKakm7PZGy8xYGtN_s' }}
          defaultCenter={{
            lat: patientsAddress?.latLng.lat,
            lng: patientsAddress?.latLng.lng
          }}
          defaultZoom={16}
          options={{
            styles: [
              {
                stylers: [
                  { saturation: -90 },
                  { lightness: 10 },
                  { visibility: 'on' },
                  { hue: '#CAD2D3' }
                ]
              }
            ]
          }}
        >
          <Marker lat={patientsAddress?.latLng.lat} lng={patientsAddress?.latLng.lng} />
        </GoogleMapReact>
      ),
    [patientsAddress.latLng.lat, patientsAddress.latLng.lng]
  )
  return (
    <div className="booking-request">
      <Header.RequestPage
        step={step}
        strokeDasharray="100 0"
        title="Review Your Information Before Requesting"
        onClick={backClickHandler}
      />
      <div className="booking-request__info-wrapper">
        <div className="booking-request__first-block">
          <div className="booking-request__first-block-bottom">
            <Chips.Default className="booking-request__block-item-wrapper" variant="request">
              Now request
            </Chips.Default>
            <div className="booking-request__time-wrapper">
              <Typography.Subtitle1 className="booking-request__first-title">
                Time:
              </Typography.Subtitle1>
              <Typography.Subtitle1 className="booking-request__second-title">
                Today In 60 Mins
              </Typography.Subtitle1>
            </div>
            <div className="booking-request__line" />
            <Typography.Subtitle1 className="booking-request__first-title booking-request__block-item-wrapper">
              Requested By:
            </Typography.Subtitle1>
            <Typography.Subtitle1 className="booking-request__second-title booking-request__block-item-wrapper">
              {currentPatient?.first_name} {currentPatient?.last_name}
            </Typography.Subtitle1>
            <Typography.Body2 className="booking-request__third-title booking-request__block-item-wrapper">
              {currentPatient?.phone_number}
            </Typography.Body2>
            <Typography.Body2 className="booking-request__third-title">
              {currentPatient?.email}
            </Typography.Body2>
          </div>
        </div>
        <div className="booking-request__second-block">
          <div className="booking-request__second-block-bottom" />
        </div>
        <div>
          {PATIENTS_TYPE.map(
            (type: string) =>
              !!patientsWithSymptomsList[type as keyof PatientWithSymptomsListType].length && (
                <div className="booking-request__cards-block-wrapper">
                  <div className="booking-request__checkbox-title-wrapper">
                    <Typography.Subtitle2 className="booking-request__first-title">
                      {type[0].toUpperCase() + type.substring(1)}
                    </Typography.Subtitle2>
                  </div>
                  {patientsWithSymptomsList[type as keyof PatientWithSymptomsListType].map(
                    (item) => (
                      <div key={item.uuid} className="booking-request__card-wrapper">
                        <PersonalCard patient={item} isDefault={true} />
                      </div>
                    )
                  )}
                </div>
              )
          )}
        </div>
        <Typography.Subtitle2 className="booking-request__first-title booking-request__address-wrapper">
          Address
        </Typography.Subtitle2>
        <div className="booking-request__marker-container">
          <AddressMarker />
          <Typography.Subtitle1 className="booking-request__second-title">
            {patientsAddress.full_address.map((address) => address.address)}
          </Typography.Subtitle1>
        </div>
        <div className="booking-request__map-wrapper">{map}</div>
        <div className="booking-request__request-type-container">
          <div className="booking-request__request-type">
            <Typography.Subtitle1 className="booking-request__third-title">
              Type:
            </Typography.Subtitle1>
            <Typography.Subtitle1 className="booking-request__first-title">
              Comprehecive
            </Typography.Subtitle1>
          </div>
          <div className="booking-request__request-type-price">
            <Typography.Subtitle1 className="booking-request__third-title">
              x{patientWithSymptoms.length}
            </Typography.Subtitle1>
            <Typography.Subtitle1 className="booking-request__third-title">
              $600
            </Typography.Subtitle1>
          </div>
        </div>
        <div className="booking-request__price">
          <Typography.Subtitle1 className="booking-request__third-title">
            Price:
          </Typography.Subtitle1>
          <Typography.Subtitle1 className="booking-request__third-title">
            $1800
          </Typography.Subtitle1>
        </div>
        <Checkbox.Single
          className="booking-request__checkbox-wrapper"
          propsChecbox={{ onChange: checkboxSelectHandler }}
        >
          <Typography.Subtitle1 className="booking-request__second-title">
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
            <Button.Default variant="primary" disabled={disabled}>
              <Typography.Button2>Complete booking</Typography.Button2>
            </Button.Default>
          </div>
        </div>
      </div>
    </div>
  )
}
