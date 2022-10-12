import * as React from 'react';

export default function App() {

// Our state to store fetched cache data
const [cacheData, setCacheData] = React.useState();

// Function to get multiple cache data
const getMultipleCacheData = async (cacheNames) => {
	if (typeof caches === 'undefined') return false;

	var cacheDataArray = []
	for (var i = 0; i < cacheNames.length; i++) {

	const cacheStorage = await caches.open(cacheNames[i].cacheName);
	const cachedResponse = await cacheStorage.match(cacheNames[i].url);

	// If no cache exists
	if (!cachedResponse || !cachedResponse.ok) {
		cacheDataArray[i] = `Unable to fetch ${cacheNames[i].cacheName}`
	} else {
		var data = await cachedResponse.json()
		cacheDataArray[i] = data
	}
	}

	// Putting commas in between caches data
	// to display properly
	setCacheData(cacheDataArray.join(', '))
};

// Caches names which has to be fetched from browser
const cachesToFetch = [
	{ cacheName: 'CacheOne', url: 'https://localhost:300' },
	{ cacheName: 'CacheFour', url: 'https://localhost:300' }
]

return (
	<div style={{ height: 500, width: '80%' }}>
	<h4>How to get multiple cache data in ReactJS?</h4>
	<button onClick={() => getMultipleCacheData(cachesToFetch)} >
		Get Multiple Cache Data</button> <br />
	<h6>Multiple Cache Data is: {cacheData}</h6>
	</div>
);
}
