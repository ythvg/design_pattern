// Command 命令模式

(function() {
    
    var CarManager = {

        // 请求信息
        requestInfo: function(model, id) {
            return 'The information for ' + model + ' with id ' + id + ' is foobar';
        },

        // 订购汽车
        buyVehichle: function(model, id) {
            return 'You have successfully purchased Item ' + id + ', a ' + model;
        },

        // 组织一个view
        arrangeViewing: function(model, id) {
            return 'You have successfully booked a viewing of ' + model + '(' + id + ')';
        }
    };

    CarManager.execute = function(name) {
        return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
    };

    console.log(`
        ${CarManager.execute('arrangeViewing', 'Ferrari', '14523')}
        ${CarManager.execute('requestInfo', 'Ford Mondeo', '54323')}
        ${CarManager.execute('buyVehichle', 'Ford Escort', '34232')}
    `);
    

})();