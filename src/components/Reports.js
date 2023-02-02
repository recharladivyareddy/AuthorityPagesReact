import React from 'react'

export default function Reports() {
  return (
    <div>
        <h1>Reports</h1>



<div className="box">

  <ul className="nav nav-tabs" role="tablist">
    <li className="nav-active">
      <a className="nav-link active" data-bs-toggle="tab" href="#reg">Registrations</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#lic">License</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" href="#per">Permits</a>
    </li>
  </ul>


  <div className="tab-content course-tab-content">
    <div id="reg" className="container tab-pane active"><br/>
      <div className="row">
        <div className="col-sm-2 from">
          <label className="control-label col-sm-" for="from"><b>From</b></label>
          <input type="date" className="form-control" name="from" required/>
        </div>
        <div className="col-sm-2 to">
          <label className="control-label col-sm-6" for="to"><b>To</b></label>
          <input type="date" className="form-control" name="to" required/>
        </div>

        <div className="col-sm-4  search">
          <label className="control-label col-sm-12" for="search"><b>Search by application number</b></label>
          <input type="number" className="form-control" placeholder="Enter application number" name="search" required/>
        </div>

        <div className="col-sm-4  status">

          <label for="status" ><b>Search by status</b></label><br/>
          <select name="status" id="status" className="control-label col-sm-6">
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Pending">Pending</option>

          </select>

        </div>


      </div>
      <br/>
      <div className="container" style={{textAlign: "center"}}>
        <button className="btn btn-lg btn-dark">Get Details</button>
      </div>
   

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Application Number</th>
              <th scope="col">RC Number</th>
              <th scope="col">Regd. Owner</th>
              <th scope="col">Address</th>
              <th scope="col">Vehicle Class</th>
              <th scope="col">RC Status</th>
              <th scope="col">Registration Date</th>
              <th scope="col">Valid Upto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>

            </tr>
            <tr>
              <th scope="row">3</th>

            </tr>
            <tr>
              <th scope="row">4</th>

            </tr>
            <tr>
              <th scope="row">5</th>

            </tr>
            <tr>
              <th scope="row">6</th>

            </tr>
            <tr>
              <th scope="row">7</th>

            </tr>
            <tr>
              <th scope="row">8</th>

            </tr>
            <tr>
              <th scope="row">9</th>

            </tr>
            <tr>
              <th scope="row">10</th>

            </tr>
          </tbody>
        </table>

        <button type="button" className="printbtn btn btn-lg" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print</button>
        
       

      </div>

    </div>




    <div id="lic" className="container tab-pane fade"><br/>

      <div className="row">
        <div className="col-sm-2 from">
          <label className="control-label col-sm-" for="from"><b>From</b></label>
          <input type="date" className="form-control" name="from" required/>
        </div>
        <div className="col-sm-2 to">
          <label className="control-label col-sm-6" for="to"><b>To</b></label>
          <input type="date" className="form-control" name="to" required/>
        </div>
        
        <div className="col-sm-4  search">
          <label className="control-label col-sm-12" for="search"><b>Search by application number</b></label>
          <input type="number" className="form-control" placeholder="Enter application number" name="search" required/>
        </div>

        <div className="col-sm-4  status">

          <label for="status"><b>Search by status</b></label><br/>
          <select name="status" id="status" className="control-label col-sm-6">
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Pending">Pending</option>

          </select>

        </div>
      </div>
      <br/>
      <div className="container" style={{textAlign: "center"}}>
        <button className="btn btn-lg btn-dark">Get Details</button>
      </div>

     
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Application Number</th>
              <th scope="col">Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Address</th>
              <th scope="col">Vehicle Class</th>
              <th scope="col">Lic Status</th>
              <th scope="col">Applied Date</th>
              <th scope="col">Valid Upto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>

            </tr>
            <tr>
              <th scope="row">3</th>

            </tr>
            <tr>
              <th scope="row">4</th>

            </tr>
            <tr>
              <th scope="row">5</th>

            </tr>
            <tr>
              <th scope="row">6</th>

            </tr>
            <tr>
              <th scope="row">7</th>

            </tr>
            <tr>
              <th scope="row">8</th>

            </tr>
            <tr>
              <th scope="row">9</th>

            </tr>
            <tr>
              <th scope="row">10</th>

            </tr>
          </tbody>
        </table>

        <button type="button" className="printbtn btn btn-lg" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print</button>
        
        
      </div>


    </div>



    <div id="per" className="container tab-pane fade"><br/>
      <div className="row">
        <div className="col-sm-2 from">
          <label className="control-label col-sm-" for="from"><b>From</b></label>
          <input type="date" className="form-control" name="from" required/>
        </div>
        <div className="col-sm-2 to">
          <label className="control-label col-sm-6" for="to"><b>To</b></label>
          <input type="date" className="form-control" name="to" required/>
        </div>
       
        <div className="col-sm-4  search">
          <label className="control-label col-sm-12" for="search"><b>Search by application number</b></label>
          <input type="number" className="form-control" placeholder="Enter application number" name="search" required/>
        </div>

        <div className="col-sm-4  status">

          <label for="status"><b>Search by status</b></label><br/>
          <select name="status" id="status" className="control-label col-sm-6">
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
            <option value="Pending">Pending</option>

          </select>

        </div>
      </div>
      <br/>
      <div className="container" style={{textAlign: "center"}}>
        <button className="btn btn-lg btn-dark">Get Details</button>
      </div>

     

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">Application Number</th>
              <th scope="col">Name</th>
              <th scope="col">RC Number</th>
              <th scope="col">Permit Status</th>
              <th scope="col">Place</th>
              <th scope="col">Validity</th>
              <th scope="col">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>

            </tr>
            <tr>
              <th scope="row">3</th>

            </tr>
            <tr>
              <th scope="row">4</th>

            </tr>
            <tr>
              <th scope="row">5</th>

            </tr>
            <tr>
              <th scope="row">6</th>

            </tr>
            <tr>
              <th scope="row">7</th>

            </tr>
            <tr>
              <th scope="row">8</th>

            </tr>
            <tr>
              <th scope="row">9</th>

            </tr>
            <tr>
              <th scope="row">10</th>

            </tr>
          </tbody>
        </table>


        <button type="button" className="printbtn btn btn-lg" onClick={Print} style={{marginLeft:"auto",marginRight:"auto"}}> Print</button>
        
      </div>
    </div>
  </div>
</div>

    </div>
  )
}


const Print = () =>{    
    window.print();
  }