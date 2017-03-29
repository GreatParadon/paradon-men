const Admin = require('../models/Admin');

module.exports = (options) => {
    return (req, res, next) => {

        // Admin middleware
        if (options === 'admin') {
            const authToken = req.get('Authorization');
            // Admin.findOne()
            //   .where('authToken', authToken)
            //   .exec((err, staff) => {
            //     if (err || !staff) res.status(401).send('Unauthorized');
            //     req.staff = staff;
            //     next()
            //   });
        }

    }
};
