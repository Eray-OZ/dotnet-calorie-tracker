

const API_URL = "http://localhost:5097"




export const api = {


    async getCalorieEntries() {
        const response = await fetch(`${API_URL}/api/calorie`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    },


    async addCalorieEntry(request) {
        const response = await fetch(`${API_URL}/api/calorie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    },



    async deleteEntry(id) {
        const response = await fetch(`${API_URL}/api/calorie/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    }


};

