import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialFormValues)

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (form.fullname === "" || form.phone_number === "") return false

        console.log(form);
        addContact([...contacts, form])


    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        value={form.fullname}
                        onChange={onChangeInput}
                        name="fullname"
                        placeholder="Full Name"
                        className="form-control"
                        id="exampleInputEmail1"
                    >
                    </input>
                    <input
                        type="text"
                        value={form.phone_number}
                        onChange={onChangeInput}
                        name="phone_number"
                        placeholder="Phone Number"
                        className="form-control"
                        id="exampleInputEmail1"
                    >
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default Form
