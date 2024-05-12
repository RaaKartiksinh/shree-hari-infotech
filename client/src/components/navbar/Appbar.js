import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  styled,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectLoggedInUserToken } from "../../features/Auth/authSlice";
import Button from "../Comman/Buttons/Button";
import CreateSiteModel from "../Models/CreateSiteModel";
import { useState } from "react";
import path from "../../app/common/path";
import CreateSupervisorModel from "../Models/CreateSupervisorModel";

function NavAppBar() {
  const dispatch = useDispatch();
  const navigater = useNavigate();
  const location = useLocation();

  const isAdminAvailable = useSelector(selectLoggedInUserToken);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openSiteModel, setOpenSiteModel] = useState(false);
  const [openSupervisorModel, setOpenSupervisorModel] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(logOut());
    navigater("/login");
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "0px" }}>
      <Toolbar sm={{ xs: { padding: "0px" } }} style={{ padding: "0px" }}>
        <Box variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-10 w-auto"
              src="images/logo.png"
              alt="Your Company"
            />
            <h2 className="text-4xl mt-2 ms-2 text-primary  font-bold">
              SiteGuard
            </h2>
          </div>
        </Box>

        <Box
          variant="div"
          component="div"
          sx={{ marginRight: "10px" }}
          className="max-lg:block max-sm:hidden"
        >
          {location.pathname === path.siteManagementList && (
            <Button onClick={() => setOpenSiteModel(true)}>Create Site</Button>
          )}

          {location.pathname === path.supervisorManagementList && (
            <Button onClick={() => setOpenSupervisorModel(true)}>
              Create Supervisor
            </Button>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Stack direction="row" spacing={2}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      sx={{ bgcolor: "darkgreen", width: 50, height: 50 }}
                      alt={isAdminAvailable?.email?.split("@")[0] || "Unknown"}
                      src={isAdminAvailable?.image || "n/a"}
                    />
                  </StyledBadge>
                </Stack>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to={"/"}>
                  <Typography textAlign="center">ProFile</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={handleLogout}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
      <CreateSiteModel
        openSiteModel={openSiteModel}
        setOpenSiteModel={setOpenSiteModel}
      />
      
      <CreateSupervisorModel
        setOpenSupervisorModel={setOpenSupervisorModel}
        openSupervisorModel={openSupervisorModel}
      />
      {/* MOdel  */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreatesiteModel onClose={handleClose} />
      </Modal> */}
      {/* <Modal
        open={openModel}
        onClose={handleSupervisorClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateSupervisorModel onClose={handleSupervisorClose} />
      </Modal> */}
    </Box>
  );
}

// style for Avtar
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 1,
    },
  },
}));

export default NavAppBar;