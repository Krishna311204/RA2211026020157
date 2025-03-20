const axios = require('axios');

// API URL
const url = "http://20.244.56.144/test/register";

// Request payload
const data = {
    companyName: "SRM IST Ramapurm",
    ownerName: "Krishna Palekar",
    rollNo: "RA2211026020157",
    ownerEmail: "krishnapalekar3112@gmail.com",
    accessCode: "SUfGJv"
};

// Send POST request
axios.post(url, data, {
    headers: { "Content-Type": "application/json" }
})
.then(response => {
    console.log("Registration Successful!");
    console.log("Response Data:", response.data);
})
.catch(error => {
    console.error("Error:", error.response ? error.response.data : error.message);
});