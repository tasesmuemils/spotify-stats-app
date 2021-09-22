// Main packages
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay, FaPause, FaRegMeh, FaSpotify } from "react-icons/fa";
import Fade from "react-reveal/Fade";
// Components
import { device } from "./mediaQueries";

const SongStyle = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr 1fr auto;
  padding: 10px 20px;
  background-color: #000000;
  margin: 5px;
  border-radius: 20px;
  transition: all 0.5s;

  &:hover {
    background-color: #000000;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
    img {
      width: 70px;
      vertical-align: middle;
    }
  }

  .audio-preview {
    display: grid;
    align-items: center;

    .icons {
      background-color: #1db954;
      padding: 15px;
      border-radius: 10px;
      font-size: 15px;
      margin: 10px 20px 10px 10px;
      vertical-align: middle;
      transition: all 0.3s;
      color: #fff;

      &:hover {
        background-color: #14883d;
      }
    }

    .play-pause {
      cursor: pointer;
    }
  }

  .track-name {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .artist-name {
    display: flex;
    align-items: center;
  }

  .song-to-spotify {
    display: grid;
    align-items: center;
    button {
      cursor: pointer;
      font-size: 13px;
      background-color: #1db954;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 20px;
      transition: all 0.3s;

      &:hover {
        background-color: #14883d;
      }

      .spotify-icon {
        font-size: 13px;
        margin-right: 5px;
      }
    }
  }

  // Responsive style
  @media ${device.laptopL} {
    padding: 10px;
    .track-name {
      h3 {
        font-size: 18px;
      }
    }
  }

  @media ${device.laptop} {
    /* padding: 0px; */
    display: grid;
    grid-template-columns: auto auto 1fr 1fr auto;
    grid-template-rows: auto;
    grid-template-areas:
      "audio image artist artist button"
      "audio image track track button";

    .audio-preview {
      grid-area: audio;

      .icons {
        padding: 10px;
        border-radius: 10px;
        font-size: 15px;
        margin: 10px 20px 10px 10px;
        vertical-align: middle;
      }
    }

    .img-wrapper {
      grid-area: image;
      img {
        width: 50px;
      }
    }

    .track-name {
      grid-area: track;
      h3 {
        font-size: 15px;
      }
    }

    .artist-name {
      grid-area: artist;
      padding: 0 20px;
      font-size: 13px;
    }

    .song-to-spotify {
      grid-area: button;

      button {
        font-size: 0px;
        padding: 10px 10px;

        .spotify-icon {
          font-size: 15px;
          margin-right: 0px;
        }
      }
      span {
        display: none;
      }
    }
  }

  @media ${device.tablet} {
    .track-name {
      h3 {
        font-size: 13px;
      }
    }

    .artist-name {
      grid-area: artist;
      padding: 0 20px;
      font-size: 11px;
    }
  }
`;

export default function Song({
  trackData,
  onPlay,
  isPlaying,
  currentID,
  onEnd,
}) {
  // State for play and pause preview
  const [songAudio] = useState(new Audio(trackData.preview_url));
  // const [playSongPreview, setPlaySongPreview] = useState(false);

  useEffect(() => {
    isPlaying ? songAudio.play() : songAudio.pause();
    // This is cleanup of the effect
    return () => songAudio.pause();
  }, [isPlaying, songAudio]);

  // When song ends, change state back to false
  useEffect(() => {
    songAudio.addEventListener("ended", () => onEnd());
    return () => {
      songAudio.removeEventListener("ended", () => onEnd());
    };
  }, [songAudio, onEnd]);

  function togglePlay() {
    onPlay(!isPlaying);
    // const newPlaySongPreview = !playSongPreview;
    // setPlaySongPreview(newPlaySongPreview);

    // newPlaySongPreview && onPlay(); // Trigger onPlay callback if newPlaySongPreview === true
    // songAudio.pause();
  }

  // console.log(trackData);
  return (
    <Fade bottom>
      <SongStyle>
        <div className="audio-preview">
          {trackData.preview_url == null ? (
            <FaRegMeh style={{ color: "#ffffff" }} className="icons" />
          ) : (
            <div onClick={() => togglePlay()}>
              {isPlaying ? (
                <FaPause
                  style={{ color: "#ffffff" }}
                  className="icons play-pause"
                />
              ) : (
                <FaPlay className="icons play-pause" />
              )}
            </div>
          )}
        </div>
        <div className="img-wrapper">
          <img
            src={trackData.album.images[0].url}
            alt={`Track images ${trackData.name}`}
          />
        </div>
        <div className="track-name">
          <h3>{trackData.name}</h3>
        </div>
        <div className="artist-name">
          <p>{trackData.album.artists[0].name}</p>
        </div>
        <div className="song-to-spotify">
          <a
            href={trackData.external_urls.spotify}
            target="_blank"
            rel="noreferrer noopener">
            <button>
              <FaSpotify className="spotify-icon" />
              <span>Open in Spotify</span>
            </button>
          </a>
        </div>
      </SongStyle>
    </Fade>
  );
}
