import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static" className="friend-list-heading">
      <Toolbar>
        <Typography variant="h6">The FriendList</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
