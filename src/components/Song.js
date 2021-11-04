// Main packages
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay, FaPause, FaRegMeh } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { ColorExtractor } from "react-color-extractor";
// Components
import { device } from "./mediaQueries";

const SongStyle = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: auto 600px;
  padding: 10px 0px;
  background-color: rgba(4, 25, 85, 0.5);
  box-shadow: ${(props) =>
    props.colorOnPlay
      ? `0px 41px 93px rgba(0, 0, 0, 0.0403024),
      0px 14.9657px 33.9465px rgba(0, 0, 0, 0.0576822),
      0px 7.26556px 16.4804px rgba(0, 0, 0, 0.0723178),
      0px 3.56171px 8.079px rgba(0, 0, 0, 0.0896976),
      0px 1.40831px 3.19445px rgba(0, 0, 0, 0.13),
      inset 70px 0px 50px -30px rgba(${props.songColor}, 0.8);`
      : `0px 41px 93px rgba(0, 0, 0, 0.0403024),
    0px 14.9657px 33.9465px rgba(0, 0, 0, 0.0576822),
    0px 7.26556px 16.4804px rgba(0, 0, 0, 0.0723178),
    0px 3.56171px 8.079px rgba(0, 0, 0, 0.0896976),
    0px 1.40831px 3.19445px rgba(0, 0, 0, 0.13);`};
  border-radius: 7px;
  margin: 25px 0;
  transition: box-shadow 0.3s;

  .img-wrapper {
    display: flex;
    align-items: center;
    padding: 17px 13px;

    img {
      width: 100px;
      vertical-align: middle;
      border-radius: 7px;
      transition: 0.5s border;
    }
  }

  li {
    position: relative;
  }

  .audio-preview {
    opacity: 1;
    position: absolute;
    top: 95px;
    left: 102px;

    .icons {
      background-color: #dc07f3;
      color: #fff;
      padding: 13px;
      border-radius: 7px;
      vertical-align: middle;
      box-shadow: 0px 17px 45px rgba(217, 0, 225, 0.55),
        0px 3.79717px 10.0513px rgba(217, 0, 225, 0.327859),
        0px 1.13052px 2.99255px rgba(217, 0, 225, 0.222141);
      transition: all 0.3s;
      transform: translateY(0px);

      &:hover {
        background-color: #ba0ace;
      }
    }

    .play-pause {
      cursor: pointer;
    }
  }

  .titles {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    margin: 0;
    .track-name {
      font-weight: bold;
      font-size: 18px;
      margin: 0;
      padding: 0 0 10px 0;

      h3 {
        margin: 0;
      }
    }

    .artist-name {
      margin: 0;
      font-weight: normal;
      font-size: 15px;
      letter-spacing: 0.04em;

      p {
        margin: 0;
      }
    }
  }

  .song-to-spotify {
    display: grid;
    align-items: center;
    position: absolute;
    right: 50px;
    bottom: -20px;
    button {
      cursor: pointer;
      background-color: #dc07f3;
      color: #fff;
      padding: 15px;
      border: none;
      border-radius: 7px;
      transition: all 0.3s;
      font-weight: bold;
      font-size: 13px;
      letter-spacing: 0.08em;
      transition: all 0.3s;
      box-shadow: 0px 24px 32px rgba(220, 7, 243, 0.14),
        0px 16px 24px rgba(220, 7, 243, 0.1),
        0px 2px 6px rgba(220, 7, 243, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.04);

      &:hover {
        background-color: #ba0ace;
      }
    }
  }

  // Responsive style

  @media ${device.tablet} {
    grid-template-columns: auto 400px;

    .titles {
      padding-left: 30px;
      .track-name {
        h3 {
          font-size: 15px;
        }
      }

      .artist-name {
        font-size: 11px;
      }
    }
  }

  @media ${device.mobileL} {
    grid-template-columns: auto 1fr;

    .img-wrapper {
      padding: 20px 10px;

      img {
        width: 70px;
      }
    }

    .audio-preview {
      opacity: 1;
      position: absolute;
      top: 80px;
      left: 60px;

      .icons {
        padding: 11px;
      }
    }

    .song-to-spotify {
      right: 15px;
      bottom: -10px;
      button {
        padding: 7px 10px;
        font-size: 13px;
        letter-spacing: 0.04em;
      }
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

  // Image color
  const [colors, setColors] = useState(null);

  useEffect(() => {
    isPlaying ? songAudio.play() : songAudio.pause();
    // This is cleanup of the effect
    return () => songAudio.pause();
  }, [isPlaying, songAudio, colors]);

  // When song ends, change state back to false
  useEffect(() => {
    songAudio.addEventListener("ended", () => onEnd());
    return () => {
      songAudio.removeEventListener("ended", () => onEnd());
    };
  }, [songAudio, onEnd]);

  function togglePlay() {
    onPlay(!isPlaying);
  }

  return (
    <Fade bottom>
      <SongStyle colorOnPlay={isPlaying} songColor={colors}>
        <div className="audio-preview">
          {trackData.preview_url == null ? (
            <FaRegMeh style={{ color: "#ffffff" }} className="icons" />
          ) : (
            <div
              className="test"
              onClick={() => {
                togglePlay();
              }}>
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
          <ColorExtractor
            rgb
            getColors={(color) => {
              setColors(`${color[0]}`);
            }}>
            <img
              src={trackData.album.images[0].url}
              alt={`Track images ${trackData.name}`}
            />
          </ColorExtractor>
        </div>
        <div className="titles">
          <div className="track-name">
            <h3>{trackData.name}</h3>
          </div>
          <div className="artist-name">
            <p>{trackData.album.artists[0].name}</p>
          </div>
        </div>
        <div className="song-to-spotify">
          <a
            href={trackData.external_urls.spotify}
            target="_blank"
            rel="noreferrer noopener">
            <button>
              <span>Open in Spotify</span>
            </button>
          </a>
        </div>
      </SongStyle>
    </Fade>
  );
}
