const axios = require("axios");

const FIBO_API = "http://20.244.56.144/test/fibo";

const fetchFibonacciNumbers = async () => {
    try {
        const response = await axios.get(FIBO_API, { timeout: 500 });
        console.log("Fibonacci Numbers:", response.data.numbers);
    } catch (error) {
        console.error("Error fetching Fibonacci numbers:", error.message);
    }
};

fetchFibonacciNumbers();