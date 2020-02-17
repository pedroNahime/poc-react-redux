import {fork } from 'redux-saga/effects'
import user from './user'

export default function*() {
    yield fork(user)
}