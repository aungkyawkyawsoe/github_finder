import React, {Component, Fragment} from 'react';
import Search from "../../components/users/Search";
import Users from "../../components/users/Users";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Search/>
                <Users />
            </Fragment>
        );
    }
}

export default Home;