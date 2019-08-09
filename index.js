export var t = function(action, payload) {
    if (payload === undefined) {
        return action;
    } else {
        return [action, payload];
    }
}