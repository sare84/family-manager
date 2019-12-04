import { User } from '../../models/user.class';
import { AuthActionTypes, LogInSuccess, LogInFailure, GetProfileSuccess, GetProfileFailure, LogOut } from '../actions/auth.action';

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function authReducer(state = initialState, action: AuthActionTypes): State {
  switch (action.type) {
    case LogInSuccess.type: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...state.user,
          token: action.payload.token,
        },
        errorMessage: null
      };
    }
    case LogInFailure.type: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case GetProfileSuccess.type: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    }
    case GetProfileFailure.type: {
      return {
        ...state,
        errorMessage: 'Profile could not be loaded.'
      };
    }
    case LogOut.type: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

