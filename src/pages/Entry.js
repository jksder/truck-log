import React from 'react'

import '../css/page-level/Entry.css';

import SubmitForm from '../components/SubmitForm';

import send_test from '../apis/test-backend';

export default function Entry() {

    const sendForm = async (dataObj) => {
        

        var response = await send_test.post('/enter-log', {
            entry: dataObj
        });

        alert(response);
        
    }

    return (
        <div className='entry-cont'>
            <SubmitForm sendForm={sendForm}/>
        </div>
    )
}
