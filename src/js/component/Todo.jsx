import React, { useState } from "react";


export default function Todo(props) {
    const [showDelete, setShowDelete] = useState(false);
    
    const { todo } = props;

    return (
        <li
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <span>{todo}</span>

            {showDelete && (
                <span>X</span>
            )}
        </li>
    )
}