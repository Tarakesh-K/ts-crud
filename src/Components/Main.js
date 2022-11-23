import React, { Fragment } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import BToHub from './BToHub';
import { Link, useNavigate } from 'react-router-dom';

function Main() {

    let history = useNavigate();

    return (
        <div className='box'>
            <div className='main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='col-width'>
                                <Link to='/studentdetails'>
                                    <Button>Edit Students Details</Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='col-width'>
                                <Link to='/teacherdetails'>
                                    <Button>Edit Teachers Details</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;