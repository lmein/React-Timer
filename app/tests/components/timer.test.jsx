//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const Timer = require('Timer');

describe('Timer', () => {
  //every test will start with it
  //two arguments, first is a string, the second one is a function
  it('Should exist.', () => {
    //make the assertions below.
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear count on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});
