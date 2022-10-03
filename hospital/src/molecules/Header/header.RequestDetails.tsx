import { Typography } from 'src/Typography'
import './header.requestDetails.scss'
import { HeaderType } from './HeaderType'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { ReactComponent as Cross } from 'src/public/Cross.svg'
import { useNavigate, useParams } from 'react-router-dom'

export const RequestDetails = ({ isArrow }: HeaderType) => {
  const navigate = useNavigate()
  const { requestId } = useParams() as { requestId: string }
  const backClickHandler = () => {
    navigate(`/request/${requestId}`)
  }

  const closeRequestDetailsHandler = () => {
    navigate('/visits-list')
  }
  return (
    <div className="request-details-header">
      <div className="request-details-header__wrapper request-header--mobile">
        {isArrow ? <MainArrow onClick={backClickHandler} /> : <div />}
        <Typography.Headline1 className="request-details-header__title">
          Request Details
        </Typography.Headline1>
        <Cross onClick={closeRequestDetailsHandler} />
      </div>
      <Typography.Headline6 className="request-details-header__mobile-title">
        Request Details
      </Typography.Headline6>
    </div>
  )
}
