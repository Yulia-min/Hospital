import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from 'src/public/Logo.svg'
import { ReactComponent as Notification } from 'src/public/Notification.svg'
import { ReactComponent as Profile } from 'src/public/Profile.svg'
import { Typography } from 'src/Typography'
import './header.visitsPage.scss'

export const VisitsPage = () => {
  const navigate = useNavigate()
  const profileClickHandler = () => {
    navigate('/profile')
  }
  return (
    <div className="main-header">
      <div className="main-header__info">
        <div className="main-header__burger">
          <span />
        </div>
        <Logo />
        <Typography.Subtitle1 className="main-header__title">Shedule</Typography.Subtitle1>
        <div className="main-header__icons">
          <Notification />
          <Profile onClick={profileClickHandler} />
        </div>
      </div>
      <div className="main-header__line" />
    </div>
  )
}
