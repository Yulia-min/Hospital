import { Typography } from 'src/Typography'
import { RequestTypeCardType } from './RequestTypeCardType'
import cn from 'classnames'
import './RequestTypeCard.scss'

export const RequestTypeCard = ({
  request_type,
  patients_number,
  total_visit_price,
  className
}: RequestTypeCardType) => {
  return (
    <div className={cn('request-type-card', className)}>
      <div className="request-type-card__request-type-container">
        <div className="request-type-card__request-type">
          <Typography.Subtitle1 className="request-type-card__title">Type:</Typography.Subtitle1>
          <Typography.Subtitle1 className="request-type-card__type-title">
            {request_type}
          </Typography.Subtitle1>
        </div>
        <div className="request-type-card__request-type-price">
          <Typography.Subtitle1 className="request-type-card__title">
            {patients_number && patients_number > 1 && `x${patients_number}`}
          </Typography.Subtitle1>
          <Typography.Subtitle1 className="request-type-card__title">
            ${total_visit_price}
          </Typography.Subtitle1>
        </div>
      </div>
      <div className="request-type-card__price">
        <Typography.Subtitle1 className="request-type-card__title">Price:</Typography.Subtitle1>
        <Typography.Headline4 className="request-type-card__title">
          ${total_visit_price && patients_number && total_visit_price * patients_number}
        </Typography.Headline4>
      </div>
    </div>
  )
}
