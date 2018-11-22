import { constants } from '../store';
import { fromJS } from 'immutable';

// 转化为immutable类型数据
const defaultState = fromJS({
	focused: false,
	list: []
});
export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			// 生成新对象，不对传入的state进行修改
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.set('list', action.data);
		default:
			return state;
	}
};
