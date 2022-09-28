import { Typography } from 'src/Typography'
import './header.requestDetails.scss'
import { HeaderType } from './HeaderType'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { ReactComponent as Cross } from 'src/public/Cross.svg'

export const RequestDetails = ({ isArrow }: HeaderType) => {
  return (
    <div className="request-details-header">
      <div className="request-details-header__wrapper request-header--mobile">
        {isArrow ? <MainArrow /> : <div />}
        <Typography.Headline1 className="request-details-header__title">
          Request Details
        </Typography.Headline1>
        <Cross />
      </div>
      <Typography.Headline6 className="request-details-header__mobile-title">
        Request Details
      </Typography.Headline6>
    </div>
  )
}
