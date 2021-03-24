# tio.js
Tio.js is a simple API wrapper around the [TryItOnline](https://tio.run) API.  
Requests are made asynchronously using `node-fetch`.
### Usage
Because this is a rather simple library, there is (currently) no documentation for it.  
You can look into the source code for reference, or, take a look at the examples below:

#### Running a simple Javascript program
```js
const tio = require("tio.js");

tio("js", "console.log('Hello, World!')")
    .then(({ output }) => console.log(output)); // log the output into the console
