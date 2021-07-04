import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30 px;
    padding-left: 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
// background: ${({primary}) => (primary ? '#4B59f7' : '#0467fb')};
background: linear-gradient(to right, ${({primary}) => (primary ? '#4B59f7' : '#0467fb')} 50%, ${({primary}) => (primary ? '#0467fb' : '#4B59f7')} 50%);
background-size: 200% 100%;
background-position: right bottom;
transition: all 0.3s ease-out;
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
&:hover {
    background-position: left bottom;
    // transition: all 0.3s ease-out;
    // background: #fff;
    // background: ${({primary}) => (primary ? '#0467fb' : '#4b59f7')};
}

@media screen and (max-width: 960px) {
    width: 100%;
}
`;

export default GlobalStyle;