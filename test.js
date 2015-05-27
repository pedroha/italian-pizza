var multiline = require('multiline');

var str = multiline(function(){/*
<!doctype html>
<html>
    <body>
        <h1>❤ unicorns</h1>
    </body>
</html>
*/});

console.log(str);
