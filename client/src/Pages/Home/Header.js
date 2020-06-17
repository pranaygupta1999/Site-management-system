import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: 30
  },
  menuItem:{
    textDecoration:"none"
  },
  "menuItem:hover":{
    textDecoration:"none"
  }
});

export default function (props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const menuItems = ["Projects", "Activities", "Expenses"]
  const classes = useStyles();
  return (
    [
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(!isDrawerOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="flex-grow-1">Site Management System</Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>,
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <List component="nav" className={classes.list}>
          {menuItems.map((menu, index) => {
            return (
              <ListItem key={index} button  >
                <ListItemText><Link  className={classes.menuItem} color="inherit" to={"/" + menu.toLowerCase()}>{menu}</Link></ListItemText>
              </ListItem>
            );
          })}

        </List>
      </Drawer>
    ])
}