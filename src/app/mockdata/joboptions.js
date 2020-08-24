const options = [
  {
    id: 1,
    name: 'lamination',
    unitCost: '0.7',
    // if the customer size is less than the unit size, they will still pay the unit price
    unitSize: 144,
    // if turned on, customers will pay for the unit size even if they have a smaller size
    enforceUnitSizeConstraint: false,
    specialSizeID: 22,

    // has many - all the paper types that can have this job option
    paperTypes: [{ id: 1 }, { id: 2 }],
  },
  {
    id: 2,
    name: 'eyelets',
    unitCost: 0.0,
  },
];
export default options;
