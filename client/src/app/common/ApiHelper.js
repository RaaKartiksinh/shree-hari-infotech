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

  // Site Supervisor List
  async getSiteSupervisorList() {
    return axios.get(`${this.baseUrl}/supervisorNameandid`);
  }

  // Get Site
  async getSite() {
    return axios.get(`${this.baseUrl}/site`);
  }

  // Create Site
  async createSite(data) {
    return axios.post(`${this.baseUrl}/site`, data);
  }

  // Update Site
  async updateSite(id, data) {
    return axios.put(`${this.baseUrl}/site/${id}`, data);
  }

  // Delete Site
  async deleteSite(id) {
    return axios.delete(`${this.baseUrl}/site/${id}`);
  }

  //  Get Supervisor
  async getSupervisor() {
    return axios.get(`${this.baseUrl}/supervisor`);
  }
  // create supervisor
  async createSupervisor(data) {
    return axios.post(`${this.baseUrl}/supervisor`, data);
  }
  // edit supervisor
  async editSupervisor(editSupervisor) {
    return axios.put(
      `${this.baseUrl}/supervisor/${editSupervisor.id}`,
      editSupervisor.values
    );
  }

  // delete supervisor
  async deleteSupervisor(supervisor_id) {
    return axios.delete(`${this.baseUrl}/supervisor/${supervisor_id}`);
  }

  // Get Supervisor Attendance
  async getSupervisorAttendance(s_id) {
    return axios.get(`${this.baseUrl}/supervisorDate/${s_id}`);
  }
}

const apiHelper = new ApiHelper();
export default apiHelper;
