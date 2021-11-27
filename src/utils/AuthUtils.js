export default class AuthUtils {
    static API_URL = 'http://localhost:3001/api';

    static async login(username, password) {
        const response = await fetch(this.API_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
            credentials: 'include'
        });

        if (response.status === 200) {
            const user = await response.json();

            return user;
        }

        return null;
    }

    static async logout() {
        await fetch(this.API_URL + '/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
    }
}