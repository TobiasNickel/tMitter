const tmitter = require('./tmitter.js')
const assert = require('assert')
var events = tmitter({});

var v1=0;
function onV1(){
  v1++;
}
events.on('v1', onV1);

events.trigger('v1');
assert.equal(v1,1,'v1 event trigger once');

events.off('v1', onV1);
events.trigger('v1');
assert.equal(v1,1,'v1 event trigger twice, but events was removed');

