import styled from "styled-components";

type Props = {
  submit?: boolean;
  width?: string;
};

export const GreenButton = styled.button.attrs((props: Props) => {
  return {
    type: props.submit ? "submit" : ""
  };
})`
font-size: 18px;
color: #fff;
line-height: 156%;
text-align: center;
padding: 10px 30px;
width: ${(props:Props) => props.width || 'auto'};
background-color: ${props => props.theme.colors.primary};
border-radius: 5px;
transition: all 0.3s ease 0s;
&:hover{
  background-color: ${props => props.theme.colors.primaryHover};
}
`;
