import "../App.css"
import {  useDispatch } from "react-redux"
import { useState } from "react";
import { AddData } from "../Redux/UserDetailsSlice";
function AddUserData() {
    const dispatch = useDispatch();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [id, setId] = useState("");
    let [hobby, setHobby] = useState([]);

  let handleChange=({id,value})=>{
        if(id==="InputName"){
            return setName(value)
        }
       else if(id==="InputEmail"){
            return setEmail(value)
        }
        else if(id==="InputId"){
            return setId(value)
        }
        else{
          return  setHobby([...hobby,value])
        }
  }
    return (
        <form onSubmit={(e)=> {e.preventDefault();dispatch(AddData({ Name: name, Id: id, Email: email, Hobby: hobby }))}}>
            <div className="form" >
            <div className="mb-3">
                <label  className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" id="InputName" onChange={(e) => handleChange({id:"InputName",value:e.target.value})} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter Your EmailAddress</label>
                <input type="text" className="form-control" id="InputEmail" onChange={(e) =>handleChange({id:"InputEmail",value:e.target.value})} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Enter Your Id</label>
                <input type="text" className="form-control" id="InputId" onChange={(e) => handleChange({id:"InputId",value:e.target.value})} />
            </div>
            <div className="mb-3">
                <label  className="form-label">Select Your Hobby</label>
                <div>
                    <input type="checkbox" id="check" name="reading" value="Reading" onChange={(e) => handleChange({id:"check",value:e.target.value})} />
                    <label htmlFor="lb_reading"> Reading</label><br />
                    <input type="checkbox" id="check" name="music" value="Music" onChange={(e) => handleChange({id:"check",value:e.target.value})} />
                    <label htmlFor="lb_music"> Music</label><br />
                    <input type="checkbox" id="check" name="dance" value="Dance" onChange={(e) => handleChange({id:"check",value:e.target.value})} />
                    <label htmlFor="lb_dance">Dance</label><br />

                </div>
            </div>
            <button type="submit" className="btn btn-primary"  >Submit</button>
            </div>
           
        </form>
    )
}
export default AddUserData