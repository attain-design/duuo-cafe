
import React, { useEffect, useRef } from 'react';

const MapLocation = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps API script
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
    googleMapScript.defer = true;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    
    // Init map when script loads
    window.initMap = () => {
      if (mapRef.current) {
        const location = { lat: 48.13629, lng: 11.53479 }; // Coordinates for Gollierstraße 53, 80339 München
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 16,
          styles: [
            {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [{"weight": "2.00"}]
            },
            {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [{"color": "#9c9c9c"}]
            },
            {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [{"visibility": "on"}]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{"color": "#f2f2f2"}]
            },
            {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#f9f6f0"}]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": 45}]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#eeeeee"}]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#7b7b7b"}]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [{"color": "#ffffff"}]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{"visibility": "simplified"}]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{"color": "#c4c4c4"}, {"visibility": "on"}]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{"color": "#E2D1C3"}]
            }
          ]
        });
        
        const marker = new google.maps.Marker({
          position: location,
          map: map,
          title: 'Café DUUO',
          animation: google.maps.Animation.DROP
        });
        
        const infowindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 5px; font-weight: bold; color: #5C564E;">Café DUUO</h3>
              <p style="margin: 0; color: #333;">Gollierstraße 53<br>80339 München</p>
            </div>
          `
        });
        
        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });
      }
    };
    
    return () => {
      window.document.body.removeChild(googleMapScript);
      delete window.initMap;
    };
  }, []);
  
  return (
    <div className="mb-8 h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="h-full w-full"></div>
    </div>
  );
};

// Add this to the global Window type
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

export default MapLocation;
