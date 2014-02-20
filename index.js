var _timer;

/**
 * Singleton constructor for Timer
 *
 * @returns {Timer} Either new instance or existing instance of Timer
 */
var Timer = module.exports = function Timer() {
    if(_timer) return _timer;

    _timer = this;

    this.time = 0;
    this.intervals = {};
}

/**
 * Advance time by 1 unit, and call appropriate intervals.
 *
 * TODO: Replace the naive loop with a priority queue
 *
 * @returns {Integer} new time
 */

Timer.prototype.tick = function Timer$tick() {
    this.time++;

    var i;
    Object.keys(this.intervals).forEach(function(id) {
        i = this.intervals[id];
        if((this.time - i.offset) % i.delay === 0)
            i.callback.call();
    }.bind(this));

    return this.time;
}

/**
 * Add a new interval to the timer. Opposed the the default Javascript
 * setInterval, this takes the delay first and then the callback.
 *
 * @param {Integer} time delay between calls
 * @param {Function} callback
 *
 * @returns {Integer} id of the interval. This is used the clear the interval
 */
Timer.prototype.setInterval = function Timer$setInterval(delay, callback) {
    var id = Object.keys(this.intervals).length;

    this.intervals[id] = {
        offset: this.time % delay,
        delay: delay,
        callback: callback
    };

    return id;
}

/**
 * Removes the interval from the timer
 *
 * @param {Integer|String} id of the interval
 *
 * @returns {Timer} for chaining
 */

Timer.prototype.clearInterval = function Timer$clearInterval(id) {
    delete this.intervals[id];

    return this;
}