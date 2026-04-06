'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

export function MapLeaflet() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<unknown>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const container = mapRef.current
    // Curitiba Centro coordinates (fictional pin point)
    const lat = -25.4284
    const lng = -49.2733

    let map: import('leaflet').Map | null = null

    import('leaflet').then((L) => {
      // If Leaflet already marked this container, remove the flag so it can re-init
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((container as any)._leaflet_id) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (container as any)._leaflet_id
      }

      map = L.map(container, {
        center: [lat, lng],
        zoom: 15,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
      })

      mapInstanceRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map)

      const pinIcon = L.divIcon({
        className: '',
        iconSize: [24, 36],
        iconAnchor: [12, 36],
        popupAnchor: [0, -36],
        html: `
          <div style="display:flex;flex-direction:column;align-items:center;pointer-events:none;">
            <div style="
              background: rgba(10,10,10,0.92);
              border: 1px solid rgba(201,185,154,0.5);
              padding: 4px 10px;
              margin-bottom: 4px;
              white-space: nowrap;
              font-family: 'Raleway', sans-serif;
              font-size: 9px;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              color: #c9b99a;
            ">Ponto de exemplo</div>
            <div style="width:1px;height:14px;background:rgba(201,185,154,0.7);"></div>
            <div style="
              width:10px;height:10px;border-radius:50%;
              background:#c9b99a;
              box-shadow:0 0 8px 3px rgba(201,185,154,0.45);
            "></div>
          </div>
        `,
      })

      L.marker([lat, lng], { icon: pinIcon }).addTo(map)

      L.control.attribution({ prefix: false }).addTo(map)
    })

    return () => {
      if (map) {
        map.remove()
        map = null
      }
      mapInstanceRef.current = null
    }
  }, [])

  return (
    <div className="relative overflow-hidden" style={{ paddingBottom: '42.857%' }}>
      {/* Leaflet CSS */}
      <style>{`
        .leaflet-container { background: #1a1a1a !important; }
        .leaflet-attribution-flag { display: none !important; }
        .leaflet-control-attribution {
          background: rgba(10,10,10,0.7) !important;
          color: #4a4a4a !important;
          font-size: 9px !important;
        }
        .leaflet-control-attribution a { color: #6b6b6b !important; }
      `}</style>

      <div
        ref={mapRef}
        data-cursor="map"
        className="absolute inset-0 w-full h-full"
      />

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-3 bg-gradient-to-t from-[#141414]/90 to-transparent pointer-events-none z-[400]">
        <p className="font-display italic text-xs text-[#6b6b6b] tracking-[0.1em]">
          * Localização ilustrativa — Centro, Curitiba - PR
        </p>
      </div>
    </div>
  )
}
