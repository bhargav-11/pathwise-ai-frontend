import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import signin from "../images/Sign in.gif";
import { useNavigate,Link } from "react-router-dom";
import {FaLongArrowAltRight} from "react-icons/fa"

function Signin() {
  const [loginRegisterActive, setLoginRegisterActive] = useState("login");

  const handleLoginRegisterClick = (activeTab) => {
    setLoginRegisterActive(activeTab);
  };

  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlechange = (event) => {
    const { name, value } = event.target;
    setuserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    let Requestdata = JSON.stringify({
      username: userData.username,
      password: userData.password,
    });
    try {
      const apiUrl = process.env.REACT_APP_API_URL + "/user";
      axios
        .post(apiUrl, Requestdata, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          if(response.status===200){
            navigate('/home')
            localStorage.setItem("islogin",response.data.is_admin)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    if(localStorage.getItem("islogin")){
      navigate("/home");
    }
  },[])
  return (
    <div className="signin">
      <div className="signin-part1">
        <img className="rounded mx-auto d-block" src={signin} />
      </div>
      <div className="signin-part2 container">
        <MDBTabs pills justify className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleLoginRegisterClick("login")}
              active={loginRegisterActive === "login"}
            >
              User
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={loginRegisterActive === "login"}>
            <form>
              <MDBInput
                className="mb-4"
                id="form8Example2"
                label="Username"
                name="username"
                value={userData.username}
                onChange={handlechange}
              />
              <MDBInput
                className="mb-4"
                type="password"
                id="form7Example2"
                name="password"
                value={userData.password}
                label="Password"
                onChange={handlechange}
              />

              <MDBBtn type="submit" className="mb-4" block onClick={handlesubmit}>
                Sign In User
              </MDBBtn>
              <div style={{textAlign:"center"}}>
 <Link to="http://localhost:5000/login" className="text-center text-decoration-none">Admin Login <FaLongArrowAltRight/></Link>
 </div>
            </form>
          </MDBTabsPane>
        </MDBTabsContent>
      </div>
    </div>
  );
}

export default Signin;