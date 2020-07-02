import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  console.tron.log('conteudo do payload', payload);

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));
  history.push('/packagesmanagment');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
