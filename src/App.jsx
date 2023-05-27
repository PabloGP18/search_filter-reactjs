import { useState } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import { data } from './data'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [search, setSearch] = useState('')
  console.log(search)

  return (
    <div className='App'>
      <Container>
        <h1 className='text-center mt-4'>Contact Keeper</h1>
        <Form className='sticky-top'>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search contacts'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((contact) => {
                const lowerCaseSearch = search.toLowerCase()

                return lowerCaseSearch === ''
                  ? contact
                  : contact.first_name
                      .toLowerCase()
                      .includes(lowerCaseSearch) ||
                      contact.last_name
                        .toLowerCase()
                        .includes(lowerCaseSearch) ||
                      contact.email.toLowerCase().includes(lowerCaseSearch)
              })
              .map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.first_name}</td>
                  <td>{contact.last_name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default App
