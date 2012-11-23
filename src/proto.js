/**
 * proto.js
 * This is used for making protos and inheritance easy to implement
 */

 /**
  * Easy addition or modification of an object's methods
  * @name name of the function
  * @func the actual function
  */
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;

    return this;
};

/**
 * Allows inheritance to occur
 * @parent the parent function to implement
 */
Function.method('inherits', function (parent) {
    this.prototype = new parent();
    this.prototype.constructor = parent; 
    var d = {}, 
        p = this.prototype;
    
    this.method('uber', function uber(name) {
        if (!(name in d)) {
            d[name] = 0;
        }

        var f, r, t = d[name], v = parent.prototype;
        if (t) {
            while (t) {
                v = v.constructor.prototype;
                t -= 1;
            }

            f = v[name];
        } else {
            f = p[name];

            if (f == this[name]) {
                f = v[name];
            }
        }

        d[name] += 1;
        r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
        d[name] -= 1;

        return r;
    });

    return this;
});

/**
 * This allows Swiss inheritance (a way to do structured, multi-level inheritance) to
 *    occur.
 * @parent the parent function to acquire methods from
 * @args[1...inf] the names of the functions to implement from parent
 */
Function.method('swiss', function (parent) {
    for (var i = 1; i < arguments.length; i += 1) {
        var name = arguments[i];
        this.prototype[name] = parent.prototype[name];
    }

    return this;
});
