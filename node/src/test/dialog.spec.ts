import createApp from 'app';
import axios from "axios";
import MockAxios from "axios-mock-adapter";
import { expect } from 'chai';
import { Express } from 'express';

import request from 'supertest';
import { all as allScenarios } from 'test/fixtures/scenarios';
// import OpenTutorResponse from 'models/opentutor-response';

describe('dialog', () => {
  let app: Express;
  let mockAxios: MockAxios;

  beforeEach(async () => {
    app = await createApp();
    mockAxios = new MockAxios(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  describe('POST', () => {
    // it('responds with a 400 error when no session info passed', async () => {
    //   const response = await request(app)
    //     .post('/dialog')
    //     .send();
    //   expect(response.status).to.equal(400);
    // });

    it('sends the session information when session is started, along with initial dialog', async () => {
      const response = await request(app)
        .post('/dialog')
        .send({
          id: '1',
          user: 'rush',
          UseDB: true,
          ScriptXML: null,
          LSASpaceName: 'English_TASA',
          ScriptURL: null,
        });
      expect(response.status).to.equal(200);
      // console.log(response.body.sessionInfo);
      expect(response.body).to.have.property('response');
      expect(response.body).to.have.property('sessionInfo');
      // console.log(response.body.sessionInfo);
    });

    // [
    //   {
    //     inputAnswer: 'Peer pressure',
    //     expectedResponse: [
    //       {
    //         author: 'them',
    //         type: 'text',
    //         data: {
    //           text:
    //             "How can it affect you when you correct someone's behavior?",
    //         },
    //       },
    //     ],
    //     sessionObj: {
    //       sessionHistory: {
    //         userResponses: [],
    //         systemResponses: [
    //           [
    //             'Here is a question about integrity, a key Navy attribute.',
    //             'What are the challenges to demonstrating integrity in a group?',
    //           ],
    //         ],
    //         userScores: [],
    //       },
    //       sessionId: 'dee7c0b4-8383-41ba-bfe8-0767d56afdb0',
    //       previousUserResponse: '',
    //       previousSystemResponse: [
    //         'Here is a question about integrity, a key Navy attribute.',
    //         'What are the challenges to demonstrating integrity in a group?',
    //       ],
    //       hash:
    //         'cc22f51cb1562e4a6a86d49a1c1355a362fea6669933e32abe5519eff5095325',
    //     },
    //   },
    //   {
    //     inputAnswer: 'Enforcing the rules can make you unpopular.',
    //     expectedResponse: [
    //       {
    //         author: 'them',
    //         type: 'text',
    //         data: {
    //           text:
    //             'How can it affect someone when you correct their behavior?',
    //         },
    //       },
    //     ],
    //     sessionObj: {
    //       sessionHistory: {
    //         userResponses: ['Peer pressure'],
    //         systemResponses: [
    //           [
    //             'Here is a question about integrity, a key Navy attribute.',
    //             'What are the challenges to demonstrating integrity in a group?',
    //           ],
    //           [
    //             'So.',
    //             'Look at it this way.',
    //             "How can it affect you when you correct someone's behavior?",
    //           ],
    //         ],
    //         userScores: [],
    //       },
    //       sessionId: 'dee7c0b4-8383-41ba-bfe8-0767d56afdb0',
    //       previousUserResponse: 'Peer pressure',
    //       previousSystemResponse: [
    //         'So.',
    //         'Look at it this way.',
    //         "How can it affect you when you correct someone's behavior?",
    //       ],
    //       hash:
    //         'a1fab68d2ca67b56e4f32a311a7e184762f30400e095528027e7c43b1106be9b',
    //     },
    //   },
    //   {
    //     inputAnswer:
    //       "If you correct someone's behavior, you may get them in trouble or it may be harder to work with them.",
    //     expectedResponse: [
    //       {
    //         author: 'them',
    //         type: 'text',
    //         data: {
    //           text:
    //             'Peer pressure can push you to allow and participate in inappropriate behavior.',
    //         },
    //       },
    //       {
    //         author: 'them',
    //         type: 'text',
    //         data: {
    //           text:
    //             "When you correct somone's behavior, you may get them in trouble or negatively impact your relationship with them.",
    //         },
    //       },
    //       {
    //         author: 'them',
    //         type: 'text',
    //         data: {
    //           text:
    //             'However, integrity means speaking out even when it is unpopular.',
    //         },
    //       },
    //     ],
    //     sessionObj: {
    //       sessionHistory: {
    //         userResponses: [
    //           'Peer pressure',
    //           'Enforcing the rules can make you unpopular.',
    //         ],
    //         systemResponses: [
    //           [
    //             'Here is a question about integrity, a key Navy attribute.',
    //             'What are the challenges to demonstrating integrity in a group?',
    //           ],
    //           [
    //             'So.',
    //             'Look at it this way.',
    //             "How can it affect you when you correct someone's behavior?",
    //           ],
    //           [
    //             "Yeah, that's right.",
    //             "Let's try this together.",
    //             'How can it affect someone when you correct their behavior?',
    //           ],
    //         ],
    //         userScores: [],
    //       },
    //       sessionId: 'dee7c0b4-8383-41ba-bfe8-0767d56afdb0',
    //       previousUserResponse: 'Enforcing the rules can make you unpopular.',
    //       previousSystemResponse: [
    //         "Yeah, that's right.",
    //         "Let's try this together.",
    //         'How can it affect someone when you correct their behavior?',
    //       ],
    //       hash:
    //         '9a2d263ac6903c1b49deeb2a48cb4b37700228aff87ed99d156d95a80d81996e',
    //     },
    //   },
    // ].forEach(ex => {
    //   it('upon accepting the users response to the question, it should respond appropriately', async () => {
    //     const response2 = await request(app)
    //       .post('/dialog/session')
    //       .send({
    //         message: ex.inputAnswer,
    //         sessionInfo: ex.sessionObj,
    //       });

    //     const sessionObj = response2.body.sessionInfo;
    //     console.log(sessionObj);
    //     expect(response2.body).to.have.property('response');
    //     console.log(response2.body.response);
    //     expect(response2.body.response).to.deep.include.members(
    //       ex.expectedResponse
    //     );
    //     // console.log('OpenTutor says:  ' + response2.body.dialog);
    //   });
    // });

    it('sends an error if user tries to tinker with the session data', async () => {
      const sessionObj = {
        sessionHistory: {
          userResponses: new Array<string>(),
          systemResponses: [
            'Here is a question about integrity, a key Navy attribute. What are the challenges to demonstrating integrity in a group?',
          ],
          userScores: new Array<number>(),
        },
        sessionId: 'a677e7a8-b09e-4b3b-825d-5073422d42fd',
        previousUserResponse: '',
        previousSystemResponse:
          'Here is a question about integrity, a key Navy attribute. What are the challenges to demonstrating integrity in a group?',
        hash:
          '14ba63452d31b62cfadb0f4a869ee17a065d05d15bad01d698d4d1141bfbf01f',
      };
      //tinker with the scores
      sessionObj.sessionHistory.userScores.push(10);
      const response3 = await request(app)
        .post('/dialog/session')
        .send({
          message: 'peer pressure',
          sessionInfo: sessionObj,
        });
      // console.log(response3);
      expect(response3.status).to.equal(403);
    });
  });

  allScenarios.forEach(ex => {
    it.only(`gives expected responses to scenario inputs: ${ex.name}`, async () => {
      const responseStartSession = await request(app)
        .post('/dialog')
        .send({
          lessonId: ex.lessonId,
          id: '1',
          user: 'rush',
          UseDB: true,
          ScriptXML: null,
          LSASpaceName: 'English_TASA',
          ScriptURL: null,
        });
      let sessionObj = responseStartSession.body.sessionInfo;
      expect(responseStartSession.status).to.equal(200);

      
      for (const reqRes of ex.expectedRequestResponses) {
        mockAxios.reset();
        mockAxios.onPost("/classifier").reply((config) => {
          return [
            reqRes.mockClassifierResponse.status || 200,
            reqRes.mockClassifierResponse.data
          ]
        });
        const response = await request(app)
          .post('/dialog/session')
          .send({
            message: reqRes.userInput,
            sessionInfo: sessionObj,
          });
        console.log(response.body);
        expect(response.body).to.have.property('response');
        expect(response.body.response).to.deep.include.members(
          reqRes.expectedResponse
        );
        sessionObj = response.body.sessionInfo;
      }
    });
  });
});