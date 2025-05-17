import pandas as pd
from flask import Flask, render_template, request, url_for, flash, redirect
import joblib
import os

app = Flask(__name__)

ml_modl = joblib.load('./TrainedModels/model.pkl')
encoder = joblib.load('./TrainedModels/label_encoder.pkl')
available_symtoms = joblib.load('./TrainedModels/symptom_vocab.pkl')


@app.route('/', methods=['GET', 'POST'])
def home():
    result = None
    if request.method == 'POST':
        user_symtoms = [request.form.get(f'symptom{i}') for i in range(1, 18)]
        user_symtoms = [s.lower().strip() for s in user_symtoms if s and s.strip() != '']

        features = [0] * len(available_symtoms)
        for sym in user_symtoms:
            if sym in available_symtoms:
                position = available_symtoms.index(sym)
                features[position] = 1

        disease_code = ml_modl.predict([features])[0]
        result = encoder.inverse_transform([disease_code])[0]

    return render_template('index.html', symptom_list=available_symtoms, prediction=result)


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    result = None
    if request.method == 'POST':
        selected_syptoms = request.form.getlist('symptoms')
        selected_syptoms = [s.lower().strip() for s in selected_syptoms if s and s.strip() != '']

        feature_vecotr = [0] * len(available_symtoms)
        for sym in selected_syptoms:
            if sym in available_symtoms:
                position = available_symtoms.index(sym)
                feature_vecotr[position] = 1

        pred_code = ml_modl.predict([feature_vecotr])[0]
        diagnsis = encoder.inverse_transform([pred_code])[0]

        
        result = {
            'disease': diagnsis,
            'symptoms': selected_syptoms
        }

    return render_template('predict.html', symptoms_list=available_symtoms, prediction=result)


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)