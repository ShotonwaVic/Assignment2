function deepFreeze(obj) {
    Object.keys(obj).forEach(function(key) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });

    return Object.freeze(obj);
}
const obj = {
    name: "Victor",
    details: {
        age: 20
    }
};

console.log(deepFreeze(obj));