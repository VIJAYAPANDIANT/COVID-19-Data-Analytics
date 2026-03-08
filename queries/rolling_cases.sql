-- 7-Day Rolling Average of New Cases for a Specific Country (Example: United States)

SELECT
    record_date,
    new_cases,
    AVG(new_cases) OVER (
        PARTITION BY
            country
        ORDER BY
            record_date ROWS BETWEEN 6 PRECEDING
            AND CURRENT ROW
    ) AS rolling_7_day_avg_cases
FROM covid_data
WHERE
    country = 'United States'
ORDER BY record_date;