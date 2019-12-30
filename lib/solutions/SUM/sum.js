'use strict';

module.exports = function (x, y) {
    return (x>=0 && x<=100) && (y>=0 && y<=100)? x+y:'invalid parameters';
};


