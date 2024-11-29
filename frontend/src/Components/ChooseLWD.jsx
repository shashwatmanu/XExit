/* eslint-disable react/prop-types */
import { Box, Button, Container, TextField} from "@mui/material";

export const ChooseLWD = ({
  lastWorkingDay,
  setLastWorkingDay,
  handleResignationSubmit,
}) => {
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleResignationSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 4,
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <TextField
          type="date"
          label="Last Working Day"
          value={lastWorkingDay}
          onChange={(e) => setLastWorkingDay(e.target.value)}
          fullWidth
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 , backgroundColor: 'black'}}
        >
          Submit Resignation
        </Button>
      </Box>
    </Container>
  );
};
