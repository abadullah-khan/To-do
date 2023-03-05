import React from "react";
import styled from "styled-components";
import { InputTodo } from "./InputTodo";
import store from "./Store/Store";
import { Provider } from "react-redux";

const Container = styled.div`
  height: 100%;
  background: linear-gradient(to left, #ff9900, blue);
`;

export const TodoRedux = () => {
  return (
    <>
      <Container>
        <Provider store={store}>
          <InputTodo />
        </Provider>
      </Container>
    </>
  );
};
