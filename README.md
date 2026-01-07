# Weather Application

<!-- ## Deployment Link

**[Live Application]()** -->

## Overview

This project is a web application challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49).

It's a responsive weather application built with React.js that allows users to get current weather data from [Open-Meteo API](https://open-meteo.com/), based on their location or by searching for another location, as well as a detailed weather forecast and unit conversion.

## Features

- Detect the user's current location automatically after they allow the app to access their location, then display the associated weather information.
- Search for a specified location in the search bar and get its weather information
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics including "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- Fully responsive and optimized for all screen sizes: mobile, tablet, and desktop following a mobile-first approach.

## Stack and Technologies

- React
- Redux Toolkit
- TypeScript
- Sass (Scss)
- Vite
- ESLint
- REST APIs
- world-cities-json
- Mobile-First Design

## Attributions && Data Sources

- [Open-Meteo.com](https://open-meteo.com/) is used to fetch weather data from its API.
- [OpenStreetMap](https://www.openstreetmap.org/copyright) is used to obtain the address by latitude and longitude (after determining the geographical location) using [nominatim openstreetmap api](https://nominatim.openstreetmap.org/)
- [world-cities-json](https://npm.io/package/world-cities-json) is used to obtain the address by searching for a city from the input field  
  [world-cities-json](https://npm.io/package/world-cities-json) depending on [SimpleMaps World Cities Database](https://simplemaps.com/data/world-cities) owned by Pareto Software, LLC and licensed under [the Creative Commons Attribution 4.0 International (CC BY 4.0) license](https://creativecommons.org/licenses/by/4.0/)

## Prerequisites

- **Node.js** – Recommended **v22.20.0**.
- **Package Manager** – One of **npm**, **pnpm**, **yarn** or **bun** installed globally.

## Installation

Choose your preferred package manager (**npm**, **pnpm**, **yarn** or **bun**)

### Installs Dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production Build

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

### Preview Production Build

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Coded by

**[Linkedin Profile](https://www.linkedin.com/in/ahmedawad123/)**

## Output design Screenshots:

Large Screen:
![Output](/output-screens/large.png)

Large Screen with drop down:
![Output](/output-screens/large-drop-down.png)

Medium Screen:
![Output](/output-screens/medium.png)

Mobile Screen:
![Output](/output-screens/small.png)
