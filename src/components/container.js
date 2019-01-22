import styled from "styled-components"
import * as variable from './variables.js';
const Container = styled.div`
  max-width: ${variable.desktopWidth};
  overflow:hidden;
  display:block;
  padding:0px 20px;

  @media (max-width: ${variable.tabletWidth}) {
    max-width: ${variable.tabletWidth};
  }
  @media (max-width: ${variable.mobileWidth}) {
    max-width: ${variable.mobileWidth};
  }
`;

export default Container