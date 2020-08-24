/* eslint-disable no-plusplus */
import Faker from 'faker'; // uninstall faker

const companies = [];

// create 10 companies
for (let i = 0; i < 10; i++) {
  const company = {
    id: 1,
    name: Faker.company.companyName(),
    email: Faker.internet.email(),
    phone: Faker.phone.phoneNumber(),
    settings: {
      useUnitSizeForAll: false,
    },
    address: {
      location: Faker.address.streetName(),
      region: Faker.address.streetName(),
      gpsaddress: Faker.address.longitude,
      landmark: Faker.address.streetAddress(),
    },
  };
  companies.push(company);
}

export default companies;
