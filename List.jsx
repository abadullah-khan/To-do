import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { LoopedList } from "./LoopedList";
import { InputState, deleteHandle } from "./Store/InputSlice";

const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

export const List = () => {
  const { list } = useSelector(InputState);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <ItemWrapper>
          {list.map((i) => {
            const { id } = i;
            return <LoopedList key={id} I={i} />;
          })}
        </ItemWrapper>
        {list.length > 0 ? (
          <BtnContainer jc={"centre"}>
            <Button
              fs={"25px"}
              ts={"5px 3px 2px white"}
              fc={"red"}
              onClick={() => dispatch(deleteHandle())}
            >
              Delete All
            </Button>
          </BtnContainer>
        ) : null}
      </Container>
    </>
  );
};
