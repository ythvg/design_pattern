// 模块模式

var testModule = (function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            return ++counter;
        },

        resetCounter: function () {
            console.log('counter value prior to rest: ' + counter);
            counter = 0;
        },

        getCounter: function () {
            return counter;
        }

    }
})();

// console.log(testModule.incrementCounter());
// console.log(testModule.getCounter());
// testModule.resetCounter();
// console.log(testModule.getCounter());


var basketModule = (function () {

    var basket = [];

    function dosomethingPrivate() {

    }

    return {

        addItem: function (values) {
            basket.push(values);
        },

        getItemCount: function () {
            return basket.length;
        },

        getTotal: function () {

            var itemCount = this.getItemCount(),
                total = 0;

            while (itemCount--) {
                total += basket[itemCount].price;
            }

            return total;
        }
    };
})();

basketModule.addItem({
    item: 'bread',
    price: 0.5
});

basketModule.addItem({
    item: 'butter',
    price: 0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());