export const toggle = () => {
  return {type: 'TOGGLE'};
};

export const labelData = newLabel => {
  return {type: 'LABELDATA', payload: newLabel};
};

export const localization = () => {
  return {type: 'LOCALIZATION'};
};
