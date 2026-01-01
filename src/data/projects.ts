export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  year: string;
  image: string;
  repo?: string;
  live?: string;
}

import proj1 from "@/assets/projects/project1.jpg";
import proj2 from "@/assets/projects/project2.jpg";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Sales Forecasting with Python",
    shortDescription: "Time-series forecasting for retail sales using ARIMA and XGBoost.",
    fullDescription:
      "Built a forecasting pipeline using pandas, statsmodels ARIMA and XGBoost. Included feature engineering, cross-validation, and a dashboard for visualizing predictions.",
    year: "2024",
    image: proj1,
    repo: "https://github.com/your/repo1",
  },
  {
    id: "project-2",
    title: "Interactive Data Dashboard",
    shortDescription: "React + Recharts dashboard for exploring student performance metrics.",
    fullDescription:
      "Developed an interactive dashboard with filtering, drilldowns and export features. Backend provides aggregated metrics and endpoints for charts.",
    year: "2023",
    image: proj2,
    live: "https://example.com/project2",
  },
];