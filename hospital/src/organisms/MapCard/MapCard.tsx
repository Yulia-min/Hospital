import { Typography } from 'src/Typography'
import { ReactComponent as AddressMarker } from 'src/public/Marker.svg'
import GoogleMapReact from 'google-map-react'
import { MapCardType } from './MapCardType'
import cn from 'classnames'
import './MapCard.scss'

export const MapCard = ({ coordinates, address_line, className }: MapCardType) => {
  const Marker = ({}: any) => <div className="map-card__marker" />

  return (
    <div className={cn('map-card', className)}>
      <Typography.Subtitle2 className="map-card__title map-card__address-wrapper">
        Address
      </Typography.Subtitle2>
      <div className="map-card__marker-container">
        <AddressMarker />
        <Typography.Subtitle1 className="map-card__address-line">
          {address_line}
        </Typography.Subtitle1>
      </div>
      <div className="map-card__map-wrapper">
        {coordinates.lat && coordinates.lng && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDdm7tYTjT39nEbzBKakm7PZGy8xYGtN_s' }}
            defaultCenter={{
              lat: coordinates.lat,
              lng: coordinates.lng
            }}
            defaultZoom={16}
            options={{
              styles: [
                {
                  stylers: [
                    { saturation: -90 },
                    { lightness: 10 },
                    { visibility: 'on' },
                    { hue: '#CAD2D3' }
                  ]
                }
              ]
            }}
          >
            <Marker lat={coordinates.lat} lng={coordinates.lng} />
          </GoogleMapReact>
        )}
      </div>
    </div>
  )
}
