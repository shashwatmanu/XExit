/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
  } from "@mui/material";
  
  export const Questionnaire = ({
    questionnaire,
    selectedResponses,
    setSelectedResponses,
    handleResponseSubmit,
  }) => {
    return (
      <Box sx={{ paddingY: 2, marginX: 10 }}>
        <Typography variant="body2" fontSize={16} paddingBottom={2}>
          Resignation accepted, please fill the questionnaire:
        </Typography>
        {questionnaire.map((question) => (
          <Card key={question._id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography
                variant="h6"
                fontSize={16}
                fontWeight="bold"
                gutterBottom
              >
                Q: {question.questionText}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedResponses[question._id] || ""}
                  onChange={(e) => {
                    setSelectedResponses({
                      ...selectedResponses,
                      [question._id]: e.target.value,
                    });
                    console.log(questionnaire, question._id, e.target.value);
                  }}
                >
                  {question.options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio selected />}
                      label={option}
                      sx={{ ".MuiFormControlLabel-label": { fontSize: 14 } }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="contained"
          onClick={handleResponseSubmit}
          sx={{backgroundColor:'black'}}
        >
          Submit Responses
        </Button>
      </Box>
    );
  };
  