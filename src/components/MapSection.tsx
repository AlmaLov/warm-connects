
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';

// Temporary token input - replace with your Mapbox token
const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN';

interface Location {
  name: string;
  coordinates: [number, number];
  count: number;
}

const locations: Location[] = [
  { name: "New Delhi", coordinates: [77.2090, 28.6139], count: 484 },
  { name: "Eastern India", coordinates: [88.3639, 22.5726], count: 245 },
  { name: "Myanmar Region", coordinates: [96.1956, 16.8661], count: 138 },
  { name: "Northern Region", coordinates: [80.2707, 13.0827], count: 44 },
  { name: "Southern Region", coordinates: [79.8611, 6.9271], count: 115 },
  { name: "Nepal Region", coordinates: [85.3240, 27.7172], count: 16 },
  { name: "Central Region", coordinates: [78.4867, 17.3850], count: 29 },
  { name: "Western Region", coordinates: [72.8777, 19.0760], count: 12 }
];

const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [85, 23],
      zoom: 4,
      projection: 'mercator'
    });

    // Add markers
    locations.forEach((location) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'flex items-center justify-center';
      
      const marker = document.createElement('div');
      marker.className = `rounded-full ${location.count > 200 ? 'w-16 h-16' : 'w-12 h-12'} 
        ${location.count > 100 ? 'bg-burgundy' : 'bg-white'} 
        ${location.count > 100 ? 'text-white' : 'text-burgundy'} 
        flex items-center justify-center text-sm font-bold shadow-lg
        border-2 border-burgundy`;
      marker.textContent = location.count.toString();
      
      markerElement.appendChild(marker);

      new mapboxgl.Marker(markerElement)
        .setLngLat(location.coordinates)
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <h2 className="text-5xl font-bold text-burgundy mb-6">
            SBS Alumni on Global Map
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect with your alumni today!
          </p>
          <Button className="bg-burgundy hover:bg-burgundy-light text-white px-8 py-6 text-lg">
            Sign in now
          </Button>
        </div>
        
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-xl">
          <div ref={mapContainer} className="absolute inset-0" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-burgundy/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
