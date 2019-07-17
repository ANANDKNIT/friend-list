import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/FriendListActions";
import { Card, Typography, Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavouriteSelectedIcon from "@material-ui/icons/Grade";
import FavouriteIcon from "@material-ui/icons/GradeOutlined";
import ManageGender from "./Gender";
const ShowFriends = props => {
  // return null if friend list is empty
  if (!props.friendsList) {
    return null;
  }

  return (
    <Card className="card">
      {props.friendsList.map(item => {
        return (
          <Grid container key={item.id} className="grid-container">
            <Grid item xs={8}>
              <Typography variant="h6" component="h6">
                {item.friendName}
              </Typography>
              <Typography variant="body2">xxx friends in common</Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                className="friend-button"
                onClick={() => props.handleUpdate(item)}
              >
                {item.favourite ? <FavouriteSelectedIcon /> : <FavouriteIcon />}
              </IconButton>
            </Grid>
            <Grid item xs={2}>
              <IconButton
                className="friend-button"
                onClick={() => props.handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
            <ManageGender item={item} />
          </Grid>
        );
      })}
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    friendsList: state.friendsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: id => dispatch({ type: ActionTypes.DELETE_FRIEND, id }),
    handleUpdate: item => dispatch({ type: ActionTypes.CHANGE_FAVOURITE_LIST, item })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowFriends);
