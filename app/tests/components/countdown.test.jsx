//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const Countdown = require('Countdown');

describe('Countdown', () => {
  //every test will start with it
  //two arguments, first is a string, the second one is a function
  it('Should exist.', () => {
    //make the assertions below.
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    //done is added to do asynchronous testing since setTimeout was included.
    it('Should set state to started and count down.', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('Should set state to started, count down, and stop at zero.', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      // expect(countdown.state.count).toBe(1);
      // expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

  });
});
