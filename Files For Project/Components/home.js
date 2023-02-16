import React from 'react';
import Navbar from './navbar';
import './style.css';
import { NavLink } from 'react-router-dom';

// =================images/vedios=================
import ved1 from '../images/DRONEVEDIO.mp4';
import vid2 from '../images/just.mp4';
import img1 from '../images/black.jpeg';
import img2 from '../images/logo10.jpg';

function Home() {
    return (
        <div>
            <section>
                {/* <!-- ==========================HOME======================================= --> */}

                <div id="home">
                    <video id="background-video" autoplay='' loop muted poster={img1}>
                        <source src={ved1} type="video/mp4" />
                    </video>

                    <Navbar />

                    <div id="body">
                        <h1 id="head1">STOP</h1>
                        <h1 id="head2">THE BITE</h1>
                        <h1 id="head3">BEFORE IT STARTS</h1>
                    </div>
                </div>

                {/* <!-- ========================About Section=============================== --> */}
                <div id="about">
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div style={{ backgroundColor: '#e9111100', margin: '60px 0 0 35px', width: '65%', color: '#ffffff7a', height: '53%', background: '#ffffff14', borderRadius: '12px', padding: '40px', fontSize: '23px', fontFamily: 'Quantico',border:'1px solid #ffffff38',boxShadow:'-7px -8px 14px #ffffff30'}}>
                            <div>
                                <span id='span'>I</span>n the city of Bhubaneshwar, dengue is at its peak.
                                The population of mosquitoes is rising at an exponential level.
                            </div>
                            <div style={{ textAlign: 'left', padding: '15px 0px' }}>
                                <span id='span'>T</span>his website will help the municipality to find an optimal path to cover some specific locations in order to control the mosquitoes.
                            </div>
                            <div>
                                <span id='span'>A</span>dditionally, a drone could be programmed with mapping and navigation technology to cover a specific area efficiently. Furthermore, the drone could be designed to operate autonomously or be controlled remotely to cover large areas, making it more efficient and cost-effective than traditional methods.
                            </div>
                        </div>
                        <div>
                            <h1 id="head4">BRIEF</h1>
                            <h1 id="head5">IDEATION</h1>
                        </div>
                    </div>
                    <video id="vedmap" autoplay='' loop muted poster={img1}>
                        <source src={vid2} type="video/mp4" />
                    </video>
                </div>


                {/* <!-- =========================//Card INFO//===================================== --> */}
                <div id="info">

                    <div style={{ height: '295px', position: "relative" }}>
                        <h1 id="head6">TEAM</h1>
                        <h1 id="head7">MEMBERS</h1>
                    </div>
                    <div style={{ display: 'flex', width: '100%', marginTop: '30p', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div className="card">
                            <img className="card-img-top" src={img2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text" style={{ marginBottom: '15px' }}>Some quick example text to build on the card
                                    title
                                    and make up the bulk of the card's content.</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <a href="#" className='fa fa-at' id="mail"></a>
                                    <a href="#" className='fa fa-linkedin' id="linkedin"></a>
                                    <a href="#" className='fa fa-instagram' id="instagram"></a>
                                    <a href="#" className='fa fa-github' id="github"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={img2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text" style={{ marginBottom: "15px" }}>Some quick example text to build on the card
                                    title
                                    and make up the bulk of the card's content.</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <a href="#" className='fa fa-at' id="mail"></a>
                                    <a href="#" className='fa fa-linkedin' id="linkedin"></a>
                                    <a href="#" className='fa fa-instagram' id="instagram"></a>
                                    <a href="#" className='fa fa-github' id="github"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={img2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text" style={{ marginBottom: '15px' }}>Some quick example text to build on the card
                                    title
                                    and make up the bulk of the card's content.</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                    <a href="#" className='fa fa-at' id="mail"></a>
                                    <a href="#" className='fa fa-linkedin' id="linkedin"></a>
                                    <a href="#" className='fa fa-instagram' id="instagram"></a>
                                    <a href="#" className='fa fa-github' id="github"></a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={img2} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text" style={{ marginBottom: "15px" }}>Some quick example text to build on the card
                                    title
                                    and make up the bulk of the card's content.</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                    <a href="#" className='fa fa-at' id="mail"></a>
                                    <a href="#" className='fa fa-linkedin' id="linkedin"></a>
                                    <a href="#" className='fa fa-instagram' id="instagram"></a>
                                    <a href="#" className='fa fa-github' id="github"></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* <!-- ===========================//contact//================================= --> */}
                <div id="contact">
                    <div id="conbody">
                        <div>
                            <h1 style={{ fontSize: "30px" }}>MOSQ-Shield.com</h1>
                        </div>
                        <div style={{ padding: '30px 0 40px' }}>
                            <a href="#home" className='connavs'>HOME</a>
                            <a href="#about" className='connavs'>IDEA</a>
                            <a href="#info" className='connavs'>MEMBERS</a>
                            <NavLink className="connavs" aria-current="page" to="/about">About</NavLink>
                            <NavLink className="connavs" aria-current="page" to="/map">Map</NavLink>
                        </div>
                        <div style={{ paddingTop: '10px' }}>
                            <a href="#" className='fa fa-at' id="footerbtn"></a>
                            <a href="#" className='fa fa-facebook' id="footerbtn"></a>
                            <a href="#" className='fa fa-twitter' id="footerbtn"></a>
                        </div>
                    </div>
                </div>

                {/* <!-- ===========================//Footer//================================= --> */}
                <div id="footer">
                    <footer className="text-center text-lg-start" style={{ background: 'rgba(255, 255, 255, 0.159)', color: 'rgb(255 255 255 / 42%)' }}>
                        <div className="text-center p-3">
                            © 2020 Copyright:
                            <a href="https://www.google.com/" style={{ textDecoration: 'none' }}>MOSQ-Shield.com</a>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Home