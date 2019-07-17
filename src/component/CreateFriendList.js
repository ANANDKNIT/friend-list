import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/FriendListActions";
import { Card } from "@material-ui/core";

let id = 10;

const TweetUI = props => {
  //  React Hook useState instead of state
  const [friendName, setFriendName] = React.useState("");

  const handleChange = event => {
    const value = event.target.value;
    setFriendName(value);
    if (value && (event.keyCode === 13 || event.key === "Enter")) {
      handleAddFriend(value);
    }
  };

  const handleAddFriend = value => {
    let listComments = [];
    listComments = [
      ...props.friendsList,
      { id: id++, friendName: value, favourite: false, gender: "" }
    ];
    props.addFriend(listComments);
    setFriendName("");
  };

  return (
    <Card className="card">
          <input
            type="text"
            id="friend-name"
            placeholder="Type the name of a friend"
            value={friendName}
            onChange={handleChange}
            onKeyPress={handleChange}
            className="text-field"
          />
    </Card>
  );
};

const mapStateToProps = state => {
  const friendsList = state.friendsList;
  return { friendsList };
};

const mapDispatchToProps = dispatch => {
  return {
    addFriend: value => dispatch({ type: ActionTypes.ADD_FRIEND, value })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetUI);
