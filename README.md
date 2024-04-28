# tmitter.js - The Minimalistic Emitter System
Hello there, fellow code wrangler! Welcome to the wild west of event handling, where the tumbleweeds are callbacks and the saloons are event listeners. This here is tmitter.js, a lean, mean, event-handling machine. It's as minimalistic as a cowboy's vocabulary, but don't let that fool you - it's got all the power you need to wrangle those pesky events.

This library is all about encouraging the use of composition over inheritance. Instead of relying on a single monolithic event emitter, you can create multiple tmitters for different kinds of events. Each tmitter can have its own set of listeners, allowing for a more modular and flexible event handling system.

## API / Features
- **on(callback)**: This is your trusty lasso. Throw it out there with a callback function and it'll rope in those events faster than a rattlesnake on a hot tin roof. Just remember, no callback, no catch!

- **off(callback)**: Had enough of listening to the same old event? Use this function to tell it to skedaddle. Pass in the callback you're tired of, and it'll be gone quicker than a coyote with its tail on fire. If you're feeling particularly grumpy, don't pass anything and it'll send all your callbacks packing.

- **trigger(args)**: This here's the big one. It's like a stampede of events, each one carrying your arguments to all your listeners. It's a sight to behold, I tell ya.

## Usage
```ts
import { tmitter } from './tmitter';

const myEmitter = tmitter<string>();

myEmitter.on((args) => {
  console.log(`Yeehaw! Here's your event with args: ${args}`);
});

myEmitter.trigger('Some args');
```

So saddle up, partner, and start wrangling those events with tmitter.js!



