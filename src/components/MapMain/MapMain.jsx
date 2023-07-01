import React from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo } from "react";
import { useState } from "react";
import "./MapMain.css";
import Navbar from "../../components/Navbar/Navbar";

const MapMain = ({ data, iconSeverity }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCC-DwdtzutImiWZ7GsfOUGMJQ_kWBQs04",
  });

  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const OPTIONS = {
    minZoom: 1.6,
    maxZoom: 18,
  };

  const handleMarkerClick = (
    id,
    COUNTRY,
    ID,
    LOCATION,
    BLEACHING_SEVERITY,
    CORAL_FAMILY,
    CORAL_SPECIES,
    WATER_TEMPERATURE
  ) => {
    setInfoWindowData({
      id,
      COUNTRY,
      ID,
      LOCATION,
      BLEACHING_SEVERITY,
      CORAL_FAMILY,
      CORAL_SPECIES,
      WATER_TEMPERATURE,
    });
    setIsOpen(true);
  };

  return (
    <>
      <Navbar />
      <div className="map-main">
        {!isLoaded ? (
          <h1 style={{ padding: "1rem" }}>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            zoom={1}
            center={center}
            options={OPTIONS}
            onClick={() => setIsOpen(false)}
          >
            {data?.map(
              (
                {
                  ID,
                  COUNTRY,
                  LOCATION,
                  BLEACHING_SEVERITY,
                  CORAL_FAMILY,
                  CORAL_SPECIES,
                  WATER_TEMPERATURE,
                  LAT,
                  LON,
                },
                ind
              ) => (
                <Marker
                  key={ind}
                  position={{ lat: LAT, lng: LON }}
                  icon={{
                    url: iconSeverity,
                    scaledSize: new google.maps.Size(25, 30),
                  }}
                  onClick={() => {
                    handleMarkerClick(
                      ind,
                      COUNTRY,
                      ID,
                      LOCATION,
                      BLEACHING_SEVERITY,
                      CORAL_FAMILY,
                      CORAL_SPECIES,
                      WATER_TEMPERATURE
                    );
                  }}
                >
                  {isOpen && infoWindowData?.id === ind && (
                    <InfoWindow
                      onCloseClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <div className="info-window">
                        <h1>Coral#{infoWindowData.ID}</h1>
                        <div className="info-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                          >
                            <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z" />
                          </svg>
                          <h3>Country: </h3>
                          <p> {infoWindowData.COUNTRY}</p>
                        </div>
                        <div className="info-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                          </svg>
                          <h3>Location: </h3>
                          <p> {infoWindowData.LOCATION}</p>
                        </div>
                        <div className="info-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                          >
                            <path d="M384 64c0-17.7 14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H448v96c0 17.7-14.3 32-32 32H320v96c0 17.7-14.3 32-32 32H192v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96V320c0-17.7 14.3-32 32-32h96V192c0-17.7 14.3-32 32-32h96V64z" />
                          </svg>
                          <h3>Bleaching severity: </h3>
                          <p> {infoWindowData.BLEACHING_SEVERITY}</p>
                        </div>
                        <div className="info-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                          >
                            <path d="M360 72a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zM144 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM496 208a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8L264 217.5V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V217.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L440 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3H486.2c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3H310.2c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6H134.2c-32.4 0-62.1 17.8-77.5 46.3L18.9 340.6c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V313.5z" />
                          </svg>
                          <h3>Coral family: </h3>
                          <p> {infoWindowData?.CORAL_FAMILY}</p>
                        </div>
                        <div className="info-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                          >
                            <path d="M256 0c5.3 0 10.3 2.7 13.3 7.1c15.8 23.5 36.7 63.7 49.2 109c7.2 26.4 11.8 55.2 10.4 84c11.5-8.8 23.7-16.7 35.8-23.6c41-23.3 84.4-36.9 112.2-42.5c5.2-1 10.7 .6 14.4 4.4s5.4 9.2 4.4 14.5c-5.6 27.7-19.3 70.9-42.7 111.7c-9.1 15.9-19.9 31.7-32.4 46.3c27.8 6.6 52.4 17.3 67.2 25.5c5.1 2.8 8.2 8.2 8.2 14s-3.2 11.2-8.2 14c-15.2 8.4-40.9 19.5-69.8 26.1c-20.2 4.6-42.9 7.2-65.2 4.6l8.3 33.1c1.5 6.1-.6 12.4-5.5 16.4s-11.6 4.6-17.2 1.9L280 417.2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V417.2l-58.5 29.1c-5.6 2.8-12.3 2.1-17.2-1.9s-7-10.3-5.5-16.4l8.3-33.1c-22.2 2.6-45 0-65.2-4.6c-28.9-6.6-54.6-17.6-69.8-26.1c-5.1-2.8-8.2-8.2-8.2-14s3.2-11.2 8.2-14c14.8-8.2 39.4-18.8 67.2-25.5C78.9 296.3 68.1 280.5 59 264.6c-23.4-40.8-37.1-84-42.7-111.7c-1.1-5.2 .6-10.7 4.4-14.5s9.2-5.4 14.4-4.4c27.9 5.5 71.2 19.2 112.2 42.5c12.1 6.9 24.3 14.7 35.8 23.6c-1.4-28.7 3.1-57.6 10.4-84c12.5-45.3 33.4-85.5 49.2-109c3-4.4 8-7.1 13.3-7.1z" />
                          </svg>
                          <h3>Coral species: </h3>
                          <p> {infoWindowData?.CORAL_SPECIES}</p>
                        </div>
                        <div className="info-box">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 320 512"
                          >
                            <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z" />
                          </svg>
                          <h3>Water temperature: </h3>
                          <p> {infoWindowData?.WATER_TEMPERATURE}</p>
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              )
            )}
          </GoogleMap>
        )}
      </div>
    </>
  );
};

export default MapMain;
