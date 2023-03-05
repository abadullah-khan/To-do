import { createSlice, nanoid } from "@reduxjs/toolkit";

const InputSlice = createSlice({
  name: "input",
  initialState: {
    title: "",
    desc: "",
    list: [],
    addListBtn: true,
    listId: null,
    readyToAdd: false,
    check: false,
  },
  reducers: {
    changeHandle(state, action) {
      state[action.payload.key] = action.payload.value;
      if (state.title || state.desc !== "") {
        state.readyToAdd = true;
      } else {
        state.readyToAdd = false;
      }
    },
    addingList(state, action) {
      const { title, desc, list, addListBtn, listId } = state;
      if (addListBtn === false) {
        list.map((i) => {
          if (i.id === listId) {
            i.title = title;
            i.desc = desc;
            state.title = "";
            state.desc = "";
            state.addListBtn = true;
            state.readyToAdd = false;
          }
          return i;
        });
      } else {
        const { liveTime } = action.payload;
        list.push({ id: nanoid(), title, desc, liveTime });
        state.title = "";
        state.desc = "";
        state.readyToAdd = false;
      }
    },
    removeHandle(state, action) {
      state.list = state.list.filter((i) => {
        return i.id !== action.payload;
      });
    },
    deleteHandle(state) {
      state.list = [];
    },
    editHandle(state, action) {
      state.list.map((i) => {
        if (i.id === action.payload) {
          state.addListBtn = false;
          state.title = i.title;
          state.desc = i.desc;
          state.listId = action.payload;
        }
        return i;
      });
      console.log(state.addListBtn);
    },

    doneHandle(state) {
      const { check } = state;
      state.check = !check;
    },
  },
});
export const InputState = (state) => state.input;
export const {
  addingList,
  changeHandle,
  removeHandle,
  deleteHandle,
  editHandle,
  doneHandle,
} = InputSlice.actions;
export default InputSlice.reducer;
