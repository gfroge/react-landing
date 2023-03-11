import styled from "styled-components";

type Props = {
  submit?: boolean;
  fullscreen?: boolean;
};

const GreenButton = styled.button.attrs((props: Props) => {
  return {
    type: props.submit ? "submit" : "",
  };
})`
  font-size: 18px;
  color: #fff;
  line-height: ${(props: Props) => (props.fullscreen ? "25px" : " 156%")};
  text-align: center;
  padding: ${(props: Props) =>
    props.fullscreen ? "7px 30px 10px 30px" : "10px 30px"};
  width: ${(props: Props) => (props.fullscreen ? "100%" : "auto")};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;
export default GreenButton;
