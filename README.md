# AURA Beauty | AI-Powered Luxury Makeup Storefront & Shade Matcher

AURA Beauty is a state-of-the-art, client-side web application and machine learning project that merges high-fashion luxury cosmetics with computer science. Designed as a professional portfolio showcase, it implements content-based recommendation systems, canvas-based computer vision skin tone detection, and decision tree classifiers to deliver precision beauty recommendations.

---

## 🚀 Key AI Features & Mathematical Architecture

This project is built to demonstrate both frontend execution and machine learning engineering skills:

### 1. Personalized Product Recommender (Cosine Similarity)
*   **Concept**: Content-Based Filtering recommendation engine.
*   **Technical Details**: Products in the catalog are represented as 7-dimensional feature vectors containing weights for skin compatibility (Dry, Oily, Combination, Sensitive) and texture finishes (Matte, Dewy, Natural):
    $$\vec{p} = [w_{\text{dry}}, w_{\text{oily}}, w_{\text{combination}}, w_{\text{sensitive}}, w_{\text{matte}}, w_{\text{dewy}}, w_{\text{natural}}]$$
*   **Vector Mathematics**: When a user inputs their skin type and finish preferences, the system builds a user preference vector $\vec{u}$. The script calculates the **Cosine Similarity** between $\vec{u}$ and every product vector $\vec{p}$ in the catalog using:
    $$\text{Similarity}(\vec{u}, \vec{p}) = \frac{\vec{u} \cdot \vec{p}}{\|\vec{u}\| \|\vec{p}\|} = \frac{\sum_{i=1}^n u_i p_i}{\sqrt{\sum_{i=1}^n u_i^2} \sqrt{\sum_{i=1}^n p_i^2}}$$
*   **Execution**: The catalog is dynamically re-sorted and the top 5 matching items are rendered alongside an animated percentage matching badge.

### 2. Computer Vision Skin Tone Detector (HTML5 Canvas Pixel Analyzer)
*   **Concept**: Chromatic skin-pixel segmentation and Fitzpatrick scale clustering.
*   **Technical Details**: 
    *   Exposes raw pixel image buffers via HTML5 Canvas `getImageData` when a user uploads a selfie.
    *   Filters out background and clothing pixels using chromatic bounding thresholds:
        $$R > 90 \quad \text{and} \quad G > 40 \quad \text{and} \quad B > 20 \quad \text{and} \quad R > G > B \quad \text{and} \quad |R - G| > 10$$
    *   Averages matching skin pixels and converts the result to HEX and HSL color spaces.
    *   **Skin Tone Classification**: Categorized as **Fair, Medium, Tan, or Deep** based on Lightness thresholds.
    *   **Undertone Classification**: Categorized as **Warm, Cool, or Neutral** based on Hue angles ($14^\circ \text{ to } 26^\circ$ for Warm, outer bounds for Cool).
    *   **Outputs**: Recommends matching foundation codes, concealer pigments, blushes, and lipsticks.

### 3. AI Shade Matcher Model (Decision Tree Classifier)
*   **Concept**: Supervised classification model predicting foundation shade codes.
*   **Technical Details**: Traverses discrete input classes (Tone, Undertone, Occasion, Season, Finish) recursively to select optimal products.
*   **Visual Path Graph**: Renders the decision-tree traversal nodes on the UI, showing the path from the root node to the matching leaf node shade.

---

## 🐍 Python Machine Learning Pipeline

For backend code validation, a Python script (`train_model.py`) is included to show how the decision boundaries were trained. 

*   **Dataset (`makeup_shades.csv`)**: Contains synthetic profiles matching skin attributes to shade classifications.
*   **Model**: Trains a `DecisionTreeClassifier` and `RandomForestClassifier` using `scikit-learn` to classify shades.
*   **Evaluation**: Generates decision trees and prints structural branching parameters.

---

## 🛠️ Technologies Used

*   **Frontend UI/UX**: HTML5 (Semantic Structure), Vanilla CSS (Custom properties, dark/light theme, keyframe animations, glassmorphism), FontAwesome Icons.
*   **Algorithms & Scripting**: Vanilla JavaScript (ES6+, HTML5 Canvas API, Vector calculations, Tree rules engine).
*   **Data Science Pipeline**: Python 3, Pandas, Scikit-learn (for model training simulation).

---

## 📂 File Directory

```directory
├── index.html          # Main landing page & multi-tab dashboard structure
├── styles.css          # Design system, theme variables, and keyframe animations
├── script.js          # Vector math, Canvas CV analyzer, and client-side tree engine
├── train_model.py     # Python script training the classifier model
├── detect_skin_tone.py # OpenCV Python script analyzing skin tone colors from selfies
├── makeup_shades.csv   # Dataset containing skin profiles & foundation shades
└── README.md          # Project documentation
```

---

## 🏃 Run Instructions

### 1. Running the Storefront & Dashboard (Web UI)
The web application runs entirely in the browser without any setup:
1. Double-click the `index.html` file to open it in your web browser.
2. Select the tabs at the top to toggle between the Catalog, the Recommender, the Skin Scanner, and the Shade Matcher.
3. Use the theme toggle button in the top right to switch between Luxury Dark and Clean Light themes.

### 2. Running the Python ML Pipeline
To train the classifier model locally:
1. Ensure Python 3 is installed.
2. Install dependencies:
   ```bash
   pip install pandas scikit-learn
   ```
3. Run the training script:
   ```bash
   python train_model.py
   ```
4. The script will train the models on `makeup_shades.csv` and output model accuracy scores and decision path rules.

### 3. Running the OpenCV Skin Tone Detector
To run the computer vision analysis on a local image:
1. Ensure Python 3 is installed.
2. Install OpenCV and numpy:
   ```bash
   pip install opencv-python numpy
   ```
3. Run the skin tone detector:
   ```bash
   python detect_skin_tone.py --image path/to/your/selfie.jpg
   ```
   *(If no `--image` argument is specified, the script automatically downloads a high-quality demo model portrait from Unsplash and runs face detection skin analysis on it).*
4. The script will output skin color stats, Fitzpatrick tone classifications, and recommended shade profiles. The final annotated image containing face bounding boxes and color swatches is saved locally as `detected_skin.jpg`.
