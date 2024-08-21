# Vehicle Movement Simulation on a Map using React and Leaflet

This project demonstrates a vehicle's movement on a map using React and Leaflet. It simulates the car's journey from a starting point to an ending point along a predefined route. The simulation is triggered by clicking the "Start Simulation" button, and the car icon moves along the route in real-time.

## Features

- Displays a map using Leaflet.
- Simulates vehicle movement from a starting point to an ending point.
- Displays the complete route on the map with a polyline.
- Updates the vehicle's position on the map in real-time.
- A button to start the simulation, resetting the vehicle to the starting point.
- Custom car icon for the moving vehicle.
- Responsive design with a navigation bar at the top.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KMONIKA26/React-leaflet-tracking-vehicle-simulation
   cd react-leaflet-vehicle-simulation
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the application in your browser:

   ```
   http://localhost:3000
   ```

## Usage

1. The application will load with a map centered at the starting point of the route.
2. Click the "Start Simulation" button to begin the simulation.
3. The car icon will move along the predefined route from the starting point to the ending point.

## Project Structure

- `src/Map.js`: Contains the map component that handles the rendering of the Leaflet map, car icon, and simulation logic.
- `src/Navbar.js`: Contains the navigation bar component.
- `public/index.html`: The main HTML file that includes the root `div` where the React app is rendered.
- `src/index.js`: Entry point for the React application.

## Customization

### Changing the Route

To change the route, modify the `routeCoordinates` array in `src/Map.js`. Each element in the array represents a latitude and longitude pair:

```javascript
const routeCoordinates = [
  [latitude1, longitude1],
  [latitude2, longitude2],
  ...
];
```

### Changing the Car Icon

To change the car icon, update the `iconUrl` in the `carIcon` configuration:

```javascript
const carIcon = new L.Icon({
  iconUrl: 'your-icon-url', // Replace with your car icon URL
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});
```

### Adjusting the Simulation Speed

To change the speed of the car's movement, adjust the interval in the `useEffect` hook in `src/Map.js`:

```javascript
React.useEffect(() => {
  if (isMoving) {
    const intervalId = setInterval(() => {
      // Simulation logic...
    }, 1000); // Adjust the interval (in milliseconds) to change the speed
    return () => clearInterval(intervalId);
  }
}, [isMoving, routeIndex]);
```

## Dependencies

- [React](https://reactjs.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Leaflet Documentation](https://leafletjs.com/)
- [React Leaflet Documentation](https://react-leaflet.js.org/)
