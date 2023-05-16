from flask import Flask, jsonify, request
import csv
import os
from werkzeug import exceptions
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS 

# ----------------------------------- 404 Routes -----------------------------

@app.errorhandler(exceptions.NotFound)
def not_found_error(err):
    return """
    <h1>404 Not Found</h1>
    """, 404

# ---------------------------------------- API ROUTES --------------------------------------------
@app.route('/', methods=['GET'])
def index():
    return """
    <h1>Welcome to the Flask API For Incubator Selection!</h1>
    """

@app.route('/incubator', methods=['POST'])
def process_incubator_data():
    data = request.json
    microplates = int(data.get("microplates"))
    temp_range = data.get("tempRange")
    humidity_range = data.get("humidityRange")
    incubator_placement = data.get("incubatorPlacement")
    external_control_box = data.get("externalControlBox")

    size = None
    climate_type = None
    product_model = None
    
    # Determining Size 
    if 1 <= microplates <= 44:
        size = "44"
    elif 45 <= microplates <= 56:
        size = "56"
    elif 57 <= microplates <= 66:
        size = "66"
    elif 67 <= microplates <= 88:
        size = "88"
    elif 89 <= microplates <= 110:
        size = "110"
    elif 111 <= microplates <= 140:
        size = "140"
    elif 141 <= microplates <= 220:
        size = "220"
    elif 221 <= microplates <= 280:
        size = "280"
    elif 281 <= microplates <= 500:
        size = "500"
    elif 501 <= microplates <= 1000:
        size = "1000"

    # Determining Climate Type
    if temp_range == "33-50" and humidity_range == "max_95%":
        climate_type = "IC"
    elif temp_range == "04-25" and humidity_range == "max_90%":
        climate_type = "HC"    
    elif temp_range == "04-25" and humidity_range == "04-50%":
        climate_type = "DC2"
    elif temp_range == "04-50" and humidity_range == "90-95%":
        climate_type = "HR"
    elif temp_range == "04-50" and humidity_range == "02-50%":
        climate_type = "DR2"
    elif temp_range == "04-50" and humidity_range == "02-50%":
        climate_type = "AR"
    elif temp_range == "-20-0" and humidity_range == "10-95%":
        climate_type = "DF"
    elif temp_range == "none" and humidity_range == "none":
        climate_type = "NC"

    if climate_type == None:
        return jsonify({'error': 'Could not determine climate type of incubator (temperature and humidity)'}), 404

    # Assembling The Product Model
    if external_control_box == "true":
        product_model = f"STX{size}-{climate_type}MI{incubator_placement}"
    else:
        product_model = f"STX{size}-{climate_type}{incubator_placement}"

    print(product_model)
    try:
        # Search the CSV File
        with open('LiCONiCData001.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if row['Product Model'] == product_model:
                    print({'Product Model': row['Product Model'], 'Code': row['Code']})
                    return jsonify({'productModel': row['Product Model'], 'Code': row['Code']})
        
    except FileNotFoundError:
        print("CSV file not found.")
        return jsonify({'error': f'We are having issues with our product list, Please try again'})
        
    except Exception as e:
        print("An error occurred:", str(e))
        return jsonify({'error': f'An error occurred: {str(e)}'})

    return jsonify({'error': 'Product model not found in our system, Please try something else'}), 404

    

if __name__ == "__main__":
    app.run(debug=True)