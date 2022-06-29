import axios from 'axios';
import { Dispatch } from 'react';

export interface UserModel {

}

export interface DataAction {
  readonly type: 'GET_DATA';
  payload: UserModel;
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type UserAction = DataAction | ErrorAction;

export const onData = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await axios.post<UserModel>(`${''}`, {

      });

      if (!response) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Issue with API',
        });
      } else {
        dispatch({
          type: 'GET_DATA',
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_ERROR',
        payload: error,
      });
    }
  };
};
