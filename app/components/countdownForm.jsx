const React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    //seconds in following references the ref= in the input below.
    var strSeconds = this.refs.seconds.value;

    //regular expressions - define patterns in a string  regular expression tester
    //match checks to see if only numbers are in strSeconds.  the * after ] checks multiple characters.
    //^ match the start character.  $ match the last character.
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter number of seconds."/>
          <button className="button expanded success">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
