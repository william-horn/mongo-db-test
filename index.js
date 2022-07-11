
const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/initial-test'
);

(async () => {
    const userOne = await User.create({
        name: 'something',
        age: 22,
        hobbies: ['coding', 'math'],
        address: {
            street: 'street1',
            city: 'townton'
        }
    });

    const userTwo = await User.create({
        name: 'jake',
        age: 44,
        hobbies: ['cooking', 'woodworking'],
        friend: userOne._id,
        address: {
            street: 'street2',
            city: 'townton'
        }
    });

    await userOne.save();
    await userTwo.save();

    console.log(userOne);
    console.log(userTwo);


})();