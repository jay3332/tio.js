const fetch = require('node-fetch');
const { compress } = require("snappy");
const BASE = 'https://tio.run/cgi-bin/run/api/';

encode(language, text, input) {
    return "Vlang\0001\000"+language+"\000F.input.tio\000"+input.length+"\000"+input+"\000"+"F.code.tio\000"+text.length+"\000"+text+"R";
}

module.exports = async tio(language, code, input) {
    const encoded = encode(language, code, input); 
    const res = compress(encoded, function(err, compressed) => {
        const response = await fetch(BASE, {
            method: "POST",
            body: compressed
        });
        return await body.text();
    });
    return res;
}
