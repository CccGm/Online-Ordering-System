import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginSlice = createSlice({
  name: 'Login',
  initialState: {
    isLogin: false,
    loading: false,
  },
  reducers: {
    setLogin: async (state, action) => {
      try {
        await AsyncStorage.setItem('isLogin', JSON.stringify(true));
        state.isLogin = true;
      } catch (error) {
        console.log(error);
      }
    },
    setLogout: (state, action) => async dispatch => {
      try {
        await AsyncStorage.removeItem('isLogin', () => {
          state.isLogin = false;
          state.loading = false;
          dispatch(restoreStatus());
        });
      } catch (error) {
        console.log(error);
      }
    },
    restoreStatus: async (state, action) => {
      try {
        state.isLogin = true;
        state.loading = false;
        await AsyncStorage.getItem('isLogin')
          .then(val => {
            if (val === 'true') {
              state.isLogin = true;
              state.loading = false;
            } else {
              state.isLogin = false;
              state.loading = false;
            }
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log('status restoration failed: ', error);
      }
    },
  },
});

export const {addAddress, setLogout, restoreStatus} = loginSlice.actions;

export default loginSlice.reducer;
