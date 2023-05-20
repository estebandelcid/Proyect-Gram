import React from 'react';
import { Nav, Link } from './styles';
import {
  MdHomeFilled,
  MdPersonOutline,
  MdFavoriteBorder
} from 'react-icons/md';

const Size = '32px';

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>
        <MdHomeFilled size={Size} />
      </Link>
      <Link to='/favs'>
        <MdFavoriteBorder size={Size} />
      </Link>
      <Link to='/user'>
        <MdPersonOutline size={Size} />
      </Link>
    </Nav>
  );
};
