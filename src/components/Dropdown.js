import React, { useRef } from "react";
import styled from "styled-components";
// Components
import { device } from "./mediaQueries";

const DropdownStyle = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0px 20px;
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%238C98F2'><polygon points='0,0 100,0 50,50'/></svg>")
      no-repeat;
    background-size: 12px;
    background-position: calc(100% + 0px) calc(100% - 10px);
    background-repeat: no-repeat;
    outline: none;
    border: none;
    font-size: 17px;
    background-color: #3450a1;
    color: #ffffff;
    width: 120px;
    padding: 9px 15px;
    margin: 0 10px;
  }

  @media ${device.laptop} {
    select {
      /* font-size: 12px; */
      background-position: calc(100% + 0px) calc(100% - 6px);
      padding: 8px 20px;
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
