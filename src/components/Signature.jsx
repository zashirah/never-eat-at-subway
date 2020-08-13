import React from 'react'


// font-family: 'Allura', cursive;
// font-family: 'Amatic SC', cursive;
// font-family: 'Calligraffitti', cursive;
// font-family: 'Damion', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Homemade Apple', cursive;
// font-family: 'Mr Dafoe', cursive;
// font-family: 'Mrs Saint Delafield', cursive;
// font-family: 'Orbitron', sans-serif;
// font-family: 'Satisfy', cursive;
// font-family: 'Tangerine', cursive;

const Signature = ({ id, name, font }) => {
  return (
    <div>
      <h1 style={{
        fontFamily: `${font}`
      }}>{name}</h1>
    </div>
  )
}

export default Signature
