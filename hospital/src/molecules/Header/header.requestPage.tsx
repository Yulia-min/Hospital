import { Typography } from 'src/Typography'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { ReactComponent as Cross } from 'src/public/Cross.svg'
import './header.requestPage.scss'
import { Stepper } from 'src/atoms'
import { HeaderType } from './HeaderType'

export const RequestPage = ({ step, strokeDasharray, title, subtitle }: HeaderType) => {
  return (
    <>
      <div className="request-header">
        <MainArrow />
        <Typography.Headline1 className="request-header__title">
          Requesting The Doctor
        </Typography.Headline1>
        <Cross />
      </div>
      <div className="request-header__step-wrapper">
        <Stepper strokeDasharray={strokeDasharray} step={step} />
        <div className="request-header__step-description">
          <Typography.Headline6 className="request-header__step-title">
            {title}
          </Typography.Headline6>
          <Typography.Body1 className="request-header__step-subtitle">{subtitle}</Typography.Body1>
        </div>
      </div>
    </>
  )
}
