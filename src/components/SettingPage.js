import React from 'react'
// import GreedyGame from './GreedyGame'

function SettingPage() {
    return (
        <div>
        <h1>Analytics</h1>
            <input class="dateBox" type="date" value="{}"/>
            <button class="btn"><img src='../image/setting-icon.png'/> Settings</button>
            <h2>Hey!Something's off <br/>
                We couldn't display the give data
            </h2>
            <p>try changing your filter or selecting a different date</p>
            
        </div>
    )
}

export default SettingPage
