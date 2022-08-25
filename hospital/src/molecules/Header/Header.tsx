import { ReactComponent as Logo } from 'src/public/Logo.svg'
import { ReactComponent as Notification } from 'src/public/Notification.svg'
import { ReactComponent as Profile } from 'src/public/Profile.svg'
import { Typography } from 'src/Typography'
import './Header.scss'

export const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-info">
        <Logo />
        <Typography.Subtitle1 className="header-info_title">Shedule</Typography.Subtitle1>
        <div className="header-info_icons">
          <Notification className="notification" />
          <Profile />
        </div>
      </div>
      <div className="header-line" />
    </div>
  )
}
