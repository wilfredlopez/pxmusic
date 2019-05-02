import axios from 'axios'

let url = 'https://pxmusic.herokuapp.com'
    if(process.env.NODE_ENV === "development"){
        url = 'http://localhost:3000'
    }


export const loadAllMusic = async () => {
    

    const res = await axios.get(`${url}/api/music/all/`)
    return res.data
   
}

export const loadMusic = async (page = 1, limit = 1) => {
    const res = await axios.get(`${url}/api/music/all?page=${page}&limit=${limit}`)
    return res.data
   
}

