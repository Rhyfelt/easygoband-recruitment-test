const request = require('supertest')
const app = require('../app')

it('Return the details by id ', async() => {
    const expected ={
        "data": [
            {
                "access_group_name": "Abono",
                "access_group_id": 1,
                "total_uses": 0,
                "sessions": [
                    {
                        "name": "01-ABONO",
                        "id": 19
                    }
                ],
                "event_id": 1,
                "structure_decode": false,
                "name": "TKT CE ABONO 95",
                "modified": "2017-05-30T17:42:27.000Z",
                "id": 78,
                "basic_product_id": 27
            }
        ]
    }
    request(app)
    .get('/details/78')
    .then((response) => {
        expected(response).toBe(expected)
    }).catch((error) => {
        console.log(error)
    })
})