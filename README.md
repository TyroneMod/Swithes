Swithes - Custom Toggle Switches

Swithes is a lightweight JavaScript library that allows you to easily add customizable toggle switches to your website using simple `data-toggle` attributes.

🌟 Features
- Easy to use with **no JavaScript required** – just add `data-toggle` to a `<div>`.
- Supports **custom colors and sizes** using `data-toggle-color` and `data-toggle-size`.
- Works on any website with **one script include**.

---

🚀 Getting Started

1️⃣ Add the Script
Include the following `<script>` tag in your HTML file to load the toggle functionality:

<script src="https://tyronemod.github.io/Swithes/script.js"></script>

2️⃣ Add a Toggle Switch
Simply add a `<div>` element with the attribute `data-toggle`:

<div data-toggle></div>

3️⃣ Customize the Toggle (Optional)
You can customize the color and size of the toggle switch by adding additional attributes:

<div data-toggle data-toggle-color="rgb(0, 76, 255)" data-toggle-size="large"></div>

🎨 Customization Options

Attribute           Description                              Example Value
------------------- ---------------------------------------- -----------------------------
data-toggle       Enables the toggle switch                (Required)
data-toggle-color Sets the background color of the toggle  rgb(0, 76, 255)
data-toggle-size  Changes the size of the toggle switch    small, medium, large

---

🛠️ How It Works
The script automatically detects any `<div>` elements with the `data-toggle` attribute. It transforms these elements into a stylized toggle switch. Clicking the toggle will change its state between "on" and "off".

---

📌 Example Code
Here’s an example of how to use the toggle switches on your webpage:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Switch Demo</title>
    <script src="https://tyronemod.github.io/Sw
