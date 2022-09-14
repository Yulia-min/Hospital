import { useMobile } from 'src/hooks'
import { ReactComponent as Logo } from 'src/public/Logo.svg'
import { ReactComponent as Notification } from 'src/public/Notification.svg'
import { ReactComponent as Profile } from 'src/public/Profile.svg'
import { Typography } from 'src/Typography'
import './header.visitsPage.scss'

export const VisitsPage = () => {
  const isMobile = useMobile()
  return (
    <div className="main-header">
      <div className="main-header__info">
        {isMobile ? (
          <>
            <div className="main-header__burger">
              <span />
            </div>
            <Logo />
          </>
        ) : (
          <>
            <Logo />
            <Typography.Subtitle1 className="main-header__title">Shedule</Typography.Subtitle1>
          </>
        )}
        <div className="main-header__icons">
          <Notification />
          <Profile />
        </div>
      </div>
      <div className="main-header__line" />
    </div>
  )
}
