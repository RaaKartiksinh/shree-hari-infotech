import React from "react";
import path from "./../../app/common/path";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { MdDashboardCustomize } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { ListItemIcon as MuiListItemIcon, styled } from "@mui/material";
import { BsFillBuildingsFill } from "react-icons/bs";
import { selectLoggedInUserToken } from "../../features/Auth/authSlice";
import { useSelector } from "react-redux";

// style
const CustomListItemIcon = styled(MuiListItemIcon)(({ theme }) => ({}));

const listStyle = {
  borderRadius: "8px",
  listStyle: "none",
  margin: "2px 9px",
  padding: "0",
  position: "relative",
  paddingTop: "4px",
  paddingBottom: "4px",
  transition: "color 1s",
  // eslint-disable-next-line no-dupe-keys
  transition: "all 0.8s",
};

const listStyleSelected = {
  backgroundColor: "#f2f2f2",
  color: "black",
  borderRadius: "8px",
  listStyle: "none",
  margin: "2px 9px",
  padding: "0",
  position: "relative",
  paddingTop: "4px",
  paddingBottom: "4px",
  transition: "background-color color 1s",
  // eslint-disable-next-line no-dupe-keys
  transition: "all 1.5s",
};

const listIconsSelected = {
  colot: "black",
  fontSize: "23px",
  transition: "all 0.2s",
};
const listIcons = {
  color: "white",
  fontSize: "23px",
  transition: "all 0s 0.3s",
};

const DrawerMenu = () => {
  const location = useLocation();
  const isAdminAvailable = useSelector(selectLoggedInUserToken);
  console.log(isAdminAvailable);

  return (
    <div className="">
      <Toolbar className="text-center text-white font-bold text-xl">
        welcome{" "}
        {isAdminAvailable && isAdminAvailable.name
          ? isAdminAvailable.name.split(" ")[0]
          : isAdminAvailable && isAdminAvailable.email
          ? isAdminAvailable.email.split("@")[0]
          : "admin"}
      </Toolbar>
      <Divider
        className="text-white"
        sx={{
          "&.MuiDivider-vertical": {
            backgroundImage:
              "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0))",
          },
          margin: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.08)",
          borderBottomWidth: "thin",
          backgroundColor: "transparent",
          background:
            "linear-gradient(180deg, rgb(86 88 90 / 4%) 37%, rgb(175 176 176 / 59%) 76%);",
          height: "0.0625rem",
          marginY: "1rem",
          opacity: 0.25,
        }}
      />

      {/* List of Menus  */}
      <List
        style={
          location.pathname === path.dashboard ? listStyleSelected : listStyle
        }
      >
        <Link to={path.dashboard}>
          <ListItem disablePadding>
            <ListItemButton>
              <CustomListItemIcon>
                <MdDashboardCustomize
                  style={
                    location.pathname === path.dashboard
                      ? listIconsSelected
                      : listIcons
                  }
                />
              </CustomListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
  
      <List
        style={
          location.pathname === path.siteManagementList
            ? listStyleSelected
            : listStyle
        }
      >
        <Link to={path.siteManagementList}>
          <ListItem disablePadding>
            <ListItemButton>
              <CustomListItemIcon>
                <BsFillBuildingsFill
                  style={
                    location.pathname === path.siteManagementList
                      ? listIconsSelected
                      : listIcons
                  }
                />
              </CustomListItemIcon>
              <ListItemText primary={"Site"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <List
        style={
          location.pathname === path.supervisorManagementList
            ? listStyleSelected
            : listStyle
        }
      >
        <Link to={path.supervisorManagementList}>
          <ListItem disablePadding>
            <ListItemButton>
              <CustomListItemIcon>
                <MdDashboardCustomize
                  style={
                    location.pathname === path.supervisorManagementList
                      ? listIconsSelected
                      : listIcons
                  }
                />
              </CustomListItemIcon>
              <ListItemText primary={"Supervisor"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default DrawerMenu;
