const { User } = require('../../models');

module.exports = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({});

            res.status(200).json({ message: ' Get All Users', data: users })
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const { username, email, password, role } = req.body;

            const result = await User.findOne({ email: email });
            if (result) return res.status(401).send('Your email has already registered')

            const users = await User.create({
                username,
                email,
                password,
                role,
            })

            res.status(201).json({
                message: 'New user successfully created',
                data: users,
            });
        } catch (error) {
            console.log(error);

        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const users = await User.findOne({ email: email });

            if (!users)
                return res.status(401).send('Your email is not registered')

            if (password === users.password) {
                res.status(200).send({ message: 'login success', id: users.id, role: users.role })
            } else {
                res.status(401).send({
                    message: 'You are not allowed to enter this API'
                })
            }
        } catch (error) {
            console.log(error);

        }
    }
}