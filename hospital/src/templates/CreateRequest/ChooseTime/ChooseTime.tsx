import { Header } from 'src/molecules'
import { Typography } from 'src/Typography'
import { ReactComponent as City } from 'src/public/City.svg'
import { ICreateRequest } from '../CreateRequestType'
import './ChooseTime.scss'
import { Button, DataPicker, Select } from 'src/atoms'
import { useEffect, useState } from 'react'
import { DatePickerProps } from 'antd'
import { getAvailableTime } from 'src/api/Patients/Patients'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getPaientsAddress, getPaientsWithSymptoms } from 'src/redux/patients/selectors'
import { PatientDateInfoType } from 'src/api/Patients/PatientsType'
import { savePatientDate } from 'src/redux/patients/actions'

export const ChooseTime = ({ setStep, step }: ICreateRequest) => {
  const dispatch = useAppDispatch()
  const { patientsAddress } = useAppSelector(getPaientsAddress)
  const { patientWithSymptoms } = useAppSelector(getPaientsWithSymptoms)

  const [showCalendar, setShowCalendar] = useState(false)
  const [buttonValue, setButtonValue] = useState<string>('')
  const [choosenTime, setChoosenTime] = useState<string>('')
  const [date, setDate] = useState<string>(moment().format('YYYY-MM-DD'))
  const [time, setTime] = useState<PatientDateInfoType[]>()

  const backClickHandler = () => {
    setStep((step: number) => step - 1)
  }

  const sendDoctorLaterHandler = () => {
    setButtonValue('later')
    setShowCalendar(true)
  }

  const sendDoctorNowHandler = () => {
    setButtonValue('now')
    setShowCalendar(false)
  }

  const onDataPickerChange: DatePickerProps['onChange'] = (dateString) => {
    setDate(moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD'))
  }

  const onNextClick = () => {
    dispatch(
      savePatientDate({
        request_type: buttonValue,
        date: moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
        time: choosenTime
      })
    )
    setStep((step: number) => step + 1)
  }

  const onSelectChange = (value: string) => {
    setChoosenTime(value)
  }

  useEffect(() => {
    patientsAddress.zip_code !== '' &&
      getAvailableTime(
        date,
        patientsAddress.zip_code,
        patientWithSymptoms.length,
        patientsAddress.full_address.map((item) => item.address)
      ).then((resp) => setTime(resp.data))
  }, [date])

  return (
    <div className="choose-time">
      <Header.RequestPage
        step={step}
        strokeDasharray="85 15"
        title="Would You Like A Doctor To Come NOW (in About 60 Minutes) Or LATER (You Choose the Date and Time)?"
        onClick={backClickHandler}
      />
      <div className="choose-time__info-wrapper">
        <City className="choose-time__city-wrapper" />
        <div className="choose-time__send-buttons-wrapper">
          <Button.Default variant="primary" onClick={sendDoctorNowHandler}>
            <Typography.Body2 className="choose-time__button-mark">
              Send Doctor Now
            </Typography.Body2>
          </Button.Default>
          <Button.Default variant="secondary" onClick={sendDoctorLaterHandler}>
            <Typography.Body2>Send Doctor LATER</Typography.Body2>
          </Button.Default>
        </div>
        {showCalendar && (
          <>
            <div className="choose-time__line" />
            <div className="choose-time__data-picker-wrapper">
              <DataPicker
                propsDataPicker={{
                  onChange: onDataPickerChange,
                  defaultValue: moment()
                }}
                className="choose-time__data-picker"
              />
              <Select.Single
                propsSelect={{
                  placeholder: 'Please Specify Your Time',
                  onChange: onSelectChange,
                  options: time?.map((item) => ({
                    value:
                      moment(item.start).format('HH:mm a') +
                      ' - ' +
                      moment(item.end).format('HH:mm a'),
                    label:
                      moment(item.start).format('HH:mm a') +
                      ' - ' +
                      moment(item.end).format('HH:mm a'),
                    disabled: item.is_free === false
                  }))
                }}
              />
            </div>
          </>
        )}
        <div className="choose-time__button-container">
          <div />
          <div className="choose-time__button-wrapper">
            <Button.Default variant="secondary">
              <Typography.Button2>Cancel</Typography.Button2>
            </Button.Default>
            <Button.Default variant="primary" onClick={onNextClick} disabled={!buttonValue}>
              <Typography.Button2>Next</Typography.Button2>
            </Button.Default>
          </div>
        </div>
      </div>
    </div>
  )
}
