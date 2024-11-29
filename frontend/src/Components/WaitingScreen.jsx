import { Box, Typography } from "@mui/material";

export const WaitingScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "#333" }}>
        Resignation submitted. Waiting for approval.
      </Typography>
    </Box>
  );
};
