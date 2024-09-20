import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

export default function Stars(props) {
    const [rating, setRating] = useState(props.stars)
    const [rateColor, setColor] = useState(null)

    return (
        <>
            {[...Array(5.0)].map((star, index) => {
                const currentRate = index + 1
                return (
                    <label key={index}>
                        <FaStar color={currentRate <= (rateColor || rating) ? "var(--warning)" : "gray"} />
                    </label>
                )
            })}
        </>
    )
}
