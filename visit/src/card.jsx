import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <>
        <div className="cards">
            <div className="card">
                <img src="" alt="pic" className="card_img" />
                <div className="card_info">
                    <span className="card_category"> Netflix Series</span>
                    <h3 className="card_title"> Hotel Yak and Yeti </h3>
                    <a href="" target="_blank">
                        <button> Details</button>
                    </a>
                </div>
            </div>
        </div>


    </>,
    document.getElementById("root")
)

function card() {
    return (
        <div>
            
        </div>
    )
}

export default card
