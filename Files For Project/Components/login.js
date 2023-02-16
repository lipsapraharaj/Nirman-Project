import React,{useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom';

import './style.css';
import './style2.css';

import ved1 from '../images/DRONEVEDIO.mp4';
import img1 from '../images/black.jpeg';

function Login() {

    const navigate=useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginUser = async(e)=>{
        e.preventDefault();
        const res = await fetch('/login',{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email,password
            })
        });

        const data=await res.json();
        if(res.status===400 || !data)
        {
            window.alert('invalid login');
            // console.log('invalid login');
        }
        else{
            window.alert('sucessfully login');
            // console.log('sucessfully login');
            navigate("/");
        }

    }

    // =====================password see not see====================
    const iconclass1="fa fa-eye";
    const iconclass2="fa fa-eye-slash";
    const [pass,setPass]=useState('password');
    const [icon1,setIcon1]=useState(iconclass1);
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

    
    return (
        <div>
            <video id="background-video" autoplay='' loop muted poster={img1}>
                <source src={ved1} type="video/mp4" />
            </video>
            <section id="mainseclog">
                <div>
                    <div>
                        <h1 id="mainh1">LOGIN</h1>
                        <h2 id="mainh2log" >Welcome to MOSQ-Shield</h2>
                    </div>
                    <div id="mainformlog">
                        <form method='POST'>
                            <h3 className="formh3">Email</h3>
                            <input className="formin" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter Email" /><br />
                            <h3 className="formh3">Password</h3>
                            <div className='divPass'>
                            <input className="forminPass" value={password} onChange={(e)=>setPassword(e.target.value)} type={pass} placeholder="enter Password" />
                        <span className={iconclass1} onClick={changeIcon1} style={{cursor:'pointer',color:'white',padding:'0 10px'}}></span>
                            </div>
                            <br/>
                                <input type="Submit" onClick={loginUser} className="btn btn-sm btn-light" style={{fontWeight: "600"}}/>
                        </form>
                    </div>
                    <h4 style={{color:"white",padding:"10px"}}>new user <NavLink id="Regtag" to="/register">#Register</NavLink></h4>
                </div>
                
            </section>
        </div>
    )
}

export default Login