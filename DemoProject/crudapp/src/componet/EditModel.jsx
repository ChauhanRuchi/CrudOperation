import { useState } from "react"
import { useDispatch } from "react-redux"
import {EditData} from "../Redux/UserDetailsSlice"
function EditModel({ Edit }) {
        const [state,setState]=useState({})
        function handleChange(evt) {
            const value = evt.target.value;
            setState({
              ...state,
              [evt.target.name]: value
            });
          }
    return (
    <div class="modal" tabIndex="-1" id="show">
        <div class="modal-dialog" style={{ backgroundColor: "#fff" }}>
            <div className="mb-3">
                <label className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" id="InputName" value={Edit.Name} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Your EmailAddress</label>
                <input type="text" className="form-control" id="InputEmail" value={Edit.Email} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Enter Your Id</label>
                <input type="text" className="form-control" id="InputId" value={Edit.Id} onChange={(e)=>handleChange(e)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Select Your Hobby</label>
                <div>
                    <input type="checkbox" id="check" name="reading" value="Reading" checked={Edit.Hobby?.includes("Reading")} onChange={(e)=>handleChange(e)}/>
                    <label for="lb_reading"> Reading</label><br />
                    <input type="checkbox" id="check" name="music" value="Music"  checked={Edit.Hobby?.includes("Music")} onChange={(e)=>handleChange(e)} />
                    <label for="lb_music"> Music</label><br />
                    <input type="checkbox" id="check" name="dance" value="Dance"  checked={Edit.Hobby?.includes("Dance")} onChange={(e)=>handleChange(e)}/>
                    <label for="lb_dance">Dance</label><br />
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Update Record</button>
            </div>
        </div>
    </div>

    )
}
export default EditModel