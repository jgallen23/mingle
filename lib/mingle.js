var options = {
  templateAttribute: "data-template",
  keyAttribute: "data-key"
};

var r = function(template, obj) {
  var elem = template.clone().removeAttr(options.templateAttribute);
  var nodes = elem.find("["+options.keyAttribute+"]");
  for (var i = 0, c = nodes.length; i < c; i++) {
    var node = $(nodes[i]);
    var key = node.attr(options.keyAttribute);
    if (obj[key]) 
      node.html(obj[key]);
    else
      throw new Error("Key not found: "+key);
  }
  return elem;
};

var render = function(templateName, data, selector) {
  var template = $('['+options.templateAttribute+'='+templateName+']');
  if (template.length === 0)
    throw new Error("Template not found: "+ templateName);
  if (!(data instanceof Array)) data = [data];
  if (!selector) selector = $("<div/>");
  for (var i = 0, c = data.length; i < c; i++) {
    var obj = data[i];
    selector.append(r(template, obj));  //TODO: optimize
  }
  return selector;
};



//public
var mingle = {
  render: render,
  options: options
};
