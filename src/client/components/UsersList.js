import React, { useEffect } from "react";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers = () => {
    const { users } = this.props;
    console.log("users in renderusers", users);
    return (
      <div>
        {users &&
          users.map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    );
  };
  render() {
    console.log("users", this.props);

    return (
      <div>
        {this.renderUsers()}
        <button onClick={() => console.log("Hi there!")}>Press me!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, { fetchUsers })(UserList);
