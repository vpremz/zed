module.exports = function setup(options, imports, register) {
    var base = __dirname + "/www";
    imports.static.addStatics([{
        path: base,
        mount: "/underscore",
        rjs: {
            underscore: "/underscore/underscore"
        }
    }]);

    register(null, {
        "lib.underscorejs": {}
    });
};