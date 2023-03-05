import React, { useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeHandle, editHandle } from "./Store/InputSlice";

const Item = styled.div`
  background-color: inherit;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid yellowgreen;
  transition: all 0.5s ease;
  &:hover {
    border: 1px solid magenta;
    box-shadow: -5px -5px 20px 0px #d4c5c5, 5px 5px 20px 0px #d4c5c5;
  }
`;
const About = styled.div``;
const Span = styled.span`
  &:hover {
    color: grey;
  }
`;
const Title = styled.h3`
  margin: 0;
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: aqua;
  text-decoration: ${(props) => props.td};
  text-transform: capitalize;
`;
const Desc = styled.p`
  margin: 0;
  margin-top: 5px;
  font-size: 20px;
  color: azure;
  letter-spacing: 1.5px;
  text-transform: capitalize;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const Button = styled.button`
  background-color: inherit;
  letter-spacing: 2px;

  padding: 10px 15px;
  margin: 5px;
  font-size: ${(props) => props.fs};
  color: aliceblue;

  border-radius: 10px;
  border: none;
  outline: none;
  transition: all 0.5s ease;
  &:hover {
    color: ${(props) => props.fc};
    transform: scale(1.5);
    text-shadow: ${(props) => props.ts};
    cursor: pointer;
  }
`;

export const LoopedList = (props) => {
  const { id, title, desc, liveTime } = props.I;

  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const CheckHandle = () => {
    setCheck(!check);
  };

  return (
    <>
      <Item>
        <About>
          <Span>{liveTime}</Span>
          <Title td={check ? "line-through" : "none"}>{title}</Title>
          <Desc>{desc}</Desc>
        </About>
        <BtnContainer jc={"space-between"}>
          <Button fs={"16px"} fc={"magenta"} onClick={() => CheckHandle()}>
            {check ? "UnDone" : "Done"}
          </Button>

          <Button
            fs={"16px"}
            fc={"red"}
            onClick={() => dispatch(removeHandle(id))}
          >
            Remove
          </Button>
          <Button
            fs={"16px"}
            fc={"magenta"}
            onClick={() => dispatch(editHandle(id))}
          >
            Edit
          </Button>
        </BtnContainer>
      </Item>
    </>
  );
};
