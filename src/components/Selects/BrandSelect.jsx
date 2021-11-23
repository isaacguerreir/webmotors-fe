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
  justify-content: flex-start;
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
            { props.icon && <Icon src={props.icon}/> }
            <Description>Marca: <Darker>Todas</Darker></Description>
            <select style={select}></select>
        </DropDownHeader>
        {(isOpen && props.options)&& (
          <DropDownListContainer>
            <DropDownList>
              {props.options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  );
}