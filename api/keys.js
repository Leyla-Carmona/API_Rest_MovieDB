// api/movie.js

import axios from 'axios';

export default async function handler(req, res) {
    const key = process.env.API_KEY;  
    const url = `https://api.themoviedb.org/3/${req.query.endpoint}`;  
    try {
        const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            params: { api_key: key },
        });
        res.status(200).json(response.data);  
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}
