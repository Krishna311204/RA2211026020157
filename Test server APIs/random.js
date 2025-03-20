const axios = require("axios");

const RANDOM_API = "http://20.244.56.144/test/rand";

const fetchRandomNumbers = async () => {
    try {
        const response = await axios.get(RANDOM_API, { timeout: 500 });
        console.log("Random Numbers:", response.data.numbers);
    } catch (error) {
        console.error("Error fetching random numbers:", error.message);
    }
};

fetchRandomNumbers();