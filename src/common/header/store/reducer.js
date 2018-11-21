import { constants } from '../store';
import { fromJS } from 'immutable';

// 转化为immutable类型数据
const defaultState = fromJS({
	focused: false
});
export default (state = defaultState, action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		// 生成新对象，不对传入的state进行修改
		return state.set('focused',true)
	}
	if (action.type === constants.SEARCH_BLUR) {
		return state.set('focused',false)
	}
	return state;
};
