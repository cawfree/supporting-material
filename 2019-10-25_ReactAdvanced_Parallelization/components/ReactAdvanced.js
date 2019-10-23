import React from 'react';

export default ({ children, ...extraProps }) => (
  <>
    <div
      style={{
        position: 'absolute',
        marginLeft: '-50vw',
        marginTop: '-50vh',
        width: '100vw',
        height: '100vh',
      }}
    >
      <img
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          right: 0,
        }}
        src="../static/images/mapsy-flaticon-background.png"
      />
      <img
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          right: 0,
          opacity: 0.02,
        }}
        src="../static/images/octo.png"
      />
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
        }}
      >
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      >
        <img
          style={{
            width: 65,
            height: 65,
            marginRight: 20,
            marginBottom: 10,
          }}
          src="../static/images/logo-react.svg"
        />
        <img
          style={{
            width: 75,
            height: 75,
            marginRight: 15,
            marginBottom: 5,
          }}
          src="../static/images/logo_mini.svg"
        />
        <img
          style={{
            marginBottom: 15,
            marginRight: 10,
            width: 120,
            height: 60,
          }}
          src="../static/images/mapsy.png"
        />
      </div> 
    </div>
  </>
);
