-- Create Tables
USE covid19_analytics;

CREATE TABLE covid_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(100) NOT NULL,
    record_date DATE NOT NULL,
    total_cases INT,
    new_cases INT,
    total_deaths INT,
    new_deaths INT,
    total_vaccinations BIGINT,
    people_vaccinated BIGINT,
    people_fully_vaccinated BIGINT,
    population BIGINT,
    continent VARCHAR(50)
);

CREATE INDEX idx_country_date ON covid_data (country, record_date);