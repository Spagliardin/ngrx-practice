import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import { incrementAction, reducer } from "./app-1";


const store: Store = configureStore({reducer})

store.subscribe( () => {
    console.log('Subs:', store.getState() );
})

store.dispatch( incrementAction )
store.dispatch( incrementAction )
store.dispatch( incrementAction )
store.dispatch( incrementAction )
store.dispatch( incrementAction )
