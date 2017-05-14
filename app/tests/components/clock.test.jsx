//the following are the libraries needed for testing.
const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
//const TestUtils = require('react-addons-test-utils');
const TestUtils = require('react-dom/test-utils');

//the following is the component we want to test.
const Clock = require('Clock');

//the following are the tests.
describe('Clock', () => {
  //every test will start with it
  //two arguments, first is a string, the second one is a function
  it('Should exist.', () => {
    //make the assertions below.
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('Should render clock to output.', () => {
      //renders the clock component with the totalseconds property.
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      //the following converts the clock var into a jQuery object.
      //this will allow us to check the clock-text property from the clock.jsx file.
      //ReactDOM.findDOMNode converts the clock component into HTML. the $ sends that thru jQuery and then the
      //result is set to el
      var $el = $(ReactDOM.findDOMNode(clock));
      //This uses jQuery to find the text in the clock-text selector
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('Should format seconds.', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
    it('Should format seconds when min/sec are less than 10.', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });

});
