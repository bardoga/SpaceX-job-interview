import axios from 'axios';
const api = 'https://api.spacexdata.com/v4/launches'

const LANDINGS_KEY = 'landingsDB'


export const landingService = {
    fetchData,

}


async function fetchData() {
    const data = await axios.get(api)
    console.log(data)
    return data
}