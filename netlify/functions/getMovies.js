exports.handler = async (event) => {
const API_KEY = process.env.API_KEY;
    const path = event.queryStringParameters.path || "movie/popular"; // Ruta por defecto
    
    const API_URL = `https://api.themoviedb.org/3/${path}?api_key=${API_KEY}`;
    
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error fetching data" }),
        };
    }
};
