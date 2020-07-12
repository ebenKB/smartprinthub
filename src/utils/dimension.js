const getDimensionInFeet = (units, width, height) => {
  switch (units.toLowerCase()) {
    case 'cm': {
      console.log('Return cm', (width * height) / (30.8 * 30.8));
      return ((width * height) / (30.8 * 30.8));
    }

    case 'inc': {
      console.log('Return inc', (width * height) / (12 * 12));
      return ((width * height) / (12 * 12));
    }

    case 'ft': {
      console.log('Returning feet', (width * height));
      return (width * height);
    }

    default: return null;
  }
};

export default getDimensionInFeet;
