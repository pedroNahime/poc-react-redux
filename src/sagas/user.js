import {call, put, takeLatest} from 'redux-saga/effects'
import api from '../services/api'
import {Creators, Types} from "../actions/user";

export function* getUser() {
    try {
        const {data} = yield call(api.get);
        yield put(Creators.successUser(data.results))
    }catch (e) {
        yield put(Creators.errorUser())
    }
}

export default function*() {
    yield takeLatest(Types.GET_USER, getUser)
}