const fetch = require('node-fetch');
const { inflate } = require("zlib");
const BASE = 'https://tio.run/cgi-bin/run/api/';

function encode(language, text, input) {
    return "Vlang\0001\000"+language+"\000F.input.tio\000"+input.length+"\000"+input+"\000"+"F.code.tio\000"+text.length+"\000"+text+"R";
}

module.exports = async function tio(language, code, input) {
    const encoded = encode(language, code, input); 
    const compressed = await inflate(encoded);
    const res = await fetch(BASE, {
        method: "POST",
        body: compressed
    });
    return await res.text();
}
