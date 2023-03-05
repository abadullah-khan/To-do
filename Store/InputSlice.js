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
    // listEmpty: true,
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
            // i.liveTime = action.payload.liveTime;
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
      //adding List
      // return {
      //   ...state,
      //   list: list.push({ id: nanoid(), title, desc }),
      //   title: "",
      //   desc: "",
      // };
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
      // state.addListBtn = false;
      // const li = state.list.find((i) => {
      //   return i.id === action.payload;
      // });
      // state.title = li.title;
      // state.desc = li.desc;
      // state.listId = action.payload;

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

    doneHandle(state, action) {
      const { check } = state;
      state.check = !check;
      // state.list.map((i) => {
      //   if (i.id === action.payload.id) {
      //     let { title } = i;
      //     console.log("hh");
      //     title.Style.color = "yellow";
      //   }
      //   return i;
      // });
      // const { txtStyle } = state;
      // state.txtStyle = !txtStyle;
      // console.log(txtStyle);
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
