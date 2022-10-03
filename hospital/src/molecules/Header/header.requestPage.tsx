import { Typography } from 'src/Typography'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { ReactComponent as Cross } from 'src/public/Cross.svg'
import './header.requestPage.scss'
import { Button, Modal, Stepper } from 'src/atoms'
import { HeaderType } from './HeaderType'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cn from 'classnames'

export const RequestPage = ({
  step,
  strokeDasharray,
  title,
  subtitle,
  onClick,
  isStep,
  headerTitle,
  isFirstType,
  isSecondType,
  className
}: HeaderType) => {
  const [isVisible, setIsVisible] = useState(false)

  const navigate = useNavigate()
  const showConfirm = () => {
    setIsVisible(true)
  }

  const handleOk = () => {
    navigate('/visits-list')
  }

  const handleCancel = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div
        className={cn(
          'request-header-wrapper',
          {
            'request-header__first-type': isFirstType,
            'request-header__second-type': isSecondType
          },
          className
        )}
      >
        <div className="request-header request-header--mobile">
          {onClick ? <MainArrow onClick={onClick} /> : <div />}
          <Typography.Headline1 className="request-header__title">
            {headerTitle}
          </Typography.Headline1>
          <Cross onClick={showConfirm} />
        </div>
        <Typography.Headline6 className="request-header__mobile-title">
          {headerTitle}
        </Typography.Headline6>
      </div>

      {isStep && (
        <div className="request-header__step-wrapper">
          <Stepper strokeDasharray={strokeDasharray} step={step} />
          <div className="request-header__step-description">
            <Typography.Headline6 className="request-header__step-title">
              {title}
            </Typography.Headline6>
            <Typography.Body1 className="request-header__step-subtitle">
              {subtitle}
            </Typography.Body1>
          </div>
        </div>
      )}
      <Modal visible={isVisible} onCancel={handleCancel}>
        <Typography.Headline4 className="request-header__modal-title">
          Are you sure you want to close the visit?
        </Typography.Headline4>
        <div className="request-header__modal-button">
          <Button.Default onClick={handleCancel} variant="secondary">
            <Typography.Button2>CANCEL</Typography.Button2>
          </Button.Default>
          <Button.Default onClick={handleOk} variant="primary">
            <Typography.Button2>CONFIRM</Typography.Button2>
          </Button.Default>
        </div>
      </Modal>
    </>
  )
}
