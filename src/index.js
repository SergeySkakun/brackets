module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let config = new Map();
    bracketsConfig.forEach(element => {
        config.set(...element);
    });

    for(let i = 0; i < str.length; i++) {
        if(config.has(str[i])) {
            if(config.get(str[i]) === str[i] && stack[stack.length - 1] === str[i]) {
                stack.pop();
            }
            else {
                stack.push(str[i]);
            }
        }
        else {
            if(config.get(stack[stack.length - 1]) === str[i]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    return stack.length === 0;
}
