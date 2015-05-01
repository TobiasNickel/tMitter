# tMitter
minimalistic emitter-system in Javascript, learn maximal 4 method, that you might already know from backbone.events or Emitter.js


```js
var b = {};
tMitter(b);
b.on('update',function(){console.log('b has updated');});
b.trigger('update');
// output: b has updated

```
