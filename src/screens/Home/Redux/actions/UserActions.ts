import axios from 'axios';
import { Dispatch } from 'react';
import { GetApi } from '../../../../Network/ApiCall'


export interface DataAction {
  readonly type: 'GET_DATA';
  payload: any;
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any;
}

export type UserAction = DataAction | ErrorAction;

export const onData = (srchTxt: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await GetApi(`search?term=${srchTxt}`);
      if (!response) {
        dispatch({
          type: 'ON_ERROR',
          payload: 'Issue with API',
        });
      } else {
        dispatch({
          type: 'GET_DATA',
          payload: JSON.parse(response).results,
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
