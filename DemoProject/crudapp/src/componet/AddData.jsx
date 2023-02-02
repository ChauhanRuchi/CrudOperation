// import "../App.css"
// import { useDispatch, useSelector } from "react-redux"
// import { useState } from "react";
// import { AddData } from "../Redux/UserDetailsSlice";
// import validate from "validate.js"
// import { useRef } from "react";
// function AddUserData() {
//     const dispatch = useDispatch();
//     const userstate=useSelector((state)=>state.UserDetail.userData)
//     let [state, setState] = useState({ Name: "", Email: "", Id: "", Hobby: [] });
//     let nameref=useRef()
//     let emailref=useRef();
//     let idref=useRef();
//     let hobbyref=useRef();

//     function handleChange(evt) {
//         const value = evt.target.value;
//         if (evt.target.type === "radio" || evt.target.type === "checkbox") {
//             let newHobby;
//             if (state.Hobby && Array.isArray(state.Hobby)) {
//                 newHobby = [...state.Hobby];
//                 if (evt.target.checked) {
//                     newHobby.push(evt.target.value);
//                 } else {
//                     newHobby = newHobby.filter((hobby) => hobby != evt.target.value);
//                 }
//             } else {
//                 newHobby = [evt.target.value];
//             }
//             setState({
//                 ...state,
//                 [evt.target.name]: newHobby,
//             });
//         } else {
//             setState({
//                 ...state,
//                 [evt.target.name]: value,
//             });
//         }
//     }

//     //vallidation js use to apply validation 
//     let constartValidation={
//         Name:{
//             presence:{allowEmpty: false}
//         },
//         Email:{
//             email: true,
//             presence:{allowEmpty: false}
//         },
//         Id:{
//             presence:{allowEmpty: false},
//         },
//         Hobby:{
//             presence:{allowEmpty: false}
//         },
//     }
//     let check=validate({Name:state.Name,Email:state.Email,Id:state.Id,Hobby:state.Hobby},constartValidation)

//     let validateForm = () => {
//         if(check==undefined)
//         dispatch(AddData({ Name: state.Name, Id: state.Id, Email: state.Email, Hobby: state.Hobby }))
//         }
//         console.log("hobbyref",hobbyref);
//     return (
//         <form onSubmit={(e) => { e.preventDefault();validateForm();}}  name="myform">
//             <div className="form" >
//                 <div className="mb-3">
//                     <label className="form-label">Enter Your Name</label>
//                     <input type="text" ref={nameref} name="Name" className="form-control" id="InputName" onChange={(e) => handleChange(e)}/>
//                     {nameref.current?.value==""&&<span>Please Enter your name</span>}
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Enter Your EmailAddress</label>
//                     <input type="text" ref={emailref} name="Email" className="form-control" id="InputEmail" onChange={(e) => handleChange(e)} />
//                     {emailref.current?.value==""&&<span>Please Enter your email</span>}
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Enter Your Id</label>
//                     <input type="number" ref={idref} name="Id" className="form-control" id="InputId" onChange={(e) => handleChange(e)}  />
//                     {idref.current?.value==""&&<span>Please Enter your Id</span>}
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Select Your Hobby</label>
//                     <div>
//                         <input type="checkbox" ref={hobbyref} id="check" name="Hobby" value="Reading" onChange={(e) => handleChange(e)} />
//                         <label htmlFor="lb_reading"> Reading</label><br />
//                         <input type="checkbox" ref={hobbyref} id="check" name="Hobby" value="Music" onChange={(e) => handleChange(e)} />
//                         <label htmlFor="lb_music"> Music</label><br />
//                         <input type="checkbox" ref={hobbyref} id="check" name="Hobby" value="Dance" onChange={(e) => handleChange(e)} />
//                         <label htmlFor="lb_dance">Dance</label><br />
//                     </div>
//                     {hobbyref.current?.checked==false&&<span>please select your  hobby</span>}
//                 </div>
//                 <button type="submit" className="btn btn-primary"  >Submit</button>
//             </div>

//         </form>
//     )
// }
// export default AddUserData
import "../App.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { AddData } from "../Redux/UserDetailsSlice";
import validate from "validate.js"
import { useRef } from "react";

let constartValidation = {
    Name: {
        presence: { allowEmpty: false }
    },
    Email: {
        email: true,
        presence: { allowEmpty: false }
    },
    Id: {
        presence: { allowEmpty: false },
    },
    Hobby: {
        presence: { allowEmpty: false }
    },
}


function AddUserData() {
    const dispatch = useDispatch();
    let [state, setState] = useState({ Name: "", Email: "", Id: "", Hobby: [] });
    let [error, setError] = useState({});
    let check = "";

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

    let validateForm = () => {
        check = validate({ Name: state.Name, Email: state.Email, Id: state.Id, Hobby: state.Hobby }, constartValidation)
        setError(check)
        if (check == undefined)
            dispatch(AddData({ Name: state.Name, Id: state.Id, Email: state.Email, Hobby: state.Hobby }))
    }
    //vallidation js use to apply validation 
    return (
        <form onSubmit={(e) => { e.preventDefault(); validateForm(); }} name="myform">
            <div className="form" >
                <div className="mb-3">
                    <label className="form-label">Enter Your Name</label>
                    <input type="text" name="Name" className="form-control" id="InputName" onChange={(e) => handleChange(e)} />
                    <span className="text-danger">{error?.Name}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Your EmailAddress</label>
                    <input type="text" name="Email" className="form-control" id="InputEmail" onChange={(e) => handleChange(e)} />
                    <span className="text-danger">{error?.Email}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Your Id</label>
                    <input type="number" name="Id" className="form-control" id="InputId" onChange={(e) => handleChange(e)} />
                    <span className="text-danger">{error?.Id}</span>
                </div>
                <div className="mb-3">
                    <label className="form-label">Select Your Hobby</label>
                    <div>
                        <input type="checkbox" id="check" name="Hobby" value="Reading" onChange={(e) => handleChange(e)} />
                        <label htmlFor="lb_reading"> Reading</label><br />
                        <input type="checkbox" id="check" name="Hobby" value="Music" onChange={(e) => handleChange(e)} />
                        <label htmlFor="lb_music"> Music</label><br />
                        <input type="checkbox" id="check" name="Hobby" value="Dance" onChange={(e) => handleChange(e)} />
                        <label htmlFor="lb_dance">Dance</label><br />
                    </div>
                    <span className="text-danger">{error?.Hobby}</span>
                </div>
                <button type="submit" className="btn btn-primary"  >Submit</button>
            </div>

        </form>
    )
}
export default AddUserData