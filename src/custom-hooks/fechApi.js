// Your code here
class FetchApi {
  constructor() {
    this.baseUrl = 'https://restcountries.com/v3.1/';
  }

  async getAllCountries() {
    try {
      const fetchData = await fetch(`${this.baseUrl}/all`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);

      const responseData = await fetchData.json();
      return responseData;
    } catch (error) {
      return `${error} when get all list countries.`;
    }
  }

  async searchCountry(countryName) {
    try {
      const fetchData = await fetch(`${this.baseUrl}/name/${countryName}`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);

      const responseData = await fetchData.json();
      return responseData;
    } catch (error) {
      return `${error} when search country by international or native name.`;
    }
  }
}

const fetchData = new FetchApi();

export default fetchData;
