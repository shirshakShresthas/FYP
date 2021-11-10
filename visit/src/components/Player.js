import React from 'react';
import ReactPlayer from 'react-player';
import Iframe from 'react-iframe';

import './player.css';

function Player() {
    return (
        <div className="Player">
            <div className='head' ><h3>Experience Myagdi</h3>
            </div>

            <div className='video'>
                <Iframe url="https://www.youtube.com/embed/mfiKyFDCsl8"
                    width="80%"
                    height="600px"
                    id="myId"
                    margin-right="500px"
                    className="myClassname"
                    display="initial"
                    position="relative"
                />

            </div>
        </div>


    )
}

export default Player;




