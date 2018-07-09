const mixOf = require('mixof');

const attributes = require('../../mixin/attributes');
const parents = require('../../mixin/parents');
const descendants = require('../../mixin/descendants');
const children = require('../../mixin/children');

var ReactDOM = require('react-dom');
var React = require('react');


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return <button>Foo</button>;
  }
}

class Base {

  constructor(domNode){
    this.domNode = domNode;

    this.component = <LikeButton/>;

    this.render();
  }

  render(){
    ReactDOM.render( this.component, this.domNode );
  }

}

class Container extends mixOf(Base).with(
  attributes,
  parents,
  descendants,
  children
) {}

module.exports = Container;
