import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem= ({user:{login,avatar_url,html_url}}) => {
        return (
            <div className="card text-center">
                <img src={avatar_url} className="round-img" alt="...." style={{ width:'60px' , height:'60px'}}></img>
                <h2>{login}</h2>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-sm btn-dark">More</Link>
                </div>
            </div>
        )
}

UserItem.prototype={
    user: PropTypes.object.isRequired,
}

export default UserItem
