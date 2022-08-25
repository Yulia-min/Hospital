import { Status, Chips, Button } from 'src/atoms'
import { Typography } from 'src/Typography'
import { ReactComponent as Doctor } from 'src/public/Doctor.svg'
import './Cards.scss'
import { CardsType } from './CardsType'

export const Cards = ({
  uuid,
  is_grouped,
  status,
  urgency,
  service,
  patient_name,
  doctor_name,
  time
}: CardsType) => {
  return (
    <div key={uuid} className="card-container">
      <div className="card-header">
        <Typography.Subtitle2 className="card-header_isgrouped">
          {is_grouped ? 'Group' : 'Single'} request
        </Typography.Subtitle2>
        {status === 'Pending' || status === 'In progress' ? (
          <Status variant="pending" type="visits" children={status} />
        ) : status === 'Request completed' || status === 'Visit completed' ? (
          <Status variant="competed" type="visits" children={status} />
        ) : status === 'Declined' ? (
          <Status variant="declined" type="visits" children={status} />
        ) : status === 'Assigned' ? (
          <Status variant="assigned" type="visits" children={status} />
        ) : (
          ''
        )}
      </div>
      <div className="card-body">
        <Chips className="card-body_urgency" variant="request" children={urgency} />
        <div className="card-body_info">
          <Typography.Subtitle1 className="card-body_info_title">Type:</Typography.Subtitle1>
          <Typography.Subtitle1 className="card-body_info_description">
            {service}
          </Typography.Subtitle1>
        </div>
        <div className="card-body_info">
          <Typography.Subtitle1 className="card-body_info_title">Time:</Typography.Subtitle1>
          <Typography.Subtitle1 className="card-body_info_description">{time}</Typography.Subtitle1>
        </div>
        <Typography.Subtitle1 className="card-body_patientname">
          {patient_name}
        </Typography.Subtitle1>
      </div>
      {!!doctor_name && (
        <>
          <div className="card-line" />
          <Typography.Subtitle2 className="card-doctor">Doctor</Typography.Subtitle2>
          <div className="card-doctorinfo">
            <Doctor />
            <Typography.Subtitle1 className="card-doctorinfo_name">
              {doctor_name}
            </Typography.Subtitle1>
          </div>
          <Button variant="text" className="card-button">
            <Typography.Button2>Open Details</Typography.Button2>
          </Button>
        </>
      )}
    </div>
  )
}
