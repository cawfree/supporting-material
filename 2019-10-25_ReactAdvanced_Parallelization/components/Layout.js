import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
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
    <div
      style={{
        position: 'absolute',
        bottom: '2vw',
        width: '100vw',
      }}
    >
      <sub><sup><sub><sup>{'Alex Thomas (@cawfree) <hello@cawfree.com>'}</sup></sub></sup></sub>
    </div>
  </div>
);
