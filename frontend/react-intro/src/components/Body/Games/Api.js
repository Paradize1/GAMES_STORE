


async function fetchGames() {
    const url = 'http://127.0.0.1:8000/api/games/';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching games:', error);
        return [];
    }
}

export default fetchGames;

