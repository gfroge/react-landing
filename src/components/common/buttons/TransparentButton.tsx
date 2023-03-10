import styled, { ThemedStyledProps } from "styled-components";

interface IProps extends ThemedStyledProps<any, any> {
  hoverColor: "primary" | "accent";
}

const TransparentButton = styled.button`
  font-size: 18px;
  color: #fff;
  line-height: 156%;
  text-align: center;
  padding: 10px 30px 10px 40px;
  background-color: transparent;
  border-radius: 5px;
  transition: all 0.3s ease 0s;
  border: 1px solid #fff;
  &:hover {
    background-color: #fff;
    color: ${(props: IProps) => {
      if (props.hoverColor === "primary") return props.theme.colors.primary;
      else return props.theme.colors.accent;
    }};
  }
`;
export default TransparentButton