import { locations } from "../assets/locations";
import "../style/MapRotation.css";

const MapRotation = () => {
  const baseMaps = Object.entries(locations).map(([key, value]) => ({
    key,
    title: `${key.replace(/_/g, " ")}`,
    image: value,
  }));

  const repeatToLength = (array, length) => {
    const result = [];
    while (result.length < length) {
      result.push(...array);
    }
    return result.slice(0, length);
  };

  const repeatedMaps = repeatToLength(baseMaps, 16); 

  return (
    <div className="map-container">
      <h5>MAP ROTATION</h5>
      <div className="map-rotation-grid">
        {repeatedMaps.map((map, index) => (
          <div className="map-card" key={index}>
            <div
              className="map-image"
              style={{ backgroundImage: `url(${map.image})` }}
            />
            <div className="map-title">
              <div>Conquest Large</div>
              <div>{map.title.toUpperCase()}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapRotation;
