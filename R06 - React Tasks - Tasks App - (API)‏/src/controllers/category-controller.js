import axios from "axios";
class CategoryController {
    async create(category) {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let response = await axios.post(`/categories`,
                {
                    name: category.name,
                    active: true,
                });
            console.log(response.data);
            if (response.status == 201) {
                return response.data.object;
            }
        }
        catch (error) {
            return null;
        }
    }
    async read() {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let response = await axios.get(`/categories`);
            if (response.data.length != 0) {
                return response.data.data;
            }
            return [];
        } catch (error) {

        }
    }
    async update(category) {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let response = await axios.put(`/categories/${category.id}`,
                {
                    name: category.name,
                    active: true,
                });
            return true;
        } catch (error) {
            return false;
        }
    }
    async delete(id) {
        axios.defaults.withCredentials = true;
        axios.defaults.baseURL = "http://localhost:8000/api";
        try {
            let response = await axios.delete(`/categories/${id}`)
            return true;
        } catch (error) {
            return false;
        }
    }
}
export default CategoryController;