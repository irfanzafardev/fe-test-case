import React, { useState } from 'react';
import Map from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Modal from './components/Modal';

function App() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className='h-screen'>
            <div className='text-center my-2'>
                <button
                    className="ml-4 inline-flex justify-center rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800"
                    onClick={() => setShowModal(true)}
                >
                    Click Me
                </button>
            </div>
            <div className='grid grid-cols-12 h-full'>
                <div className='col-span-8'>
                    <Map mapLib={maplibregl}
                        initialViewState={{
                            longitude: 16.62662018,
                            latitude: 49.2125578,
                            zoom: 14
                        }}
                        style={{ width: "100%", height: "100%" }}
                        mapStyle="https://api.maptiler.com/maps/satellite/style.json?key=Vzza6kef3W5Cqefdtq20"
                    >
                    </Map>
                </div>
                <div className='col-span-4' style={{ backgroundColor: "#2C2D32" }}>
                    <div className='columns-1'>
                        <div className="w-full">
                            <div className="text-center text-white uppercase py-2" style={{ backgroundColor: "#4F4F4F" }}>
                                <h1>Attendance Office History</h1>
                            </div>
                            <div className="p-4" style={{ backgroundColor: "#2C2D32" }}>
                                <LineChart />
                            </div>
                        </div>
                    </div>
                    <div className='columns-1'>
                        <div className="w-full">
                            <div className="text-center text-white uppercase py-2" style={{ backgroundColor: "#4F4F4F" }}>
                                <h1>Employee Information</h1>
                            </div>
                            <div className="p-4" style={{ backgroundColor: "#2C2D32" }}>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
                <Modal stateChanger={setShowModal} />
            ) : null}
        </div>
    );
}

export default App;
