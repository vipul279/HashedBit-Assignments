import React from 'react'

export default function Header() {

  const headerstyling={
      color:'white',
      height:'70px',
      width:'100%',
      lineHeight:'64px',
      fontSize:'41px',
      fontWeight:'500',
      backgroundColor: '#f25757',
      fontFamily:'Cambria'
    
  }
  return (
    <>
      <header style={headerstyling}>
        Todo - List
      </header>
    </>
  );
}

    