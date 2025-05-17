import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder
import warnings
warnings.filterwarnings('ignore')

# loading and preprocessing the data 
def load_and_preprocess_data(file_path):
    
    data = pd.read_csv(file_path)
    
    #basic info about the data
    print(f"Dataset shape: {data.shape}")
    print(f"Number of unique diseases: {data['Disease'].nunique()}")
    print(f"Example diseases: {data['Disease'].unique()[:5]}")
    
    return data

# creating symptom vocab
def create_symptom_vocabulary(data):
    symptom_columns = [col for col in data.columns if 'Symptom_' in col] #all symptoms extracted
    
    all_symptoms = set()     # unique symptoms
    for col in symptom_columns:
        # filtering
        symptoms = data[col].dropna().apply(lambda x: x.strip() if isinstance(x, str) else x)
        all_symptoms.update(symptoms)
    
    # filter empty strigns
    all_symptoms = {symptom for symptom in all_symptoms if isinstance(symptom, str) and symptom.strip()}
    
    print(f"Number of unique symptoms: {len(all_symptoms)}")
    return sorted(list(all_symptoms))

# symptom to binary vector
def encode_symptoms(data, symptom_vocab):
    # dict to map symptoms to their indices
    symptom_to_idx = {symptom: idx for idx, symptom in enumerate(symptom_vocab)}
    symptom_columns = [col for col in data.columns if 'Symptom_' in col]
    
    X = np.zeros((len(data), len(symptom_vocab))) # feat matrix

    #fill the matrix brooo
    for i, row in data.iterrows():
        for col in symptom_columns:
            symptom = row[col]
            if isinstance(symptom, str) and symptom.strip() in symptom_to_idx:
                X[i, symptom_to_idx[symptom.strip()]] = 1
    
    return X

# incorporate symptom severity into features
def incorporate_severity(X, symptom_vocab, severity_data):
    # Create a dictionary to map symptoms to their severity
    severity_dict = dict(zip(severity_data['Symptom'], severity_data['weight']))
    
    # Create a mapping from symptom to its index in the vocabulary
    symptom_to_idx = {symptom: idx for idx, symptom in enumerate(symptom_vocab)}
    
    # Initialize the severity-weighted feature matrix
    X_weighted = X.copy()
    
    # Apply severity weights to the feature matrix
    for symptom, weight in severity_dict.items():
        if symptom in symptom_to_idx:
            idx = symptom_to_idx[symptom]
            X_weighted[:, idx] = X[:, idx] * weight
    
    return X_weighted

def main():
    print("Loading data...")
    data = load_and_preprocess_data("datasets_provided\dataset.csv")
    severity_data = pd.read_csv("datasets_provided\Symptom-severity.csv")
    print(f"Loaded severity data with {len(severity_data)} symptoms")
    symptom_vocab = create_symptom_vocabulary(data)
    X = encode_symptoms(data, symptom_vocab)
    
    # have to applky weights to the symptoms
    X = incorporate_severity(X, symptom_vocab, severity_data)
    label_encoder = LabelEncoder()
    y = label_encoder.fit_transform(data['Disease'])
    
    #splitting data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    print(f"Training set shape: {X_train.shape}")
    print(f"Test set shape: {X_test.shape}")
    print("Training Random Forest classifier...")
    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X_train, y_train)
    y_pred = clf.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model accuracy: {accuracy:.4f}")

    print("Classification Report:")
    target_names = label_encoder.classes_
    print(classification_report(y_test, y_pred, target_names=target_names))
    print("Saving model and preprocessing components...")
    pickle.dump(clf, open('model.pkl', 'wb'))
    pickle.dump(label_encoder, open('label_encoder.pkl', 'wb'))
    pickle.dump(symptom_vocab, open('symptom_vocab.pkl', 'wb'))
    
    print("Model and components saved successfully!")
    
    def predict_disease(symptoms, model, label_encoder, symptom_vocab):
        X = np.zeros(len(symptom_vocab))

        for symptom in symptoms:
            if symptom in symptom_vocab:
                idx = symptom_vocab.index(symptom)
                X[idx] = 1
        X = X.reshape(1, -1)

        disease_idx = model.predict(X)[0]
        disease = label_encoder.inverse_transform([disease_idx])[0]
        
        return disease
    
    #testing model
    test_symptoms = ['itching', 'skin_rash', 'nodal_skin_eruptions']
    predicted_disease = predict_disease(
        test_symptoms, 
        clf, 
        label_encoder, 
        symptom_vocab
    )
    print(f"\nTest prediction with symptoms {test_symptoms}:")
    print(f"Predicted disease: {predicted_disease}")

if __name__ == "__main__":
    main()