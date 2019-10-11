import React, {useState, useContext} from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const { searchUsers, clearUsers, users } = githubContext;
    const { setAlert } = alertContext;

    const onSubmit = e => {
        e.preventDefault();
        if (text === "") {
            setAlert('Please enter something', 'danger');
        } else {
            searchUsers(text);
            setText('');
        }
    };

    const onChange = e => setText( e.target.value);


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <input type="text"
                           name='text'
                           placeholder="&#128269; search users..."
                           className='form-control mb-2'
                           value={text}
                           onChange={onChange}
                    />
                    <button type="submit" className='btn btn-dark btn-block'>
                        Search
                    </button>
                </div>
            </form>
            {
                users.length > 0 && (<button className="shadow-sm border-secondary btn btn-light btn-block mb-4"                                              onClick={clearUsers}>
                    Clear
                </button>)
            }

        </div>
    );
};


export default Search;