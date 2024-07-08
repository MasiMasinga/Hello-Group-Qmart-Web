# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

## Overview
This React application is designed to display information about match schedules, player profiles, and match results for a sports team. It interacts with three API endpoints: `/api/schedule`, `/api/players`, and `/api/results`.

## Features
- **Match Schedule**: Displays upcoming matches with details such as date, time, opponent, and venue.
- **Player Profiles**: Shows profiles of players, including their name, rank, position, age, start date, and an image link.
- **Match Results**: Presents the results of past matches with the score and a link to highlights.

## Technologies Used
- React
- Axios
- Context API
- Material-UI (MUI) for styling and components

## Setup Instructions

### Prerequisites
- Node.js (version 12 or later)
- npm (version 6 or later) or yarn (version 1.22 or later)

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-sports-app.git
   cd react-sports-app

2. **Install dependencies**:
    ```bash
    npm install
    
    or

    ```base
    yarn install

3. **Start the development server**:
    ```bash
    npm start

    or
    
    ``bash
    yarn start


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
