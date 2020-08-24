const paperTypes = [
  {
    id: 1,
    name: 'SAV',
    commonName: 'Sticker',
    unitPrice: 1.0,
    defaultSizes: [
      {
        id: 11,
        name: 'A4',
        unitCost: 0.7,
      },
      {
        id: 12,
        name: 'A3',
        unitCost: 1.4,
      },
      {
        id: 13,
        name: 'A2',
        unitCost: 3.5,
      },
      {
        id: 14,
        name: 'A1',
        unitCost: 5.5,
      },
    ],
  },
  {
    id: 2,
    name: 'FLEXI',
    commonName: 'Banner',
    unitPrice: 1.3,
    defaultSizes: [ // has many default sizes// optional -- a default size has a commoon size ID
      {
        id: 22,
        name: 'A4',
        unitCost: 0.7,
      },
      {
        id: 23,
        name: 'A3',
        unitCost: 1.4,
      },
      {
        id: 24,
        name: 'A2',
        unitCost: 3.5,
      },
      {
        id: 25,
        name: 'A1',
        unitCost: 5.5,
      },
    ],
  },
  {
    id: 3,
    name: 'PAPER',
    commonName: 'Blue back',
    unitPrice: 1.2,
    defaultSizes: [
      {
        id: 33,
        name: 'A4',
        unitCost: 0.7,
      },
      {
        id: 34,
        name: 'A3',
        unitCost: 1.4,
      },
      {
        id: 35,
        name: 'A2',
        unitCost: 3.5,
      },
      {
        id: 36,
        name: 'A1',
        unitCost: 5.5,
      },
    ],
  },
];

export default paperTypes;
