const prompt = require('prompt-sync')();
const log_mod=require("./user")

const name = prompt('User name?');
const psw=prompt("Password?")

if(log_mod.log_check(name,psw)){
    console.log("Valid User");
}
else{
    console.log("Error:Invalid user.")
}