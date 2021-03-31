import axios from "axios";
import { LOCAL_STORAGE_TOKEN_ID } from './App'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
//   static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    let _token = localStorage.getItem(LOCAL_STORAGE_TOKEN_ID)

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${_token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** login route */

//   static async login()

  /**Get list of companies */

  //:TODO do something about the search
  
  static async getCompanies(search) {
      let res = await this.request(`companies`, search)
      return res.companies;  
    }
    
    /** Get details on a company by handle. */
    
    static async getCompany(handle) {
        let res = await this.request(`companies/${handle}`);
        return res.company;
    }
    
    /**Get a list of jobs */
    //:TODO do something about the search

    static async getJobs(search) {
        console.log(search);
        let res = await this.request(`jobs`, search)
        return res.jobs;
    }

    /**Get details on a job by the Id */
    static async getJob(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
    }

    static async login(data) {
      let res = await this.request('auth/token', data, 'post')
      return res.token;
    }

    static async signup(data) {
      let res = await this.request('auth/register', data, 'post')
      return res.token;
    }

    static async getUser(username) {
      let res = await this.request(`users/${username}`)
      return res.user;
      
    }

    static async updateUser(username, data) {
      let res = await this.request(`users/${username}`, data, 'patch')
      return res.user;
    }

    static async applyToJob(username, id) {
      let res = await this.request(`users/${username}/jobs/${id}`, {}, 'post')
      return res.applied
    }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


    export default JoblyApi;