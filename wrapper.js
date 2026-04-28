const axios = require("axios");

class Wrapper {
  constructor(baseURL, token) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async request(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}/webservice/rest/server.php`, {
        params: {
          wstoken: this.token,
          wsfunction: endpoint,
          moodlewsrestformat: 'json',
          ...params
        }
      });

      return response.data;
    } catch (error) {
      console.error("API Error:", error.message);
    }
  }

}

module.exports = Wrapper;