import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";
import { useNavigate, Link } from "react-router-dom";

export default function Signup(props) {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [email, setEmail] = useState("");

    // Navigate
    const navigate = useNavigate();

// Login if user data in the local storage
useEffect(() => {
    if (localStorage.getItem('zazu')) {
    navigate('/')
    }
}, []);

    // Tosting option
    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Register")
        if (handleValidation()) {
            const { data } = await axios.post(
                registerRoute,
            {
                userName,
                email,
                password
            }
            );
            if (data.success === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.success === true) {
                localStorage.setItem('zazu', JSON.stringify(data.user));
                props.setIsLoggedIn(true);
                props.setLoggedInUser(email)
                console.log("Successfully Signedup")
                navigate("/");
            }
        } 
    };

    const handleValidation = () => {

        if (email === "") {
            toast.error("Please Enter the Email", toastOptions);
            return false;

        } else if (password !== conPassword) {
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
        console.log("noEmail")

            return false;
        } else if (userName.length < 3) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            console.log("Small user Name")
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            console.log('Small Password!')
            return false;
        }
        return true
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={(event) => handleSubmit(event)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title"> Sign Up </h3>{" "}
                    <div className="text-center">
                        Already have an account ?{" "}
                        <Link
                            className="link-primary"
                            to="/login"
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            Sign In{" "}
                        </Link>{" "}
                    </div>{" "}
                    <div className="form-group mt-3">
                        <label> User Name </label>{" "}
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="User Name"
                            name="userName"
                            onChange={(e) => setUserName(e.target.value)}
                        />{" "}
                    </div>{" "}
                    <div className="form-group mt-3">
                        <label> Email address </label>{" "}
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />{" "}
                    </div>{" "}
                    <div className="form-group mt-3">
                        <label> Password </label>{" "}
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />{" "}
                    </div>{" "}
                    <div className="form-group mt-3">
                        <label> Confirm Password </label>{" "}
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password again"
                            name="conPassword"
                            onChange={(e) => setConPassword(e.target.value)}
                        />{" "}
                    </div>{" "}
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Register{" "}
                        </button>{" "}
                    </div>{" "}
                    <p className="text-center mt-2">
                        Forgot <a href="#"> password ? </a>{" "}
                    </p>{" "}
                </div>{" "}
            </form>{" "}
            <ToastContainer />
        </div>
    );
}
