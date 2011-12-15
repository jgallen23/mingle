if (!mingle) mingle = require('mingle');

suite('mingle', function() {
  teardown(function() {
    $("#module").html('');
  }); 
  test('testObject', function() {
    var data = { name: "Bob", location: "Hermosa Beach" };
    var node = mingle.render('template1', data);
    assert.equals(node.find('span:eq(0)').html(), data.name);
    assert.equals(node.find('span:eq(1)').html(), data.location);
    assert.equals($("["+mingle.options.templateAttribute+"]").length, 1);
  });


  test('testObject', function() {

    var data = { name: "Bob", location: "Hermosa Beach" };
    var node = mingle.render('template1', data);
    assert.equals(node.find('span:eq(0)').html(), data.name);
    assert.equals(node.find('span:eq(1)').html(), data.location);
    assert.equals($("["+mingle.options.templateAttribute+"]").length, 1);
  });

  test('testArray', function() {
    var data = [
      { name: "Bob", location: "Hermosa Beach" },
      { name: "Jane", location: "Redondo Beach" }
    ];
    var node = mingle.render('template1', data); 
    assert.equals(node.find('div').length, 2);
    assert.equals(node.find('span:eq(0)').html(), data[0].name);
    assert.equals(node.find('span:eq(1)').html(), data[0].location);
    assert.equals(node.find('span:eq(2)').html(), data[1].name);
    assert.equals(node.find('span:eq(3)').html(), data[1].location);
  });


  test('appendToDom', function() {
    var data = { name: "Bob", location: "Hermosa Beach" };
    var node = mingle.render('template1', data, $("#module"));

    assert.equals($("#module div").length, 1);
  });

  test('templateNotFound', function() {
    assert.raises(function() {
      mingle.render('badTemplate', {});
    });
  });

  test('invalidKey', function() {
    assert.raises(function() {
      mingle.render('template1', { fullName: 'Bob' });
    });
  });

  test('changeOptions', function() {
    setTimeout(function() { //delay so it doesn't affect other tests
      mingle.options.templateAttribute = "data-tpl";
      mingle.options.keyAttribute = "data-k";
      var data = { name: "Bob", location: "Hermosa Beach" };
      var node = mingle.render('template2', data);
      assert.equals(node.find('span:eq(0)').html(), data.name);
      assert.equals(node.find('span:eq(1)').html(), data.location);
      assert.equals($("["+mingle.options.templateAttribute+"]").length, 1);
    }, 200); 
  });
});

