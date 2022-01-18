import React from 'react'
import { Link, Outlet } from 'react-router-dom';

// we could separate un LayoutRoute and Layout
// but this project is too small for now
export const Layout = ({ children }) => {
    let url = "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=" + process.env.REACT_APP_CLIENT_ID + "&redirect_uri=http://172.18.0.1:3000/callbackTwitter&scope=like.read%20like.write&state=state&code_challenge=challenge&code_challenge_method=plain";

    return (
        <>
            <h1>{process.env.REACT_APP_API_KEY}</h1>
            <nav>
                <Link to="/callbackTwitter">Callback</Link>{" "}
                <a href={url} target="_blank">
                    Foin
                </a>{" "}
                <Link to="/orderManually">Order Manually</Link>{" "}
                <Link to="/orderByHashtags">Order by Hashtags</Link>{" "}
            </nav>
            <Outlet/>
        </>
    );
}
