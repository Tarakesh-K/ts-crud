import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import StudentDetails from './StudentDetails';
import BToHub from './BToHub';
import { Link, useNavigate } from 'react-router-dom';

function Student() {

  let history = useNavigate();

  const handleEdit = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
  }

  const handleDelete = (id) => {
    var index = StudentDetails.map(function (e) {
      return e.id;
    }).indexOf(id);
    StudentDetails.splice(index, 1);
    history('/studentdetails');
  }

  return (
    <Fragment>
      <BToHub />
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              StudentDetails && StudentDetails.length > 0
                ?
                StudentDetails.map((item) => {
                  return (
                    <tr>
                      <td>
                        {item.Name}
                      </td>
                      <td>
                        {item.Age}
                      </td>
                      <td>
                        <Link to={`/edit1`}>
                          <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                      </td>
                    </tr>
                  )
                })
                :
                "No data available"
            }
          </tbody>
        </Table>
        <br />
        <Link className='d-grip gap-2' to="/createstud">
          <Button size='lg'>Create</Button>
        </Link>
      </div>
    </Fragment>
  )
}

export default Student;