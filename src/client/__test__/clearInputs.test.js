const { JSDOM } = require('jsdom');
const { clearInputs } = require('../script/clearInputs');

describe('clearInputs', () => {
  let dom;

  beforeEach(() => {
    dom = new JSDOM(`
      <input id="date" value="2023-01-01" />
      <input id="city" value="New York" />
    `);
    global.document = dom.window.document;
    global.window = dom.window;
  });

  afterEach(() => {
    dom.window.close();
    global.document = undefined;
    global.window = undefined;
  });
  it('should clear the value of the #date and #city inputs', () => {
    const dateInput = document.getElementById('date');
    const cityInput = document.getElementById('city');
    expect(dateInput.value).toBe('2023-01-01');
    expect(cityInput.value).toBe('New York');
    clearInputs();
    expect(dateInput.value).toBe('');
    expect(cityInput.value).toBe('');
  });
});
