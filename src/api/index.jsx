import axios from "axios";
const API = axios.create({ baseURL: "https://reefmap-server.onrender.com" });

export const fetchHighBleachingCoral = () => API.get("/coral/getHighBleaching");
export const fetchMediumBleachingCoral = () => API.get("/coral/getMediumBleaching");
export const fetchLowBleachingCoral = () => API.get("/coral/getLowBleaching");
export const fetchNoBleachingCoral = () => API.get("/coral/getNoBleaching");
export const fetchUnknownCoral = () => API.get("/coral/getUnknown");
