import React, { useState } from "react";
import App from './App';

export default (props) => {
    return (
        <App
            { ...props }
            user={useState({name: 'guest'})} // I think this is a no-no?

        />
    );
}
