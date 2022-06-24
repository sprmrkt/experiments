import React from "react";
import Seo from "../components/molecules/Seo";
import Container from "../components/atoms/Container";
import styled from "styled-components";
import {Link} from "gatsby";

const Holder = styled.div`
  margin-top: 10rem;
`;

const IndexPage = () => (
  <Container>
    <Holder>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        <li><Link to={'/cw-globe'}>CW Globe</Link></li>
      </ul>
    </Holder>
  </Container>
);

export default IndexPage;
