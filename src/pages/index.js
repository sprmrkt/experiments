import React from "react";
import Seo from "../components/molecules/Seo";
import Container from "../components/atoms/Container";
import styled from "styled-components";
import {Link} from "gatsby";
import Image from "../components/atoms/Image";

const Holder = styled.div`
  margin-top: 10rem;

  li {
    position: relative;
    &:hover {
      .image-holder {
        opacity: 1;
      }
    }
    a {
      display: inline-block;
      width: 100%;
    }
    .image-holder {
      width: 50vw;
      position: absolute;
      top: 0;
      right: 20vw;
      opacity: 0;
      @media( ${props => props.theme.breakpoints.md} ) {
        width: 30vw;
      }
    }
  }
`;

const IndexPage = () => (
  <Container>
    <Holder>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul>
        <li>
          <Link to={'/logo-generator'}>Logo Generator</Link>
          <div className="image-holder">
            <Image imgName={'logo-gen-fi.png'}/>
          </div>
        </li>
        <li>
          <Link to={'/understanding-cannon'}>Understanding cannon</Link>
          <div className="image-holder">
            <Image imgName={'understanding-cannon.png'}/>
          </div>
        </li>
        <li>
          <Link to={'/notion-tests'}>Scrolling particle formations 2</Link>
          <div className="image-holder">
            <Image imgName={'data-vis-2.png'}/>
          </div>
        </li>
        <li>
          <Link to={'/data-vis'}>Scrolling particle formations 1</Link>
          <div className="image-holder">
            <Image imgName={'data-vis-1.png'}/>
          </div>
        </li>
        <li>
          <Link to={'/physics'}>Physics</Link>
          <div className="image-holder">
            <Image imgName={'physics.png'}/>
          </div>
        </li>
        <li>
          <Link to={'/blocks'}>Blocks</Link>
          <div className="image-holder">
            <Image imgName={'blocks.jpg'}/>
          </div>
        </li>
        <li>
          <Link to={'/cw-globe'}>CW Globe</Link>
          <div className="image-holder">
            <Image imgName={'cw-globe.jpg'}/>
          </div>
        </li>
        <li>
          <Link to={'/galaxy-generator'}>Galaxy Generator</Link>
          <div className="image-holder">
            <Image imgName={'galaxy.jpg'}/>
          </div>
        </li>
      </ul>
    </Holder>
  </Container>
);

export default IndexPage;
