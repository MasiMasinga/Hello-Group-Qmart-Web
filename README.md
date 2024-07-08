# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


## WEB APP URL
- http://13.246.58.248/

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
   git clone https://github.com/MasiMasinga/Hello-Group-Qmart-Web.git
   cd Hello-Group-Qmart-Web

2. **Install dependencies**:
    ```bash
    npm install
    
    or

    yarn install

3. **Start the development server**:
    ```bash
    npm run dev

    or
    
    yarn run dev


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
