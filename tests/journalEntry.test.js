
const {User, JournalEntry } = require('../src/models')
const {sequelize} = require('../src/db.js')

describe('Users', () => {
    beforeEach( async() => {
        await sequelize.sync({force:true})
    })
    test('Can add a new entry', async () => {
        const entry1 = await JournalEntry.create ({entry:'new entry', date: new Date()});
        expect(entry1.entry).toEqual('new entry')
    })
})