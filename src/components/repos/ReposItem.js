import React from 'react';
import PropTypes from 'prop-types';

function ReposItem({ repo }) {
    return (
        <div className='border rounded mt-2 p-2'>
            <h5>
                <a href={repo.html_url}>{repo.name}</a>
            </h5>
        </div>
    );
}

ReposItem.propTypes = {
    repo: PropTypes.object.isRequired
};


export default ReposItem;