import React from "react"
import "./Header.css";


export default function Header(){
    return(
        <div className="header">
        <a href="/gmail">Gmail</a>
        <a href="/images">Images</a>
        <div className="menu"></div>
        <div className="profile"></div>
        </div>
    )
}