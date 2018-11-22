import styled from 'styled-components';

export const HearderWrapper = styled.div`
	height: 56px;
`;

export const SearchInput = styled.input.attrs({
	placeholder: '搜索'
})`
	margin: 30px;
	padding-left: 10px;
	width: 200px;
	height: 30px;
	border-radius: 20px;
	border: 1px solid #ccc;
	outline: 0;
	&.focus {
		width: 300px;
		transition: all 1s;
	}
	&.blur {
		width: 200px;
		transition: all 1s;
	}
`;

export const SearchItem = styled.span`
	margin-right: 10px;
`;
