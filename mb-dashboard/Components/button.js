import React from "react";
const Button = (title) => {
    return (<span>
        <button className="bg-blue-300 hover:bg-blue-500 text-white font-semibold py-2 px-4 border rounded-lg mr-1 mb-6">
            {title}
        </button></span>
    )
}

export default Button;