// Main packages
import React, { useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import axios from "axios";
// import { motion } from "framer-motion";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.555);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  &.show {
    opacity: 1;
    pointer-events: visible;

    .modal-box {
      transform: translateY(0px);
    }
  }

  .modal-box {
    display: grid;
    background: #fff;
    color: #000;
    padding: 16px;
    border-radius: 8px;
    transition: all 0.5s;
    transform: translateY(-50px);
    transition: all 0.5s ease-in-out;

    h1 {
      text-align: center;
      font-size: 18px;
    }

    .input-playlist-name {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0px;
      label {
        font-size: 14px;
        color: #121212;
      }

      input {
        -webkit-appearance: none;
        border-radius: 0;
        border: none;
        outline: none;
        border-bottom: 2px solid black;
        padding: 3px;
      }
    }

    .modal-buttons {
      text-align: center;
      display: grid;

      .close-modal {
        text-align: center;
        background-color: #fff;
        border: none;
        color: rgba(0, 0, 0, 0.5);
        padding: 8px 34px;
        line-height: 18px;
        font-size: 13px;
        letter-spacing: 0.08em;
        font-weight: bold;
        letter-spacing: 1.76px;
        cursor: pointer;
      }

      .form-submit {
        cursor: pointer;
        font-weight: bold;
        font-size: 13px;
        background-color: #dc07f3;
        color: #fff;
        padding: 9px 15px;
        margin: 10px 20px;
        border: none;
        border-radius: 7px;
        letter-spacing: 0.08em;
        transition: all 0.3s;

        &:hover {
          background-color: #ba0ace;
        }
      }
    }
  }
`;

export default function Modal({ show, onClose, POSTvalue, playlistSongs }) {
  // State for user input (playlist name)
  const [playlistName, setPlaylistName] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState(null);
  console.log("TEST", playlistUrl);

  function handleSubmit(e) {
    // Prevents event default action
    e.preventDefault();

    // Capture access tokkens values
    const parsedHash = queryString.parse(window.location.hash);
    const url = `https://api.spotify.com/v1/users/${POSTvalue}/playlists`;

    async function createPlaylistPOST() {
      // POST method to create new playlist
      await axios({
        method: "POST",
        url: url,
        headers: {
          Authorization: "Bearer " + parsedHash.access_token,
          "Content-Type": "application/json",
        },
        data: {
          name: playlistName,
          description: "Your top tracks based on calculated affinity",
          public: false,
        },
      }).then((response) => {
        setPlaylistUrl(response.data.external_urls.spotify);
        // Empty array to store playlists songs uris
        const urisArray = [];
        playlistSongs.map((song) => urisArray.push(song.uri));

        // POST method to add songs to just created playlist
        axios({
          method: "POST",
          url: `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
          headers: {
            Authorization: "Bearer " + parsedHash.access_token,
            "Content-Type": "application/json",
          },
          data: {
            uris: urisArray,
          },
        });
      });
    }
    // Calling create playlist
    createPlaylistPOST();
  }

  return (
    <ModalStyle className={`${show ? "show" : ""}`}>
      {playlistUrl ? (
        <div className={`modal-box`}>
          <div className="modal-buttons">
            <a href={playlistUrl} target="_blank" rel="noreferrer noopener">
              <button className="form-submit" type="button">
                Open playlist in Spotify
              </button>
            </a>
            <button
              className="close-modal"
              type="button"
              onClick={() => {
                setPlaylistUrl(null);
                onClose();
              }}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit} className="modal-box">
          <h1>CREATE A PLAYLIST</h1>
          <div className="input-playlist-name">
            <label htmlFor="">Playlist Name:</label>
            <input
              type="text"
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <input
              className="form-submit"
              type="submit"
              value="Create playlist"
            />
            <button className="close-modal" type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </ModalStyle>
  );
}
