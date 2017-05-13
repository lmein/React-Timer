const React = require('react');
const Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          <p>Timer</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
