<!-- State Redux -->

```
state = {
  countries: {
    data: [],
    error: '',
    isLoading: false,
  },

  country: {
    data: [],
    error: '',
    isLoading: false,
  },

  favorite: {
    favorite: [],
    display: false,
  },

  sort: {
    currentSort: 'name',
    sortData: 'asc',
  },
}
```

<!-- url of BrowserRouter -->
```
path="/" => render HomePage component

path="/:countryName" => render CountryPage component
```
<!-- State of ThemeContext -->

{
  // change theme dark or light for website
  toggleColorMode: () => {},

  // change country name dynamic at HeaderApp component
  countryName: '',
  setNameCountry: () => {},
}