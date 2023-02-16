import React from 'react';
import  {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

import './style.css';
import './style2.css';

import ved1 from '../images/DRONEVEDIO.mp4';
import img1 from '../images/black.jpeg';

function Register() {

    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:'',email:'',phone:'',password:'',Cpassword:'' })
    
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const postData=async (e)=>{
        e.preventDefault();
        const {name,email,phone,password,Cpassword}=user;
        const res = await fetch('/register',{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,email,phone,password,Cpassword
            })
        });
        const data = await res.json();
        // console.log(data.error);
        if(res.status === 422 || !data){
            window.alert(data.error);
            // console.log('invalid Registration');
        }
        else{
            window.alert('Registration sucessfully');
            // console.log('Registration sucessfully');
            // history.push("/login");
            navigate("/login");
        }
    }

    // =====================password see not see====================
    const iconclass1="fa fa-eye";
    const iconclass2="fa fa-eye-slash";
    const [pass,setPass]=useState('password');
    const [Cpass,setCPass]=useState('password');
    const [icon1,setIcon1]=useState(iconclass1);
    const [icon2,setIcon2]=useState(iconclass1);
    const changeIcon1=()=>{
        if(pass=='password')
        {
            setPass('text');
            setIcon1(iconclass2);
        }
        else{
            setPass('password');
            setIcon1(iconclass1);
        }
    }
    const changeIcon2=()=>{
        if(Cpass=='password')
        {
            setCPass('text');
            setIcon2(iconclass2);
        }
        else{
            setCPass('password');
            setIcon2(iconclass1);
        }
    }


  return (
    <div>
        <video id="background-video" autoplay='' loop muted poster={img1}>
            <source src={ved1} type="video/mp4" />
        </video>
        
        <section id="mainsecreg">
            <div>
                <div>
                    <h1 id="mainh1">REGISTER</h1>
                    <h2 id="mainh2reg">Welcome to MOSQ-Shield</h2>
                </div>
                <div id="mainformreg">
                    <form method='POST'>
                        <h3 className="formh3">Name</h3>
                        <input className="formin" type="text" name='name' value={user.name} onChange={handleInputs} placeholder="enter Name"/><br/>
                        <h3 className="formh3">Email</h3>
                        <input className="formin" type="text" name='email' value={user.email} onChange={handleInputs} placeholder="enter Email"/><br/>
                        <h3 className="formh3">MobileNo</h3>
                        <input className="formin" type="number" name='phone' value={user.phone} onChange={handleInputs} placeholder="enter MobileNo"/><br/>
                        <h3 className="formh3">Password</h3>
                        <div className='divPass'>
                        <input className="forminPass" type={pass} name='password' value={user.password} onChange={handleInputs} placeholder="enter Password"/>
                        <span className={icon1} onClick={changeIcon1} style={{cursor:'pointer',color:'white',padding:'0 10px'}}></span>
                        </div>
                        <h3 className="formh3">Repeat Password</h3>
                        <div className='divPass'>
                        <input className="forminPass" type={Cpass} name='Cpassword' value={user.Cpassword} onChange={handleInputs} placeholder="enter Repeat Password"/>
                        <span className={icon2} onClick={changeIcon2} style={{cursor:'pointer',color:'white',padding:'0 10px'}}></span>
                        </div>
                        <br/>
                        <input type="Submit" onClick={postData} className="btn btn-light btn-sm" style={{fontWeight:'600'}}/>
                    </form>                    
                </div>
            </div>
        </section>

    </div>
  )
}

export default Register