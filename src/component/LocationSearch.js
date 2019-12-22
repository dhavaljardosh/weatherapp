import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// If you want to use the provided css
import "react-google-places-autocomplete/dist/assets/index.css";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";

const Component = ({ updateParent }) => {
  const [cordi, setCordi] = useState({});
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", marginTop: 20 }}>
        <div style={{ flex: 1 }}>
          <GooglePlacesAutocomplete
            onSelect={async locationResult => {
              const data = await geocodeByPlaceId(locationResult.place_id);
              const gettingLatLng = await getLatLng(data[0]);
              setCordi(gettingLatLng);
            }}
            inputStyle={{
              background: "transparent",
              borderBottom: "2px solid black",
              boxShadow: "0px 0px 0px white",
              fontSize: 20
            }}
          />
        </div>

        <div onClick={() => updateParent(cordi)}>
          <div className="searchButton">Search</div>
        </div>
      </div>
      <div
        style={{
          fontSize: 12,
          fontFamily: "Raleway",
          fontWeight: 400,
          marginLeft: 10
        }}
      >
        Select Location here
      </div>
    </div>
  );
};
export default Component;
