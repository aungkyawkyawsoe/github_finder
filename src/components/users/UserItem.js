import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const UserItem = ({user: {avatar_url, login, html_url}}) => {
    return (
        <div className='border shadow-sm border rounded p-2 text-center'>
            <img src={avatar_url} alt=""
                 className="mx-auto rounded-circle" style={{width: 60}}/>
            <h4>{ login }</h4>

            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;