import Faker from 'faker';

const user = {
  firstname: Faker.name.firstName(),
  lastname: Faker.name.lastName(),
  // email: Faker.internet.email(),
  email: 'eakbo23@gmail.com',
  phone: Faker.phone.phoneNumber,
  settings: {
    defaultCompanyID: 1,
  },
  account: {
    discount: 0.0,
  },
  role: {
    name: 'admin',
    description: 'This roles grants the user the ability to manage everything in the account.',
  },
  permission: [
    'job-view', 'job-accept', 'job-reject', 'job-update-cost', 'user-invite', 'user-block', 'user-unblock',
    'user-remove',
  ],
};

export default user;
