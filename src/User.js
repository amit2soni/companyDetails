import React, { useEffect, useState } from "react"
import {Table} from 'react-bootstrap'
import './App.css';
const User = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://demo2211087.mockable.io/mock",{method:"POST"})
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.companies)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Company Details</h1>
      <br></br>
      <Table striped variant="light" striped bordered hover size="xm" className="table" >
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Status</td>
        </tr>
        {
          users.map((item,i)=>
         
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
        <td>{item.status}</td>
        </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  )
}

export default User;