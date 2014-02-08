var path = require('path');
var pattern = function(file) {
    return {
        pattern: file,
        included: true,
        served: true,
        watched: false
    };
};
var framework = function(files) {
    files.unshift(pattern(path.join(__dirname, 'jquery.expect.min.js')));
    files.unshift(pattern(path.resolve(require.resolve('jquery'))));
};
framework.$inject = ['config.files'];

module.exports['framework:jquery-expect'] = ['factory', framework];
