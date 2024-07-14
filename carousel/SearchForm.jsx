
import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const SearchForm = () => {
  return (
    <div className="search-form p-3">
      <h4>Find your right car</h4>
      <div className="btn-group mb-3">
        <Button variant="outline-primary" className="active">New Car</Button>
        <Button variant="outline-secondary">Used Car</Button>
      </div>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalBudget">
          <Form.Label column sm={3}>By Budget</Form.Label>
          <Col sm={9}>
            <Form.Control as="select">
              <option>Select Budget</option>
              <option>Below 5 Lakh</option>
              <option>5-10 Lakh</option>
              <option>10-20 Lakh</option>
              <option>Above 20 Lakh</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalVehicleType" className="mt-3">
          <Form.Label column sm={3}>All Vehicle Types</Form.Label>
          <Col sm={9}>
            <Form.Control as="select">
              <option>Select Vehicle Type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Convertible</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Button type="submit" className="mt-3" variant="primary">Search</Button>
      </Form>
      <a href="#" className="d-block mt-3">Advanced Search</a>
    </div>
  );
};

export default SearchForm;
