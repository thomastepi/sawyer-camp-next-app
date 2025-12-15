import { mapsLinks } from "@/utils/googleMapsFarmLink";
import s from "./googleMaps.module.css";

const InfoWindowChild = ({ selectedMarker }) => {
  return (
    <div className={s["info-window"]}>
      <h3>{selectedMarker.name}</h3>
      <small>{selectedMarker.subtitle}</small>
      {selectedMarker.imageUrl && (
        <img src={selectedMarker.imageUrl} alt={selectedMarker.name} />
      )}
      <p>{selectedMarker.description}</p>
      <ul>
        {selectedMarker.crops?.length ? (
          <li>
            <b>Crops:</b> {selectedMarker.crops.join(", ")}
          </li>
        ) : null}
        {selectedMarker.areaHectares ? (
          <li>
            <b>Area:</b> {selectedMarker.areaHectares} ha
          </li>
        ) : null}
        {selectedMarker.phone ? (
          <li>
            <b>Phone:</b>{" "}
            <a href={`tel:${selectedMarker.phone}`}>{selectedMarker.phone}</a>
          </li>
        ) : null}
      </ul>
      {(() => {
        const links = mapsLinks(selectedMarker.position);
        return (
          <div className={s["map-links-container"]}>
            <a href={links.directions} target="_blank" rel="noreferrer">
              Get Directions
            </a>
            <a href={links.open} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
            {selectedMarker.website && (
              <a href={selectedMarker.website} target="_blank" rel="noreferrer">
                Website
              </a>
            )}
            {selectedMarker.whatsapp && (
              <a
                href={selectedMarker.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            )}
          </div>
        );
      })()}
    </div>
  );
};

export default InfoWindowChild;
