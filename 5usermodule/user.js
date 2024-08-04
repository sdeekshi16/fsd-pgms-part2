var user1 = {
    first_name: "harry",
    last_name: "styles",
    age: "38",
    department: "Software",
    user:"harry123",
    psw:"styles123"
    };
var user2 = {
    first_name: "niall",
    last_name: "horan",
    age: "30",
    department: "Software",
    user:"niall456",
    psw:"horan456"
    };
var users=[user1, user2];
exports.log_check=function(user,psw){
for (let value of users) {
    if (user === value.user && psw === value.psw) {
        return true;
    }
}
return false;
};
    