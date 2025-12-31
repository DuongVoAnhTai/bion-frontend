import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { BaseLayer } = LayersControl;

export default function DistributionMap({ data }) {
  const centerVietnam = [16.0446, 108.2067];

  return (
    <div className="h-[350px] w-full rounded-3xl overflow-hidden border border-gray-light/30 shadow-inner relative group">
      <MapContainer
        center={centerVietnam}
        zoom={5}
        scrollWheelZoom={false}
        attributionControl={false}
        className="h-full w-full"
      >
        {/* LỚP ĐIỀU KHIỂN CHẾ ĐỘ XEM */}
        <LayersControl position="topright">
          {/* 1. Chế độ Mặc định (Sạch sẽ, dễ nhìn điểm) */}
          <BaseLayer checked name="Default (Light)">
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}"
              // attribution="&copy; CARTO"
            />
          </BaseLayer>
          {/* 2. Chế độ Vệ tinh (Nhìn rõ rừng, sông, núi) */}
          <BaseLayer name="Satellite">
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=s,h&hl=en&x={x}&y={y}&z={z}"
              // attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EBP, and the GIS User Community"
            />
          </BaseLayer>

          {/* 3. Chế độ Địa hình (Nhìn rõ độ cao)
          <BaseLayer name="Terrain">
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}"
              // attribution="Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)"
            />
          </BaseLayer> */}
        </LayersControl>

        {/* VẼ CÁC ĐIỂM QUAN SÁT */}
        {data.features.map((feature, idx) => (
          <CircleMarker
            key={idx}
            center={[
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0],
            ]}
            radius={8}
            pathOptions={{
              fillColor: "#450efb",
              color: "#ffffff",
              weight: 2,
              opacity: 1,
              fillOpacity: 0.8,
            }}
          >
            <Popup>
              <div className="font-poppins p-1">
                <p className="font-bold text-green-logo text-sm">
                  {feature.properties.location}
                </p>
                <p className="text-[11px] text-gray-dark">
                  Species distribution point
                </p>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
