import { DialogScenario } from 'test/fixtures/types';
import { Evaluation } from 'models/classifier';

export const scenario: DialogScenario = {
  name: 'lesson1 part 5: this does hints and prompts',
  lessonId: 'q1',
  expectedRequestResponses: [
    {
      userInput: 'Rules apply differently to the group',
      mockClassifierResponse: {
        data: {
          output: {
            expectationResults: [
              { evaluation: Evaluation.Bad, score: 1.0 },
              { evaluation: Evaluation.Good, score: 0.5 },
              { evaluation: Evaluation.Good, score: 0.5 },
            ],
          },
        },
      },
      expectedResponse: [
        {
          author: 'them',
          type: 'feedbackNegative',
          data: {
            text: 'Not really.',
          },
        },
        {
          author: 'them',
          type: 'text',
          data: {
            text: 'Consider this.',
          },
        },
        {
          author: 'them',
          type: 'hint',
          data: {
            text:
              'Why might you allow bad behavior in a group that you normally would not allow yourself to do?',
          },
        },
      ],
    },
    {
      userInput: "I don't know",
      mockClassifierResponse: {
        data: {
          output: {
            expectationResults: [
              { evaluation: Evaluation.Good, score: 0.5 },
              { evaluation: Evaluation.Good, score: 0.5 },
              { evaluation: Evaluation.Good, score: 0.5 },
            ],
          },
        },
      },
      expectedResponse: [
        {
          author: 'them',
          type: 'text',
          data: {
            text: 'See if you can get this',
          },
        },
        {
          author: 'them',
          type: 'prompt',
          data: {
            text: 'What might cause you to lower your standards?',
          },
        },
      ],
    },
    {
      userInput: 'peer pressure',
      mockClassifierResponse: {
        data: {
          output: {
            expectationResults: [
              { evaluation: Evaluation.Good, score: 1.0 },
              { evaluation: Evaluation.Good, score: 0.5 },
              { evaluation: Evaluation.Good, score: 0.5 },
            ],
          },
        },
      },
      expectedResponse: [
        {
          author: 'them',
          type: 'feedbackPositive',
          data: {
            text: 'Great',
          },
        },
        {
          author: 'them',
          type: 'hint',
          data: {
            text: 'How can it affect someone when you correct their behavior?',
          },
        },
      ],
    },
  ],
};

export default scenario;
