function isUserValid(req, res, next) {
    try {
        const {firstName, lastName, email, passworld, age, city} = req.body;

        if (!firstName || !lastName || !email || !passworld || !age || !city) {
            throw new Error('You have not filled in all the fields');
        }
        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isUserValid;





