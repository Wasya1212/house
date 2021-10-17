export const clearObj = (obj) => {
    for (var i = 0, keys = Object.keys(obj), len = keys.length; i < len; i++) {
        if (typeof obj[keys[i]] === 'undefined') {
            delete obj[keys[i]];
        }
    }
}