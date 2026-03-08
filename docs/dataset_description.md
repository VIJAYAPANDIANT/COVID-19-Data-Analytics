# Dataset Description

## Source

The data is a simulated, simplified subset representing structural data typically provided by organizations like Our World in Data (OWID) or the World Health Organization (WHO).

## Schema

Table: `covid_data`

| Column                    | Type    | Description                              |
| :------------------------ | :------ | :--------------------------------------- |
| `id`                      | INT     | Primary key                              |
| `country`                 | VARCHAR | Name of the country                      |
| `record_date`             | DATE    | Date of the record                       |
| `total_cases`             | INT     | Cumulative number of confirmed cases     |
| `new_cases`               | INT     | New confirmed cases on the specific date |
| `total_deaths`            | INT     | Cumulative number of deaths              |
| `new_deaths`              | INT     | New deaths on the specific date          |
| `total_vaccinations`      | BIGINT  | Total doses administered                 |
| `people_vaccinated`       | BIGINT  | People receiving at least one dose       |
| `people_fully_vaccinated` | BIGINT  | People receiving all prescribed doses    |
| `population`              | BIGINT  | Total population of the country          |
| `continent`               | VARCHAR | Continent where the country is located   |

## Notes for Analysis

- Missing data (NULL values) might occur in vaccination fields for earlier dates in the dataset before vaccines were available.
- `total_cases` and `total_deaths` are cumulative. Daily changes are found in `new_cases` and `new_deaths`.
