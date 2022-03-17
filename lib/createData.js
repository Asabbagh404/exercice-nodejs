const inquirer = require("inquirer");

function createData() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'collection',
                message: 'What collection would you modify ?',
                choices: ['article', 'user', 'article']
            },
            {
                name: 'data',
                message: 'Write your data'
            }
        ])
        .then(({ collection, data }) => {
            try {
                JSON.parse(data)
                console.log(`${collection} modified with data ${data}`)
            } catch (e) {
                throw new Error(e)
            }
        })
        .catch((e) => {
            console.error('an error occured')
        })
}

module.exports = createData


