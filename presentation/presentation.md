# Presentation

- Introduce feature of website.
- Showing component diagram. (https://app.diagrams.net/)
- Showing folder structure.
- Showing code of specific feature.

## Feature

-  Fetch API all countries and each country one time at the first time access.
-  Showing loading or error when fetch API.
-  Search feature.
-  Sort feature.
-  Favorite feature.
-  Switch theme feature.
-  Save data to localStorage.

## General data

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
    categorySort: 'name',
    sortData: 'asc',
  },
}
```

<!-- url of BrowserRouter -->
```
path="/" => render HomePage component

path="/:countryName" => render CountryPage component
```

<!-- State of AppContext -->
{
  // change theme dark or light for website
  toggleColorMode: () => {},

  // change country name dynamic at HeaderApp component
  countryName: '',
  setNameCountry: () => {},
}