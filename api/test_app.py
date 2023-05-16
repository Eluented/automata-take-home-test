import pytest
from flask import Flask
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_index(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Welcome to the Flask API For Incubator Selection!" in response.data

def test_process_incubator_data(client):
    data = {
        "microplates": "44",
        "tempRange": "04-25",
        "humidityRange": "04-50%",
        "incubatorPlacement": "BT",
        "externalControlBox": "false"
    }
    response = client.post('/incubator', json=data)
    assert response.status_code == 200
    assert response.get_json() == {
        "productModel": "STX44-DC2BT",
        "Code": "9118 12 56"
    }

def test_process_incubator_data_invalid_model(client):
    data = {
        "microplates": "0",
        "tempRange": "04-25",
        "humidityRange": "04-50%",
        "incubatorPlacement": "BT",
        "externalControlBox": "true"
    }
    response = client.post('/incubator', json=data)
    assert response.status_code == 404