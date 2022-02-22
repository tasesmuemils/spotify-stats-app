import React, { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import styled from "styled-components";
// Components
import { device } from "./mediaQueries";

const PersonsDataStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  img {
    width: 40px;
    height: auto;
    border-radius: 100%;
  }

  h3 {
    font-size: 15px;
    padding: 0 20px;
  }

  @media ${device.laptop} {
    justify-content: center;
    img {
      width: 30px;
    }
    h3 {
      font-size: 14px;
      padding: 0 10px;
    }
  }
`;

export default function PersonsData({ personsID }) {
  const [personsData, setPersonsData] = useState({});

  useEffect(() => {
    const parsedHash = queryString.parse(window.location.hash);
    async function getPersonsData() {
      const response = await axios({
        method: "GET",
        url: "https://api.spotify.com/v1/me",
        headers: {
          Authorization: "Bearer " + parsedHash.access_token,
        },
      });

      const { id, display_name, images } = response.data;
      const personsInfo = {
        persons_id: id,
        display_name: display_name,
        image: images[0].url,
      };

      setPersonsData(personsInfo);
    }
    getPersonsData();
  }, []);

  return (
    <PersonsDataStyle onLoad={() => personsID(personsData.persons_id)}>
      <div className="px-4">
        <img
          className="w-8 object-cover rounded-full"
          src={personsData.image}
          alt="profile_pic"
        />
      </div>
      <h3 className="px-4">{personsData.display_name}</h3>
    </PersonsDataStyle>
  );
}
