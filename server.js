const faker = require('faker')
const _ = require('lodash')

function generateDB(){
    return {
        "users": _.times(5, (n)=>{
            return {
                "is": n + 1,
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email()
            }
        }),
        "comments": _.times(10, (n)=> {
            return {
                "id": n + 1,
                "text": faker.lorem.sentence()
            }
        })
    }
}

module.exports = generateDB;