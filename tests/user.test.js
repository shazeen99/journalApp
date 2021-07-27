
const User = require('../src/user')

describe('Users', () => {
    test('Can add a new user', async () => {
        const User1 = await User.create ('Shazeen', 'password1');
        expect(user1.name).toEqual('Shazeen')
    })
})

