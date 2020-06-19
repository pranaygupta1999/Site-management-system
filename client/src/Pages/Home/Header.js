import React, { useState, useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, Menu, MenuItem } from "@material-ui/core";
import { Menu as MenuIcon, DashboardRounded as DashboardIcon, HomeWorkRounded as ProjectsIcon, MonetizationOnRounded as ExpensesIcon, BuildRounded as ActivitiesIcon, AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext"


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
  const { loggedIn } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // =========== Handlers ================
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    handleClose();
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
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem button={false} >Hi, {loggedIn.name}</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>

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