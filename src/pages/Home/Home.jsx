import React from "react";
import { Routes, Route } from "react-router-dom";
import MapMain from "../../components/MapMain/MapMain";
import HomeMain from "../../components/HomeMain/HomeMain";
import { useEffect, useState } from "react";
import * as api from "../../api";

import lowSeverity from "../../assets/Svg/coral_low.png";
import mediumSeverity from "../../assets/Svg/coral_medium.png";
import highSeverity from "../../assets/Svg/coral_reef.png";
import noSeverity from "../../assets/Svg/coral_no.png";
import unknownSeverity from "../../assets/Svg/coral_incom.png";

const Home = () => {
  const [coralsData, setCoralsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const typeN = await api.fetchUnknownCoral();
      const type0 = await api.fetchNoBleachingCoral();
      const type1 = await api.fetchLowBleachingCoral();
      const type2 = await api.fetchMediumBleachingCoral();
      const type3 = await api.fetchHighBleachingCoral();
      setCoralsData([
        typeN.data,
        type0.data,
        type1.data,
        type2.data,
        type3.data,
      ]);
    }
    fetchData();
  }, []);

  return (
    <>
      {!coralsData ? (
        <h1 style={{padding: "1rem" }}>Loading...</h1>
      ) : (
        <>
          <Routes>
            {" "}
            <Route
              path="/"
              element={
                <HomeMain />
              }
            />
            <Route
              path="/highSeverity"
              element={
                <MapMain data={coralsData[4]} iconSeverity={highSeverity} />
              }
            />
            <Route
              path="/mediumSeverity"
              element={
                <MapMain data={coralsData[3]} iconSeverity={mediumSeverity} />
              }
            />
            <Route
              path="/lowSeverity"
              element={
                <MapMain data={coralsData[2]} iconSeverity={lowSeverity} />
              }
            />
            <Route
              path="/noSeverity"
              element={
                <MapMain data={coralsData[1]} iconSeverity={noSeverity} />
              }
            />
            <Route
              path="/unknownSeverity"
              element={
                <MapMain data={coralsData[0]} iconSeverity={unknownSeverity} />
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default Home;
