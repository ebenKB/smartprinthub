import Faker from 'faker';

const user = {
  firstname: Faker.name.firstName(),
  lastname: Faker.name.lastName(),
  email: Faker.internet.email(),
  phone: Faker.phone.phoneNumber,
  settings: {
    defaultCompanyID: 1,
  },
  account: {
    discount: 0.0,
  },
};

export default user;
