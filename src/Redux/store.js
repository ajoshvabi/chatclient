import { configureStore } from '@reduxjs/toolkit'
import themeReducer  from './theme/Mystate'
// import authReducer  from './auth/authtoken'
import chatReducer from './NewChat/Newchat'

export const store = configureStore({
  reducer: {
    settheme: themeReducer,
    newchat: chatReducer
  },
})