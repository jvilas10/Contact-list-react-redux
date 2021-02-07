import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addContact, editContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory, useParams } from 'react-router-dom';
import Contact from './Contact';



function EditContact() {
    let history = useHistory();
    let { id } = useParams();

    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contact.contact);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('');


    const onUpdateContact = (e) => {
        e.preventDefault();
        // addContact();
        // console.log(firstName, lastName, phone, email);
        const update_contact = Object.assign(contact, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            status:status,

        })
        console.log(update_contact);
        dispatch(updateContact(update_contact));
        // dispatch(addContact(new_contact));
        history.push("/");

    }
    useEffect(() => {
        // console.log(contact)
        if (contact != null) {
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setPhone(contact.phone);
            setEmail(contact.email)
            setStatus(contact.status);
        }
        dispatch(editContact(id));
    }, [contact])
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                    Status:
                    <input type="checkbox"  value={status} checked={status} onChange={() => setStatus(!status)} />
                    </div>
                    <button className="btn btn-primary" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
