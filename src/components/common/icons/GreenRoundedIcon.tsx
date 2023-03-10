import styled from "styled-components";

export const GreenRoundedIcon = styled.span`
width: 67px;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color:${props => props.theme.colors.primary};
svg {
  max-width: 100%;
}
`;
