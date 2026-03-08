-- Daily Trends Worldwide

SELECT
    record_date,
    SUM(new_cases) AS global_new_cases,
    SUM(new_deaths) AS global_new_deaths
FROM covid_data
GROUP BY
    record_date
ORDER BY record_date ASC;