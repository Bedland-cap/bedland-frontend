// eslint-disable-next-line @typescript-eslint/no-var-requires
const Model = require('../../db.json');

exports.login = async (req,res) => {
    const Member = Model.member;  

    const user = await Member.filter(person => person.login === req.body.login);
    if(user.length === 0) return res.status(400).send({'message': 'The login/password you entered does not exist'});

    if(user[0].password !== req.body.password) return res.status(400).send({'message': 'The login/password you entered is incorrect'});
    return res.send({
        'status': 200,
        'data': {
            'message': 'You are logged in!'
        },
        'token': 'Bearer token',
        'userId': user.id,
        'login': user.login
      })
};