export default class UserUtils {
    static API_URL = 'http://localhost:3001/api';

    static async getAll() {
        const response = await fetch(this.API_URL + '/users', {credentials: 'include'});
        const users = await response.json();

        return users;
    }

    static async getById(id) {
        const response = await fetch(this.API_URL + '/users/' + id, {credentials: 'include'});

        if (response.status === 200) {
            const user = await response.json();
            return user;
        }

        return null;
    }

    /**
     * submit data to server to create a new user
     * return just created user or null if failed
     */
    static async add(data) {
        const response = await fetch( this.API_URL + '/users', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });

        if (response.status === 201) {
            const user = await response.json();

            return user;
        } else if (response.status === 400) {
            return null;
        }
    }

    static async update(id, data) {
        const response = await fetch( this.API_URL + '/users/' + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });

        if (response.status === 200) {
            return true;
        } 
        
        return false;
    }

    static async delete(id) {
        const response = await fetch(this.API_URL + '/users/' + id, 
        {
            method: 'DELETE',
            credentials: 'include'
        });

        if (response.status === 204) {
            return true;
        } 
        
        return false;
    }
}