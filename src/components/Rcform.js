import React from 'react'
import {Link} from 'react-router-dom';
export default function Rcform() {
  return (
    <div>
        <h1>Vehcile Registration Application</h1>
    



    <div className="table-responsive container">
        <table className="table table-bordered ">
          <tbody>
            <tr>
              <th scope="row">Full Name</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">Temporary Reg No</th>

            </tr>
            <tr>
              <th scope="row">Permanent Address</th>

            </tr>
            <tr>
              <th scope="row">Temporary Address</th>

            </tr>
            <tr>
              <th scope="row">Name of the dealer or manufacturer from whom the vehicle was purchased</th>

            </tr>
            <tr>
              <th scope="row">Address of the dealer or manufacturer from whom the vehicle was purchased</th>

            </tr>
            <tr>
              <th scope="row">Class of Vehicle</th>

            </tr>
            <tr>
                <th scope="row">Month and year of manufacture</th>
  
              </tr>
          </tbody>
        </table>
      </div>


<div className="contianer" style={{textAlign: "center"}}>
      <button type="button" className="btn btn-lg">Reject</button>
      <button type="button" className="btn btn-lg">Approve</button>
</div>
    
    </div>
  )
}
