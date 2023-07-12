import React from "react";
import * as S from "./ShowAllAnswerDiagnosisDetails.style";
import PropTypes from "prop-types";
import Select from "@ui-components/Selects/StandardSelect";
import { getSelectArray } from "@ui-components/helper/helpers";

const ShowAllAnswerDiagnosisDetails = (props) => {
  const entityNameA = "diagnosis";
  const entityNameB = "answer";

  //Select

  const selectDiagnosisArray = getSelectArray("name", "id", props.diagnosis);
  return (
    <S.ShowAllAnswerDiagnosisDetails>
      <S.H1>Select Diagnosis to show Answers</S.H1>
      <Select
        array={selectDiagnosisArray}
        onChange={(e) => props.setSelectedDiagnosis(e.target.value)}
        defaultValue={props.selectedDiagnosis}
      />
      <table>
        <thead>
          <tr>
            <th>{entityNameA}</th>
            <th>{entityNameB}</th>
          </tr>
        </thead>

        {props.answerDiagnosisDetails &&
          props.answerDiagnosisDetails.map((answerDiagnosisDetail, index) => {
            if (answerDiagnosisDetail.diagnosisId == props.selectedDiagnosis) {
              return (
                <tbody key={index}>
                  <tr key={index + 1}>
                    <td key={index + 1}>
                      {answerDiagnosisDetail.diagnosis.name},{" "}
                      {answerDiagnosisDetail.diagnosisId}, significance:{" "}
                      {answerDiagnosisDetail.significance}
                    </td>
                    {props.answers &&
                      props.answers.map((answer, index) => {
                        if (
                          answerDiagnosisDetail.diagnosisId ==
                          props.selectedDiagnosis
                        ) {
                          if (answer.id == answerDiagnosisDetail.answerId) {
                            return (
                              <td key={index + 1}>
                                {answer.id}, {answer.name}
                                <button
                                  key={index + 1}
                                  onClick={() =>
                                    props.setAssignment(
                                      parseInt(answerDiagnosisDetail.answerId)
                                    )
                                  }
                                >
                                  Assign To Delete
                                </button>
                              </td>
                            );
                          }
                        }
                      })}
                  </tr>
                </tbody>
              );
            }
          })}
      </table>
    </S.ShowAllAnswerDiagnosisDetails>
  );
};

ShowAllAnswerDiagnosisDetails.propTypes = {
  answers: PropTypes.array,
  diagnosis: PropTypes.array,
  answerDiagnosisDetails: PropTypes.array,
  setAssignment: PropTypes.func,
};

export default ShowAllAnswerDiagnosisDetails;
