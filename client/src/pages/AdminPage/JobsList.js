import React from 'react'
import { Table, Button } from 'reactstrap'

const AdminList = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Position Title</th>
          <th>Company Name</th>
          <th>Category</th>
          <th>Job Type</th>
          <th>Expires</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td> Front End developer</td>
          <td>Microsoft</td>
          <td>Programming</td>
          <td>Full-Time</td>
          <td>2019/05/06</td>
          <td>
            <Button color="primary">Edit</Button>{' '}
            <Button color="danger">Delete</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default AdminList
