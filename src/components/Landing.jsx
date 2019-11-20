import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

export default function Landing(props) {
  return (
    <div>
      <div style={{ gridArea: "sidebar", backgroundColor: "yellow" }}>a</div>
      <div style={{ gridArea: "content", backgroundColor: "black" }}>b</div>
    </div>
  );
}
