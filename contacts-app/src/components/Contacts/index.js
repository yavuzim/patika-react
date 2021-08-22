import { useState, useEffect } from 'react'
import List from './List/index'
import Form from './Form/index'

export default function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Kemal Yavuz",
            phone_number:"123456789"
        },
        {
            fullname:"Alp",
            phone_number:"123456789"
        },
        {
            fullname:"Ahmet",
            phone_number:"123456789"
        },
        {
            fullname:"Koray",
            phone_number:"123456789"
        },
    ])

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div className="container">
            <List contactsList={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

