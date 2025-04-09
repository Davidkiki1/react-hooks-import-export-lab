import React from "react";
import { image } from "../data/user";

function About() {
  return (
  <div>
    <h1>About me</h1>
    <img src={image} alt="My Profile" />
  </div>
  );
}

export default About;
