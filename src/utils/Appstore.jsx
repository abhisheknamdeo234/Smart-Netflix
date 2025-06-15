import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import movieReducer from "./MovieSlice"
import gptReducer from "./GptSlice"
import configReducer from "./ConfigSlice"

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movies:movieReducer,
            gpt:gptReducer,
            config:configReducer,
        }
    }
)

export default appStore;