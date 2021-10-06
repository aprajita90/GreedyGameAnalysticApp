import React from 'react';
import "./style.css";

import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/dist/rsuite.min.css'




const Calender = () => {
    console.log("DateRangePicker", DateRangePicker)
    return(

        <div className="dates">
           <DateRangePicker />  
        </div>
    )
};

export default Calender;


// ReactDOM.render(<Calender />, mountNode);