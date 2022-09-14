import { Status, Chips, Button } from 'src/atoms'
import { Typography } from 'src/Typography'
import { ReactComponent as Doctor } from 'src/public/Doctor.svg'
import './RequestCards.scss'
import { RequestCardsType } from './RequestCardsType'
import { STATUS_VARIANTS } from 'src/constants'
import moment from 'moment'

export const RequestCards = ({ card }: RequestCardsType) => {
  return (
    <div key={card.uuid} className="request-card">
      <div className="request-card__header">
        <Typography.Subtitle2 className="request-card__request-type">
          {card.is_grouped ? 'Group' : 'Single'} request
        </Typography.Subtitle2>
        <Status
          variant={STATUS_VARIANTS[card.service_request_status]}
          type="visits"
          children={card.service_request_status}
        />
      </div>
      <Chips.Default
        className="request-card__urgency"
        variant="request"
        children={card.urgency_type}
      />
      <div className="request-card__body">
        <Typography.Subtitle1 className="request-card__body-title">Type:</Typography.Subtitle1>
        <Typography.Subtitle1 className="request-card__body-description">
          {card.service_type}
        </Typography.Subtitle1>
      </div>
      <div className="request-card__body">
        <Typography.Subtitle1 className="request-card__body-title">Time:</Typography.Subtitle1>
        <Typography.Subtitle1 className="request-card__body-description">
          {moment(card.application_can_start_at).format('HH:mm a') +
            ' - ' +
            moment(card.application_time).format('HH:mm a')}
        </Typography.Subtitle1>
      </div>
      <Typography.Subtitle1 className="request-card__patient-name">
        {card.patient_name}
      </Typography.Subtitle1>
      {!!card.doctor_uuid && (
        <>
          <div className="request-card__line" />
          <div className="request-card__footer-info">
            <Typography.Subtitle2 className="request-card__footer-title">
              Doctor
            </Typography.Subtitle2>
            <div className="request-card__doctor-info">
              <Doctor />
              <Typography.Subtitle1 className="request-card__doctor-name">
                Meet Dr {card.doctor_initials}
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
