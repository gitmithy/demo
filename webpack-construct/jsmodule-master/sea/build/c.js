define('a',function(require,exports,module) {  
    function fn(){  
        console.log("hello module a");  
    }  
    exports.fn=fn; 
});  
define('b',['a'],function(require,exports,module) {  
    var a = require('a');  
      a.fn()
    console.log("hello module b")  
  
    console.log("b finished")  
});  
define('c',['b'],function(require,exports,module){  
    require('b');  
    console.log("hello module c");  
  
    console.log("c finished");  
});  
