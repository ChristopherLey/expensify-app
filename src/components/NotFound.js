import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div>
        <h1>404</h1>
        <h2>This is not the web page you are looking for.</h2>
        <Link to="/">Go Home!</Link>
    </div>
);

export default NotFound;