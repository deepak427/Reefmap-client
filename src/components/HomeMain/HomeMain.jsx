import React from "react";
import coral_polyps from "../../assets/images/coral_polyps.jpg";
import coral_exoskeleton from "../../assets/images/coral_exoskeleton.jpg";
import coral_reefs from "../../assets/images/coral_reefs.jpg";
import coral_colony from "../../assets/images/coral_colony.jpg";
import coral_bleaching from "../../assets/images/coral_bleaching.jpg";
import Scene from "../SceneAnimation/Scene";
import { useNavigate } from "react-router-dom";
import "./HomeMain.css";

const HomeMain = () => {
  const navigate = useNavigate();
  return (
    <>
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
      <Scene
        src={coral_polyps}
        title="Coral Polyps Settlement:"
        description="Coral reefs start with the settlement of coral polyps onto a
          suitable substrate, which is usually a hard surface like a rock or
          the remains of a previous coral structure. Coral polyps are tiny
          animals related to jellyfish and sea anemones. They have a soft body
          with a hard exoskeleton made of calcium carbonate."
      />
      <Scene
        src={coral_exoskeleton}
        title="Calcium Carbonate Secretion:"
        description="Coral polyps extract calcium carbonate from the water and use it to
      build their exoskeletons. As each coral polyp grows, it secretes a
      cup-shaped skeleton around itself. Over time, multiple generations
      of polyps contribute to the growth of the coral structure."
      />
      <Scene
        src={coral_reefs}
        title="Coral Growth and Structural Formation:"
        description="As more and more polyps settle and grow on the substrate, they
      create a complex three-dimensional structure. The accumulated
      calcium carbonate skeletons form a solid foundation for the reef,
      creating a framework of various shapes and sizes."
      />
      <Scene
        src={coral_colony}
        title="Diverse Ecosystem Formation:"
        description="As the coral reef structure develops, it provides habitat and
      shelter for a wide variety of marine organisms. The complex
      architecture of the reef offers niches and hiding places for fish,
      invertebrates, and other creatures. This diversity creates a
      thriving ecosystem that is highly productive and interconnected."
      />
      <Scene
        src={coral_bleaching}
        title="Ongoing Growth and Adaptation:"
        description="Coral reefs are constantly evolving. As coral colonies continue to
      grow and new generations of polyps settle, the reef structure
      changes and adapts to environmental conditions. Reefs can expand,
      contract, or shift due to factors like water temperature, nutrient
      availability, wave action, and sea level changes."
      />
    </>
  );
};

export default HomeMain;
