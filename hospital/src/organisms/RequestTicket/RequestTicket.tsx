import classNames from 'classnames'
import moment from 'moment'
import { Chips, Status } from 'src/atoms'
import { STATUS_VARIANTS } from 'src/constants'
import { Typography } from 'src/Typography'
import './RequestTicket.scss'
import { RequestTicketType } from './RequestTicketType'

export const RequestTicket = ({
  request_type,
  date,
  phone_number,
  time,
  last_name,
  first_name,
  isTime,
  email,
  className,
  isRequestStatus,
  is_group,
  status
}: RequestTicketType) => {
  return (
    <div className={classNames('request-ticket', className)}>
      <div className="request-ticket__first-block">
        <div className="request-ticket__first-block-bottom">
          {isRequestStatus && (
            <div className="request-ticket__request-status-container">
              <Typography.Subtitle2 className="request-card__request-type">
                {is_group ? 'Group' : 'Single'} request
              </Typography.Subtitle2>
              {status && (
                <Status variant={STATUS_VARIANTS[status]} type="visits" children={status} />
              )}
            </div>
          )}
          <Chips.Default className="request-ticket__block-item-wrapper" variant="request">
            {request_type === 'now' ? 'Now' : 'Later'} request
          </Chips.Default>
          <div className="request-ticket__time-wrapper">
            <Typography.Subtitle1 className="request-ticket__first-title">
              Time:
            </Typography.Subtitle1>
            <Typography.Subtitle1 className="request-ticket__second-title request-ticket__time-container">
              {date === moment().format('DD/MM/YYYY') ? 'Today' : date}
            </Typography.Subtitle1>
            <Typography.Subtitle1 className="request-ticket__second-title">
              {isTime ? time : 'In 60 Mins'}
            </Typography.Subtitle1>
          </div>
          <div className="request-ticket__line" />
          <Typography.Subtitle1 className="request-ticket__first-title request-ticket__block-item-wrapper">
            Requested By:
          </Typography.Subtitle1>
          <Typography.Subtitle1 className="request-ticket__second-title request-ticket__block-item-wrapper">
            {first_name} {last_name}
          </Typography.Subtitle1>
          <Typography.Body2 className="request-ticket__third-title request-ticket__block-item-wrapper">
            {phone_number}
          </Typography.Body2>
          <Typography.Body2 className="request-ticket__third-title">{email}</Typography.Body2>
        </div>
      </div>
      <div className="request-ticket__second-block">
        <div className="request-ticket__second-block-bottom" />
      </div>
    </div>
  )
}
