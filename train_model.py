import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

def main():
    print("=" * 60)
    print("      AURA Beauty - Machine Learning Training Pipeline")
    print("=" * 60)
    
    # 1. Load Dataset
    print("\n[Step 1] Loading skin shades dataset...")
    try:
        df = pd.read_csv("makeup_shades.csv")
        print(f"--> Successfully loaded {df.shape[0]} records and {df.shape[1]} columns.")
    except FileNotFoundError:
        print("--> Error: 'makeup_shades.csv' not found. Please verify filepath.")
        return

    # Display dataset sample
    print("\n--- Dataset Sample Preview ---")
    print(df.head(5))
    
    # 2. Data Preprocessing & Categorical Encoding
    print("\n[Step 2] Preprocessing features and target label encoding...")
    
    # Save encoders to show how categorical values match indices
    encoders = {}
    X_encoded = pd.DataFrame()
    
    categorical_columns = ["Tone", "Undertone", "Finish", "Occasion", "Season", "Brand"]
    for col in categorical_columns:
        le = LabelEncoder()
        X_encoded[col] = le.fit_transform(df[col])
        encoders[col] = le
        # Print dictionary mapping values to integers
        mapping = dict(zip(le.classes_, le.transform(le.classes_)))
        print(f"--> Column '{col}' mappings: {mapping}")
        
    y = df["Shade"]
    le_target = LabelEncoder()
    y_encoded = le_target.fit_transform(y)
    encoders["Shade"] = le_target
    
    X = X_encoded
    
    # 3. Model Training
    print("\n[Step 3] Training Supervised Classifiers...")
    
    # Split into train/test sets
    X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)
    
    # Train Decision Tree
    dt_model = DecisionTreeClassifier(random_state=42)
    dt_model.fit(X_train, y_train)
    dt_score = dt_model.score(X_test, y_test)
    print(f"--> Decision Tree Classifier trained. Test Set Accuracy: {dt_score * 100:.2f}%")
    
    # Train Random Forest
    rf_model = RandomForestClassifier(n_estimators=50, random_state=42)
    rf_model.fit(X_train, y_train)
    rf_score = rf_model.score(X_test, y_test)
    print(f"--> Random Forest Classifier (50 estimators) trained. Test Set Accuracy: {rf_score * 100:.2f}%")
    
    # 4. Feature Importance
    print("\n[Step 4] Extracting Feature Importance from Random Forest...")
    importances = rf_model.feature_importances_
    for col, imp in zip(categorical_columns, importances):
        print(f"--> Feature: {col:<10} | Importance: {imp:.4f}")
        
    # 5. Export Decision Tree Structural Rules
    print("\n[Step 5] Exporting Decision Tree Traversal Rules:")
    tree_rules = export_text(dt_model, feature_names=categorical_columns)
    print("\n--- Tree Rules ---")
    print(tree_rules)
    print("-" * 60)
    
    # Test Prediction Simulation
    print("\n[Simulated Inference] Classifying Shade for: Medium Tone, Warm Undertone, Matte Finish...")
    # Encode inputs
    test_tone = encoders["Tone"].transform(["medium"])[0]
    test_under = encoders["Undertone"].transform(["warm"])[0]
    test_finish = encoders["Finish"].transform(["matte"])[0]
    test_occasion = encoders["Occasion"].transform(["daily"])[0]
    test_season = encoders["Season"].transform(["summer"])[0]
    test_brand = encoders["Brand"].transform(["AURA"])[0]
    
    test_sample = [[test_tone, test_under, test_finish, test_occasion, test_season, test_brand]]
    pred_idx = rf_model.predict(test_sample)[0]
    pred_shade = encoders["Shade"].inverse_transform([pred_idx])[0]
    print(f"--> Predicted Foundation Shade: {pred_shade}")
    print("=" * 60)

if __name__ == "__main__":
    main()
