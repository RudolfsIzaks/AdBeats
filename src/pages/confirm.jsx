import React from "react";
import '../index.css';
import { useLocation } from 'react-router-dom';

function Confirm() {
    const location = useLocation();
    const apiResponse = location.state?.response;

    return(

        <>
         <h1 className="text-white">${apiResponse.id}</h1>
        </>
    );
}


export default Confirm;