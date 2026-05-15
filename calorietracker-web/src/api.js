

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5097";




export const api = {


    async getCalorieEntries(userId) {
        const response = await fetch(`${API_URL}/api/calorie?userId=${encodeURIComponent(userId)}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    },


    async addCalorieEntry(request, userId) {
        const response = await fetch(`${API_URL}/api/calorie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...request, userId }),
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

