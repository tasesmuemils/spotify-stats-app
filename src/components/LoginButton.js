// Main packages
import React from "react";
import styled from "styled-components";
// Components
import { device } from "./mediaQueries";

const LoginButtonStyle = styled.button`
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  background-color: #dc07f3;
  color: #fff;
  padding: 10px 100px;
  margin: 20px;
  border: none;
  border-radius: 7px;
  letter-spacing: 0.04em;
  transition: all 0.3s;
  box-shadow: 0px 24px 32px rgba(220, 7, 243, 0.14),
    0px 16px 24px rgba(220, 7, 243, 0.1), 0px 2px 6px rgba(220, 7, 243, 0.08),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  &:hover {
    background-color: #ba0ace;
  }

  // Responsive styling
  @media ${device.tablet} {
    padding: 10px 50px;
  }
`;

//Login button
export default function LoginButton() {
  //Enviroment variables
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  //Function reddirects to Spotify Authentication page
  function handleLogin() {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true&scope=user-top-read%20playlist-modify-private%20playlist-modify-public`;
  }

  return (
    <LoginButtonStyle type="submit" onClick={handleLogin}>
      LOG IN
    </LoginButtonStyle>
  );
}
