// Your code here
class FetchApi {
  constructor() {
    this.baseUrl = 'https://restcountries.com/v3.1/';
  }

  async getAllCountries() {
    try {
      const fetchData = await fetch(`${this.baseUrl}/all`);
      if (!fetchData.ok) throw new Error(`Can not fetch data: ${fetchData.status}`);

      const responseData = await fetchData.json();
      return responseData;
    } catch (error) {
      return `Error when get all list countries ${error}`;
    }
  }

  async searchCountry(countryName) {
    try {
      const fetchData = await fetch(`${this.baseUrl}/name/${countryName}`);
      if (!fetchData.ok) throw new Error(`Can not fetch data: ${fetchData.status}`);

      const responseData = await fetchData.json();
      return responseData;
    } catch (error) {
      return `Error when search country by international or native name ${error}`;
    }
  }
}

const fetchData = new FetchApi();

export default fetchData;
