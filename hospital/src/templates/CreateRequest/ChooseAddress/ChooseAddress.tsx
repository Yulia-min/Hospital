import { Typography } from 'src/Typography'
import { Button, Input } from 'src/atoms'
import './ChooseAddress.scss'
import { Form } from 'antd'
import { Header } from 'src/molecules'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { CoordinatesType, ICreateRequest, PatientsAddressType } from '../CreateRequestType'
import { useEffect, useState } from 'react'
import { requestPostZipCode } from 'src/api/Patients/Patients'
import { useAppDispatch } from 'src/redux/hooks'
import { savePatientAddress } from 'src/redux/patients/actions'

export const ChooseAddress = ({ setStep, step }: ICreateRequest) => {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const [address, setAddress] = useState<string>('')
  const [zipCode, setZipCode] = useState<string>('')
  const [fullAddress, setFullAddress] = useState<google.maps.GeocoderResult[]>([])
  const [coordinates, setCoordinates] = useState<CoordinatesType>({ lat: 0, lng: 0 })

  const onFinish = (value: PatientsAddressType) => {
    form.getFieldValue(['zip_code']) &&
      requestPostZipCode({ zip_code: form.getFieldValue(['zip_code']) }).then(() => {
        dispatch(
          savePatientAddress({
            patientsAddress: {
              latLng: coordinates,
              zip_code: zipCode,
              suite: value.suite,
              additional_info: value.additional_info,
              full_address: fullAddress.map((result) => ({
                address: result.formatted_address,
                street: result.address_components.find((item) =>
                  item.types.find((i) => i === 'street_number')
                )?.long_name,
                city: result.address_components.find((item) =>
                  item.types.find((i) => i === 'locality')
                )?.long_name,
                state: result.address_components.find((item) =>
                  item.types.find((i) => i === 'administrative_area_level_1')
                )?.short_name
              }))
            }
          })
        )
      })
  }

  const backClickHandler = () => {
    setStep((step: number) => step - 1)
  }

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value)
    setAddress(value)
    setFullAddress(results)
    setCoordinates(await getLatLng(results[0]))
    const getZipCode = results
      .map(
        (result) =>
          result.address_components.find((item) => item.types.find((i) => i === 'postal_code'))
            ?.long_name
      )
      .join()
    setZipCode(getZipCode)
  }

  useEffect(() => {
    form.setFieldsValue({
      zip_code: zipCode
    })
  }, [zipCode])

  return (
    <div className="choose-address">
      <Header.RequestPage
        step={step}
        strokeDasharray="65 35"
        title="Please Tell Us The Address Where You Would Like Medical Care"
        onClick={backClickHandler}
      />
      <Form form={form} onFinish={onFinish} className="choose-address__form-container">
        <div className="choose-address__input-container">
          <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
                <Input.Default
                  propsItem={{ label: 'Address', colon: false }}
                  propsInput={{ ...getInputProps({ placeholder: 'Address' }) }}
                />
                <div className="choose-address__suggestions-container">
                  {suggestions.map((suggestion) => (
                    <div
                      className="choose-address__suggestions"
                      {...getSuggestionItemProps(suggestion)}
                    >
                      {suggestion.description}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <Input.Default
            propsItem={{
              label: 'Zip Code',
              colon: false,
              name: 'zip_code'
            }}
            propsInput={{ placeholder: 'Zip Code', disabled: true }}
          />
          <Input.Default
            propsItem={{ label: 'Suite', colon: false, name: 'suite' }}
            propsInput={{ placeholder: 'Suite' }}
          />
          <Input.Default
            propsItem={{ label: 'Additional Info', colon: false, name: 'additional_info' }}
            propsInput={{ placeholder: 'Additional Info' }}
          />
        </div>
        <div className="choose-address__button-container">
          <div />
          <div className="choose-address__button-wrapper">
            <Button.Default variant="secondary">
              <Typography.Button2>Cancel</Typography.Button2>
            </Button.Default>
            <Button.Default variant="primary" htmlType="submit">
              <Typography.Button2>Next</Typography.Button2>
            </Button.Default>
          </div>
        </div>
      </Form>
    </div>
  )
}
