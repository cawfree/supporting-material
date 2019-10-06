import React from 'react'
import Background from './../static/images/mapsy-flaticon-background.png';
import Octo from './../static/images/octo.png';
import LogoMini from './../static/images/logo_mini.svg';
import LogoReact from './../static/images/logo-react.svg';
import FlatIcon from './../static/images/flaticon.png';

export default ({ children }) => (
  <>
    <img
      style={{
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vw',
      }}
      src={Background}
    />
    <img
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: 0.05,
      }}
      src={Octo}
    />
    <div
      style={{
        position: 'absolute',
        bottom: '0vw',
        right: '1vw',
      }}
    >
      <img
        style={{
          width: '5vw',
          height: '5vw',
          margin: '1vw',
        }}
        src={LogoReact}
      />
      <img
        style={{
          width: '5.5vw',
          height: '5.5vw',
          margin: '0.7vw',
        }}
        src={LogoMini}
      />
      <img
        style={{
          width: '11vw',
          margin: '-1.8vw',
        }}
        src={FlatIcon}
      />
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vw',
        padding: '2vw',
      }}
    > 
      <div
        style={{
          flex: 1,
        }}
      >
        {children}
      </div> 
    </div>
  </>
);
