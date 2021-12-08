import styled from 'styled-components';

export const CardList = styled.section`
    width: 90%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 20px;
`;