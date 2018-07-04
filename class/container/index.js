const mixOf = require('mixof');

const attributes = require('../../mixin/attributes');
const parents = require('../../mixin/parents');
const descendants = require('../../mixin/descendants');
const children = require('../../mixin/children');



class Base {

  constructor(){
    this.FOO = 'GGG';
  }

}

class Container extends mixOf(Base).with(attributes, parents, descendants, children) {}

module.exports = Container;
