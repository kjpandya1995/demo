import React from "react";
import Button from "../../Button"

export default function Register(props) {


    return (
            <div className="">
                <h1 className="text-center">Login</h1>
                <form onSubmit={props.submit}>
                    <div className="from-group mt-3 todo_div">
                        <input type="email" name="email" required className="form-control" placeholder="Please Enter your Email...." />
                    </div>
                    <div className="from-group mt-3 todo_div">
                        <input type="password" name="password" required className="form-control" placeholder="Please Enter your Password...." />
                    </div>
                    <Button className="mt-4">Submit</Button>
                </form>
            </div>

    )
}
