// recursive reimplementation of document.getElementsByClassName
var getElementsByClassName = function(className, node) {
  var matches = [];

  // top of node tree or default to body
  node = node || document.body;

  // get all classNames of node
  var nodeClasses = node.className.split(" ");

  // push node if node has className in classList
   nodeClasses.indexOf(className) >= 0 ? matches.push(node) : null;

  // if node has children, recurse
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      // add matching elements for this recursion frame
      matches = matches.concat(getElementsByClassName(className, child));
    }
  }

  return matches;
};
