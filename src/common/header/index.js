import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HearderWrapper, SearchInput, SearchItem } from './style';
import { actionCreators } from './store';

class Hearder extends Component {
	render() {
		const { focused, list, handlerInputFocus, handlerInputBlur } = this.props;
		return (
			<HearderWrapper>
				<SearchInput className={focused ? 'focus' : 'blur'} onFocus={handlerInputFocus} onBlur={handlerInputBlur} />
				{list.map(item => {
					return <SearchItem key={item}>{item}</SearchItem>;
				})}
			</HearderWrapper>
		);
	}
}

const mapStateToProps = state => {
	// 把store里的state映射到props里
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list'])
	};
};

const mapDispatchToProps = dispatch => {
	// 派发action
	return {
		handlerInputFocus() {
			dispatch(actionCreators.getList());
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
