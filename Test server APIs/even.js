const axios = require("axios");

const EVEN_API = "http://20.244.56.144/test/even";

const fetchEvenNumbers = async () => {
    try {
        const response = await axios.get(EVEN_API, { timeout: 500 });
        console.log("Even Numbers:", response.data.numbers);
    } catch (error) {
        console.error("Error fetching even numbers:", error.message);
    }
};

fetchEvenNumbers();