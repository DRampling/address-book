import { call, takeEvery, all, fork, put } from 'redux-saga/effects'

import { Notification } from '../../models/Notification'
import { callAPI } from '../../services/api.service'
import { loadContactsSuccess, loadContactsFail } from '../actions/contact.actions'
import { ContactActionTypes } from '../types/contact.types'

const API_ENDPOINT = process.env.RANDOM_CONTACTS_API || 'http://localhost:3000/api/v1.0'

function* loadContacts() {
  try {
    const res = yield call(callAPI, 'get', API_ENDPOINT, '/contacts')
    if (res.ok === false) {
      const notification: Notification = { open: true, action: 'planned error', message: 'Internal server error' }
      yield put(loadContactsFail(notification))
    } else {
      yield put(loadContactsSuccess(res))
    }
  } catch (error) {
    if (error instanceof Error && error.stack) {
      const notification: Notification = { open: true, action: 'stack error', message: error.stack }
      yield put(loadContactsFail(notification))
    } else {
      const notification: Notification = { open: true, action: 'unknown error', message: 'An unknown error occurred' }
      yield put(loadContactsFail(notification))
    }
  }
}

function* watchLoadContacts() {
  yield takeEvery(ContactActionTypes.LOAD_CONTACTS, loadContacts)
}

function* contactEffects() {
  yield all([fork(watchLoadContacts)])
}

export default contactEffects
