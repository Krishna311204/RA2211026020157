const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;
let numberWindow = []; // Sliding window

// Third-party API endpoints
const NUMBER_API = {
    p: "http://20.244.56.144/test/primes",
    f: "http://20.244.56.144/test/fibonacci",
    e: "http://20.244.56.144/test/even",
    r: "http://20.244.56.144/test/random"
};

// Function to fetch numbers from third-party API
const fetchNumbers = async (type) => {
    try {
        if (!NUMBER_API[type]) throw new Error("Invalid number type");

        const response = await axios.get(NUMBER_API[type], { timeout: 500 });
        return response.data.numbers || [];
    } catch (error) {
        console.error("API Error:", error.message);
        return [];
    }
};

// Function to update sliding window
const updateWindow = (newNumbers) => {
    const uniqueNumbers = [...new Set(newNumbers)]; // Remove duplicates
    numberWindow = [...numberWindow, ...uniqueNumbers].slice(-WINDOW_SIZE); // Maintain window size
};

// Function to calculate average
const calculateAverage = () => {
    if (numberWindow.length === 0) return 0;
    const sum = numberWindow.reduce((acc, num) => acc + num, 0);
    return (sum / numberWindow.length).toFixed(2);
};

// API Endpoint
app.get("/numbers/:type", async (req, res) => {
    const numberType = req.params.type;
    const prevState = [...numberWindow]; // Store previous state

    const fetchedNumbers = await fetchNumbers(numberType);
    updateWindow(fetchedNumbers);

    const response = {
        windowPrevState: prevState,
        windowCurrState: numberWindow,
        numbers: fetchedNumbers,
        avg: parseFloat(calculateAverage())
    };

    res.json(response);
});

// Start Server
app.listen(PORT, () => {
    console.log( Server running at http://localhost:${PORT});
});