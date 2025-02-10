import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Form = () => {

  const { store, actions } = useContext(Context)

  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    actions.createContact(inputValue)
    setInputValue({
      name: "",
      phone: "",
      email: "",
      address: ""
    }
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value })
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Full Name</label>
        <input required onChange={handleChange} type="text" class="form-control" name="name" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input onChange={handleChange} type="email" class="form-control" name="email" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Phone</label>
        <input required onChange={handleChange} type="text" class="form-control" name="phone" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <input onChange={handleChange} type="text" class="form-control" name="address" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}