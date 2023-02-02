import React from 'react'
import {Link} from 'react-router-dom';
export default function Listrc() {
  return (
    <div>
         <div className="container ">
        <h1>List of Vehicle Reg Applications</h1>
        <div className="row">
            <div className="col-sm-2 from">
                <label className="control-label col-sm-" for="from"><b>From</b></label>
                <input type="date" className="form-control" name="from" required />
            </div>
            <div className="col-sm-2 to">
                <label className="control-label col-sm-6" for="to"><b>To</b></label>
                <input type="date" className="form-control" name="to" required />
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4  search">
                <label className="control-label col-sm-12" for="search"><b>Search by application number</b></label>
                <input type="number" className="form-control" placeholder="Enter application number" name="search" required />
            </div>
        </div>
        <br/>
        <div className="container" style={{textAlign: "center"}}>
            <button className="btn btn-lg btn-dark">Get Details</button>
        </div>
    </div>




    <div className="container tab-pane active"><br/>
        <div className="table-responsive">
            <table className="table table-bordered per">
                <tbody>
                    <tr>
                        <th scope="row">Application 1</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">Application 2</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>


                    </tr>
                    <tr>
                        <th scope="row">Application 3</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>


                    </tr>
                    <tr>
                        <th scope="row">Application 4</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>


                    </tr>
                    <tr>
                        <th scope="row">Application 5</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>


                    </tr>
                    <tr>
                        <th scope="row">Application 6</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>


                    </tr>
                    <tr>
                        <th scope="row">Application 7</th>
                        <td><Link to='/Rcform'>click here to see for more details</Link></td>


                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
        </div>
    </div>
    
    </div>
  )
}
