var assert = {
  equals: function(expect, actual, msg) {
    if (expect != actual)
      throw new Error(msg || 'failed');
  },
  raises: function(f, msg) {
    var r = false;
    try {
      f();
    } catch(e) {
      r = true;
    }
    if (!r)
      throw new Error(msg || 'failed');

  }
};
