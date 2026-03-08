-- Death Rate by Country

WITH
    LatestData AS (
        SELECT country, MAX(record_date) AS max_date
        FROM covid_data
        GROUP BY
            country
    )
SELECT
    c.country,
    c.total_cases,
    c.total_deaths,
    (
        CAST(c.total_deaths AS DECIMAL) / NULLIF(c.total_cases, 0)
    ) * 100 AS death_rate_percentage
FROM
    covid_data c
    JOIN LatestData ld ON c.country = ld.country
    AND c.record_date = ld.max_date
WHERE
    c.total_cases > 1000 -- Filter out countries with very few cases for better statistical relevance
ORDER BY death_rate_percentage DESC;