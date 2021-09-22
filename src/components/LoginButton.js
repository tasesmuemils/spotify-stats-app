// Main packages
import React from "react";
import styled from "styled-components";
// Components
import { device } from "./mediaQueries";

const LoginButtonStyle = styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: #1db954;
  color: #fff;
  padding: 10px 100px;
  margin: 20px;
  border: none;
  border-radius: 20px;
  transition: all 0.3s;

  &:hover {
    background-color: #14883d;
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
