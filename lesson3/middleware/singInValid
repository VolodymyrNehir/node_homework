function singInValid(req, res, next) {
    const {email, passworld} = req.body;
    try {
        if (!email || !passworld) {
            throw new Error('email or password is not provided!')
        }

        if (passworld.length < 8) {
            throw new Error('email or password is not provided!')
        }
        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = singInValid;