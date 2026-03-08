-- Top Affected Countries by Total Cases (Latest Date Available)

WITH
    LatestData AS (
        SELECT country, MAX(record_date) AS max_date
        FROM covid_data
        GROUP BY
            country
    )
SELECT c.country, c.total_cases, c.total_deaths
FROM
    covid_data c
    JOIN LatestData ld ON c.country = ld.country
    AND c.record_date = ld.max_date
ORDER BY c.total_cases DESC
LIMIT 10;