import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/FriendListActions";
import { Card, TextField } from "@material-ui/core";

let id = 10;

const TweetUI = props => {
  //  React Hook useState instead of state
  const [friendName, setFriendName] = React.useState("");
  const handleChange = event => {
    const value = event.target.value;
    // set data Using Hook
    setFriendName(value);
    //friend name should not be empty and on press of enter add friend to list
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
    // After submit Clear textarea
    setFriendName("");
  };

  return (
    <Card className="card">
      <TextField
        id="standard-name"
        placeholder="Type the name of a friend"
        value={friendName}
        onChange={handleChange}
        margin="normal"
        fullWidth
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

export default connect(mapStateToProps, mapDispatchToProps)(TweetUI);
