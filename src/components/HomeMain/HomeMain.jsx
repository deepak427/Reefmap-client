import React from "react";
import backgroungImage from "../../assets/images/backgroungImage.jpg";
import coralLogo from "../../assets/Svg/coralLogo.png";
import { useNavigate } from "react-router-dom";
import "./HomeMain.css";

const HomeMain = () => {
  const navigate = useNavigate();
  return (
    <div className="info-container">
      <img
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          filter: "brightness(50%)",
        }}
        src={backgroungImage}
        alt="corals"
      />
      <div className="header-container">
        <div className="header-title">
          <img src={coralLogo} alt="coralLogo" />
          <h1>Reefmap</h1>
        </div>
        <button
          className="map-btn"
          onClick={() => {
            navigate("/highSeverity");
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
          </svg>{" "}
          Map
        </button>
      </div>
      <div className="ques-container">
        <h2>What is coral reef?</h2>
        <h3>
          Coral reef ecosystems are intricate and diverse collections of species
          that interact with each other and the physical environment. Coral is a
          class of colonial animal that is related to hydroids, jellyfish, and
          sea anemones.
        </h3>
      </div>
      <div className="ques-container">
        <h2>Why are Coral Reefs Important?</h2>
        <h3>
          Coral reefs are among the most biologically diverse and valuable
          ecosystems on Earth. An estimated 25 percent of all marine life,
          including over 4,000 species of fish, are dependent on coral reefs at
          some point in their life cycle. An estimated 1 billion people
          worldwide benefit from the many ecosystem services coral reefs provide
          including food, coastal protection, and income from tourism and
          fisheries.
        </h3>
      </div>
      <div className="ques-container">
        <h2>What is coral bleaching?</h2>
        <h3>
          Coral bleaching happens when corals lose their vibrant colors and turn
          white. But there’s a lot more to it than that. Coral are bright and
          colorful because of microscopic algae called zooxanthellae. The
          zooxanthellae live within the coral in a mutually beneficial
          relationship, each helping the other survive. But when the ocean
          environment changes—if it gets too hot, for instance—the coral
          stresses out and expels the algae.
        </h3>
      </div>
      <div className="ques-container">
        <h2>So what is Reefmap?</h2>
        <h3>
          Reefmap is a platform that provides users with information and data
          about coral reefs. It allows users to locate coral reefs and access
          valuable information about their health and condition. Reefmap
          provides data on various factors such as bleaching severity, water
          temperature, and other indicators of coral reef growth and health.
        </h3>
        <h3>
          By using Reefmap, researchers, conservationists, and policymakers can
          gain insights into the status of coral reefs in specific locations.
        </h3>
      </div>
    </div>
  );
};

export default HomeMain;
