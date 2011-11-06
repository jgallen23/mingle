if (!mingle) mingle = require('mingle');

module('mingle', { 
  teardown: function() {
    $("#module").html('');
  }
});

test('testObject', function() {

  var data = { name: "Bob", location: "Hermosa Beach" };
  var node = mingle.render('template1', data);
  equals(node.find('span:eq(0)').html(), data.name);
  equals(node.find('span:eq(1)').html(), data.location);
  equals($("["+mingle.options.templateAttribute+"]").length, 1);
});

test('testArray', function() {
  var data = [
    { name: "Bob", location: "Hermosa Beach" },
    { name: "Jane", location: "Redondo Beach" }
  ];
  var node = mingle.render('template1', data); 
  equals(node.find('div').length, 2);
  equals(node.find('span:eq(0)').html(), data[0].name);
  equals(node.find('span:eq(1)').html(), data[0].location);
  equals(node.find('span:eq(2)').html(), data[1].name);
  equals(node.find('span:eq(3)').html(), data[1].location);
});


test('appendToDom', function() {
  var data = { name: "Bob", location: "Hermosa Beach" };
  var node = mingle.render('template1', data, $("#module"));

  equals($("#module div").length, 1);
});

test('templateNotFound', function() {
  raises(function() {
    mingle.render('badTemplate', {});
  });
});

test('invalidKey', function() {
  raises(function() {
    mingle.render('template1', { fullName: 'Bob' });
  });
});

test('changeOptions', function() {
  stop();
  setTimeout(function() { //delay so it doesn't affect other tests
    mingle.options.templateAttribute = "data-tpl";
    mingle.options.keyAttribute = "data-k";
    var data = { name: "Bob", location: "Hermosa Beach" };
    var node = mingle.render('template2', data);
    equals(node.find('span:eq(0)').html(), data.name);
    equals(node.find('span:eq(1)').html(), data.location);
    equals($("["+mingle.options.templateAttribute+"]").length, 1);
    start();
  }, 200); 
});
