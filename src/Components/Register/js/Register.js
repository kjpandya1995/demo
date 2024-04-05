import React from "react";
import Button from "../../Button"
import InputField from "../../InputField";

export default function Register(props) {
    return (
        <div className="">
            <h1 className="text-center">Login</h1>
            <form onSubmit={props.submit}>
                <InputField className=" mt-3" type="email" name="email" placeholder="Please Enter your Email...." required ></InputField>
                <InputField className=" mt-3" type="password" name="password" placeholder="Please Enter your Password...." required ></InputField>
                <Button className="mt-4">Submit</Button>
            </form>
        </div>

    )
}
