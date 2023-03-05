import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addingList, InputState, changeHandle } from "./Store/InputSlice";
import { List } from "./List";

const Container = styled.div`
  background-color: rgba(150, 65, 42, 0.5);
  /* background-color: hsl(
    199.42857142857144,
    47.08520179372198%,
    56.27450980392157%
  ); */
  /* background-color: hsla(
    199.42857142857144,
    47.08520179372198%,
    56.27450980392157%,
    0.5
  ); */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 150px 0 100px 0;
  align-items: center;

  min-height: 100vh;
  box-sizing: border-box;
`;
const InputTitle = styled.input`
  text-align: center;
  padding: 5px;
  font-size: 25px;
  font-family: "cursive";
  border-radius: 20px;
  border: none;
  outline: 0;
  text-transform: capitalize;
`;
const InputDetail = styled.textarea`
  height: 150px;
  padding: 10px;
  margin: 15px 0;
  font-size: 25px;
  font-family: "cursive";
  border-radius: 20px;
  border: none;
  outline: 0;
  text-transform: capitalize;
`;

const Button = styled.button`
  font-size: 25px;
  letter-spacing: 2px;

  padding: 10px 30px;
  border-radius: 20px;
  border: 2px solid groove;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const InputTodo = () => {
  const { title, desc, addListBtn, readyToAdd } = useSelector(InputState);
  const dispatch = useDispatch();
  const [liveTime, setLiveTime] = useState(new Date().toLocaleString());
  setInterval(() => {
    setLiveTime(new Date().toLocaleString());
  }, 10);
  return (
    <>
      <Container>
        {liveTime}
        <InputTitle
          type="text"
          placeholder="Write title..."
          name="title"
          value={title}
          onChange={(e) =>
            dispatch(
              changeHandle({ key: e.target.name, value: e.target.value })
            )
          }
        />

        <>
          <InputDetail
            placeholder="Write details about that..."
            name="desc"
            value={desc}
            onChange={(e) =>
              dispatch(
                changeHandle({ key: e.target.name, value: e.target.value })
              )
            }
          />
          {readyToAdd ? (
            <>
              {addListBtn ? (
                <Button
                  onClick={() => dispatch(addingList({ liveTime: liveTime }))}
                >
                  Add
                </Button>
              ) : (
                <Button onClick={() => dispatch(addingList())}>Save</Button>
              )}
            </>
          ) : null}
        </>
        <List />
      </Container>
    </>
  );
};
