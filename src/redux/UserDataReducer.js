import {createSlice} from '@reduxjs/toolkit';

export const UserDataSlice = createSlice({
  name: 'UserData',
  initialState: {
    User_Name: '',
    User_Mo_No: '',
    User_Email: '',
    User_Password: '',
  },
  reducers: {
    setUserData: (state, action) => {},
  },
});

export const {setUserData} = UserDataSlice.actions;

export default UserDataSlice.reducer;
