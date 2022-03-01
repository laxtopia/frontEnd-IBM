import React from 'react'
import { useState } from 'react'
import Contact from './Components/Contacts/Contact'

const App = () => {

  // states 
  const [info, setInfo] = useState([
    { name: "Ram", email: "ram@gmail.com" },
    { name: "Laxman", email: "lax@gmail.com" },
    { name: "mayank", email: "m@gmail.com" },

  ])
  const [newName, setnewName] = useState("")
  const [newEmail, setNewEmail] = useState("")

  //HAndling Submit button
  const handleContactSubmit = () => {
    if (newName === "" || newEmail === "") {
      console.log("Dont leave input forms Blank ");
    }
    else {
      setInfo([...info, { name: newName, email: newEmail }])   //setInfo method is asynchronous 
      setnewName("")
      setNewEmail("")
      // console.log(info)
    }
  }



  // HAndling NAme 
  const handleNameChange = (event) => {

    setnewName(event.target.value)
    // console.log(event.target.value);
  }
  //Handling Email 
  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
    // console.log(event.target.value);
  }

  //Handling Delete
  const handleDelete = (item) => {

    const newInfo = info.filter((el) => el.email !== item)
    setInfo(newInfo)

    // console.log(item)
    // const id = info.findIndex( (el)=>
    //   el.email == item )
    // console.log(id)
    // info.splice( id ,1 )
    // console.log(info)
    // setInfo( [...info] )
  }


  // handling edit 
  const handleEdit = (emailId) => {
    const tempInfo = [...info]
    const index = tempInfo.findIndex(el => el.email == emailId)
    if (newName != "" && newEmail != "") {
      tempInfo[index].name = newName
      tempInfo[index].email = newEmail
      setInfo(tempInfo)
      setnewName("")
      setNewEmail("")
    }
  }


  return (
    <>
      <div className="container">
        <form action="">
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Full Name" aria-label="First name" onChange={handleNameChange}
                value={newName} />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange}
                value={newEmail} />
            </div>
          </div>
          <button type="button" className="btn btn-primary mt-3" onClick={handleContactSubmit} >Add Contact</button>
        </form>

        <Contact arr={info} handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>



    </>
  )
}

export default App