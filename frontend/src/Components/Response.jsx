import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { QuestionAnswerList } from "./QuestionAnswerList";
import { Loader } from "./Loader";
import {useResponse} from "../hooks/useResponse.js"

export const Response = () => {
    const { loading, exitInterviews } = useResponse();

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ paddingY: 2 }}>
      {exitInterviews.map((user) => (
        <Accordion key={user._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{user.user_id.username}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <QuestionAnswerList responses={user.responses} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
