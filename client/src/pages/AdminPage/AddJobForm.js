import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class AddJobForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleTitle"> Job Title</Label>
          <Input
            type="text"
            name="jobtitle"
            id="examplejobtitle"
            placeholder="Enter job title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCompany">Company</Label>
          <Input
            type="text"
            name="company"
            id="exampleCompany"
            placeholder="Company placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleLocation">Location</Label>
          <Input
            type="text"
            name="location"
            id="exampleLocation"
            placeholder="Location placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>Permanent</option>
            <option>Contract</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampledescription">Description</Label>
          <Input type="description" name="text" id="exampleText" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleapplication"> Application email/URL</Label>
          <Input
            type="text"
            name="application"
            id="exampleapplication"
            placeholder="Enter an Email address or website URL"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default AddJobForm
