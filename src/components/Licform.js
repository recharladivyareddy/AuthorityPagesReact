import React from 'react'

export default function Licform() {
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
        <th scope="row">Father Name</th>

      </tr>
      <tr>
        <th scope="row">Date of Birth</th>

      </tr>
      <tr>
        <th scope="row">Permanent Address</th>

      </tr>
      <tr>
        <th scope="row">Temporary Address</th>

      </tr>

      <tr>
        <th scope="row">Type of Vehicle</th>

      </tr>
      <tr>
        <th scope="row">Blood Group</th>

      </tr>
    </tbody>
  </table>
</div>



<div className="container " style={{textAlign: "center"}}>
  <button type="button" className="btn  btn-lg">Reject</button>
  <button type="button" className="btn  btn-lg">Approve</button>
</div>
    </div>
  )
}
