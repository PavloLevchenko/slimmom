import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import i18n from '../../translations/i18n';
import { authReducer } from '../services/authSlice';
import { productsReducer } from '../services/productSlice';
import { diaryReducer } from '../services/diaryProductSlice';
import { themeReducer } from '../services/themeSlice';
import { axiosInterceptor } from '../services/axiosInterceptor';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'userParams'],
};
const persistThemeConfig = {
  key: 'theme',
  storage,
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    products: productsReducer,
    diary: diaryReducer,
    theme: persistReducer(persistThemeConfig, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: { i18n },
      },
    }),
});

axiosInterceptor(store);

export const persistor = persistStore(store);

setupListeners(store.dispatch);
