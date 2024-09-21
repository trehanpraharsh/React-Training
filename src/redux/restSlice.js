import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    usersAdded(state, action) {
      state.entities.push(action.payload);
    },
    userDeleted(state, action) {
      const id = action.payload;
      const userAvailable = state.entities.find((user) => user.id === id);
      if (userAvailable) {
        state.entities = state.entities.filter((user) => user.id != id);
      }
    },
    usersEdited(state, action) {
      const { id, name, email } = action.payload;
      console.log(name);
      const userAvailable = state.entities.find((user) => user.id === id);
      if (userAvailable) {
        userAvailable.name = name;
        userAvailable.email = email;
        // localStorage.setItem("usersarr", state.entities);
      }
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },

    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
      // localStorage.setItem("usersarr", [...action.payload]);
      // state.entities = JSON.parse(localStorage.getItem("usersarr"));
    },
  },
});

export const { usersAdded, userDeleted, usersEdited } = usersSlice.actions;
export default usersSlice.reducer;
