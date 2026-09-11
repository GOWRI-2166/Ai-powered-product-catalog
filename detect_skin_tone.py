# pyrefly: ignore [missing-import]
import cv2
import numpy as np
import urllib.request
import os
import argparse

def main():
    print("=" * 60)
    print("      AURA Beauty - OpenCV Computer Vision Skin Tone Detector")
    print("=" * 60)
    
    # 1. Parse Arguments
    parser = argparse.ArgumentParser(description="Scan facial skin tone and undertone using OpenCV.")
    parser.add_argument("--image", type=str, default="selfie.jpg", help="Path to input selfie image.")
    args = parser.parse_args()
    
    image_path = args.image
    
    # 2. Handle missing local files by downloading a demo portrait
    if not os.path.exists(image_path) and image_path == "selfie.jpg":
        print(f"\n[Warning] Input photo '{image_path}' not found locally.")
        print("--> Downloading high-resolution demo model portrait from Unsplash...")
        demo_url = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
        try:
            urllib.request.urlretrieve(demo_url, "selfie.jpg")
            print("--> Download successful: Saved as 'selfie.jpg'")
        except Exception as e:
            print(f"--> Error downloading demo file: {e}")
            return
            
    # 3. Load Image
    print(f"\n[Step 1] Loading image: '{image_path}'...")
    img = cv2.imread(image_path)
    if img is None:
        print("--> Error: Could not read image. Verify file integrity.")
        return
    
    h, w, c = img.shape
    print(f"--> Dimensions: {w}x{h} pixels | Channels: {c}")
    
    # 4. Face Detection (Haar Cascades)
    print("\n[Step 2] Applying Haar Cascade Face Detection...")
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
    
    face_cascade = cv2.CascadeClassifier(cascade_path)
    if face_cascade.empty():
        print("--> Warning: OpenCV Haar Cascade XML not loaded. Falling back to center crop.")
        faces = []
    else:
        faces = face_cascade.detectMultiScale(gray, 1.1, 5, minSize=(100, 100))
        
    # Set face ROI (Region Of Interest)
    if len(faces) > 0:
        print(f"--> Face detected at bounding box coordinates: {faces[0]}")
        (x, y, fw, fh) = faces[0]
        # Crop to center 60% of face to avoid eyes/hair/shadows
        cx, cy = x + fw // 2, y + fh // 2
        crop_w, crop_h = int(fw * 0.4), int(fh * 0.4)
        face_roi = img[cy - crop_h // 2 : cy + crop_h // 2, cx - crop_w // 2 : cx + crop_w // 2]
    else:
        print("--> No face detected by Cascade. Analyzing center region of image (50% crop)...")
        # Center crop fallback
        cx, cy = w // 2, h // 2
        crop_w, crop_h = int(w * 0.3), int(h * 0.3)
        face_roi = img[cy - crop_h // 2 : cy + crop_h // 2, cx - crop_w // 2 : cx + crop_w // 2]
        # Simulate face coordinates for drawing output
        x, y, fw, fh = cx - crop_w, cy - crop_h, crop_w * 2, crop_h * 2
        
    # 5. Skin Pixel Segmentation & HSV Clustering
    print("\n[Step 3] Segmenting skin pixels using HSV range thresholds...")
    hsv_roi = cv2.cvtColor(face_roi, cv2.COLOR_BGR2HSV)
    
    # Skin HSV boundaries
    lower_skin = np.array([0, 20, 70], dtype=np.uint8)
    upper_skin = np.array([20, 150, 255], dtype=np.uint8)
    
    skin_mask = cv2.inRange(hsv_roi, lower_skin, upper_skin)
    skin_pixels = cv2.bitwise_and(face_roi, face_roi, mask=skin_mask)
    
    # Extract average color from non-zero (skin matching) pixels
    non_zero_pixels = skin_pixels[np.any(skin_pixels != 0, axis=-1)]
    
    if len(non_zero_pixels) > 0:
        avg_bgr = np.mean(non_zero_pixels, axis=0)
    else:
        # Fallback to direct average of face ROI
        avg_bgr = cv2.mean(face_roi)[:3]
        
    avg_bgr = np.round(avg_bgr).astype(int)
    avg_rgb = [avg_bgr[2], avg_bgr[1], avg_bgr[0]] # BGR to RGB
    hex_color = "#{:02x}{:02x}{:02x}".format(avg_rgb[0], avg_rgb[1], avg_rgb[2])
    
    print(f"--> Extracted skin BGR color: {avg_bgr}")
    print(f"--> Extracted skin RGB color: {avg_rgb}")
    print(f"--> Dominate Skin Tone HEX: {hex_color.upper()}")
    
    # 6. Tone & Undertone Classification
    print("\n[Step 4] Classifying Skin Tone & Undertone...")
    
    # Convert BGR to HSL (H: 0-180, S: 0-255, L: 0-255 in OpenCV)
    avg_hsv = cv2.cvtColor(np.uint8([[avg_bgr]]), cv2.COLOR_BGR2HSV)[0][0]
    hue, sat, val = avg_hsv[0] * 2, avg_hsv[1], avg_hsv[2] # Normalize to 360/255 scale
    
    # Lightness heuristic (based on RGB average lightness)
    lightness = (max(avg_rgb) + min(avg_rgb)) // 2
    
    tone = "Fair"
    if lightness > 180:
        tone = "Fair"
    elif lightness > 130:
        tone = "Medium"
    elif lightness > 90:
        tone = "Tan"
    else:
        tone = "Deep"
        
    # Undertone classification (Red vs Blue ratio)
    r_val, g_val, b_val = avg_rgb[0], avg_rgb[1], avg_rgb[2]
    diff_rb = r_val - b_val
    
    undertone = "Neutral"
    if diff_rb > 45:
        undertone = "Warm"
    elif diff_rb < 30:
        undertone = "Cool"
    else:
        undertone = "Neutral"
        
    print(f"--> Fitzpatrick Classification: {tone} Skin Tone")
    print(f"--> Undertone Classification: {undertone} Undertone")
    
    # 7. Generate Shade Recommendations
    print("\n[Step 5] Mapping recommendations to foundation shades...")
    
    # Shade mapping matrix
    rec_foundation = "100 Porcelain"
    rec_concealer = "Brightening Pearl"
    rec_blush = "Soft Peach Cream"
    rec_lipstick = "Nude Rose"
    
    if tone == "Fair":
        rec_foundation = "110 Cool Ivory" if undertone == "Cool" else "120 Alabaster"
        rec_blush = "Dewy Rose Quartz"
        rec_lipstick = "Classic Crimson Satin"
    elif tone == "Medium":
        rec_foundation = "210 Almond" if undertone == "Cool" else "220 Golden Honey" if undertone == "Warm" else "215 Soft Sand"
        rec_blush = "Luminous Coral Dew"
        rec_lipstick = "Mauve Velvet"
    elif tone == "Tan":
        rec_foundation = "310 Toffee" if undertone == "Cool" else "330 Amber Gold" if undertone == "Warm" else "320 Caramel Satin"
        rec_blush = "Stardust Copper Glow"
        rec_lipstick = "Warm Caramel Nude"
    elif tone == "Deep":
        rec_foundation = "410 Espresso" if undertone == "Cool" else "430 Dark Chestnut" if undertone == "Warm" else "420 Rich Mocha"
        rec_blush = "Gilded Plum Shimmer"
        rec_lipstick = "Deep Cocoa Matte"
        
    print(f"\n--- MATCHED SHADES ---")
    print(f"- Foundation : {rec_foundation}")
    print(f"- Concealer  : {rec_concealer}")
    print(f"- Blush      : {rec_blush}")
    print(f"- Lipstick   : {rec_lipstick}")
    
    # 8. Output Visual Bounding Box draw
    output_path = "detected_skin.jpg"
    # Copy source image
    output_img = img.copy()
    
    # Draw face box
    cv2.rectangle(output_img, (x, y), (x + fw, y + fh), (223, 182, 123), 2)
    # Draw color swatch box on top-left corner
    cv2.rectangle(output_img, (10, 10), (70, 70), (int(avg_bgr[0]), int(avg_bgr[1]), int(avg_bgr[2])), -1)
    cv2.rectangle(output_img, (10, 10), (70, 70), (255, 255, 255), 1)
    
    # Label SWATCH
    cv2.putText(output_img, f"Tone: {tone} ({hex_color.upper()})", (85, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA)
    cv2.putText(output_img, f"Undertone: {undertone}", (85, 55), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1, cv2.LINE_AA)
    
    # Write matched Foundation Shade
    cv2.putText(output_img, f"Match: {rec_foundation}", (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (223, 182, 123), 2, cv2.LINE_AA)
    
    # Save Image
    cv2.imwrite(output_path, output_img)
    print(f"\n[Step 6] Analysis completed successfully. Visual plot saved as '{output_path}'.")
    print("=" * 60)

if __name__ == "__main__":
    main()
