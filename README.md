# Take-Home test
This is my attempt at the task given within the take-home test at Automata. 

## API Installation

To run the Flask API, follow these steps:

1. Navigate into the api directory from the root:
```bash
cd api
```

2. Install the project dependencies using Pipenv:
```bash
pipenv install
```

## API Usage

### Running the API
To start the server, use the following command:
```bash
pipenv run dev
```

This will start the server on port 8080 with debug mode enabled.

### Running Tests
To run the tests, use the following command:
```bash
pipenv run test
```

This will execute the test suite using pytest.

### Test Coverage 
To run the tests with coverage:
```bash
pipenv run coverage run -m pytest
```

To generate a coverage report, use the following command:
```bash
pipenv run coverage report
```
![Code_RLx90tnyWw](https://github.com/Eluented/automata-test-frontend/assets/97059717/7a3a15ed-97a5-455c-a91f-593ac5a11e0c)

This command will display a summary of the coverage report, showing the percentage of code covered by tests.

## Frontend Installation
To run the Next.js project, follow these steps:

1. Navigate into the client directory from the root:
```bash
cd client
```

2. Install the npm packages:
```bash
npm i
```

3. Run the project:
```bash
npm run dev
```

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

## Final Look
Interractive Home Page
![chrome_W7lmZZmlpC](https://github.com/Eluented/automata-test-frontend/assets/97059717/41d55a80-a675-426a-b9a6-db510e5f7bf6)
Zoom Out
![chrome_Id27YnzJ2e](https://github.com/Eluented/automata-test-frontend/assets/97059717/e33b201c-ec4a-4d23-9eac-366f7a1ae8e8)
![chrome_b7aqVGOam7](https://github.com/Eluented/automata-test-frontend/assets/97059717/b0ab2bb8-8759-4ae5-9168-d6bc8930d816)
Click on Automata to get into the Form Page
![chrome_zYhbChl3At](https://github.com/Eluented/automata-test-frontend/assets/97059717/2496257d-27d2-4b13-ab2d-d7a4a75b94e5)
![chrome_Tut7zQFWaw](https://github.com/Eluented/automata-test-frontend/assets/97059717/93fabbfb-ab27-4d6b-9013-88b028917f17)
