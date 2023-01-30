import { configureStore } from '@reduxjs/toolkit'
import UserDetailsSlice from './Redux/UserDetailsSlice'
export const store = configureStore({
  reducer: {
    UserDetail:UserDetailsSlice
  },
})

