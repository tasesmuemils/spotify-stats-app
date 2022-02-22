// Main packages
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import styled from "styled-components";
import "normalize.css";
// import { motion } from "framer-motion";

// Components
import GlobalStyles from "../styles/GlobalStyle";
import TopSongs from "./TopSongs";
import PersonsData from "./PersonsData";
import Dropdown from "./Dropdown";
import Modal from "./Modal";
import { device } from "./mediaQueries";
import { Fragment } from "react";

const RedirectPageStyle = styled.div`
  nav {
    position: fixed;
    overflow: hidden;
    width: 100%;
    z-index: 1;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3450a1;
    color: #ffffff;
    padding: 10px;
    box-shadow: 0px 41px 93px rgba(0, 0, 0, 0.0403024),
      0px 14.9657px 33.9465px rgba(0, 0, 0, 0.0576822),
      0px 7.26556px 16.4804px rgba(0, 0, 0, 0.0723178),
      0px 3.56171px 8.079px rgba(0, 0, 0, 0.0896976),
      0px 1.40831px 3.19445px rgba(0, 0, 0, 0.13);

    .dropdown-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .content-wrapper {
    padding: 100px 50px;
    display: flex;
    justify-content: center;

    .loading-wrapper {
      height: 80vh;
      display: grid;
      justify-content: center;
      align-items: center;
      #loading {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
      }

      @keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        to {
          -webkit-transform: rotate(360deg);
        }
      }
    }
  }

  .modal-button {
    cursor: pointer;
    background: #dc07f3;
    color: #fbfbfb;
    border: none;
    padding: 8px 10px;
    margin: 0 20px;
    border-radius: 7px;
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    transition: all 0.3s;
    box-shadow: 0px 24px 32px rgba(220, 7, 243, 0.14),
      0px 16px 24px rgba(220, 7, 243, 0.1), 0px 2px 6px rgba(220, 7, 243, 0.08),
      0px 0px 1px rgba(0, 0, 0, 0.04);

    &:hover {
      background-color: #ba0ace;
    }
  }

  // Responsive style
  @media ${device.laptopL} {
    nav {
      /* padding: px 0; */
    }

    .content-wrapper {
      padding: 100px 0px;
    }
  }
  @media ${device.laptop} {
    nav {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      .dropdown-wrapper {
        margin-right: 15px;
      }

      .dropdown-wrapper {
        order: 1;
      }
    }

    .content-wrapper {
      padding: 100px 10px;
    }

    .modal-button {
      font-size: 14px;
    }
  }

  @media ${device.tablet} {
    nav {
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
    .content-wrapper {
      padding: 100px 0px 70px 0px;
    }
    .create-playlist {
      position: fixed;
      bottom: 0;
      left: 0;
      background-color: #3450a1;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 10px 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      box-shadow: 0px 41px 93px rgba(0, 0, 0, 0.0403024),
        0px 14.9657px 33.9465px rgba(0, 0, 0, 1),
        0px 7.26556px 16.4804px rgba(0, 0, 0, 0.0723178),
        0px 3.56171px 8.079px rgba(0, 0, 0, 0.0896976),
        0px 1.40831px 3.19445px rgba(0, 0, 0, 0.13);
      .modal-button {
        font-size: 15px;
        padding: 7px 13px;
        margin: 10px;
      }
    }
  }
`;

export default function RedirectPage() {
  // State for Spotify data
  const [topArtists, settopArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  // State for sorting data
  const [rangeValue, setRangeValue] = useState("long_term");
  const [limitValue, setLimitValue] = useState(50);
  // State for showing modal
  const [showModal, setShowModal] = useState(false);
  //State for persons ID
  const [personsId, setPersonsId] = useState(null);

  // Getting data form Spotify API
  useEffect(() => {
    const parsedHash = queryString.parse(window.location.hash);
    async function getTopArtitsData() {
      const urlAPI = `https://api.spotify.com/v1/me/top/tracks?time_range=${rangeValue}&limit=${limitValue}&offset=5`;
      const response = await axios({
        method: "GET",
        url: urlAPI,

        headers: {
          Authorization: "Bearer " + parsedHash.access_token,
        },
      });
      setLoading(true);

      console.log(response);
      const { items } = response.data;
      settopArtists(items);
    }

    getTopArtitsData();
  }, [rangeValue, limitValue]);

  // Dropdown values
  const dropDownTime = [
    {
      text: "All time",
      value: "long_term",
    },
    {
      text: "Last 6 months",
      value: "medium_term",
    },
    {
      text: "Last month",
      value: "short_term",
    },
  ];

  const dropDownSongs = [
    {
      text: "50 Songs",
      value: 50,
    },
    {
      text: "30 songs",
      value: 30,
    },
    {
      text: "10 songs",
      value: 10,
    },
  ];

  function sortValue(value) {
    // If sorting value is not anumber set Range, if it is number, set Limit
    isNaN(value) ? setRangeValue(value) : setLimitValue(value);
  }

  // Callback function to get persons ID
  const getPersonsId = (personsId) => {
    setPersonsId(personsId);
  };

  return (
    <Fragment>
      <GlobalStyles />
      <RedirectPageStyle>
        <nav>
          <div className="dropdown-wrapper">
            <Dropdown sortValue={sortValue} options={dropDownTime} />
            <Dropdown sortValue={sortValue} options={dropDownSongs} />
            <div className="create-playlist">
              <button
                className="modal-button"
                onClick={() => {
                  setShowModal(true);
                }}>
                Create Playlist
              </button>
            </div>
          </div>
          <PersonsData personsID={getPersonsId} />
        </nav>
        {/* <Background class="backgroundSVG" songColor={songColor}></Background> */}
        <div className="content-wrapper">
          <Modal
            POSTvalue={personsId}
            onClose={() => setShowModal(false)}
            show={showModal}
            playlistSongs={topArtists}
          />
          {loading ? (
            <TopSongs topArtists={topArtists} />
          ) : (
            <div className="loading-wrapper">
              <div id="loading"></div>
            </div>
          )}
        </div>
      </RedirectPageStyle>
    </Fragment>
  );
}
