import { ReactComponent as Logo } from 'src/public/Logo.svg'
import { ReactComponent as Notification } from 'src/public/Notification.svg'
import { ReactComponent as Profile } from 'src/public/Profile.svg'
import { Typography } from 'src/Typography'
import './header.visitsPage.scss'

export const VisitsPage = () => {
  return (
    <div className="main-header wrapper">
      <div className="main-header__info">
        <Logo />
        <Typography.Subtitle1 className="main-header__title">Shedule</Typography.Subtitle1>
        <div className="main-header__icons">
          <Notification className="notification" />
          <Profile />
        </div>
      </div>
      <div className="main-header__line" />
    </div>
  )
}
