# Fullstack test

The assessment consists in building a dashboard for analyzing publishers site traffic insights.

## Feature requirements

- Global view
  - Traffic is aggregated from all articles
  - Articles data is displayed ordered by traffic
  - Data can be filtered using top bar selector
  - Clicking on an article should navigate to article details view
- Details view
  - Traffic is aggregated from the article
  - Data can be filtered using top bar selector
- Api
  - should use generated dataset as database
- Time selector
  - Should allow to select a value from:
    - Today
    - Yesterday
    - Last seven days
    - This month

## Implementation Overview

I have successfully implemented all the specified features and requirements. The key aspects of my implementation include:

- Use of React Query and React Router for efficient state management on both the server and client sides.
- Comprehensive testing to ensure the reliability and functionality of the application.
- Development of APIs for managing article and traffic data.
- Integration of a time selector component, providing users the flexibility to analyze data over different time periods.
- Installation of a lint plugin to enforce a clean and consistent code style.
- Implementation of code splitting for enhanced performance and adherence to a scalable and structured codebase.
