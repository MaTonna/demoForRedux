import { constants } from '../store';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});

export const getList = () => {
	return dispatch => {
		// 加了thunk后可以返回一个函数
		axios
			.get('/api/searchList.json')
			.then(res => {
				const data = res.data;
				dispatch(changeList(data.data));
			})
			.catch(err => {
				console.log(err);
			});
	};
};

// 真正派发到reducer的内容
const changeList = data => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data)
});
