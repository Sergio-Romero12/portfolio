import Link from 'next/link';
import React from 'react';
import { HiQrcode } from 'react-icons/hi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href={"/"}>
        <a style = {{display: "flex", alignItems: "center", color: "white", marginBottom: '25px'}}>
          <HiQrcode size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#project">
            <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Technologie</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <Div3>
        <iframe src="images/robot_resize.gif" alt ="https://gifer.com - via GIFER" style={{border: '0'}}>
        </iframe>
      </Div3>
    </Div2>
  </Container>
);

export default Header;
