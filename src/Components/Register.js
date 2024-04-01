import React from "react";
import GlobalStyle from "./Style/GlobalStyle"; 
import styled from "styled-components";

// /home/iteamandroid/Desktop/Learning/ReactJs/react-crud/src/Style/GlobalStyle.js
// import { GlobalStyle } from "../Style/GlobalStyle";

export default function Register(props) {

    // const Label = styled.label`
    // color:#000;
    // text-transform:Capitalize;
    // font-weight:bold;
    // `;


    return (
        <><GlobalStyle />
        <div className="">
            <h1 className="text-center">Login</h1>
            <form onSubmit={props.submit}>
                <div className="from-group mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" required className="form-control" />
                </div>
                <div className="from-group mt-3">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" required className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </div></>

    )
}
