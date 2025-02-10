import React from "react";
import { Form } from "../component/form";
import { Link } from "react-router-dom";

export const AddContact = () => {
    return (
        <>
            <Form />
            <Link to="/">
                <span> Get back</span>
            </Link>
        </>
    )
}