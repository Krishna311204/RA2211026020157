import requests

# API for company registration
API_URL = "http://20.244.56.144/test/register"

# Registration details
payload = {
    "companyName": "SRM IST Ramapurm",
    "ownerName": "Krishna",
    "rollNo": "RA2211026020157",
    "ownerEmail": "kp1014@srmist.edu.in",
    "accessCode": "SUfGJv"
}

# Headers for  request
headers = {
    "Content-Type": "application/json"
}

def register_company():
    """ Sends a registration request """
    try:
        response = requests.post(API_URL, json=payload, headers=headers)

        # Check if registration is successful
        if response.status_code == 200:
            print("\n Registration Successful!\n")
            print("Client Credentials:")
            print(response.json())  # Print the response 
        else:
            print("\n Registration Failed!")
            print(f"Status Code: {response.status_code}")
            print("Response:", response.text)  # Print response from server

    except requests.exceptions.RequestException as e:
        print("\n Network Error:", e)


register_company()