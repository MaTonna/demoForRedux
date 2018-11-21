import React from 'react';
import { connect } from 'react-redux';
import { HearderWrapper, SearchInput } from './style';
import { actionCreators } from './store';
const Hearder = props => {
	return (
		<HearderWrapper>
			<SearchInput className={props.focused ? 'focus' : 'blur'} onFocus={props.handlerInputFocus} onBlur={props.handlerInputBlur} />
		</HearderWrapper>
	);
};

const mapStateToProps = state => {
	// 把store里的state映射到props里
	return {
		focused: state.getIn(['header','focused'])
	};
};

const mapDispatchToProps = dispatch => {
	// 派发action
	return {
		handlerInputFocus() {
			dispatch(actionCreators.searchFocus());
		},
		handlerInputBlur() {
			dispatch(actionCreators.searchBlur());
		}
	};
};

// 容器组件-负责处理数据逻辑
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Hearder);
