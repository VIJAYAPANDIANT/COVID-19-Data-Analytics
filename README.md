<div align="center">
  <h1>🦠 COVID-19 Data Analytics Project</h1>
  <p><strong>A Comprehensive SQL & Web Analytics Portfolio</strong></p>

  [![SQL](https://img.shields.io/badge/SQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
</div>

---

## 📖 Project Overview

Welcome to the **COVID-19 Data Analytics Project**! This repository is a full-stack demonstration of real-world data analytics. It bridges the gap between raw database operations and interactive data visualization.

The project focuses on processing global COVID-19 statistics using advanced **SQL** techniques and presenting those insights through a modern, responsive **Frontend Dashboard**.

> [!NOTE]
> **Detailed Documentation:** [View Project Document](https://drive.google.com/file/d/1WnLNYoLySju8G9t6Q9q1rP5FWfFITFR3/view?usp=sharing)

---

## 🎯 Key Features & Analysis

This project answers critical public health questions through data:

*   **Global Trends:** Tracking daily new cases and deaths to identify pandemic waves.
*   **Impact Assessment:** Ranking the top 10 most affected countries by total case volume.
*   **Mortality Analytics:** Calculating precise death rates per country.
*   **Vaccination Progress:** Monitoring the percentage of populations fully vaccinated.
*   **Advanced Metrics:** Implementing **7-day rolling averages** to smooth out daily reporting anomalies.

---

## 🛠️ Tech Stack

*   **Database:** SQL (MySQL/PostgreSQL compatible) for core data processing.
*   **Frontend:** HTML5 & CSS3 with Glassmorphism design principles.
*   **Visualization:** Chart.js for dynamic, interactive data plotting.
*   **Data Cleaning:** SQL functions (`NULLIF`, `CAST`, `COALESCE`) for robust data handling.

---

## 📊 Database Architecture

The project utilizes a structured schema designed for high-performance analytical queries.

### Schema: `covid_data`
| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | `INT` | Primary Key (Auto-increment) |
| `country` | `VARCHAR(100)` | Name of the nation |
| `record_date` | `DATE` | Date of the record |
| `total_cases` | `INT` | Cumulative infection count |
| `new_cases` | `INT` | Daily new infections |
| `total_deaths` | `INT` | Cumulative death toll |
| `total_vaccinations`| `BIGINT` | Total doses administered |
| `population` | `BIGINT` | National population count |

---

## 💻 Dashboard Preview

The dashboard features a stunning **Dark Mode Glassmorphism** UI, providing a premium user experience for data exploration.

<div align="center">
  <img width="800" alt="Dashboard Screenshot" src="https://github.com/user-attachments/assets/569cddd6-3844-4b9e-af53-5b3ea379e041" />
</div>

---

## 📁 Project Structure

```text
/
├── data/
│   └── covid_dataset.csv          # Source dataset
├── database/
│   ├── create_database.sql        # Database initialization
│   ├── create_tables.sql          # Schema definition
│   └── import_data.sql            # Bulk data loader
├── queries/
│   ├── top_countries.sql          # Analysis: Top 10 countries
│   ├── daily_trends.sql           # Analysis: Global trends
│   ├── death_rate.sql             # Analysis: Mortality rates
│   └── rolling_cases.sql          # Analysis: 7-day averages
├── website/
│   ├── index.html                 # Dashboard Structure
│   ├── style.css                  # Glassmorphism Styling
│   └── script.js                  # Visualization Logic
└── README.md                      # Documentation
```

---

## 🚀 Getting Started

### Phase 1: Database Setup
1. Execute `database/create_database.sql` to initialize your environment.
2. Run `database/create_tables.sql` to build the core schema.
3. Use `database/import_data.sql` to load the dataset from the `data/` folder.
4. Explore any script in the `queries/` directory for immediate insights.

### Phase 2: Web Dashboard
1. Navigate to the `website/` directory.
2. Open `index.html` in any modern browser.
3. Interact with the live charts powered by Chart.js.

---

## 📜 Author

**VIJAYAPANDIAN.T**
*Data Analytics Portfolio Project*

---
<div align="center">
  Developed with ❤️ for Data Science Excellence
</div>
