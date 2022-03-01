import React from 'react'

const contact = (props) => {
    console.log(props)
    return (
        <>
            <div className='list-group' >
                {props.arr.map(item => {
                    return (
                        <>
                            <div className='list-group-item'>
                                <p> {item.name} <br />  {item.email}
                                    <button type="button" onClick={() => props.handleDelete(item.email)} class="btn btn-danger ms-3">Delete</button>
                                    <button type="button" class="btn btn-primary ms-2" onClick={() => props.handleEdit(item.email)} >Edit</button>


                                </p>
                            </div>


                        </>
                    )
                })}</div>
        </>
    )
}

export default contact