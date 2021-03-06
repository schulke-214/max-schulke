import css from 'styled-jsx/css';
import variables from '../../var';

export default css`
	.inner {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.inner-wrap {
		position: absolute;
		top: 0;
		left: 25%;
		width: 50%;
		height: 100%;
	}

	.top {
		flex: 1 1 0;
		align-items: flex-end;
	}

	.projectNum {
		height: 15px;
		margin-bottom: 5vh;
	}

	.lower {
		flex: 1 1 0;
		justify-content: space-between;
		align-items: flex-start;
	}

	.projectData {
		margin-top: 50px;
		text-align: right;
	}

	.projectYear {
		height: 15px;
		position: absolute;
		right: 75px;
	}

	.projectCategory {
		height: 15px;
	}

	#projectTitle {
		position: absolute;
		top: calc(50% - 25px);
		font-family: 'Spectral';
		font-weight: 600;
		font-size: 70px;
		white-space: nowrap;
		height: 50px;
		width: 100%;
		text-align: center;
		text-transform: lowercase;
		transition: all 0.5s ease-in-out;
		transition-property: font-size height top;
	}

	#home-date-topic {
		margin-top: 5vh;
		display: flex;
		flex-direction: column;
		text-align: right;
		width: min-content;
	}

	#home-date-topic > span:first-child {
		margin-bottom: 15px;
	}

	@media screen and (max-width: ${variables.breakpoints.phone}px) {
		.inner-wrap {
			position: absolute;

			display: flex;
			flex-direction: column;

			top: 0;
			left: 12.5%;
			width: 75%;
			height: 100%;
		}
	}
`;
