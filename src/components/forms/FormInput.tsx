import styled from "styled-components";

type Props = {
  type: "email" | "text";
  placeholder?: string;
};

const FormInput = styled.input.attrs((props: Props) => {
  return {
    type: props.type,
  };
})`
  width: 100%;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  color: ${(props) => props.theme.secondary};
  font-size: 18px;
  line-height: 156%;
  &::placeholder {
    transition: color 0.3s ease;
    font-size: 18px;
    line-height: 156%;
    color: ${(props) => props.theme.placeholder};
  }
`;
export default FormInput;
