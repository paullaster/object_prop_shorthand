let userID = 0;
let useString = "userID";

let userObj = {
    [useString + ++userID]: " okoth",
    [useString + ++userID]: " cynthia",
    [useString + ++userID]: " boy",
    [useString + ++userID]: " khavayi",
}

function assignUserIds(usrObj) {
    let assignedUsers = {};
    for (let prop in usrObj) {
        assignedUsers[prop] = usrObj[prop];
    }
    return assignedUsers;
}

console.log(assignUserIds(userObj));