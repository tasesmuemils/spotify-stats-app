import React, { useRef } from "react";
import styled from "styled-components";
// Components
import { device } from "./mediaQueries";

const DropdownStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0px 20px;
  select {
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
    outline: none;
    border: none;
    border-radius: 25px;
    font-size: 13px;
    background-color: #1db954;
    color: #fff;
    padding: 9px 15px;
  }

  @media ${device.laptop} {
    select {
      font-size: 12px;
      padding: 8px 14px;
    }
  }

  @media ${device.tablet} {
    margin: 5px 10px 10px 10px;
    select {
      font-size: 14px;
      padding: 7px 13px;
    }
  }
`;

export default function Dropdown({ options, sortValue }) {
  // Select reference to Select element
  const selectRef = useRef();

  return (
    <DropdownStyle>
      <select
        ref={selectRef}
        onChange={(e) => {
          // Passsing sort value to parent
          sortValue(e.target.value);
        }}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </DropdownStyle>
  );
}
