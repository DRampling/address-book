import { call, takeEvery, all, fork } from 'redux-saga/effects'
import { ContactActionTypes } from '../types/contact.types'

const API_ENDPOINT = process.env.RANDOM_CONTACTS_API || 'http://localhost:3000'

function* loadContacts() {
  try {
    console.log('test')
    // const res = yield call(callApi, 'get', API_ENDPOINT, '/contacts')
    // if (res.error) {
    //   yield put(fetchError(res.error))
    // } else {
    //   yield put(fetchSuccess(res))
    // }
  } catch (err) {
    // if (err instanceof Error && err.stack) {
    //   yield put(fetchError(err.stack))
    // } else {
    //   yield put(fetchError('An unknown error occurred.'))
    // }
  }
}

function* watchLoadContacts() {
  yield takeEvery(ContactActionTypes.LOAD_CONTACTS, loadContacts)
}

function* contactEffects() {
  yield all([fork(watchLoadContacts)])
}

export default contactEffects
