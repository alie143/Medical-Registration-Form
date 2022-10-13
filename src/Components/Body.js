import { json, useLocation, useNavigate } from "react-router";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";
import URL from '../config'


const Body = () => {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [dateOfBirth, setDOB] = useState("")
    const [gender, setGender] = useState("")
    const [identityType, setIdentityType] = useState("Aadhar_card")
    const [identityNumber, setIdentityNumber] = useState("")
    const [nomineeName, setNomineeName] = useState("")
    const [nomineeRelation, setNomineeRelation] = useState("")
    const [nomineeDOB, setNomineeDOB] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [aadharId, setAadharId] = useState("")
    const [pincode, setPincode] = useState("")

    const [firstNameErr, setFirstNameErr] = useState("")
    const [lastNameErr, setLastNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [contactNumberErr ,setContactNumberErr] = useState("")
    const [aadharIdErr, setAadharIdErr] = useState("")
    const [pincodeErr, setPincodeErr] = useState("")

    const validation = () => {
        let flag = true;
        if(firstName != "([A-z])+(.?[a-zA-Z])('?[a-zA-Z])"){
            setFirstNameErr("Please enter requested format!");
            flag = false;
        }
        if(lastName != "([A-z])+(.?[a-zA-Z])('?[a-zA-Z])"){
            setLastNameErr("Please enter requested format!");
            flag = false;
        }
        if(email != "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"){
            setEmailErr("Please enter requested format!");
            flag = false;
        }
        if(contactNumber != "/^[0-9\b]+$/"){
            setContactNumberErr("Please enter requested format!");
            flag = false;
        }
        // console.log("In aadhar id :: " + aadharId);
        if(aadharId != "/^[0-9\b]+$/"){
            // console.log("Insdie aadhar id if condiri==tion");
            setAadharIdErr("Please enter valid number!");
            flag = false;
        }
        // console.log("In pincode :: " + pincode);
        if(pincode != "/^[0-9\b]+$/"){
            // console.log("Inside pincode if condition");
            setPincodeErr("Please enter valid number!");
            flag = false;
        }
        if(flag){
            return true;
        }
    }

    const clickFunc = () => {

        if(validation()){
            // if((firstName >= 'A' && firstName <= 'Z') || (firstName >='a' && firstName <= 'z')){
            //     setFirstNameErr("Please enter valid name");
            // }
          setFirstNameErr("");
          setLastNameErr("");
          setEmailErr(""); 
          
        }
        alert("Inside Clicked")
        const nomineeInformation = {
            nomineeName,
            nomineeRelation,
            nomineeDOB,
        }

        const name = firstName + " " + lastName;

        const payload = {
            "customers": {
                // clientId : "",
                name,
                email,
                contactNumber,
                gender,
                dateOfBirth,
                identityType,
                identityNumber,
                maritalStatus,
                address,
                city,
                state,
                pincode,
                "clinical_history": [
                    "heartissue",
                    "diebetic"
                ],
                "Date": "",
                "bank_account": {
                    "account_number": "32828742093",
                    "IFSC": "SBIN0003264",
                    "Bank_name": "State Bank Of India"
                },
                nomineeInformation,
            }
        }

        //   axios({
        //     method: 'post',
        //     url: `http://10.210.8.54:3002/api/clientregistration`,
        //     data: payload, // you are sending body instead
        //     headers: {
        //      // 'Authorization': `bearer ${token}`,
        //     'Content-Type': 'application/json'
        //     }, 
        //   })
        axios
            .post("http://10.210.8.54:3002/api/clientregistration", payload)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                console.log(typeof response.data);
            })
            .catch(function (error) {
                console.log("error");
                console.log(error);
            });
        console.log("payload => " + JSON.stringify(payload));
    }




    // const clicked =async () => {

    //     const url = `${URL}`

    // const data = {
    //     name,
    //     email,
    //     contactNumber,
    //     gender,
    //     dateOfBirth,
    //     identityType,
    //     identityNumber,
    //     maritalStatus,
    //     address,
    //     city,
    //     state,
    //     pincode,
    //     "clinical_history": [
    //         "heartissue",
    //         "diebetic"
    //     ],
    //     "Date": "",
    //     "bank_account": {
    //         "account_number": "32828742093",
    //         "IFSC": "SBIN0003264",
    //         "Bank_name": "State Bank Of India"
    //     },
    //     nomineeInformation,
    // }


    //console.log('Body Content => ' + body);
    // axios.post(url, body).then((response) => {
    //     console.log(response.data);
    // });

    // }

    // const Continue = () => {
    //     console.log("Function called!");
    // }

    return (
        <>
            <br />
            <div className="col mt-0 d-flex justify-content-center">
                <h2 className="title"><u>Medical Insurance Registration Form</u></h2>
                <br /><br /><br />
            </div>
            <div style={{ backgroundColor: 'lightyellow', boxShadow: '1px 2px 9px #C4C3C3', border: "light", marginLeft: '200px', marginRight: '200px' }}>
                <br />
                <h4 className="text-success">Personal Information</h4>
                <hr></hr>
                <form class="row g-3" style={{ marginLeft: '80px', marginRight: '80px' }}>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputFirstName" class="form-label">First Name</label>
                        <input type="text" onChange={(e) => {
                            setFirstName(e.target.value);
                        }} class="form-control" id="inputFirstName" />
                        <span className="text-danger">{firstNameErr}</span>
                    </div>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputLastname" class="form-label">Last Name</label>
                        <input type="text" onChange={(e) => {
                            setLastName(e.target.value);
                        }} class="form-control" id="inputLastname" />
                        <span className="text-danger">{lastNameErr}</span>
                    </div>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} class="form-control" id="inputEmail4" />
                        <span className="text-danger">{emailErr}</span>
                    </div>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputContact" class="form-label">Contact Number</label>
                        <input type="text" onChange={(e) => {
                            setContactNumber(e.target.value);
                        }} class="form-control" id="inputContact" minLength={10} maxLength={10} />
                        <span className="text-danger">{contactNumberErr}</span>
                    </div>
                    <div class="col-md-4" style={{ textAlign: "left" }}>
                        <label for="inputDOB" class="form-label">Date Of Birth</label>
                        <input type="date" onChange={(e) => {
                            setDOB(e.target.value);
                        }} class="form-control" id="inputDOB" />
                    </div>
                    <div class="col-md-4" style={{ textAlign: "left" }}>
                        <label for="inputGender" class="form-label">Gender</label>
                        <select id="inputGender" class="form-select" onChange={(e) => {
                            setGender(e.target.value)
                        }}>
                            <option selected disabled>Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                    <div class="col-md-4" style={{ textAlign: "left" }}>
                        <label for="inputMarital" class="form-label">Marital Status</label>
                        <select id="inputMarital" class="form-select" onChange={(e) => {
                            setMaritalStatus(e.target.value)
                        }}>
                            <option selected disabled>Select...</option>
                            <option value="married">Married</option>
                            <option value="single">Single</option>
                            <option value="divorced">Divorced</option>
                            <option value="widow">Widow</option>
                        </select>
                    </div>

                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputIdentity" class="form-label">Identity Type</label>
                        <select id="inputIdentity" class="form-select" onChange={(e) => {
                            setIdentityType(e.target.value)
                        }}>
                            <option selected disabled>Select...</option>
                            <option value="aadharId">Aadhaar</option>
                            <option value="pancard">PAN Card</option>
                            <option value="voterId">Voter ID</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        {identityType == "aadharId" &&
                            <div>
                                <div class="col-md-0" style={{ textAlign: "left" }}>
                                    <label for="inputData" class="form-label">Aadhar Number</label>
                                    <input type="text" onChange={(e) => {
                                        setIdentityNumber(e.target.value);
                                    }} class="form-control" id="inputData" minLength={12} maxLength={12} />
                                    <span className="text-danger">{aadharIdErr}</span>
                                </div>
                            </div>
                        }

                        {identityType == "pancard" &&
                            <div>
                                <div class="col-md-0" style={{ textAlign: "left" }}>
                                    <label for="inputData" class="form-label">PAN Number</label>
                                    <input type="text" onChange={(e) => {
                                        setIdentityNumber(e.target.value);
                                    }} class="form-control" id="inputData" minLength={10} maxLength={10} />
                                </div>
                            </div>
                        }


                        {identityType == "voterId" &&
                            <div>
                                <div class="col-md-0" style={{ textAlign: "left" }}>
                                    <label for="inputData" class="form-label">Voter Number</label>
                                    <input type="text" onChange={(e) => {
                                        setIdentityNumber(e.target.value);
                                    }} class="form-control" id="inputData" minLength={10} maxLength={10} />
                                </div>
                            </div>
                        }
                    </div>

                    <div class="col-12" style={{ textAlign: "left" }}>
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" onChange={(e) => {
                            setAddress(e.target.value);
                        }} class="form-control" id="inputAddress" placeholder="1234 Main St,Apartment, studio, or floor" />
                    </div>

                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" onChange={(e) => {
                            setCity(e.target.value);
                        }} class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4" style={{ textAlign: "left" }}>
                        <label for="inputState" class="form-label">State & UTs</label>
                        <select id="inputState" class="form-select" onChange={(e) => {
                            setState(e.target.value)
                        }}>
                            <option selected disabled>Select...</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div class="col-md-2" style={{ textAlign: "left" }}>
                        <label for="inputPincode" class="form-label">Pincode</label>
                        <input type="text" onChange={(e) => {
                            setPincode(e.target.value);
                        }} class="form-control" id="inputPincode" minLength={6} maxLength={6} />
                        <span className="text-danger">{pincodeErr}</span>
                    </div>
                    <div class="col-12" style={{ textAlign: "left" }}>
                    </div>


                    {/* <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputData" class="form-label">Identity Number</label>
                        <input type="text" onChange={(e) => {
                            setIdentityNumber(e.target.value);
                        }} class="form-control" id="inputData" />
                    </div> */}

                    <h4 className="text-success">Nominee Information</h4>
                    <hr></hr>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputNominee" class="form-label">Nominee Name</label>
                        <input type="text" onChange={(e) => {
                            setNomineeName(e.target.value);
                        }} class="form-control" id="inputNominee" />
                    </div>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputRelation" class="form-label">Nominee Relation</label>
                        <select id="inputRelation" class="form-select" onChange={(e) => {
                            setNomineeRelation(e.target.value)
                        }}>
                            <option selected disabled>Select...</option>
                            {maritalStatus == "single" &&
                                <option hidden>Spouse</option>
                            }
                            {maritalStatus != "single" &&
                                <option value="spouse">Spouse</option>
                            }
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="sibling">Sibling</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="col-md-6" style={{ textAlign: "left" }}>
                        <label for="inputNominee" class="form-label">Nominee Date Of Birth</label>
                        <input type="date" onChange={(e) => {
                            setNomineeDOB(e.target.value);
                        }} class="form-control" id="inputNominee" />
                    </div>

                    {/* <div class="col-12" style={{textAlign: "left"}}>
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" onChange={(e) => {
                            setAddress2(e.target.value);
                        }} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div> */}
                    <div class="col-12" style={{ textAlign: "right" }}>
                        <button type="submit" class="btn btn-primary" onClick={clickFunc}>Submit</button>
                    </div>
                </form>
                <br />
            </div>
            <br />
        </>
    );
};

export default Body;