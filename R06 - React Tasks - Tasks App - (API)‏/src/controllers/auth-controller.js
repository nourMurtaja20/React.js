import axios from "axios";

class AuthController {
    async csrfCookie() {
        try {
            axios.defaults.withCredentials = true;
            axios.defaults.baseURL = "http://localhost:8000";
            let response = await axios.get("/sanctum/csrf-cookie");
            console.log(response);
            return true;
        } catch (error) {
        }
        return false;
    }
    async login(email, password) {
        try {
            let csrfRequest = await this.csrfCookie();
            if (csrfRequest) {
                let response = await axios.post("/api/auth/login", {
                    email: email,
                    password: password,
                });
            }
            return true;
        } catch (error) {
            return false;
        }
    }

    async register(email, password) {
        try {
            let csrfRequest = await this.csrfCookie();
            if (csrfRequest) {
                let response = await axios.post('/api/auth/register',
                    {
                        email: email,
                        password: password,
                        returnSecureToken: true,
                    });
            }
            return true;/*{ status: true, message: "registered successfully", token: response.data.idToken, }*/
        } catch (error) {
            return { status: false, message: "registration failed try again" }
        }
    }
}
export default AuthController;