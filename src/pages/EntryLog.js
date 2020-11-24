import React,{useState,useEffect} from 'react'

import '../css/page-level/EntryLog.css';

import sendForm from '../apis/test-backend';

import Log from '../components/Log';

export default function EntryLog() {

    const [logs, setLogs] = useState([["","","","",0,0]]);

    const getLogs = async () => {
        const response = await sendForm.get('/get-logs');

        setLogs(response.data);
    }

    useEffect(() => {

        getLogs();

    }, [])
    
    console.log(logs);

    return (
        <div className='el-page-cont'>
            <Log logs={logs}/>
        </div>
    )
}
