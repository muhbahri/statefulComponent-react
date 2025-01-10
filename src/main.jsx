import React from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import ContactApp from "./components/ContactApp";
// import App from './App.jsx'

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
