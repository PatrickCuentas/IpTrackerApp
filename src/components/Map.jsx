import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'

function LocationMarker({ coords }) {
  const map = useMapEvents({
    mouseover: () => {
      map.flyTo(coords, map.getZoom())
    },
  })

  return coords === null ? null : (
    <Marker position={coords}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export const Map = ({ coords }) => {
  return (
    <MapContainer
      className="h-screen -mt-[200px] md:-mt-[168px]"
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker coords={coords} />
    </MapContainer>
  )
}
