import React from 'react'
import { Link } from 'react-router-dom'


const StipeCard = () => {

    return (
        <div>
            <Link to={`/stripe/${id}`}>
                <TripCard trip={trip} />
            </Link>
        </div>
    )
}

export default StipeCard;