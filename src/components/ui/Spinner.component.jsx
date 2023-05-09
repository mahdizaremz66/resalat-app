import React from 'react';
import spinnrtImg from '../../assests/images/Spinner.gif'

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <img src={spinnrtImg} alt="spinner" />
        </div>

    );
};

export default Spinner;