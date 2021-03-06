import css from 'styled-jsx/css';

export default css`
	#container {
		z-index: 1;
		position: absolute;
		overflow: hidden;
		width: 100%;
	}

	.title-parent {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;

		text-align: center;
		font-weight: 500;
		font-family: 'Spectral';
		height: inherit;
		width: 100%;
	}

	.title-parent > span {
		font-size: inherit;
		font-weight: inherit;
	}
`;
