-- Vaccination Progress Percentage by Country

WITH
    LatestData AS (
        SELECT country, MAX(record_date) AS max_date
        FROM covid_data
        WHERE
            people_fully_vaccinated IS NOT NULL
        GROUP BY
            country
    )
SELECT
    c.country,
    c.population,
    c.people_fully_vaccinated,
    (
        CAST(
            c.people_fully_vaccinated AS DECIMAL
        ) / NULLIF(c.population, 0)
    ) * 100 AS vaccination_rate_percentage
FROM
    covid_data c
    JOIN LatestData ld ON c.country = ld.country
    AND c.record_date = ld.max_date
ORDER BY vaccination_rate_percentage DESC;