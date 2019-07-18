import React from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/actions/FriendListActions";
import { Card, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavouriteSelectedIcon from "@material-ui/icons/Grade";
import FavouriteIcon from "@material-ui/icons/GradeOutlined";
import ManageGender from "./Gender";
import Pagination from "./Pagination";

const ShowFriends = props => {
  // return null if friend list is empty
  if (!props.friendsList) {
    return null;
  }
  const end = props.pagination * 3;
  const start = end - 3;
  const showPageValues = props.friendsList.slice(start, end);

  return (
    <Card className="card">
      {showPageValues.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <div className="grid-container">
              <div>
                <Typography variant="h6" component="h6">
                  {item.friendName}
                </Typography>
                <Typography variant="body2">xxx friends in common</Typography>
              </div>
              <div className="button-wrapper">
                <IconButton
                  className="friend-button"
                  onClick={() => props.handleFavourite(item)}
                >
                  {item.favourite ? (
                    <FavouriteSelectedIcon />
                  ) : (
                    <FavouriteIcon />
                  )}
                </IconButton>
                <IconButton
                  className="friend-button"
                  onClick={() =>
                    props.handleDelete(item.id, showPageValues.length)
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            <ManageGender item={item} />
          </React.Fragment>
        );
      })}
      {props.friendsList.length > 3 
        && <Pagination item={props.friendsList} />
        }
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    friendsList: state.friendsList,
    pagination: state.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: (id, changePagination) =>
      dispatch({
        type: ActionTypes.DELETE_FRIEND,
        id: id,
        setPagination: changePagination
      }),
    handleFavourite: item =>
      dispatch({ type: ActionTypes.CHANGE_FAVOURITE_LIST, item })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowFriends);
