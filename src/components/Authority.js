import React from 'react'
import {Link} from 'react-router-dom';
export default function Authority() {
  return (
    <div>
        <h1>Welcome XYZ!</h1>
<div className="container" style={{textAlign: "center"}}>
   <Link to='/Listrc'> <button type="button" className="btn  btn-lg" >Vec Reg Applications</button><br/></Link >
   <Link to='/Listlic'> <button type="button" className="btn  btn-lg" >License Applications</button><br/></Link>
   <Link to='/Listper'> <button type="button" className="btn  btn-lg" >Permit Applications</button><br/></Link>

  <Link to='/Reports'>  <button type="button" className="btn  btn-lg" >Reports</button><br/></Link>
</div>  
    </div>
  )
}
