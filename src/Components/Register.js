import React from "react";
import styled from "styled-components";
import GlobalStyle from "./Style/GlobalStyle";


export default function Register(props) {


  const Button = styled.button`
  /* Common styles for all buttons */
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  
  /* Default button styles */
  background-color: #61DAFB;
  color: #333;
  width:100%;
  transition:550ms all;
  &:hover {
        background-color: #fff;
        color: #333;
  }
  
  `;
    return (
        <><GlobalStyle />

            <div className="">
                <h1 className="text-center">Login</h1>
                <form onSubmit={props.submit}>
                    <div className="from-group mt-3 todo_div">
                        {/* <Label htmlFor="email">Email:</Label> */}
                        <input type="email" name="email" required className="form-control" placeholder="Please Enter your Email...." />
                    </div>
                    <div className="from-group mt-3 todo_div">
                        {/* <Label htmlFor="password">Password:</Label> */}
                        <input type="password" name="password" required className="form-control" placeholder="Please Enter your Password...." />
                    </div>
                    <Button className="mt-4">Submit</Button>
                    {/* <button type="submit" className="btn btn-primary mt-3">Login</button> */}
                </form>
            </div></>

    )
}
