import React,{useEffect} from 'react'
import "./button.css"

export default function Button(props) {
        // --------------------------------------Button Js----------------------------------------------------------
        useEffect(() => {
            const btn = document.querySelector('.btn');
            if (btn) {
                btn.addEventListener('click', (evt) => {
                    evt.target.classList.add('loading');
                    setTimeout(() => {
                        evt.target.classList.remove('loading');
                    }, 3000);
                });
            }
        }, []); 
  return (
    <>
       {/* ---------------------------Submit Button------------------------------ */}
       <button className="btn" onClick={props.onClick}> 
                    <i>
               <img src="./icons8-send-24 (1).png" alt="" />
                    </i>
                    <span className="text">
                        Fetch
                    </span>
                    <span className="loading-animate"></span>
                </button>
    </>
  )
}
