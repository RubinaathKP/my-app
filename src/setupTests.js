import '@testing-library/jest-dom';

global.fetchAPI = async (date) => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};

global.submitAPI = async (formData) => {
  return true;
};

global.fetchAvailableTables = async (date) => {
    return ["2-seater", "3-seater", "5-seater"];
}