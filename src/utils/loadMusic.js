import axios from 'axios'

export const loadAllMusic = async () => {
    const res = await axios.get(`http://localhost:3000/api/music/all/`)
    return res.data
   
}

export const loadMusic = async (page = 1, limit = 1) => {
    const res = await axios.get(`http://localhost:3000/api/music/all?page=${page}&limit=${limit}`)
    return res.data
   
}

