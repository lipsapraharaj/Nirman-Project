import React from 'react'
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div style={{color:'white',height:'100vh',width:'100%',display:'flex',justifyContent:'center', alignItems: 'center',textAlign:'center' }}>
        <div>
            <h1 style={{color:'white',position:'absolute',fontSize:'150px',top:'229px',left:'532px',color:'#ffffff21',letterSpacing:'20px',zIndex:'-1'}}>404</h1>
            <h2>WE ARE SORRY,PAGE NOT FOUND</h2>
            <h4 style={{fontSize:'13px',marginBottom:'25px',color:'#ffffffb3'}}>THE PAGE YOU ARE LOOKING FOR IS NOT A PART OF THIS WEBSITE,OR IS TEMPORARILY UNAVAILABLE</h4>
            <NavLink style={{textDecoration:'none',color:'white',fontWeight:'500',background:'linear-gradient(90deg, #39B5E0, #ff41ea, #A31ACB, #ff41ea,#00c4ff)',padding:'7px 15px 10px 15px'}} to="/">Go To Home</NavLink>
        </div>
    </div>
  )
}

export default Error