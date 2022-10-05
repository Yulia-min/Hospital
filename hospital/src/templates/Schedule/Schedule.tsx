import { Header } from 'src/molecules'
import './Schedule.scss'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { ReactComponent as Group } from 'src/public/Group.svg'
import { ReactComponent as Arrow } from 'src/public/CollapseArrow.svg'
import { useEffect, useState } from 'react'
import { getDoctorsSchedule } from 'src/api/Schedule/Schedule'
import { IDoctor } from 'src/redux/types/doctorsTypes'
import { DataPicker, Radio } from 'src/atoms'
import { DatePickerProps, RadioChangeEvent } from 'antd'
import { CALENDAR_OPTIONS } from 'src/constants'
import { Typography } from 'src/Typography'
import { EventType, ICustomTooolbar } from './SheduleType'

export const Schedule = () => {
  const uuid = localStorage.getItem('uuid') as string
  const [time, setTime] = useState<IDoctor[]>([])
  const [view, setView] = useState<'week'>('week')
  const [event_date_after, setEvent_date_after] = useState<string>(
    moment().startOf('week').format('YYYY-MM-DDTHH:mm')
  )
  const [event_date_before, setEvent_date_before] = useState<string>(
    moment().endOf('week').format('YYYY-MM-DDTHH:mm')
  )

  const localizer = momentLocalizer(moment)

  const Event = ({ item }: EventType) => (
    <div className="event">
      <div className="event__status-wrapper">
        {item.requests_in_group > 1 ? (
          <div className="event__patinets-count-wrapper">
            <Group />
            <div className="event__patinets">({item.requests_in_group})</div>
          </div>
        ) : (
          <div />
        )}
        <Typography.Body2 className="event__status">{item.service_request_status}</Typography.Body2>
      </div>
      <Typography.Subtitle2 className="event__patient-name">
        {item.patient_name}
      </Typography.Subtitle2>
    </div>
  )

  const eventsList = time.map((item) => ({
    start: moment(item.application_can_start_at).toDate(),
    end: moment(item.application_time).toDate(),
    title: <Event item={item} />
  }))

  useEffect(() => {
    getDoctorsSchedule(event_date_after, event_date_before, uuid).then((resp) => setTime(resp.data))
  }, [event_date_after, event_date_before])

  const onRadioValueChange = ({ target: { value } }: RadioChangeEvent) => {
    setView(value)
  }

  const onDataPickerChange: DatePickerProps['onChange'] = (date) => {
    setEvent_date_after(moment(date).startOf('week').format('YYYY-MM-DDTHH:mm'))
    setEvent_date_before(moment(date).endOf('week').format('YYYY-MM-DDTHH:mm'))
  }
  const CustomToolbar = ({ onNavigate }: ICustomTooolbar) => {
    const goToBack = () => {
      onNavigate('PREV')
    }

    const goToNext = () => {
      onNavigate('NEXT')
    }

    return (
      <div className="shedule-button">
        <div className="shedule-button__back" onClick={goToBack}>
          <Arrow />
        </div>
        <div className="shedule-button__next" onClick={goToNext}>
          <Arrow />
        </div>
      </div>
    )
  }

  return (
    <div className="schedule">
      <Header.VisitsPage />
      <div className="schedule__wrapper">
        <DataPicker
          dropdownClassName="schedule__data-picker-popup"
          propsDataPicker={{ onChange: onDataPickerChange, open: true }}
        />
        <div>
          <div className="schedule__radio-button-container">
            <Typography.Headline3>Schedule</Typography.Headline3>
            <Radio
              className="schedule__radio"
              propsRadio={{
                defaultValue: 'week',
                onChange: onRadioValueChange,
                optionType: 'button',
                options: CALENDAR_OPTIONS
              }}
            />
          </div>
          <Calendar
            defaultView="week"
            view={view}
            views={{ day: true, week: true }}
            className="shedule__calendar"
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            components={{
              toolbar: CustomToolbar
            }}
          />
        </div>
      </div>
    </div>
  )
}
