// api/movies.js
import axios from 'axios';

export default async function handler(req, res) {
    const apiKey = process.env.API_KEY; 
    const api = axios.create({
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    });

    try {
        const { data } = await api.get('trending/movie/day', {
            params: {
                api_key: apiKey,
            },
        });
        res.status(200).json(data); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos de la API' });
    }
}
