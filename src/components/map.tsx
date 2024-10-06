import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef } from "react";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import { FloatingMarker } from "./floating-marker";


const mock = [
  {
    "companyName": "AgroTech Soluções",
    "centralPoint": { "lat": -12.6417, "lng": -56.1325 },
    "regions": [
      {
        "uid": "1b9c5a26-24a6-4e56-b0e3-8ed195aa7f4b",
        "name": "Plantação de Soja",
        "type": "Plantação",
        "centralPoint": { "lat": -12.6425, "lng": -56.1300 },
        "coordinates": [
          { "lat": -12.6420, "lng": -56.1295 },
          { "lat": -12.6430, "lng": -56.1295 },
          { "lat": -12.6435, "lng": -56.1305 },
          { "lat": -12.6425, "lng": -56.1310 }
        ]
      },
      {
        "uid": "9c6614e0-77b3-43fc-8997-2f9a2a8f3a92",
        "name": "Plantação de Milho",
        "type": "Plantação",
        "centralPoint": { "lat": -12.6435, "lng": -56.1320 },
        "coordinates": [
          { "lat": -12.6425, "lng": -56.1315 },
          { "lat": -12.6435, "lng": -56.1310 },
          { "lat": -12.6440, "lng": -56.1320 },
          { "lat": -12.6430, "lng": -56.1325 }
        ]
      },
      {
        "uid": "3e788f5e-baa8-41e8-9170-bd91e25b6861",
        "name": "Área de Irrigação",
        "type": "Irrigação",
        "centralPoint": { "lat": -12.6440, "lng": -56.1330 },
        "coordinates": [
          { "lat": -12.6435, "lng": -56.1325 },
          { "lat": -12.6445, "lng": -56.1320 },
          { "lat": -12.6450, "lng": -56.1330 },
          { "lat": -12.6440, "lng": -56.1335 }
        ]
      },
      {
        "uid": "e3c5d3a6-f14b-4a71-b44b-e96e30f8c882",
        "name": "Área de Armazenamento",
        "type": "Armazém",
        "centralPoint": { "lat": -12.6420, "lng": -56.1340 },
        "coordinates": [
          { "lat": -12.6415, "lng": -56.1335 },
          { "lat": -12.6425, "lng": -56.1330 },
          { "lat": -12.6430, "lng": -56.1340 },
          { "lat": -12.6420, "lng": -56.1345 }
        ]
      }
    ]
  },
  {
    "companyName": "CampoVerde Agro",
    "centralPoint": { "lat": -16.0150, "lng": -52.1505 },
    "regions": [
      {
        "uid": "c55a0f5f-dbd8-43f5-8178-5cf1708e32e8",
        "name": "Plantação de Trigo",
        "type": "Plantação",
        "centralPoint": { "lat": -16.0160, "lng": -52.1510 },
        "coordinates": [
          { "lat": -16.0155, "lng": -52.1505 },
          { "lat": -16.0165, "lng": -52.1505 },
          { "lat": -16.0170, "lng": -52.1515 },
          { "lat": -16.0160, "lng": -52.1520 }
        ]
      },
      {
        "uid": "2a8148b0-98d6-42de-8e07-0d6e3452f4f0",
        "name": "Plantação de Milho",
        "type": "Plantação",
        "centralPoint": { "lat": -16.0155, "lng": -52.1520 },
        "coordinates": [
          { "lat": -16.0150, "lng": -52.1515 },
          { "lat": -16.0160, "lng": -52.1515 },
          { "lat": -16.0165, "lng": -52.1525 },
          { "lat": -16.0155, "lng": -52.1530 }
        ]
      },
      {
        "uid": "1b19c893-6503-4873-a607-f44ef249b68c",
        "name": "Área de Irrigação",
        "type": "Irrigação",
        "centralPoint": { "lat": -16.0140, "lng": -52.1510 },
        "coordinates": [
          { "lat": -16.0135, "lng": -52.1505 },
          { "lat": -16.0145, "lng": -52.1505 },
          { "lat": -16.0150, "lng": -52.1515 },
          { "lat": -16.0140, "lng": -52.1520 }
        ]
      },
      {
        "uid": "65d36dc1-3be0-4631-8e93-ef14f327ff8c",
        "name": "Área de Armazenamento",
        "type": "Armazém",
        "centralPoint": { "lat": -16.0155, "lng": -52.1535 },
        "coordinates": [
          { "lat": -16.0150, "lng": -52.1530 },
          { "lat": -16.0160, "lng": -52.1525 },
          { "lat": -16.0165, "lng": -52.1535 },
          { "lat": -16.0155, "lng": -52.1540 }
        ]
      }
    ]
  },
  {
    "companyName": "VerdeFloresta",
    "centralPoint": { "lat": -3.4690, "lng": -62.2160 },
    "regions": [
      {
        "uid": "f8881d37-4c58-4a58-9f4f-2c7d5c43c2a7",
        "name": "Área de Reflorestamento",
        "type": "Reflorestamento",
        "centralPoint": { "lat": -3.4695, "lng": -62.2155 },
        "coordinates": [
          { "lat": -3.4690, "lng": -62.2150 },
          { "lat": -3.4700, "lng": -62.2145 },
          { "lat": -3.4705, "lng": -62.2155 },
          { "lat": -3.4695, "lng": -62.2160 }
        ]
      },
      {
        "uid": "39eeb408-bcd3-4f73-bc58-4e4ee9314fd0",
        "name": "Área de Castanhas",
        "type": "Plantação",
        "centralPoint": { "lat": -3.4685, "lng": -62.2165 },
        "coordinates": [
          { "lat": -3.4680, "lng": -62.2160 },
          { "lat": -3.4690, "lng": -62.2155 },
          { "lat": -3.4695, "lng": -62.2165 },
          { "lat": -3.4685, "lng": -62.2170 }
        ]
      },
      {
        "uid": "8b3884bb-9fa7-44b2-b3ed-b4a5e8ca16f5",
        "name": "Área de Exploração de Madeira",
        "type": "Silvicultura",
        "centralPoint": { "lat": -3.4675, "lng": -62.2170 },
        "coordinates": [
          { "lat": -3.4670, "lng": -62.2165 },
          { "lat": -3.4680, "lng": -62.2160 },
          { "lat": -3.4685, "lng": -62.2170 },
          { "lat": -3.4675, "lng": -62.2175 }
        ]
      },
      {
        "uid": "ecf42346-c97e-4797-a036-881ba3a139d3",
        "name": "Área de Pesquisa em Biodiversidade",
        "type": "Pesquisa",
        "centralPoint": { "lat": -3.4700, "lng": -62.2180 },
        "coordinates": [
          { "lat": -3.4695, "lng": -62.2175 },
          { "lat": -3.4705, "lng": -62.2170 },
          { "lat": -3.4710, "lng": -62.2180 },
          { "lat": -3.4700, "lng": -62.2185 }
        ]
      }
    ]
  }
]

export function Map() {
  const featureGroupRef = useRef<L.FeatureGroup>(null);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={5}
      minZoom={2.5}
      style={{ height: "100%", width: "100%", zIndex: 10 }}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
    >
      <FeatureGroup ref={featureGroupRef}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=w7EUfSW9h5JMGIMOYhUO"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />


        {mock.map((item, index) => (
          <div key={index}>
            {item.regions.map((region, index) => (
              <div key={index}>
                <FloatingMarker region={region} />
              </div>
            ))}
          </div>
        ))}
      </FeatureGroup>
    </MapContainer>
  );
}
