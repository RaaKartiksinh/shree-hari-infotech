import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { CiMenuFries } from "react-icons/ci";
import Toolbar from "@mui/material/Toolbar";
import DrawerMenu from "./DrawerMenu";
// import ButtonAppBar from "../navbar/Appbar";
import { useTheme } from "@emotion/react";
import NavAppBar from "../navbar/Appbar";
import { RiGalleryFill } from "react-icons/ri";

const drawerWidth = 270;
const drawerWidthMargin = 10;

function AdminDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: {
            md: `calc(100% - ${drawerWidth + drawerWidthMargin + 40}px)`,
            xs: `calc(100% - ${20}px)`,
          },
          margin: {
            xl: ` 0 calc(0% - ${-2}vh)`,
            md: ` 0 calc(0% - ${-1}vh)`,
            xs: ` 0 calc(0% - ${-1}vh)`,
          },
          ml: { sm: `${drawerWidth}px` },
          color: "black",
        }}
        style={headerStyles}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <CiMenuFries />
          </IconButton>
          {/* header  */}
          <NavAppBar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth + drawerWidthMargin },
          flexShrink: { sm: 0 },
          // backgroundColor: "red",
        }}
        aria-label="mailbox folders"
      >
        {/* Mobile drawer  */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: theme.palette.background.sidebackground,
              border: "none",
              height: "calc(100vh - 2rem)",
              margin: "1rem",
              borderRadius: "0.75rem",
            },
          }}
        >
          {<DrawerMenu />}
        </Drawer>
        {/* Desktop  */}
        <Drawer
          className="bg-slate-400"
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: theme.palette.background.sidebackground,
              border: "none",
              height: "calc(100vh - 2rem)",
              margin: "1rem",
              borderRadius: "0.75rem",
            },
          }}
          open
        >
          {<DrawerMenu />}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default AdminDrawer;

// Header style
const headerStyles = {
  backgroundColor: "rgba(255, 255, 255, 1)",
  color: "#344767",
  top: "0.75rem",
  right: "0.2rem",
  minHeight: "4.6875rem",
  display: "grid",
  alignItems: "center",
  borderRadius: "0.75rem",
};
