const {
    getAll,
    getOne,
    insert,
    update,
    dell
} = require('../model/user.js');

const getAllUsers = (req, res) => {
    const callback = (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    };
    getAll(callback);
};

const getOneUser = (req, res) => {
    const callback = (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    };
    getOne(req.params.email, callback);
};

const insertUser = (req, res) => {
    const callback = (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    };
    insert(req.body, callback);
};

const updateUser = (req, res) => {
    const callback = (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    };
    update(req.params.id, req.body, callback);
};

const deleteUser = (req, res) => {
    const callback = (error, result) => {
        if (error) {
            res.send(error);
        } else {
            res.send(result);
        }
    };
    dell(req.params.id, callback);
};

const login = async (req, res) => {
    console.log(req.params.email);
    try {
        const user = await getOne(req.params.email,(error, result) => {
            if (error) {
                res.send(error);
            } else {
                res.send(result);
            }
        });
        console.log(user);
        if (user) {
            if (user.password === req.body.password) {
                return res.send("granted");
            } else {
                return res.send('password is wrong');
            }
        }
        return res.send("User does not exist please sign up");
    } catch (error) {
        console.error(error);
        return res.status(500).send("An error occurred");
    }
};


module.exports = {
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
    login
};
