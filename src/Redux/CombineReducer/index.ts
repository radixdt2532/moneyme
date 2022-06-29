import { combineReducers } from 'redux';
import { HomeReducer } from '../../screens/Home/Redux/reducers/HomeReducer';

const rootReducer = combineReducers({
  homeReducer: HomeReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
