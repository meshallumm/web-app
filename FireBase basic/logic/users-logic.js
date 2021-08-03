const usersDao = require('../dao/users-dao');

async function login(userLoginDetails) {
    try {
        // logic
        const loginResponse = await usersDao.logic(userLoginDetails)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    login,
};

