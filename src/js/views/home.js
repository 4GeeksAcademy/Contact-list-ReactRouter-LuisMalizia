import React, { useEffect, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.createAgenda(),
			actions.getAllContacts()
	}, [])

	return (
		<div className="text-center mt-5" >
			<Link to="/addContact">
				<button className="btn btn-primary">Add Contact</button>
			</Link>
			{store.listContact.map((data) => {
				return (
					<Card name={data.name} phone={data.phone} email={data.email} address={data.address}/>
				)
			})
			}
		</div>
	)
}