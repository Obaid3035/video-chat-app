import {configureStore} from '@reduxjs/toolkit';
import roomReducer from './slices/room';

export const store = configureStore({
    reducer: {
        room: roomReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
