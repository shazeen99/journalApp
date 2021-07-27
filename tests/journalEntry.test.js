const { test } = require('@jest/globals')
const journalEntry = require('../src/entry')

describe('Users', () => {
    test('Can add a new entry', async () => {
        const entry1 = await journalEntry.create ('new entry', '27/2/21');
        expect(entry1.entry).toEqual('new entry')
    })
})