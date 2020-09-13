const jobActions = [
  {
    title: 'Return Job For Review',
    help: 'Sends the job back to the owner with the review comments that you add.'
    + 'If you feel the user is not doing something right, you can notify them using this option.',
  },
  {
    title: 'Revise Job Cost',
    help: 'If you feel the job should be prices differently,'
    + 'you can use this option to change the cost of the job and the user will be notified of of the new cost.',
  },
  {
    title: 'Reject Job',
    help: `If you dont want to print this job, you can use this option.'
      +'Dont use this option if you want the user to make changes and resend the job later.'}`,
  },
];

export default jobActions;
