import { Link as RouterLink } from "react-router";
import {
  TextField,
  Button,
  Link,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { Navbar } from "../Components/Navbar";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { username, setUsername, password, setPassword, handleSubmit } =
    useLogin();

  return (
    <>
      <Navbar hideAuthButton />
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 8,
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" gutterBottom >
            Login
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 , backgroundColor: 'black'}}
          >
            Login
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link component={RouterLink} to="/register" sx={{color:'black'}}>
              Register here
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
}
