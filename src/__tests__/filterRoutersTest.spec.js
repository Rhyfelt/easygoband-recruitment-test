const request = require('supertest')
const app = require('../app')

it('return filtered data by access_group_name = ABONO, and name= todos',async() => {
    const expected = {
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
        ]
    }
    await request(app)
    .post('/filter')
    .send({
        "access_group_name":"ABONO",
        "name":"Todos"
    })
    .then((response) => {
        expect(response).toBe(expected);
        done();
    }).catch((error) => {
        console.log(error)
    })
    
})

it('return filtered data by access_group_name = ABONO, and name=TKT',async() => {
    const expected = {
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
                "name": "0-TKT SE ABONO MIERCOLES",
                "modified": "2017-05-30T17:42:27.000Z",
                "id": 280,
                "basic_product_id": 27
            }
        ]
    }
    await request(app)
    .post('/filter')
    .send({
        "access_group_name":"ABONO",
        "name":"Todos"
    })
    .then((response) => {
        expect(response).toBe(expected);
        done();
    }).catch((error) => {
        console.log(error)
    })
    
})
