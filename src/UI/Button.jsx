import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

function Button({ text = 'View More', onClick, className = '', href = '#' }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`inline-flex gap-3 items-center bg-black text-white py-2 px-4 rounded-lg ${className}`}>
            {text}
            <FaArrowRight />
        </a>
    )
}

export default Button