import { useEffect, useRef } from 'react'

export default function Maps() {
  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { naver } = window

    const location = new naver.maps.LatLng(37.5656, 126.9769)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    }

    if (!mapElement.current) return

    const map = new naver.maps.Map(mapElement.current, mapOptions)
    // eslint-disable-next-line no-new
    new naver.maps.Marker({
      position: location,
      map,
    })
  }, [])

  return (
    <main>
      <div
        ref={mapElement}
        style={{
          width: '100%',
          height: '100vh',
        }}
      />
    </main>
  )
}
