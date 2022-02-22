// Main packages
import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import "normalize.css";
// Components
import GlobalStyles from "../styles/GlobalStyle";
import LoginButton from "./LoginButton";
import { device } from "./mediaQueries";

const AppStyle = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  .login-content-wrapper {
    padding: 20px;
    .login-content {
      padding: 20px;
      margin: 50px 200px;
      background: rgba(0, 0, 0, 0.644);
      backdrop-filter: saturate(180%) blur(10px);
      border-radius: 20px;
      box-shadow: 0px 41px 93px rgba(0, 0, 0, 0.0403024),
        0px 14.9657px 33.9465px rgba(0, 0, 0, 0.0576822),
        0px 7.26556px 16.4804px rgba(0, 0, 0, 0.0723178),
        0px 3.56171px 8.079px rgba(0, 0, 0, 0.0896976),
        0px 1.40831px 3.19445px rgba(0, 0, 0, 0.13);

      h1 {
        font-size: 50px;
        padding: 10px;
      }
      .app-description {
        font-size: 20px;

        p {
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 5px;
        }
      }
    }
  }

  // Responsive styling
  @media ${device.laptop} {
    .login-content-wrapper {
      .login-content {
        margin: 50px;

        h1 {
          font-size: 40px;
        }
        .app-description {
          font-size: 17px;
        }
      }
    }
  }

  @media ${device.tablet} {
    .login-content-wrapper {
      .login-content {
        margin: 0px;

        h1 {
          font-size: 30px;
        }
        .app-description {
          font-size: 20px;
        }
      }
    }
  }
`;

export default function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <AppStyle>
        <div className="login-content-wrapper">
          <div className="login-content">
            <h1>Your Top Spotify Songs</h1>
            <div className="app-description">
              <p>Check your top tracks based on calculated affinity</p>
              <p>
                See your all time or just last month top tracks, listen to
                previews of the songs, open them on Spotify or create a playlist
                and listen your favorite tracks any time you want
              </p>
            </div>
            <LoginButton />
          </div>
        </div>
      </AppStyle>
    </Fragment>
  );
}
