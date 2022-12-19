import React, { useContext } from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        <li>
          <a href='http://facebook.com' rel='noreferrer' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://twitter.com' rel='noreferrer' target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='http://pinterest.com' rel='noreferrer' target='_blank'>
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href='http://instagram.com' rel='noreferrer' target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='http://youtube.com' rel='noreferrer' target='_blank'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
