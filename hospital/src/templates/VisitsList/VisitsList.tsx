import { useEffect, useState } from 'react'
import { Button, Select } from 'src/atoms'
import { RequestCards } from 'src/organisms'
import { requestCardsInfo } from 'src/redux/cards/actions'
import { getCardsInfo } from 'src/redux/cards/selectors'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { Typography } from 'src/Typography'
import './VisitsList.scss'
import moment from 'moment'
import { FixedSizeGrid as Grid } from 'react-window'
import { Header } from 'src/molecules'
import { Form } from 'antd'
import { requestServiceType } from 'src/redux/services/actions'
import { getServiceInfo } from 'src/redux/services/selectors'
import { SERVICES_TYPE, ServiceType } from 'src/constants'

export const VisitsList = () => {
  const dispatch = useAppDispatch()

  const { cards } = useAppSelector(getCardsInfo)
  const { services } = useAppSelector(getServiceInfo)

  const [isServiceType, setIsServiceType] = useState<string>()

  useEffect(() => {
    dispatch(requestCardsInfo())
    dispatch(requestServiceType())
  }, [])

  const requestCardsList = ({ columnIndex, data, rowIndex, style }: any) => {
    const { cards, columnCount } = data
    const singleColumnIndex = columnIndex + rowIndex * columnCount
    const card = cards[singleColumnIndex]
    return (
      <div style={style}>
        {card && (
          <RequestCards
            uuid={card.uuid}
            is_grouped={card.is_grouped}
            status={card.service_request_status}
            urgency={card.urgency_type}
            service={card.service_type}
            time={
              moment(card.application_can_start_at).format('HH:mm a') +
              ' - ' +
              moment(card.application_time).format('HH:mm a')
            }
            patient_name={card.patient_name}
            doctor_name={card.doctor_name}
          />
        )}
      </div>
    )
  }

  const renderRequestCardsGrid = () => {
    const width =
      window.innerWidth > 1600
        ? 1700
        : window.innerWidth > 1080
        ? 1400
        : window.innerWidth > 720
        ? 910
        : 420
    const height = window.innerHeight > 800 ? 760 : 550
    const cardWidth = window.innerWidth > 1600 ? 560 : window.innerWidth > 720 ? 450 : 410
    const cardHeight = 555
    const columnCount = window.innerWidth > 1080 ? 3 : window.innerWidth > 720 ? 2 : 1
    const rowCount = Math.ceil(cards.length / columnCount)
    return (
      <Grid
        className="visits-list__layout"
        columnCount={columnCount}
        columnWidth={cardWidth}
        height={height}
        rowCount={rowCount}
        rowHeight={cardHeight}
        width={width}
        itemData={{ cards, columnCount }}
      >
        {requestCardsList}
      </Grid>
    )
  }

  const handleChange = (value: string) => {
    setIsServiceType(value)
  }

  return (
    <>
      <Header />
      <div className="visits-list wrapper">
        <Typography.Headline1 className="visits-list__title">
          Would You Like The Doctor to Come See You Now?
        </Typography.Headline1>
        <Form className="visits-list__form">
          <Select.Single
            propsItem={{ name: 'request_type' }}
            propsSelect={{
              placeholder: 'Select request type',
              options: services.map((service) => ({
                value: service.name,
                label: SERVICES_TYPE[service.name as keyof ServiceType]
              }))
            }}
            onChange={handleChange}
          />
          <Form.Item>
            <Button.Default
              htmlType="submit"
              disabled={!isServiceType}
              variant="primary"
              className="request-button"
            >
              <Typography.Button2>Yes, Make a request</Typography.Button2>
            </Button.Default>
          </Form.Item>
        </Form>
        <Typography.Headline2 className="visits-list__subtitle">
          List of Visits
        </Typography.Headline2>
        {renderRequestCardsGrid()}
      </div>
    </>
  )
}
