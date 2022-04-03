import React from "react";
import styles from "./Spinner.module.css";

export default function Spinner(props) {
    return (
        <div className={styles.spinner_container}>
     
            <svg width="100%"  viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g id="spinner">
                    <circle id="bottom" cx="138" cy="138" r="114" stroke="#DBDBDB" stroke-width="25" />
                    <circle id="upper" cx="138" cy="138" r="123" stroke="#4B59f7" stroke-width="50" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="473 140" style={{animationDuration:props.speed+"s"}}/>
                </g>
            </svg>
        </div>
    )
}