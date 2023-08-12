// import axios from 'axios'

export class HttpClient {
  // Applying the Open-Close Principle you can choose which http request implementation to use
  // Without modifying all the other files where the get method is used

  //   static async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     return { data, status };
  //   }

  static async get(url: string) {
    const response = await fetch(url);
    const data = response.json();

    return { data, status: response.status };
  }
}
