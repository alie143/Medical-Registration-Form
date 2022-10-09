import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";


const Body = () => {
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
    <div style={{ backgroundColor: '#E5E4F4' }} >
      <div className="col mt-4 d-flex justify-content-center">
        <h1 className="title">Medical History Form</h1>
        <br /><br /><br /><br />
      </div>
      <div className="row">
        <div style={{ width: '250px' }}>
          <div className="form fw-bold">
            <div style={{ marginLeft: '140px', width: '100px', height: '545px', }}>
              <label htmlFor="" className="label-control">
                Title
              </label>
              <select
                className="form-select form-control"
                id="inputGroupSelect02"
                placeholder="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              >
                <option value="Select">Select</option>
                <option value="Mr.">Mr</option>
                <option value="Mrs.">Mrs</option>
                <option value="Miss.">Miss</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col" >
          <div className="form fw-bold" style={{ marginLeft: '20px', width: '350px' }}>
            <div className="mb-3" >
              <label htmlFor="" className="label-control">
                First Name
              </label>
              <input value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email Id
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Date of Birth
              </label>
              <input
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                type="date"
                className="form-control"
              />
            </div>
            {/* new row */}
            <div style={{ width: '350px' }}>
              <div className="form fw-bold">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Disease
                  </label>
                  <select
                    className="form-select form-control"
                    id="inputGroupSelect02"
                    placeholder="title"
                    // onChange={(e) => {
                    //   setTitle(e.target.value);
                    // }}
                  >
                    <option value="Select">Select</option>
                    <option value="Asthma">Asthma</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Cardiac Disease">Cardiac Disease</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ width: '350px' }}>
              <div className="form fw-bold">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Are you currently taking any medication ?
                  </label>
                  <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>  
                </div>
              </div>
            </div>
            

            <div className="mb-3">
              <button onClick={() => { navigate('/') }} className="btn btn-primary" style={{ backgroundColor: '#4A235A' }}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="col" style={{ marginRight: '250px' }}>
          <div className="form fw-bold" style={{ width: '350px' }}>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Contact No
              </label>
              <input maxlength="10"
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="phone"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Covid Vaccinated Status
              </label>
              <select className="form-select form-control" id="inputGroupSelect02"
                onChange={(e) => { setCovidVaccinated(e.target.value) }} >
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>

            </div>
            <div style={{ width: '350px' }}>
              <div className="form fw-bold">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Symptoms currently experiencing
                  </label>
                  <select
                    className="form-select form-control"
                    id="inputGroupSelect02"
                    placeholder="title"
                    // onChange={(e) => {
                    //   setTitle(e.target.value);
                    // }}
                  >
                    <option value="Select">Select</option>
                    <option value="Chest Pain">Chest Pain</option>
                    <option value="Obesity">Obesity</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Respiratory">Respiratory</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ width: '350px' }}>
              <div className="form fw-bold">
                <div className="mb-3">
                  <label htmlFor="" className="label-control">
                    Do you consume alcohol ?
                  </label>
                  <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
              <label className="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>  
                </div>
              </div>
            </div>
              <div className="mb-3">
              <button onClick={Continue} className="btn btn-primary" style={{ backgroundColor: '#4A235A' }}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
