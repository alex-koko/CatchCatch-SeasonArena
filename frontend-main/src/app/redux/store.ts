//store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import authReducer from "./slice/authSlice";
import userReducer from "./slice/userSlice";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["auth", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer, // 인증정보
  user: userReducer, // 사용자정보
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: [
          "user.collections.createdAt",
          "user.collections.updatedAt",
        ],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
