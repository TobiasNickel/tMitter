# tMitter
minimalistic emitter-system in Javascript, learn maximal 4 method, that you might already know from backbone.events or Emitter.js


```js
var b = tMitter({});
b.on('update',function(argument){console.log('b has updated');});
b.trigger('update', argument);
// output: b has updated

```
