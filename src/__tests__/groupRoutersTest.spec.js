const request = require('supertest')
const app = require('../app')

it('Return data groupby sessions ', async() => {
    const expected ={
        "data": {
            "01-ABONO": [
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
                },
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
                    "name": "TKT CE ABONO MR 95",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 79,
                    "basic_product_id": 27
                },
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
                    "name": "TKT CE ABONO AMR 95",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 80,
                    "basic_product_id": 27
                },
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
                    "name": "TKT SE ABONO 102",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 87,
                    "basic_product_id": 27
                },
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
                    "name": "TKT SE ABONO MR 117",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 88,
                    "basic_product_id": 27
                },
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
                    "name": "TKT SE ABONO AMR 117",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 89,
                    "basic_product_id": 27
                },
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
                    "name": "ECOM CE ABONO 127",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 96,
                    "basic_product_id": 27
                },
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
                    "name": "ECOM SE ABONO 117",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 100,
                    "basic_product_id": 27
                },
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
                    "name": "OFP SE ABONO 95",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 104,
                    "basic_product_id": 27
                },
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
                    "name": "FEST SE ABONO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 105,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO 95",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 109,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO MR 95",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 110,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO AMR 95",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 111,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO TAQ",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 121,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 125,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO 110",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 129,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO MR 110",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 130,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO AMR 110",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 131,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO 120",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 132,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO MR 120",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 133,
                    "basic_product_id": 27
                },
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
                    "name": "TKM SE ABONO AMR 120",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 134,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO 79€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 211,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO MR 79€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 212,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO AMR 79€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 213,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO 89€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 214,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO MR 89€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 215,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO AMR 89€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 216,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO 100€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 217,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO MR 100€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 218,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO AMR 100€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 219,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO 115€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 220,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO MR 115€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 221,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CE ABONO AMR 115€",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 222,
                    "basic_product_id": 27
                },
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
                    "name": "TKM CHARITY ABONO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 256,
                    "basic_product_id": 27
                },
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
                    "name": "0-TKM SE ABONO MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 276,
                    "basic_product_id": 27
                },
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
                    "name": "0-TKT SE ABONO MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 280,
                    "basic_product_id": 27
                },
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
                    "name": "0-ECOM SE ABONO MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 285,
                    "basic_product_id": 27
                },
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
                    "name": "0-TKM SE ABONO AMR-MR MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 288,
                    "basic_product_id": 27
                },
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
                    "name": "000-TKM ABONO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 306,
                    "basic_product_id": 27
                },
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
                    "name": "0000-TKM ABONO CHARITY INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 314,
                    "basic_product_id": 27
                }
            ],
            "02-JUEVES": [
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT CE JUEVES 70",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 81,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT CE JUEVES MR 70",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 82,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT SE JUEVES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 90,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT SE JUEVES MR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 91,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ECOM CE JUEVES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 97,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ECOM SE JUEVES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 101,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "FEST SE JUEVES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 106,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 112,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES MR 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 115,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES AMR 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 118,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES TAQ",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 122,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 126,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 135,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES MR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 136,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES AMR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 137,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 223,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 226,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 229,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY JUEVES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 257,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKM SE JUEVES MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 277,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKT SE JUEVES MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 281,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-ECOM JUEVES MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 283,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKM SE JUEVES AMR MR MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 289,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "Jueves",
                    "access_group_id": 6,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "02-JUEVES",
                            "id": 20
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM JUEVES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 307,
                    "basic_product_id": 28
                }
            ],
            "03-VIERNES": [
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT CE VIERNES 70",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 83,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT CE VIERNES MR 70",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 84,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT SE VIERNES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 92,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT SE VIERNES MR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 93,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ECOM CE VIERNES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 98,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ECOM SE VIERNES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 102,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "FEST SE VIERNES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 107,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 113,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES MR 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 116,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES AMR 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 119,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES TAQ",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 123,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 127,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 138,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES MR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 139,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES AMR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 140,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 224,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 227,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 230,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY VIERNES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 258,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKM SE VIERNES MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 278,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKT SE VIERNES MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 282,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-ECOM SE VIERNES MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 286,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKM VIERNES AMR MR MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 290,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "Viernes",
                    "access_group_id": 7,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM VIERNES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 308,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "03-VIERNES",
                            "id": 21
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0000-TKM VIP VIERNES CHARITY INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 315,
                    "basic_product_id": 33
                }
            ],
            "04-SABADO": [
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT CE SABADO 70",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 85,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT CE SABADO MR 70",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 86,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT SE SABADO 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 94,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKT SE SABADO MR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 95,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ECOM CE SABADO 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 99,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ECOM SE SABADO 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 103,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "FEST SE SABADO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 108,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 114,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO MR 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 117,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO AMR 59",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 120,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO TAQ",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 124,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 128,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 141,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO MR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 142,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO AMR 65",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 143,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 225,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 228,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 231,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY SABADO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 259,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKM SE SABADO MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 279,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKT SE SABADO MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 284,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-ECOM SE SABADO MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 287,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "0-TKM SE SABADO AMR MR MIERCOLES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 291,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "Sábado",
                    "access_group_id": 8,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "04-SABADO",
                            "id": 22
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM SABADO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 309,
                    "basic_product_id": 30
                }
            ],
            "13-ACREDITADOS": [
                {
                    "access_group_name": "AAA",
                    "access_group_id": 19,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "AAA",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 144,
                    "basic_product_id": 43
                },
                {
                    "access_group_name": "Artista",
                    "access_group_id": 17,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ART",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 145,
                    "basic_product_id": 42
                },
                {
                    "access_group_name": "Artista",
                    "access_group_id": 17,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ART - Jueves",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 146,
                    "basic_product_id": 42
                },
                {
                    "access_group_name": "Artista",
                    "access_group_id": 17,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ART - Viernes",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 147,
                    "basic_product_id": 42
                },
                {
                    "access_group_name": "Artista",
                    "access_group_id": 17,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ART - Sábado",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 148,
                    "basic_product_id": 42
                },
                {
                    "access_group_name": "INV Abono",
                    "access_group_id": 20,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "INV ABONO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 149,
                    "basic_product_id": 27
                },
                {
                    "access_group_name": "INV Jueves",
                    "access_group_id": 21,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "INV JUEVES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 150,
                    "basic_product_id": 28
                },
                {
                    "access_group_name": "INV Viernes",
                    "access_group_id": 22,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "INV VIERNES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 151,
                    "basic_product_id": 29
                },
                {
                    "access_group_name": "INV Sábado",
                    "access_group_id": 23,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "INV SÁBADO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 152,
                    "basic_product_id": 30
                },
                {
                    "access_group_name": "ORG",
                    "access_group_id": 14,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "ORGANIZACIÓN",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 153,
                    "basic_product_id": 43
                },
                {
                    "access_group_name": "Staff",
                    "access_group_id": 16,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "STAFF",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 156,
                    "basic_product_id": 40
                },
                {
                    "access_group_name": "Staff",
                    "access_group_id": 16,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "STAFF+ACRED",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 157,
                    "basic_product_id": 40
                },
                {
                    "access_group_name": "Stage",
                    "access_group_id": 18,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "13-ACREDITADOS",
                            "id": 31
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "STAGE",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 158,
                    "basic_product_id": 41
                }
            ],
            "15-PRENSA": [
                {
                    "access_group_name": "Prensa",
                    "access_group_id": 15,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "15-PRENSA",
                            "id": 38
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PHOTO/TV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 154,
                    "basic_product_id": 39
                },
                {
                    "access_group_name": "Prensa",
                    "access_group_id": 15,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "15-PRENSA",
                            "id": 38
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PRENSA",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 155,
                    "basic_product_id": 39
                }
            ],
            "14-PARKING": [
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "CAR/DES-Ju",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 159,
                    "basic_product_id": 45
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "CAR/DES-Vi",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 160,
                    "basic_product_id": 45
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "CAR/DES-Sa",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 161,
                    "basic_product_id": 45
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "CARGA/DES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 162,
                    "basic_product_id": 45
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK PREM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 163,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-A-Jue",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 164,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-A-Vie",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 165,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-A-Sab",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 166,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-B-Jue",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 167,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-B-Vie",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 168,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-B-Sab",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 169,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-C-Jue",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 170,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-C-Vie",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 171,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-C-Sab",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 172,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-D-Jue",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 173,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-D-Vie",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 174,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-D-Sab",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 175,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-E-Jue",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 176,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-E-Vie",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 177,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARK-E-Sab",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 178,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARKING A",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 179,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARKING B",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 180,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARKING C",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 181,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARKING D",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 182,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PARKING E",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 183,
                    "basic_product_id": 44
                },
                {
                    "access_group_name": "ACR PK-GENERICO",
                    "access_group_id": 29,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "14-PARKING",
                            "id": 32
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "PK AAA",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 184,
                    "basic_product_id": 44
                }
            ],
            "05-VIP": [
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE ABONO VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 203,
                    "basic_product_id": 31
                },
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE ABONO VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 232,
                    "basic_product_id": 31
                },
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE ABONO VIP MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 233,
                    "basic_product_id": 31
                },
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE ABONO VIP AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 234,
                    "basic_product_id": 31
                },
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY ABONO VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 260,
                    "basic_product_id": 31
                },
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE ABONO VIP INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 275,
                    "basic_product_id": 31
                },
                {
                    "access_group_name": "VIP Abono",
                    "access_group_id": 2,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "05-VIP",
                            "id": 23
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM ABONO VIP INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 302,
                    "basic_product_id": 31
                }
            ],
            "06-VIP JUEVES": [
                {
                    "access_group_name": "VIP Jueves",
                    "access_group_id": 3,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "06-VIP JUEVES",
                            "id": 24
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 204,
                    "basic_product_id": 32
                },
                {
                    "access_group_name": "VIP Jueves",
                    "access_group_id": 3,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "06-VIP JUEVES",
                            "id": 24
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 235,
                    "basic_product_id": 32
                },
                {
                    "access_group_name": "VIP Jueves",
                    "access_group_id": 3,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "06-VIP JUEVES",
                            "id": 24
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES VIP MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 236,
                    "basic_product_id": 32
                },
                {
                    "access_group_name": "VIP Jueves",
                    "access_group_id": 3,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "06-VIP JUEVES",
                            "id": 24
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES VIP AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 237,
                    "basic_product_id": 32
                },
                {
                    "access_group_name": "VIP Jueves",
                    "access_group_id": 3,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "06-VIP JUEVES",
                            "id": 24
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY JUEVES VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 261,
                    "basic_product_id": 32
                },
                {
                    "access_group_name": "VIP Jueves",
                    "access_group_id": 3,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "06-VIP JUEVES",
                            "id": 24
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM JUEVES VIP INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 303,
                    "basic_product_id": 32
                }
            ],
            "07-VIP VIERNES": [
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "07-VIP VIERNES",
                            "id": 25
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 205,
                    "basic_product_id": 33
                },
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "07-VIP VIERNES",
                            "id": 25
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 238,
                    "basic_product_id": 33
                },
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "07-VIP VIERNES",
                            "id": 25
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES VIP MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 239,
                    "basic_product_id": 33
                },
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "07-VIP VIERNES",
                            "id": 25
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES VIP AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 240,
                    "basic_product_id": 33
                },
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "07-VIP VIERNES",
                            "id": 25
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY VIERNES VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 262,
                    "basic_product_id": 33
                },
                {
                    "access_group_name": "VIP Viernes",
                    "access_group_id": 4,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "07-VIP VIERNES",
                            "id": 25
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM VIERNES VIP INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 304,
                    "basic_product_id": 33
                }
            ],
            "08-VIP SABADO": [
                {
                    "access_group_name": "VIP Sábado",
                    "access_group_id": 5,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "08-VIP SABADO",
                            "id": 26
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 206,
                    "basic_product_id": 34
                },
                {
                    "access_group_name": "VIP Sábado",
                    "access_group_id": 5,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "08-VIP SABADO",
                            "id": 26
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 241,
                    "basic_product_id": 34
                },
                {
                    "access_group_name": "VIP Sábado",
                    "access_group_id": 5,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "08-VIP SABADO",
                            "id": 26
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO VIP MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 242,
                    "basic_product_id": 34
                },
                {
                    "access_group_name": "VIP Sábado",
                    "access_group_id": 5,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "08-VIP SABADO",
                            "id": 26
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO VIP AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 243,
                    "basic_product_id": 34
                },
                {
                    "access_group_name": "VIP Sábado",
                    "access_group_id": 5,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "08-VIP SABADO",
                            "id": 26
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY SABADO VIP",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 263,
                    "basic_product_id": 34
                },
                {
                    "access_group_name": "VIP Sábado",
                    "access_group_id": 5,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "08-VIP SABADO",
                            "id": 26
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM SABADO VIP INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 305,
                    "basic_product_id": 34
                }
            ],
            "09-PREMIUM": [
                {
                    "access_group_name": "PREMIUM Abono",
                    "access_group_id": 9,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "09-PREMIUM",
                            "id": 27
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE ABONO PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 207,
                    "basic_product_id": 35
                },
                {
                    "access_group_name": "PREMIUM Abono",
                    "access_group_id": 9,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "09-PREMIUM",
                            "id": 27
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE ABONO PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 244,
                    "basic_product_id": 35
                },
                {
                    "access_group_name": "PREMIUM Abono",
                    "access_group_id": 9,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "09-PREMIUM",
                            "id": 27
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE ABONO PREMIUM MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 245,
                    "basic_product_id": 35
                },
                {
                    "access_group_name": "PREMIUM Abono",
                    "access_group_id": 9,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "09-PREMIUM",
                            "id": 27
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE ABONO PREMIUM AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 246,
                    "basic_product_id": 35
                },
                {
                    "access_group_name": "PREMIUM Abono",
                    "access_group_id": 9,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "09-PREMIUM",
                            "id": 27
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY ABONO PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 264,
                    "basic_product_id": 35
                },
                {
                    "access_group_name": "PREMIUM Abono",
                    "access_group_id": 9,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "09-PREMIUM",
                            "id": 27
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM ABONO PREMIUM INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 310,
                    "basic_product_id": 35
                }
            ],
            "10-PREMIUM JUEVES": [
                {
                    "access_group_name": "PREMIUM Jueves",
                    "access_group_id": 10,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "10-PREMIUM JUEVES",
                            "id": 28
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE JUEVES PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 208,
                    "basic_product_id": 36
                },
                {
                    "access_group_name": "PREMIUM Jueves",
                    "access_group_id": 10,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "10-PREMIUM JUEVES",
                            "id": 28
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 247,
                    "basic_product_id": 36
                },
                {
                    "access_group_name": "PREMIUM Jueves",
                    "access_group_id": 10,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "10-PREMIUM JUEVES",
                            "id": 28
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES PREMIUM MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 248,
                    "basic_product_id": 36
                },
                {
                    "access_group_name": "PREMIUM Jueves",
                    "access_group_id": 10,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "10-PREMIUM JUEVES",
                            "id": 28
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE JUEVES PREMIUM AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 249,
                    "basic_product_id": 36
                },
                {
                    "access_group_name": "PREMIUM Jueves",
                    "access_group_id": 10,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "10-PREMIUM JUEVES",
                            "id": 28
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY JUEVES PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 265,
                    "basic_product_id": 36
                },
                {
                    "access_group_name": "PREMIUM Jueves",
                    "access_group_id": 10,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "10-PREMIUM JUEVES",
                            "id": 28
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM JUEVES PREMIUM INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 311,
                    "basic_product_id": 36
                }
            ],
            "11-PREMIUM VIERNES": [
                {
                    "access_group_name": "PREMIUM Viernes",
                    "access_group_id": 11,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "11-PREMIUM VIERNES",
                            "id": 29
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE VIERNES PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 209,
                    "basic_product_id": 37
                },
                {
                    "access_group_name": "PREMIUM Viernes",
                    "access_group_id": 11,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "11-PREMIUM VIERNES",
                            "id": 29
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 250,
                    "basic_product_id": 37
                },
                {
                    "access_group_name": "PREMIUM Viernes",
                    "access_group_id": 11,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "11-PREMIUM VIERNES",
                            "id": 29
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES PREMIUM MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 251,
                    "basic_product_id": 37
                },
                {
                    "access_group_name": "PREMIUM Viernes",
                    "access_group_id": 11,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "11-PREMIUM VIERNES",
                            "id": 29
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE VIERNES PREMIUM AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 252,
                    "basic_product_id": 37
                },
                {
                    "access_group_name": "PREMIUM Viernes",
                    "access_group_id": 11,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "11-PREMIUM VIERNES",
                            "id": 29
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY VIERNES PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 266,
                    "basic_product_id": 37
                },
                {
                    "access_group_name": "PREMIUM Viernes",
                    "access_group_id": 11,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "11-PREMIUM VIERNES",
                            "id": 29
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM VIERNES PREMIUM INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 312,
                    "basic_product_id": 37
                }
            ],
            "12-PREMIUM SABADO": [
                {
                    "access_group_name": "PREMIUM Sábado",
                    "access_group_id": 13,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "12-PREMIUM SABADO",
                            "id": 30
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM SE SABADO PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 210,
                    "basic_product_id": 38
                },
                {
                    "access_group_name": "PREMIUM Sábado",
                    "access_group_id": 13,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "12-PREMIUM SABADO",
                            "id": 30
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 253,
                    "basic_product_id": 38
                },
                {
                    "access_group_name": "PREMIUM Sábado",
                    "access_group_id": 13,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "12-PREMIUM SABADO",
                            "id": 30
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO PREMIUM MR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 254,
                    "basic_product_id": 38
                },
                {
                    "access_group_name": "PREMIUM Sábado",
                    "access_group_id": 13,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "12-PREMIUM SABADO",
                            "id": 30
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CE SABADO PREMIUM AMR",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 255,
                    "basic_product_id": 38
                },
                {
                    "access_group_name": "PREMIUM Sábado",
                    "access_group_id": 13,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "12-PREMIUM SABADO",
                            "id": 30
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "TKM CHARITY SABADO PREMIUM",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 267,
                    "basic_product_id": 38
                },
                {
                    "access_group_name": "PREMIUM Sábado",
                    "access_group_id": 13,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "12-PREMIUM SABADO",
                            "id": 30
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "000-TKM SABADO PREMIUM INV",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 313,
                    "basic_product_id": 38
                }
            ],
            "16-BUS ABONO": [
                {
                    "access_group_name": "BUS ABONO",
                    "access_group_id": 30,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "16-BUS ABONO",
                            "id": 39
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "BUS ABONO WEB",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 298,
                    "basic_product_id": 55
                }
            ],
            "17-BUS JUEVES": [
                {
                    "access_group_name": "BUS JUEVES",
                    "access_group_id": 31,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "17-BUS JUEVES",
                            "id": 40
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "BUS JUEVES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 299,
                    "basic_product_id": 55
                }
            ],
            "18-BUS VIERNES": [
                {
                    "access_group_name": "BUS VIERNES",
                    "access_group_id": 32,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "18-BUS VIERNES",
                            "id": 41
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "BUS VIERNES",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 300,
                    "basic_product_id": 55
                }
            ],
            "19-BUS SABADO": [
                {
                    "access_group_name": "BUS SABADO",
                    "access_group_id": 33,
                    "total_uses": 0,
                    "sessions": [
                        {
                            "name": "19-BUS SABADO",
                            "id": 42
                        }
                    ],
                    "event_id": 1,
                    "structure_decode": false,
                    "name": "BUS SABADO",
                    "modified": "2017-05-30T17:42:27.000Z",
                    "id": 301,
                    "basic_product_id": 55
                }
            ]
        }
    }
    request(app)
    .get('groupby/sessions')
    .then((response) => {
        expected(response).toBe(expected)
    }).catch((error) => {
        console.log(error)
    })
})