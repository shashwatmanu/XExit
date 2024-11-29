/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { enqueueSnackbar } from "notistack";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { authenticatedInstance } from "../helpers/axiosInstances";
import LogoutIcon from "@mui/icons-material/Logout";

export const Navbar = ({ hideAuthButton }) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    try {
      localStorage.clear();
      Object.assign(authenticatedInstance.defaults, {
        headers: { Authorization: null },
      });

      navigate("/login");
    } catch (error) {
      enqueueSnackbar(`Logout failed: ${error?.message}`, {
        variant: "error",
      });
      console.error("Logout failed:", error);
    }
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }} >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          XExit
        </Typography>
        {!hideAuthButton && <Box>
          <Button
            color="inherit"
            onClick={handleLogout}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Box>}
      </Toolbar>
    </AppBar>
  );
}
