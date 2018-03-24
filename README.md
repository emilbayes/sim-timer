sim-timer.js
============

Discrete timer for simulations.

Installation
------------

    npm install sim-timer


Methods
-------

##### `var t = new Timer;`

Singleton constructor for Timer.

Returns either new instance or existing instance of Timer.

##### `t.tick();`

Advance time by 1 unit, and call appropriate intervals.

Returns the new time.

##### `t.setInterval(delay, callback);`
Add a new interval to the timer. Opposed the the default Javascript
setInterval, this takes the delay first and then the callback.

`delay` time delay between calls.
`callback` function to be called at appropriate tick. First argument passed is a counter of invokations for this interval ("local" time)

Returns `id` of the interval. This is used the clear the interval.

##### `t.clearInterval(id);`

Removes the interval from the timer.

`id` of the interval

Returns `Timer` for chaining.


