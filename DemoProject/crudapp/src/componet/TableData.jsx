import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { ClearData, EditData } from "../Redux/UserDetailsSlice";
function TableData() {
    const userdata = useSelector((state) => state.UserDetail.userData);
    const [state, setState] = useState({})
    const dispatch = useDispatch();
    function handleChange(evt) {
        const value = evt.target.value;
        if (evt.target.type === "radio" || evt.target.type === "checkbox") {
            let newHobby;
            if (state.Hobby && Array.isArray(state.Hobby)) {
                newHobby = [...state.Hobby];
                if (evt.target.checked) {
                    newHobby.push(evt.target.value);
                } else {
                    newHobby = newHobby.filter((hobby) => hobby != evt.target.value);
                }
            } else {
                newHobby = [evt.target.value];
            }
            setState({
                ...state,
                [evt.target.name]: newHobby,
            });
        } else {
            setState({
                ...state,
                [evt.target.name]: value,
            });
        }
    }
    let UpdateUserData = () => {
        let updateData = [];
        userdata.map((data) => {
            if (data.Id == state.Id) {
                updateData.push(state);
            } else {
                updateData.push(data);
            }
        });
        dispatch(EditData(updateData))
    }

    return (
        <div >
            <div className="modal fade" id="show" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ backgroundColor: "#fff" }}>
                    <div className="modal-content">
                        <div className="mb-3">
                            <label className="form-label">Enter Your Name</label>
                            <input type="text" className="form-control" id="InputName" name="Name" value={state.Name || ""} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter Your EmailAddress</label>
                            <input type="text" className="form-control" id="InputEmail" name="Email" value={state.Email || ""} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter Your Id</label>
                            <input type="text" className="form-control" id="InputId" name="Id" disabled={true} value={state.Id || ""} onChange={(e) => handleChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Select Your Hobby</label>
                            <div>
                                <input type="checkbox" id="check" name="Hobby" value="Reading" checked={state.Hobby?.includes("Reading") || false} onChange={(e) => handleChange(e)} />
                                <label htmlFor="lb_reading"> Reading</label><br />
                                <input type="checkbox" id="check" name="Hobby" value="Music" checked={state.Hobby?.includes("Music") || false} onChange={(e) => handleChange(e)} />
                                <label htmlFor="lb_music"> Music</label><br />
                                <input type="checkbox" id="check" name="Hobby" value="Dance" checked={state.Hobby?.includes("Dance") || false} onChange={(e) => handleChange(e)} />
                                <label htmlFor="lb_dance">Dance</label><br />

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { UpdateUserData() }}>Update Record</button>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table" style={{ margin: "auto", width: "80%" }} >

                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Hobby</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        userdata.map((item) => {
                            return (<tr>
                                <th scope="row">{item.Id}</th>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.Hobby?.join(",")}</td>
                                <td> <button type="button" data-bs-toggle="modal" data-bs-target="#show" onClick={() => {
                                    setState(item)
                                }}>edit</button></td>
                                <td><button onClick={() => dispatch(ClearData(userdata.filter((useritem) => { return useritem.Id !== item.Id })))}>delete</button></td>
                            </tr>)
                        })
                    }

                </tbody>
            </table>
        </div>)
}
export default TableData