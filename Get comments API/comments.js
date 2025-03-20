const axios = require("axios");

const JOHN_DOE_POST_ID = 150;  // Fixed post ID for John Doe
const BASE_URL = 'http://20.244.56.144/test/posts/${JOHN_DOE_POST_ID}/comments';

// Function to fetch comments for John Doe's post
const fetchJohnDoeComments = async () => {
    try {
        const response = await axios.get(BASE_URL, { timeout: 500 });

        console.log("\n Comments for John Doe's Post (ID: 150):");
        console.table(response.data.comments);
    } catch (error) {
        console.error(" Error fetching comments:", error.message);
    }
};

// Call function
fetchJohnDoeComments();