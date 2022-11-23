import React, { Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './BToHub.css';
import { Link, useNavigate } from 'react-router-dom';

function BToHub() {
    return (
        <Fragment>
            <nav className='continer-fluid'>
                <div className='topbar'>
                    <Link to={`/`}>
                        <Button variant='primary'>Back to Hub</Button>
                    </Link>
                </div>
            </nav>
        </Fragment>
    )
}

export default BToHub;