const calculateDiffDays = (dateInput) => {
  const departureDate = new Date(dateInput);
  const today = new Date();
  return (Math.ceil((departureDate - today) / (1000 * 60 * 60 * 24)));
  };
  module.exports = {
    calculateDiffDays
}