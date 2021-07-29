
const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./Input");

console.log("Connecting ...");


setupInput(connect());
