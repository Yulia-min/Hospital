import classNames from 'classnames'
import './CountDown.scss'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { Typography } from 'src/Typography'
import { CountDownType } from './CountDownType'

export const CountDown = ({ endTime, className }: CountDownType) => {
  const [countDownTime, setCountDownTime] = useState({
    countdownlMinutes: '',
    countdownSeconds: ''
  })
  const [isTimeOver, setIsTimeOver] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(endTime)
      const now = moment()
      const countDown = moment(then.diff(now))
      const minutes = countDown.format('mm')
      const seconds = countDown.format('ss')
      setCountDownTime({ countdownlMinutes: minutes, countdownSeconds: seconds })
      if (+minutes === 0 && +seconds === 0) {
        clearInterval(interval)
        setIsTimeOver(true)
      }
    }, 1000)
  }, [])

  return (
    <div className={classNames('countdown', className)}>
      {isTimeOver ? (
        <Typography.Subtitle1 className="countdown__text">Time Is Over</Typography.Subtitle1>
      ) : (
        <>
          <Typography.Headline2 className="countdown__text">
            {countDownTime.countdownlMinutes}:
          </Typography.Headline2>
          <Typography.Headline2 className="countdown__text">
            {countDownTime.countdownSeconds}
          </Typography.Headline2>
          <Typography.Subtitle2 className="countdown__text countdown__title-wrapper">
            Left
          </Typography.Subtitle2>
        </>
      )}
    </div>
  )
}
