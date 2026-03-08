# COVID-19 Data Analysis Report

## Executive Summary

This report analyzes global COVID-19 data to understand infection spread, mortality rates, and vaccination progress across different countries.

## Key Findings

### 1. Top Affected Countries

Using our SQL analysis, the top 10 countries with the highest total cases show a significant concentration in major population centers across North America, Asia, and Europe.
_(See `queries/top_countries.sql`)_

### 2. Daily Trends

The global trend analysis reveals waves of new cases that correlate with seasonal changes and the emergence of new virus variants.
_(See `queries/daily_trends.sql`)_

### 3. Mortality Rate Analysis

While total deaths are highest in countries with the most cases, the actual "death rate" (deaths per reported case) varied significantly, often highlighting disparities in healthcare infrastructure or reporting practices.
_(See `queries/death_rate.sql`)_

### 4. Vaccination Impact

Countries with a high percentage of fully vaccinated individuals (e.g., >70% of population) generally showed a decoupling between new cases and new deaths in late stages of the pandemic.
_(See `queries/vaccination_progress.sql`)_

## Conclusion

The data highlights the unequal impact of the pandemic globally and the critical role of vaccination campaigns in mitigating severe outcomes. Continual monitoring via 7-day rolling averages proved essential for tracking active outbreaks.
