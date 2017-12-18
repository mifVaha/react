import {GET_ITEMS_SUCCEEDED, GET_ROOTITEMS_SUCCEEDED, GET_ROOTITEMS, GET_ITEMS} from '../constants/actionTypes.constant';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import Api from '../api/Api';

/*
  create chanel for get data
 */
function * fetchCategories() {
    try {
        const rootitems = yield call(Api.getCategories);
        yield put({type: GET_ROOTITEMS_SUCCEEDED, rootitems: rootitems});
    } catch (e) {

    }
}

function * fetchSubCategories(action: any) {
    try {
        const items = yield call(Api.getSubCategories, action.node.id);
        yield put({type: GET_ITEMS_SUCCEEDED, items: items, node: action.node});
    } catch (e) {

    }
}
function * fetchTypes(action: any) {
    try {
        const items = yield call(Api.getSubCategories, action.node.id);
        yield put({type: GET_ITEMS_SUCCEEDED, items: items, node: action.node});
    } catch (e) {

    }
}

function * bbinfoSaga() {
    yield takeEvery(GET_ROOTITEMS, fetchCategories);
    yield takeEvery(GET_ITEMS, fetchSubCategories);
}

export default bbinfoSaga;
