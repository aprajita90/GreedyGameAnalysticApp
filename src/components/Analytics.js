import {useState, useEffect} from 'react'
import axios from 'axios'
import  Calender from './Calender'
function Analytics() {
    const [greedyData, setGreedyData] = useState([])
    const [analytics, setAnalyticsData] = useState([])
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(null)
    useEffect(() => { 
        (async () => {
            try{
                const response = await fetch(
                    `http://go-dev.greedygame.com/v3/dummy/apps`
                    );
                const list = await response.json();
                // console.log("data---", list.data)
                setGreedyData(list.data); 
            }catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        })(); 
        return () => {
            setLoading(true)
            setGreedyData([]);
        }; 
    },[]);
    // console.log("deploy---",greedyData)
    useEffect(() => {
        Promise.all(
            greedyData.map((e) => {
                // console.log("app1----",e)
                console.log("app----",e.app_id)
            return axios.get( 
            `http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-06-01&endDate=2021-06-07`
            ); 
    })
    ).then((result) => {
        console.log("result", result)
            let parsedGreedy = result.map((item) => {
                // console.log("item.data", item.data.data)
                return item.data.data;

            });
            setAnalyticsData(parsedGreedy);
        });
    },[greedyData]);
    console.log("---geedydata", greedyData)
    console.log("---geedy", analytics)
   
    return [greedyData, analytics]
}

export default Analytics;
