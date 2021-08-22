import { useState } from 'react'

function List({ contactsList }) {
    const [filterText, setFilterText] = useState("")

    const filtred = contactsList.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        })
    })

    return (

        <div>
            {<input
                type="text"
                onChange={(e) => setFilterText(e.target.value)}
                value={filterText}
                placeholder="Filter Contect"
                className="form-control"
                id="exampleInputEmail1"
            ></input>}

            <ul className="list-group">
                {
                    filtred.map((contact, i) =>
                        <li className="list-group-item" key={i}>{contact.fullname}</li>
                    )
                }
            </ul>
        </div>

    )
}

export default List
