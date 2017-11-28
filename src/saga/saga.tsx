import {GET_CATEGORIES, GET_CATEGORIES_SUCCEEDED, GET_SUBCATEGORIES, GET_SUBCATEGORIES_SUCCEEDED} from '../constants/actionTypes.constant';
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import Api from '../api/Api';

/*
  create chanel for get data
 */
function * fetchCategories() {
    try {
        const categories = yield call(Api.getCategories);
        yield put({type: GET_CATEGORIES_SUCCEEDED, categories: categories});
    } catch (e) {

    }
}
function * fetchSubCategories(action: any) {
    try {
        const subcategories = yield call(Api.getSubCategories, action.id);
        yield put({type: GET_SUBCATEGORIES_SUCCEEDED, subcategories: subcategories});
    } catch (e) {

    }
}

function * bbinfoSaga() {
    yield takeEvery(GET_CATEGORIES, fetchCategories);
    yield takeEvery(GET_SUBCATEGORIES, fetchSubCategories);
}

export default bbinfoSaga;
