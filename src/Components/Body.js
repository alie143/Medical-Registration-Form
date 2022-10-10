import { useLocation, useNavigate } from "react-router";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";


const Body2 = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("Mr")
    const [firstName, setFirstName] = useState('firstName')
    const [lastName, setLastName] = useState('lastName')
    const [email, setEmail] = useState('email')
    const [mobileNo, setMobileNo] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [covidVaccinated, setCovidVaccinated] = useState(1)

    const Continue = () => {
        console.log("Function called!");
    }

    return (
        <>
            <br/>
            <div className="col mt-0 d-flex justify-content-center">
                <h1 className="title"><u>Medical Insurance Registration Form</u></h1>
                <br /><br /><br/>
            </div>
            <div style={{ backgroundColor: 'lightyellow', boxShadow:'1px 2px 9px #C4C3C3', border: "light", marginLeft: '200px', marginRight: '200px' }}>
                <br />
                <form class="row g-3" style={{ marginLeft: '80px', marginRight: '80px' }}>
                    <div class="col-md-6">
                        <label for="inputFirstName" class="form-label">First Name</label>
                        <input type="text" onChange={(e) => {
                            setFirstName(e.target.value);
                        }} class="form-control" id="inputFirstName" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputLastname" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputLastname" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputContact" class="form-label">Contact Number</label>
                        <input type="text" class="form-control" id="inputContact" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputDOB" class="form-label">Date Of Birth</label>
                        <input type="date" class="form-control" id="inputDOB" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputGender" class="form-label">Gender</label>
                        <select id="inputGender" class="form-select">
                            <option selected>Select...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputMarital" class="form-label">Marital Status</label>
                        <select id="inputMarital" class="form-select">
                            <option selected>Select...</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                            <option>Widow</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputIdentity" class="form-label">Identity</label>
                        <select id="inputIdentity" class="form-select">
                            <option selected>Select...</option>
                            <option>Aadhaar</option>
                            <option>PAN Card</option>
                            <option>Voter ID</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="inputData" class="form-label">Identity Number</label>
                        <input type="text" class="form-control" id="inputData" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputNominee" class="form-label">Nominee Name</label>
                        <input type="text" class="form-control" id="inputNominee" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputRelation" class="form-label">Nominee Relation</label>
                        <select id="inputRelation" class="form-select">
                            <option selected>Select...</option>
                            <option>Father</option>
                            <option>Mother</option>
                            <option>Spouse</option>
                            <option>Sibling</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                            <option selected>Select...</option>
                            <option>Andhra Pradesh</option>
                            <option>Andaman and Nicobar Islands</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Chhattisgarh</option>
                            <option>Dadar and Nagar Haveli</option>
                            <option>Daman and Diu</option>
                            <option>Delhi</option>
                            <option>Lakshadweep</option>
                            <option>Puducherry</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu and Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Pincode</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-12">
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                <br />
            </div>
            <br />
        </>
    );
};

export default Body2;