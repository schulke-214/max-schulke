import css from 'styled-jsx/css';
import variables from '../var';

export default css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    html, body {
        background-color: ${ variables.colors.main };
    }
`