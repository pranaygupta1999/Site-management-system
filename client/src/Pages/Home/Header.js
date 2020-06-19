import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Menu as MenuIcon, DashboardRounded as DashboardIcon, HomeWorkRounded as ProjectsIcon, MonetizationOnRounded as ExpensesIcon, BuildRounded as ActivitiesIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";


const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: 30
  },
  menuItem: {
    textDecoration: "none"
  },
  "menuItem:hover": {
    textDecoration: "none"
  }
});

function Header(props) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  let location = useLocation();
  let history = useHistory();
  const menuItems = [{ text: "Dashboard", icon: <DashboardIcon /> }, { text: "Projects", icon: <ProjectsIcon /> }, { text: "Activities", icon: <ActivitiesIcon /> }, { text: "Expenses", icon: <ExpensesIcon /> }];
  const classes = useStyles();
  const title = location.pathname.slice(1).toUpperCase();

  function logout() {
    localStorage.clear();
    history.push("/");
    props.onLogout(false);
  }
  function routeTo(route) {
    setDrawerOpen(false);
    history.push("/" + route);
  }

  return (
    [
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(!isDrawerOpen)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="flex-grow-1">{title}</Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar >,
      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <List component="nav" className={classes.list}>
          {menuItems.map((menu, index) => {
            return (
              <ListItem key={index} button onClick={() => routeTo(menu.text.toLocaleLowerCase())} >
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText>{menu.text}</ListItemText>
              </ListItem>
            );
          })}

        </List>
      </Drawer>
    ])
}
export default Header;