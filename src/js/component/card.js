import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal";


export const Card = (props) => {
  return (
    <div className="card mb-3 container">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className=" rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body ">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.address}</p>
            <p className="card-text">{props.phone}</p>
            <p className="card-text">{props.email}</p>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center gap-3 fs-5">
                    <Link className="bi bi-pencil-fill" to={`/edit-contact/${props.id}`}></Link>
                    <Modal id={props.id} />
                </div>
        </div>
      </div>
    </div>
  )
} 