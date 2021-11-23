import React, { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 15rem;
  margin: 1rem 1rem;
  border-color: #4d4d4d;
`;

const DropDownHeader = styled("div")`
  height: 3rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: gray;
  border: 1px solid #b5b5bf;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #b5b5bf;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
  }
`;

const Icon = styled("img")`
  height: 1.3rem;
  width: 3rem;
`

const Description = styled("span")`
  margin: 0 1rem;
  font-size: 1.1rem;
`

const Darker = styled("span")`
  color: #4d4d4d;
  font-weight: 700;
`

const Divider = styled("span")`
  height: 100%;
  border: 1px solid #ccc;
  width: 0;
`


const lighter = {
    color: '#ccc'
}

const hidden = {
    display: 'none'
}

const select = {
    borderColor: 'white'
}

const balanceInside = {
    display: 'flex',
    justifyContent: 'space-between'
}

export default function Select(props) {
  return (
      <DropDownContainer>
        <DropDownHeader>
            { props.icon && <Icon src={props.icon}/> }
            <Description>{props.description}: </Description>
            <span><select style={select}></select></span>
        </DropDownHeader>
      </DropDownContainer>
  );
}