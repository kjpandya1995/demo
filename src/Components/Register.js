import React from "react";

export default function Register(props) {
    return (
        <div className="">
            <h1 className="text-center">Login</h1>
            <form onSubmit={props.submit}>
                {/* <div className="from-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required className="form-control" />
                </div> */}
                <div className="from-group mt-3">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" required className="form-control" />
                </div>
                <div className="from-group mt-3">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" required className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
        
    )
}