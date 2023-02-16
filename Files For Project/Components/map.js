import React, { useEffect } from 'react'
import Navbar from './navbar';
import './style.css';
import './map.css';
import img2 from '../images/mapphoto.png';

function Map() {

  useEffect(() => {
    callMap();
  }, [])

  const callMap = async () => {
    try {
      const res = await fetch('/map',);
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <div>
      <Navbar />
      <div className='contain'>
        <div className='mapPart1'>
          {/* <h1 id='Head1'>MAP</h1>
          <h1 id='Head2'>SECTION</h1> */}
          <h2 style={{ color: 'white', padding: '0 10px 20px 0' }}>Your Maps</h2>
          <div className='allMaps'>

            <table class="table" id='table'>
              <thead>
                <tr style={{ fontSize: '15px', fontWeight: '500' }}>
                  <th scope="col"></th>
                  <th scope="col">Map Name</th>
                  <th scope="col">Date</th>
                  <th scope="col"></th>
                  <th scope="col"></th>

                </tr>
              </thead>
              <tbody style={{width:'10px'}}>
                <tr>
                  <th scope="row">1</th>
                  <td>Map-1</td>                  
                  <td>20-10-2022</td>
                  <td><a href='#' id='deleteBtn'>Delete</a></td>
                  <td><a href='#' id='editBtn'>Edit</a></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
        <div className='mapPart2'>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img" src={img2} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Add Map</h5>
              <p className="card-text">You need to follow some basic steps to create a new map ,To create new map click on Create</p>
              <a href="#" id='btnCreate' className="btn btn-sm">Create</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map