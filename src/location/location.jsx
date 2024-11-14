/* global google */

import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';

function Location() {
    const [locations, setLocations] = useState([
        {
            id: 1,
            name: "Main Store - New York",
            address: "123 Main St, New York, NY, USA",
            distance: "1.2 km",
            hours: [
                { day: "Mon - Thu", time: "11:00 - 21:00" },
                { day: "Fri - Sat", time: "11:00 - 22:00" },
                { day: "Sun", time: "11:00 - 18:00" },
            ],
            position: { lat: 40.7128, lng: -74.0060 } // Координаты для Нью-Йорка
        },
    ]);
    const [macs, setMacs] = useState([]);

    const fetchLocations = async () => {
        return locations;
    };

    const fetchMacs = async () => {
        return [
            { lat: 40.7138, lng: -74.0070 },
            { lat: 40.7150, lng: -74.0050 }
        ];
    };

    useEffect(() => {
        const loadGoogleMapsScript = () => {
            return new Promise((resolve, reject) => {
                const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
                
                // Проверяем, загружен ли скрипт
                if (existingScript) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDaTAS_u-4SxZOKn9gIsqdWNRrMaPkMsBc&libraries=places';
                script.onload = () => resolve();
                script.onerror = () => reject('Error loading Google Maps API');
                document.head.appendChild(script);
            });
        };

        async function initMap() {
            try {
                if (typeof google === 'undefined' || !google.maps) {
                    console.error('Google Maps API не загружен');
                    return;
                }

                const locations = await fetchLocations();
                const macs = await fetchMacs();

                if (locations.length === 0) {
                    console.error('No data available.');
                    return;
                }

                const startLat = locations[0].position.lat;
                const startLon = locations[0].position.lng;

                const map = new google.maps.Map(document.getElementById("map"), {
                    center: { lat: startLat, lng: startLon },
                    zoom: 12,
                    disableDefaultUI: true
                });

                locations.forEach((location) => {
                    new google.maps.Marker({
                        position: location.position,
                        map: map,
                        title: location.name,
                    });
                });

                macs.forEach((mac) => {
                    new google.maps.Marker({
                        position: mac,
                        map: map,
                        title: "Mac Device",
                    });
                });
            } catch (error) {
                console.error('Error initializing map:', error);
            }
        }

        loadGoogleMapsScript()
            .then(() => {
                initMap();
            })
            .catch((error) => {
                console.error(error);
            });

        return () => {
            const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
            if (script) {
                script.remove();
            }
        };
    }, [locations]);

    return (
        <div className="location-section">
            <h2>Store Locations</h2>

            <div className="location-container">
                <div className="location-list">
                    {locations.map((location) => (
                        <div key={location.id} className="location-item">
                            <h3>{location.name}</h3>
                            <p>{location.address}</p>
                            <p>{location.distance}</p>
                            <div>
                                {location.hours.map((hour, index) => (
                                    <p key={index}>{hour.day}: {hour.time}</p>
                                ))}
                            </div>
                            <div className="location-links">
                                <a href="#">Show on map</a>
                                <a href="#">Store details</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div id="map" style={{ width: '100%', height: '400px' }}></div>
            </div>

            <Footer />
        </div>
    );
}

export default Location;
