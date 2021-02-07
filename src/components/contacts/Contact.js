import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../actions/contactAction";

const Contact = ({ contact, lineCount }) => {
    const dispatch = useDispatch()
    //destruction in es6  props feach only contact
    return (
        <tr>
            <th scope="row">{lineCount + 1}</th>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{ contact.status? 'Active': 'InActive'}
            </td>
                <td>
                    <Link to={`/contacts/edit/${contact.id}`} className="">
                        <span className="material-icons">edit</span>
                    </Link>
                    {/* <Link href="" style={{ color: '#ff6e63' }} onc> */}
                    <span className="material-icons" onClick={() => dispatch(deleteContact(contact.id))}>remove_circle</span>
                    {/* </Link> */}
                </td>
        </tr>
    )
}

export default Contact
