import React from 'react'
import Analytics from './Analytics'
import SettingPage from './SettingPage'
import  Calender from './Calender'

function GreedyGame() {

    const [greedydata, analytics] = Analytics()
    // const [date, hackValue, value, disabledDate,onOpenChange] = Calender()

    const numberWithCommas = ((x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })

    const DateCount = ((analytics) => {
        var count = 0
        for(let i=0; i<analytics.length;i++ ) {
            for(let j=0; j<analytics[i].length;j++){
                count++
            }
            break;
        }
        return count
    })

    const AppCount = ((analytics) => {
        var count = 0
        for(let i=0; i<analytics.length; i++) {
            for(let j=0; j<analytics[i].length;j++){
            count++
            }
    }
        return count
    })

    const AddDatas = ((analytics, target) => {
        var sum = 0
        analytics.slice(0,1).map((home) => {
            // console.log("d----", home)
            return home.map((element) => {
                if("responses" === target){             
                    sum += element.responses
                } else if("requests"===target){
                    sum += element.requests
                }else if("impressions"=== target){
                    sum += element.impressions
                }else{
                    sum += element.clicks
                }
            })
        })
        if(sum > 999 && sum < 1000000){
            return (sum/1000).toFixed(1) + 'K';  
        }else if(sum > 1000000){
            return (sum/1000000).toFixed(1)+ 'M'; 
        }else if(sum < 900){
            return sum; 
        }
        })

        const RevenueDataAdd = ((analytics, target) =>{
            let sum = 0
            analytics.slice(0,1).map((home) => {
                // console.log("d----", home)
                return home.map((element) => {
                    if("revenue" === target){             
                        sum += element.revenue
                    } 
                })
            })
            return ("$"+numberWithCommas(sum.toFixed(0)))
        })

        const FillRateCRTData = ((analytics, target) =>{
            let sum = 0
            analytics.slice(0,1).map((home) => {
                // console.log("d----", home)
                return home.map((element) => {
                    if("responses" === target){             
                        sum += element.responses
                    } else if("requests"===target){
                        sum += element.requests
                    }else if("impressions"===target){
                        sum += element.impressions
                    }else{
                        sum += element.clicks
                    }
                })
            })
            return sum
        })
        const RemoveCoulun = ((data)=>{
    })
    return (   
        <div >
            <h1>Analytics</h1>
            {/* <input className="dateBox" type="date" value="{}"/> */}
            <Calender/>
            <button className="btn" type='submit' onClick={SettingPage}><img src='../image/setting-icon.png'/> Settings</button><br/>
             
            <div className="box">
                <h3>Dimensions and Matrics</h3>
                <button className="btn-text" >Date</button>&nbsp;
                <button className="btn-text">App</button>&nbsp;
                <button className="btn-text">Click</button>&nbsp;
                <button className="btn-text">Ad Requests</button>&nbsp;
                <button className="btn-text">Ad Responses</button>&nbsp;
                <button className="btn-text">Impressions</button>&nbsp;
                <button className="btn-text">Revenue</button>&nbsp;
                <button className="btn-text">Fill Rate</button>&nbsp;
                <button className="btn-text">CRT</button><br/>&nbsp;
                <div className="change">
                <button className="btn-color">Close</button> &nbsp;
                <button className="btn-color">Apply Changes</button>
                </div>
            </div>
            
        <table id="myTable" className="table" >
        <thead>
            <tr>
                <th><img src="../image/filter-icon.png"/> <br /> Date &nbsp; <br/>
                    <samp>{DateCount(analytics)}</samp> 
                </th>
                <th><img src="../image/filter-icon.png"/> <br />App &nbsp; <br/>
                    <samp>{AppCount(analytics)}</samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br /> Requests&nbsp; <br/>
                    <samp>{AddDatas(analytics, "requests")}</samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br /> Responses&nbsp; <br/>
                    <samp>{AddDatas(analytics, "responses")}</samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br /> Impressions&nbsp; <br/>
                    <samp>{AddDatas(analytics, "impressions")}</samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br /> Clicks&nbsp; <br/>
                    <samp>{AddDatas(analytics, "clicks")}</samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br /> Revenue&nbsp; <br/>
                    <samp>{RevenueDataAdd(analytics, "revenue")} </samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br />Fill Rate&nbsp; <br/>
                    <samp>{(FillRateCRTData(analytics, "requests")/FillRateCRTData(analytics, "responses") * 100).toFixed(2)}% </samp>
                </th>
                <th><img src="../image/filter-icon.png"/> <br />CTR&nbsp; <br/>
                    <samp>{(FillRateCRTData(analytics, "clicks")/FillRateCRTData(analytics, "impressions") * 100).toFixed(2)}% </samp>
                </th>
            </tr>
        </thead>
     
        <tbody>
            { 
            analytics.slice(0,1).map((home) => {
                return home.map((element) => {
                    return (
                        <tr>
                        <td>{new Date(element.date).toDateString()} </td>
                        <td>{ 
                            
                            greedydata.map((data)=>{
                                if(data.app_id === element.app_id){
                                    if(data.app_name === "Panda Draw"){
                                        return (
                                            <>
                                            <img src='../image/Panda Draw.jpg'/>
                                            data.app_name
                                            </>
                                        )
                                    }else if(data.app_name === "Number Ninja"){
                                        return (
                                            <>
                                            <img src='../image/Number Ninja.jpg'/>
                                            data.app_name
                                            </>
                                        )
                                    }else if(data.app_name === "Word Crush"){
                                        return (
                                            <>
                                            <img src='../image/Word Crush.png'/>
                                            data.app_name
                                            </>
                                        )
                                    }else if(data.app_name === "Brain Quiz"){
                                        return (
                                            <>
                                            <img src='../image/Brain Quiz.jpg'/>
                                            data.app_name
                                            </>
                                        )
                                    }else {
                                        return (
                                            <>
                                            <img src='../image/Age Calculator.png'/>
                                            data.app_name
                                            </>
                                        )
                                    }
                                    
                                }
                            })
                            }</td> 
                        <td>{numberWithCommas(element.requests)} </td>
                        <td>{numberWithCommas(element.responses)} </td>
                        <td>{numberWithCommas(element.impressions)} </td>
                        <td>{numberWithCommas(element.clicks)} </td>
                        <td>${(element.revenue).toFixed(2)} </td>
                        <td>{(element.requests/element.responses * 100).toFixed(2)}% </td>
                        <td>{(element.clicks/ element.impressions * 100).toFixed(2)}% </td> 
                        </tr>           
                        )
                    })
                })
            }
        </tbody>
    </table>
</div>   
)
}

export default GreedyGame


