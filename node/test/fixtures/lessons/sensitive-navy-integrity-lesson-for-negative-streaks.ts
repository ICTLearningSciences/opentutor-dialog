import { Lesson } from 'apis/lessons';

export const lesson: Lesson = {
  name: 'Sensitive Navy Integrity Lesson for Negative Streaks',
  lessonId: 'q6',
  intro: 'Here is a question about integrity, a key Navy attribute.',
  question: 'What are the challenges to demonstrating integrity in a group?',
  expectations: [
    {
      expectation:
        'Peer pressure can cause you to allow inappropriate behavior.',
      hints: [
        {
          text: 'Why might you allow bad behavior in a group that you normally would not allow yourself to do?',
        },
      ],
    },
    {
      expectation:
        "If you correct someone's behavior, you may get them in trouble or it may be harder to work with them.",
      hints: [
        {
          text: 'How can it affect someone when you correct their behavior?',
        },
      ],
    },
    {
      expectation: 'Enforcing the rules can make you unpopular.',
      hints: [
        {
          text: "How can it affect you when you correct someone's behavior?",
        },
      ],
    },
  ],
  conclusion: [
    'Peer pressure can push you to allow and participate in inappropriate behavior.',
    "When you correct somone's behavior, you may get them in trouble or negatively impact your relationship with them.",
    'However, integrity means speaking out even when it is unpopular.',
  ],
  dialogCategory: 'sensitive',
};

export default lesson;
