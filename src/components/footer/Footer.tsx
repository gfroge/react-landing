import styled from "styled-components";
import { SocialBadge } from "../common/links";

const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  text-align: center;
  padding: 20px 10px 16px 10px;
  > div {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const Copyright = styled.div`
  font-size: 18px;
  line-height: 156%;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <SocialBadge />
      <Copyright>Copyright © {(new Date()).getFullYear()} - FinanceLedger</Copyright>
    </FooterWrap>
  );
}
