export var t = function() {
    if (arguments.length === 1) {
        return arguments[0];
    } else {
        return Array.from(arguments);
    }
}

export var et = t;
export var rt = t;