const mixOf = require('mixof');

const attributes = require('../../mixin/attributes');
const parents = require('../../mixin/parents');
const descendants = require('../../mixin/descendants');
const children = require('../../mixin/children');


module.exports = {Container};

class Base {

  constructor(){

  }


  //
  // getParent(){}
  // getDescendants(){}
  // getChildren(){}

}

class Container extends mixOf(Base).with(attributes, parents, descendants, children) {
