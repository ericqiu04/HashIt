import {createSlice} from '@reduxjs/toolkit'

type authState = {
    user: any[],
    isLoggedIn: boolean,
    token: string
}
const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, isLoggedIn: false, token: null},
    reducers: {
        login: (state, action) => {
            const {user, isLoggedIn, token} = action.payload 
            state.user = user
            state.isLoggedIn = true
            state.token = token
        },
        logout: (state, action) => {
            state.user = null
            state.isLoggedIn = false
            state.token = null
        }
      }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer
