import React from 'react'
import { useSelector } from 'react-redux';
import Contact from "./Contact"

export default function Contacts() {
    const getContacts = useSelector(state => state.contact.contacts);
    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th >#</th>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Email</th>
                        <th >Phone Number</th>
                        <th >Status</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getContacts.map((contact ,i) => (
                            <Contact contact={contact} lineCount={i} key={i} />
                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}
