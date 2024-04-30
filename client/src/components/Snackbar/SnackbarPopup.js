import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide"; // Import Slide transition component

export default function CommonSnackbar({ type, message }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    if (type && message) {
      setOpen(true);
    }
  }, [type, message]);

  console.error("CommonSnackbar");
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={Slide} // Apply Slide transition
      key={"Slide"}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
