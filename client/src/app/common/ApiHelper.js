import axios from "axios";

class ApiHelper {
  constructor() {
    this.baseUrl = process.env.REACT_APP_APIUrl;
  }

  // Admin Create
  createAdmin(data) {
    return axios.post(`${this.baseUrl}/admin/`, data);
  }

  // Admin Login
  async loginAdmin(data) {
    try {
      const urlquery = `?email=${data.email}`;
      const result = await axios.get(`${this.baseUrl}/admin/${urlquery}`);
      if (result.data[0] && result.data[0].password === data.password) {
        return result.data[0];
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error in loginAdmin:", error);
      throw error;
    }
  }

  // Get Site
  async getSite() {
    return axios.get(`${this.baseUrl}/sidedata`);
  }

  // Create Site
  async createSite(data) {
    return axios.post(`${this.baseUrl}/sidedata/`, data);
  }

  // Update Site
  async updateSite(updateSiteData) {
    return axios.put(
      `${this.baseUrl}/sidedata/${updateSiteData.id}`,
      updateSiteData.values
    );
  }

  // Delete Site
  async deleteSite(id) {
    return axios.delete(`${this.baseUrl}/sidedata/${id}`);
  }

  // Supervisor
  async getSupervisor() {
    return axios.get(`${this.baseUrl}/super`);
  }
  // create supervisor
  async createSupervisor(data) {
    return axios.post(`${this.baseUrl}/super/`, data);
  }
  // edit supervisor
  async editSupervisor(editSupervisor) {
    return axios.put(`${this.baseUrl}/super/${editSupervisor.id}`,editSupervisor);
  }
  
  // delete supervisor
  async deleteSupervisor(id) {
    return axios.delete(`${this.baseUrl}/super/${id}`);
  }
}

const apiHelper = new ApiHelper();
export default apiHelper;
