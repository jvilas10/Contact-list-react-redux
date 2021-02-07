import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import {useHistory} from 'react-router-dom';

function AddContact() {
    let history =useHistory();
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const createContact = (e) => {
        e.preventDefault();
        // addContact();
        console.log(firstName, lastName, phone, email);
        const new_contact = {
            "id": shortid.generate(),
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
            "status": true,
        }
        dispatch(addContact(new_contact));
        history.push("/");

    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" type="submit">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
