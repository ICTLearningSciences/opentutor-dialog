import { DialogScenario } from 'test/fixtures/types';
import { Evaluation } from 'apis/classifier';
import { ResponseType } from 'dialog/response-data';

//navy integrity perfect answer
export const scenario: DialogScenario = {
  name: 'lesson1 part 10: profanity test',
  lessonId: 'q1',
  expectedRequestResponses: [
    {
      userInput: 'Fuck you.',
      mockClassifierResponse: {
        data: {
          output: {
            expectationResults: [
              { evaluation: Evaluation.Good, score: 0.5 },
              { evaluation: Evaluation.Good, score: 0.5 },
              { evaluation: Evaluation.Good, score: 0.5 },
            ],
            speechActs: {
              metacognitive: { evaluation: Evaluation.Good, score: 0.5 },
              profanity: { evaluation: Evaluation.Good, score: 1.0 },
            },
          },
        },
      },
      expectedResponse: [
        {
          author: 'them',
          type: ResponseType.Profanity,
          data: {
            text: "Okay, let's calm down.",
          },
        },
      ],
    },
  ],
};

export default scenario;
