import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './AdminHeader.scss'
import AddJobForm from './AddJobForm'

class AdminHeader extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  render() {
    return (
      <div className="admin-header">
        <h4>JOBS ADMIN PAGE</h4>
        <div>
          <Button color="primary" onClick={this.toggle}>
            Add New
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Add New Job</ModalHeader>
            <ModalBody>
              <AddJobForm />
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}

export default AdminHeader
