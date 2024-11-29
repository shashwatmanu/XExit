import { Box, Typography, Card, Divider } from "@mui/material";

import { ChooseLWD } from "../Components/ChooseLWD";
import { WaitingScreen } from "../Components/WaitingScreen";
import { Questionnaire } from "../Components/Questionnaire";
import { QuestionAnswerList } from "../Components/QuestionAnswerList";
import { Loader } from "../Components/Loader";

import { useUser } from "../hooks/useUser";

const Employee = () => {
  const {
    loading,
    lastWorkingDay,
    setLastWorkingDay,
    resigned,
    questionnaire,
    responses,
    selectedResponses,
    setSelectedResponses,
    handleResignationSubmit,
    handleResponseSubmit,
  } = useUser();

  if (loading) {
    return <Loader />;
  }

  if (!resigned) {
    return (
      <ChooseLWD
        lastWorkingDay={lastWorkingDay}
        setLastWorkingDay={setLastWorkingDay}
        handleResignationSubmit={handleResignationSubmit}
      />
    );
  }

  if (!resigned.approved) {
    return <WaitingScreen />;
  }

  if (questionnaire?.length) {
    return (
      <Questionnaire
        questionnaire={questionnaire}
        selectedResponses={selectedResponses}
        setSelectedResponses={setSelectedResponses}
        handleResponseSubmit={handleResponseSubmit}
      />
    );
  }

  if (responses?.length) {
    return (
      <Card sx={{ marginY: 2 }}>
        <Typography variant="h6" sx={{ p: 1 }}>
          Recorded responses:
        </Typography>
        <Divider />
        <Box sx={{ p: 1 }}>
          <QuestionAnswerList responses={responses} />
        </Box>
      </Card>
    );
  }
};

export default Employee;
