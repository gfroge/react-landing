import styled from "styled-components";

const SocialLink = styled.a.attrs(() => {
  return { href: "404.html", target: "_blank" };
})`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    max-width: 100%;
    path {
      transition: all 0.3s ease 0s;
    }
  }
  &:hover svg {
    path {
      fill: ${(props) => props.theme.colors.accent};
    }
  }
`;
export default SocialLink;
