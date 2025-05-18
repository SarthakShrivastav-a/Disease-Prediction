import pandas as pd
from flask import Flask, request, jsonify
import joblib
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

ml_model = joblib.load('./TrainedModels/model.pkl')
encoder = joblib.load('./TrainedModels/label_encoder.pkl')
available_symptoms = joblib.load('./TrainedModels/symptom_vocab.pkl')


@app.route('/api/symptoms', methods=['GET'])
def get_symptoms():
    return jsonify({
        'symptoms': available_symptoms
    })


@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        if not data or 'symptoms' not in data:
            return jsonify({
                'error': 'No symptoms provided'
            }), 400
            
        selected_symptoms = [s.lower().strip() for s in data['symptoms'] if s and s.strip() != '']

        feature_vector = [0] * len(available_symptoms)
        for sym in selected_symptoms:
            if sym in available_symptoms:
                position = available_symptoms.index(sym)
                feature_vector[position] = 1

        pred_code = ml_model.predict([feature_vector])[0]
        diagnosis = encoder.inverse_transform([pred_code])[0]
        
        return jsonify({
            'disease': diagnosis,
            'symptoms': selected_symptoms
        })
        
    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok',
        'message': 'API is running'
    })


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)