import {
  combineReducers,
  AnyAction,
  CombinedState,
  EnhancedStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { configReducer, ConfigState } from './config';
import { themeReducer, ThemeState } from './theme';
import { dialogReducer, DialogState } from './dialog';
import { userReducer, UserState } from './user';

export type StoreState = {
  theme: ThemeState;
  config: ConfigState;
  dialog: DialogState;
  user: UserState;
};

export const rootReducer = (
  state: StoreState | undefined,
  action: AnyAction,
) => {
  switch (action.type) {
    case HYDRATE:
      if (state?.config.hydratedOnServer) {
        return state;
      }

      return {
        ...state,
        ...action.payload,
        config: {
          hydratedOnServer: true,
        },
      };

    default:
      const combinedReducers = combineReducers<StoreState>({
        theme: themeReducer,
        config: configReducer,
        dialog: dialogReducer,
        user: userReducer,
      });

      return combinedReducers(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export type Store = EnhancedStore<CombinedState<StoreState>, AnyAction>;
