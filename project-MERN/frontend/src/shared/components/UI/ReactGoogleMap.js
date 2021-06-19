import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import "./Map.css";

const Map = withScriptjs(
  withGoogleMap((props) => {
    return (
      <div className={`map ${props.className}`} style={props.style}>
        <GoogleMap
          defaultZoom={props.defaultZoom}
          defaultCenter={{
            lat: +props.coordinates.lat,
            lng: +props.coordinates.lng,
          }}
        >
          {props.isMarkerShown && (
            <Marker
              position={{
                lat: +props.coordinates.lat,
                lng: +props.coordinates.lng,
              }}
            />
          )}
        </GoogleMap>
      </div>
    );
  })
);

export default Map;
