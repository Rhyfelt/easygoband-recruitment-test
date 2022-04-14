const axios = require('axios');
const accessToken = "Basic cJmAc71jah17sgqi1jqaksvaksda="
const url = `https://pnny0h3cuf.execute-api.eu-west-1.amazonaws.com/dev/providers/1`



const getData = async () => {
    const request = await axios.get(url,{
        headers:{
            'Accept':'*/*',
            'Content-Type':'application/json',
            'Connection':'keep-alive',
            'Authorization':accessToken,
        }
    })

    return request.data
}

module.exports = getData