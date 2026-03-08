-- Import Data (Assuming MySQL syntax for local infile, adapt based on your actual RDBMS)
USE covid19_analytics;

LOAD DATA INFILE '../data/covid_dataset.csv' INTO
TABLE covid_data FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (
    country,
    record_date,
    @total_cases,
    @new_cases,
    @total_deaths,
    @new_deaths,
    @total_vaccinations,
    @people_vaccinated,
    @people_fully_vaccinated,
    population,
    continent
)
SET
    total_cases = NULLIF(@total_cases, ''),
    new_cases = NULLIF(@new_cases, ''),
    total_deaths = NULLIF(@total_deaths, ''),
    new_deaths = NULLIF(@new_deaths, ''),
    total_vaccinations = NULLIF(@total_vaccinations, ''),
    people_vaccinated = NULLIF(@people_vaccinated, ''),
    people_fully_vaccinated = NULLIF(@people_fully_vaccinated, '');