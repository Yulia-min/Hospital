import { Button, Input, Radio } from 'src/atoms'
import { ReactComponent as MainArrow } from 'src/public/MainArrow.svg'
import { Header } from 'src/molecules'
import { Typography } from 'src/Typography'
import './EditProfile.scss'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { getCurrentPatient } from 'src/redux/patients/selectors'
import { getPatientInfo } from 'src/redux/patients/actions'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from 'antd'
import { geocodeByAddress } from 'react-places-autocomplete'
import { saveEditInfo } from 'src/api/Patients/Patients'
import { GENDER_TYPE } from 'src/constants'
import { PatientInfoType } from './EditProfileType'

export const EditProfile = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()
  const { patientId } = useParams() as { patientId: string }
  const { currentPatient } = useAppSelector(getCurrentPatient)

  useEffect(() => {
    dispatch(getPatientInfo(patientId))
  }, [patientId])

  useEffect(() => {
    form.setFieldsValue(currentPatient)
  }, [currentPatient])

  const savePatientInfo = async (values: PatientInfoType) => {
    const address_line = form.getFieldValue(['home_address', 'address_line'])
    let patientFullInfo = {
      twilio_sid: 'USb66aa16e1c5c4de3a38c004ef70b537e',
      date_of_birth: values.date_of_birth,
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      phone_number: values.phone_number,
      sex: values.sex,
      uuid: patientId
    }

    if (address_line) {
      const geoCode = await geocodeByAddress(address_line)
      const address = {
        home_address: {
          zip_code: geoCode[0].address_components.find((item) =>
            item.types.find((i) => i === 'postal_code')
          )?.long_name,
          address_line: geoCode[0].formatted_address,
          apartment: null,
          address: geoCode[0].address_components.find((item) =>
            item.types.find((i) => i === 'route')
          )?.long_name,
          city: geoCode[0].address_components.find((item) =>
            item.types.find((i) => i === 'locality')
          )?.long_name,
          state: geoCode[0].address_components.find((item) =>
            item.types.find((i) => i === 'administrative_area_level_1')
          )?.short_name
        }
      }

      patientFullInfo = {
        ...patientFullInfo,
        ...address
      }
    }

    saveEditInfo(patientId, patientFullInfo).then(() => navigate('/profile'))
  }

  const backClickHandler = () => {
    navigate('/profile')
  }

  return (
    <div className="edit-profile">
      <Header.VisitsPage />
      <div className="edit-profile__content-wrapper">
        <div className="edit-profile__header">
          <MainArrow onClick={backClickHandler} />
          <Typography.Headline3 className="edit-profile__header-title">
            Profile
          </Typography.Headline3>
          <div />
        </div>
        <Form className="edit-profile__form-wrapper" form={form} onFinish={savePatientInfo}>
          <div className="edit-profile__input-wrapper">
            <Input.Default propsItem={{ name: 'first_name', label: 'First Name', colon: false }} />
            <Input.Default propsItem={{ name: 'last_name', label: 'Last name', colon: false }} />
            <Input.Default
              propsItem={{ name: 'date_of_birth', label: 'Date of Birth', colon: false }}
            />
          </div>
          <Typography.Subtitle2 className="edit-profile__title edit-profile__radio-title-wrapper">
            Radio
          </Typography.Subtitle2>
          <Radio
            className="edit-profile__radio-wrapper"
            propsItem={{ name: 'sex' }}
            propsRadio={{
              options: GENDER_TYPE.map((item) => ({ label: item.label, value: item.value }))
            }}
          />
          <div className="edit-profile__input-wrapper">
            <Input.Default
              propsItem={{ name: 'phone_number', label: 'Cell Phone #', colon: false }}
            />
            <Input.Default propsItem={{ name: 'email', label: 'Email', colon: false }} />
            <Input.Default
              propsItem={{
                name: ['home_address', 'address_line'],
                label: 'Home address',
                colon: false
              }}
            />
            <Input.Default propsItem={{ name: 'suite', label: 'Suite', colon: false }} />
          </div>
          <div className="edit-profile__button-wrapper">
            <Button.Default variant="secondary">Cancel</Button.Default>
            <Button.Default variant="primary" htmlType="submit">
              Save
            </Button.Default>
          </div>
        </Form>
      </div>
    </div>
  )
}
