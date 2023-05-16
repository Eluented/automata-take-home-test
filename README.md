# Take-Home test
This is my attempt at the task given within the take-home test. 

This repository contains a Flask API for Incubator Selection.

## API Installation

To run the Flask API, follow these steps:

1. Navigate into the api directory from the root:
```cd api```

2. Install the project dependencies using Pipenv:
```pipenv install``

## API Usage

### Running the API
To start the server, use the following command:
```pipenv run dev```

This will start the server on port 8080 with debug mode enabled.

### Running Tests
To run the tests, use the following command:
```pipenv run test```

This will execute the test suite using pytest.

### Test Coverage 
To run the tests with coverage:
```pipenv run coverage run -m pytest```

To generate a coverage report, use the following command:
```pipenv run coverage report```

This command will display a summary of the coverage report, showing the percentage of code covered by tests.

## Frontend Installation
To run the Next.js project, follow these steps:

1. Navigate into the client directory from the root:
```cd client```

2. Install the npm packages:
```npm i```

3. Run the project:
```npm run dev```

## Technologies Used

### Backend
* Python
* Flask
* Pytest
* Pipenv

### Frontend
* React
* Next.js
* Three.js (React Three Fiber)
* Chakra UI
* Tailwind.css
* Javascript

## Future Features
* Attempt the extra credit :D
* Making the 3D environment more dynamic and interractable
* Adding additional form handling to prevent the user from sending invalid climate types to the API rather than wasting resources in the backend