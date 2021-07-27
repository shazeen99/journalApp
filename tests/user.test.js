const {sequelize} = require('../src/db.js')
const {User, JournalEntry } = require('../src/models')


describe('Users', () => {
    beforeEach( async() => {
        await sequelize.sync({force:true})
    })
    test('Can add a new user', async () => {
        const user1 = await User.create ({name: 'Shazeen', passwordHash:'password1'});
        expect(user1.name).toEqual('Shazeen')
    })
})

