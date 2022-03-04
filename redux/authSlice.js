import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginUser, createUser, getUser } from '../pages/api/auth'
const initState = {
    user: {
        username: '',
        password: '',
        role: {}
    },
    isError: false,
    isAuth: false,
    loading: false,
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function getUserFormToken(token){
    await sleep(300)
    const response = await getUser(token)
    if (response.success) {
        const { results } = response
        return results.user
    }
}

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (data, thunkAPI) => {
        try {
            const { username, password } = data
            const isSuccess = await loginUser(username, password)
            if (!isSuccess.status)
                throw 'Đăng nhập thất bại'
            else{
                const {accessToken} = isSuccess
                return await getUserFormToken(accessToken)
            }
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)


export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (data, thunkAPI) => {
        try {
            const { username, password } = data
            const response = await createUser(username,password)
            if(response.success){
                const {accessToken} = response
                return await getUserFormToken(accessToken)
            }
            else throw 'Đăng ký thất bại'

        }
        catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const loadUser = createAsyncThunk(
    'auth/loadUser',
    async (data, thunkAPI) => {
        try {
            const token = JSON.parse(localStorage.getItem('accessToken'))
            const response = await getUser(token)
            if (response.success) {
                const { results } = response
                return results.user
            }
            else {
                throw 'Vẫn chưa đăng nhập'
            }
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const auth = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
        setLogout: (state, action) => {
            localStorage.removeItem('accessToken')
            return initState
        },

    },
    extraReducers: {
        [signInUser.pending]: state => {
            state.loading = true
            state.isError = false
        },
        [signInUser.fulfilled]: (state, action) => {
            state.isAuth = true
            state.loading = false
            state.user = action.payload
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.isError = true
        },


        [loadUser.pending]: state => {
            state.loading = true
            state.isError = false
        },
        [loadUser.fulfilled]: (state, action) => {
            state.isAuth = true
            state.loading = false
            state.user = action.payload
        },
        [loadUser.rejected]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.isError = true
            localStorage.removeItem('accessToken')
        },


        [registerUser.pending]: state => {
            state.loading = true
            state.isError = false
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isAuth = true
            state.loading = false
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.isError = true
        },
    }
})




const { reducer, actions } = auth

export const { setLogout, loadLogin } = actions

export default reducer
