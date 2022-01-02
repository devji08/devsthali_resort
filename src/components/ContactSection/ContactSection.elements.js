import styled from 'styled-components';

export const ContactSec = styled.div`
background: #fff;
padding: 80px 0;
`;

export const ContactRow = styled.div`
display: flex;
align-items: center;
@media screen and (max-width: 760px) {
    flex-direction: column;
}
`;

export const ContactCol = styled.div`
flex: 1;
`;

export const Title = styled.h1`
color: #101522;
padding-bottom: 10px;
border-bottom: 4px solid #444;
width: 66%
`;

export const Statement = styled.p`
padding: 20px 0;
`;

export const ContactWrapper = styled.div`
`;

export const Resort = styled.p`
font-size: 1.5rem;
`;

export const Address = styled.p`
padding: 5px 0;

`;

export const Direction = styled.a`
text-decoration: none;
font-size: 1.1rem;
&:hover {
    text-decoration: underline;
}
`;

export const Phone = styled.p`

`;

export const Email = styled.p`
padding: 5px 0;
`;

export const Line = styled.div`
border-bottom: 0.01em solid #bbb; 
margin : 50px 0;
`;

export const ImgWrapper = styled.div`
max-width: 555px;
// display: flex;
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`;

export const FormRow = styled.div`
flex: 1;
// align-self: flex-start;
padding-top: 40px;
`;

export const FormCol = styled.div`
padding: 10px 0;
`;

export const Label = styled.p`
padding: 5px 0;
color: #777;
`;

export const TextField = styled.input`
width: 100%;
height: 40px;
border: 1px solid #ddd;
border-radius: 5px;
`;

export const TextArea = styled.textarea`
width: 100%;
height: 160px;
border: 1px solid #ddd;
border-radius: 5px;
`;

export const Term = styled.p`
color: #999;
font-size: 0.8rem;
padding: 10px 0;
`;
