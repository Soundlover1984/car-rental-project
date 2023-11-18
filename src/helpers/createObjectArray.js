export const createObjectArray = array => {
    const options = array.map(option => ({
      value: option,
      label: option,
    }));
    return options;
  };