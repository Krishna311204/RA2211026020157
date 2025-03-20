const axios = require("axios");

const PRIME_API = "http://20.244.56.144/test/primes";

const fetchPrimeNumbers = async () => {
    try {
        const response = await axios.get(PRIME_API, { timeout: 500 });
        console.log("Prime Numbers:", response.data.numbers);
    } catch (error) {
        console.error("Error fetching prime numbers:", error.message);
    }
};

fetchPrimeNumbers();