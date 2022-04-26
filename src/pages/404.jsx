import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
    const navigate = useNavigate()
    return (
        <div className="vh-100 d-flex align-items-center justify-content-center ">
            <div className="container text-center">
                <h1>
                    Page not found!
                </h1>
                <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate(-1)}
                >
                    &lt;&lt; Go back
                </button>
            </div>
        </div>
    )
}