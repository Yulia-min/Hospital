import { Typography } from 'src/Typography'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { ReactComponent as Cross } from 'src/public/Cross.svg'
import './header.requestPage.scss'
import { Button, Modal, Stepper } from 'src/atoms'
import { HeaderType } from './HeaderType'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMobile } from 'src/hooks'

export const RequestPage = ({ step, strokeDasharray, title, subtitle, onClick }: HeaderType) => {
  const [isVisible, setIsVisible] = useState(false)

  const isMobile = useMobile()

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
      {isMobile ? (
        <>
          <div className="request-header mobile">
            {step === 1 ? <div /> : <MainArrow onClick={onClick} />}
            <Cross onClick={showConfirm} />
          </div>
          <Typography.Headline6 className="request-header__title mobile">
            Requesting The Doctor
          </Typography.Headline6>
        </>
      ) : (
        <div className="request-header">
          {step === 1 ? <div /> : <MainArrow onClick={onClick} />}
          <Typography.Headline1 className="request-header__title">
            Requesting The Doctor
          </Typography.Headline1>
          <Cross onClick={showConfirm} />
        </div>
      )}
      <div className="request-header__step-wrapper">
        <Stepper strokeDasharray={strokeDasharray} step={step} />
        <div className="request-header__step-description">
          <Typography.Headline6 className="request-header__step-title">
            {title}
          </Typography.Headline6>
          <Typography.Body1 className="request-header__step-subtitle">{subtitle}</Typography.Body1>
        </div>
      </div>
      <Modal visible={isVisible} onCancel={handleCancel}>
        <Typography.Headline4>Are you sure you want to close the visit?</Typography.Headline4>
        <div className="request-header__button">
          <Button.Default
            onClick={handleCancel}
            variant="secondary"
            className="request-header__cancel-button"
          >
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
