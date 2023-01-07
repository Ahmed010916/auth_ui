import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: '',
    loggedin: false,
    loading: false,
  },
  reducers: {
    isloggedin: (state)=>{
      state.loggedin = true
    }
  },
})

export const { isloggedin } = authSlice.actions

export default authSlice.reducer