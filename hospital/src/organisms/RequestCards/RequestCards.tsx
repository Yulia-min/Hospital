import { Status, Chips, Button } from 'src/atoms'
import { Typography } from 'src/Typography'
import { ReactComponent as Doctor } from 'src/public/Doctor.svg'
import './RequestCards.scss'
import { RequestCardsType } from './RequestCardsType'
import { STATUS_VARIANTS } from 'src/constants'
import moment from 'moment'

export const RequestCards = ({ request }: RequestCardsType) => {
  return (
    <div key={request.uuid} className="request-card container">
      <div className="request-card__header">
        <Typography.Subtitle2 className="request-card__request-type">
          {request.is_grouped ? 'Group' : 'Single'} request
        </Typography.Subtitle2>
        <Status
          variant={STATUS_VARIANTS[request.service_request_status]}
          type="visits"
          children={request.service_request_status}
        />
      </div>
      <Chips.Default
        className="request-card__urgency"
        variant="request"
        children={request.urgency_type}
      />
      <div className="request-card__body">
        <Typography.Subtitle1 className="request-card__body-title">Type:</Typography.Subtitle1>
        <Typography.Subtitle1 className="request-card__body-description">
          {request.service_type}
        </Typography.Subtitle1>
      </div>
      <div className="request-card__body">
        <Typography.Subtitle1 className="request-card__body-title">Time:</Typography.Subtitle1>
        <Typography.Subtitle1 className="request-card__body-description">
          {moment(request.application_can_start_at).format('HH:mm a') +
            ' - ' +
            moment(request.application_time).format('HH:mm a')}
        </Typography.Subtitle1>
      </div>
      <Typography.Subtitle1 className="request-card__patient-name">
        {request.patient_name}
      </Typography.Subtitle1>
      {!!request.doctor_uuid && (
        <>
          <div className="request-card__line" />
          <div className="request-card__footer-info">
            <Typography.Subtitle2 className="request-card__footer-title">
              Doctor
            </Typography.Subtitle2>
            <div className="request-card__doctor-info">
              <Doctor />
              <Typography.Subtitle1 className="request-card__doctor-name">
                Meet Dr {request.doctor_initials}
              </Typography.Subtitle1>
            </div>
          </div>
          <div className="request-card__button">
            <Button.Default variant="text">
              <Typography.Button2>Open Details</Typography.Button2>
            </Button.Default>
          </div>
        </>
      )}
    </div>
  )
}
