export const createObjectArray = array => {
    const options = array.map((option, idx) => ({
      value: option,
      label: option,
    }));
    return options;
  };