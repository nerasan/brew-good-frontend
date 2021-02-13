import React from "react"

const Layout = (props) => {
    return (
        <>
            <div>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/register">sign up</a></li>
                    <li><a href="/login">login</a></li>
                </ul>
            </div>

            <div>
                {props.children}
            </div>
        </>

    )
}

export default Layout