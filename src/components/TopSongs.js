// Main packages
import React, { useState } from "react";
import styled from "styled-components";
// Components
import Song from "./Song";
import { device } from "./mediaQueries";

const TopSongsStyle = styled.div`
  ul {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
    list-style: none;
    margin: 0 100px;
  }

  // Responsive style
  @media ${device.laptopL} {
    ul {
      margin: 0 50px;
    }
  }

  @media ${device.laptop} {
    ul {
      margin: 0 20px;
    }
  }
`;

export default function TopSongs({ topArtists }) {
  const [currentPlay, setCurrentPlay] = useState(null);
  console.log("State from TOPSongs:", currentPlay);

  return (
    <TopSongsStyle>
      {topArtists.length === 0 ? (
        <h2>No songs available from this time range!</h2>
      ) : (
        <ul>
          {topArtists.map((track) => {
            return (
              <Song
                key={track.id}
                currentID={currentPlay}
                onPlay={(isPlay) =>
                  isPlay ? setCurrentPlay(track.id) : setCurrentPlay(null)
                }
                onEnd={() => {
                  setCurrentPlay(null);
                }}
                isPlaying={track.id === currentPlay}
                trackData={track}
              />
            );
          })}
        </ul>
      )}
    </TopSongsStyle>
  );
}
