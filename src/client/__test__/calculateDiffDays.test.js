const { calculateDiffDays } = require("../../server/calculateDiffDays");
//date:yyyy/mm/dd
const now = new Date();
test('give me the remaining days from now to the date I will set as the parameter', () => {
    expect(calculateDiffDays(now)).toBe(-0);
});
