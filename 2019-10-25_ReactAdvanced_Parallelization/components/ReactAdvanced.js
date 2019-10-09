import React from 'react';

export default ({ children, ...extraProps }) => (
  <>
    <div
      style={{
        position: 'absolute',
        marginLeft: '-50%',
        marginTop: '-50vh',
        width: '100%',
        height: '100%',
        backgroundImage: `url(../static/images/mapsy-flaticon-background.png)`,
      }}
    >
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
            marginRight: -15,
            marginBottom: 5,
          }}
          src="../static/images/logo_mini.svg"
        />
        <img
          style={{
            marginRight: -20,
            marginBottom: -20,
            width: 130,
            height: 130,
          }}
          src="../static/images/flaticon.png"
        />
      </div>
    </div>
  </>
);
