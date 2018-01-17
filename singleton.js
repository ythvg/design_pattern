var mySingleton = (function () {

    var instance;

    function init() {

        function privateMethod() {
            console.log('I am private');
        }

        var privateVariable = 'I am also private';
        var privateRandomNumber = Math.random();

        return {
            publicMethod: function () {
                console.log('The public can see me');
            },
            publicProperty: 'I am also public',
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }

})();


var s1 = mySingleton.getInstance();
var s2 = mySingleton.getInstance();
// console.log(s1 === s2);


var SingletonTester = (function () {

    function Singleton( options ) {
        options = options || {};
        this.name = 'SingletonTester';
        this.pointX = options.pointX || 6;
        this.pointY = options.pointY || 10;
    }

    var instance;

    var _static = {
        name: 'SingletonTester',
        getInstance: function ( options ) {
            if ( instance === undefined ) {
                instance = new Singleton( options );
            }
            return instance;
        }
    }

    return _static;

})();

var singletonTest= SingletonTester.getInstance({
    pointX: 5
});

console.log( singletonTest.pointX );