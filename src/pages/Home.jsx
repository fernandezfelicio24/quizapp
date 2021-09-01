import React from 'react'
import '../styles/Home.css'
import bannerimage from '../assets/quiz.svg'


function Home() {
    return (
        <div className="content">
            <div className="settings">
                <span style={{fontSize:30 }}>
                    Quiz Settings
                </span>
            </div>
            <img src={bannerimage} className="banner" alt="quiz img" />
        </div>
    )
}

export default Home
