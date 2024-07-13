import listTransfer from './transfer.js'

const data = null;

export default async function returnData(url) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8d165cb84dmshf739bd948cf1383p16ec15jsn0bcd45d31279',
            'x-rapidapi-host': 'transfermarkt-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


