# AutoZone – Auto Parts & Accessories E-Commerce Platform

[![Task ID](https://img.shields.io/badge/Task%20ID-WD--EC--006-blue.svg)](https://www.freeinternships.in/web-development-internship/free-online-web-development-internship-auto-parts-accessories-wd-ec-006.php)
[![Domain](https://img.shields.io/badge/Domain-E--Commerce%20%7C%20Auto%20Parts-red.svg)](https://www.freeinternships.in/web-development-internship/free-online-web-development-internship-auto-parts-accessories-wd-ec-006.php)
[![Company](https://img.shields.io/badge/Company-Data%20Alcott%20Systems-1A3C5E.svg)](https://www.dataalcott.com)

A modern, responsive e-commerce web application for automotive replacement parts and accessories. Developed as part of the **Free Web Development Internship Online** with **Data Alcott Systems**.

---

## 📌 Project Overview

- **Task Name:** AutoZone - Auto Parts & Accessories
- **Task ID:** WD-EC-006
- **Domain:** E-Commerce / Auto Parts
- **Company:** Data Alcott Systems
- **Task Link / Blog Submission:** https://www.freeinternships.in/blog/
- **Official Task Details:** [Free Web Development Internship - AutoZone Task](https://www.freeinternships.in/web-development-internship/free-online-web-development-internship-auto-parts-accessories-wd-ec-006.php)[cite: 1]

This project simulates a real-world automotive parts e-commerce website. It features a parts catalog with dynamic vehicle compatibility filtering, an interactive "My Garage" vehicle manager, live order tracking simulation, client-side cart calculations, and a multi-step checkout flow with simulated payment gateways.

---

## ✨ Features Implemented

### 🚗 Core Features
- **Department-Wise Product Catalog:** Browse components across 4 key categories: Engine Parts, Brakes & Tires, Lighting & Electrical, and Accessories.
- **Search & Advanced Filtering:** Real-time search by keyword[cite: 1], category pill navigation[cite: 1], brand checkboxes[cite: 1], vehicle body type[cite: 1], price slider ($10 – $300), and customer rating.
- **Product Detail Modal:** Detailed specifications, stock status, ratings breakdown, and interactive quantity selectors[cite: 1].
- **Slide-Out Shopping Cart:** Real-time quantity adjustments[cite: 1], item removal, free-shipping threshold calculation ($75 limit), and subtotal/tax summary[cite: 1].
- **Checkout Process:** 3-step checkout handling delivery addresses[cite: 1], shipping method selection[cite: 1], promo codes (`DATAALCOTT15`), and order authorization[cite: 1].
- **User Account & History:** Profile management, order receipts with unique order numbers, and saved items[cite: 1].

### 🏆 Bonus Features
- **Product Compatibility Checker:** Evaluates fitment against the active vehicle chassis, displaying "Exact Fit" or "Universal Fit" badges[cite: 1].
- **Vehicle Model Selection & "My Garage":** Interactive selector (Year, Make, Model) enabling users to save vehicles and filter parts for specific rides[cite: 1].
- **Simulated Payment Gateway:** Multi-tab sandbox checkout offering simulated Card Payment, UPI / QR Scan, and Cash on Delivery[cite: 1].
- **Live Order Tracking Simulation:** Look up orders (e.g., `AZ-84920`) with a milestone progress tracker (Confirmed → Picked → In Transit → Delivered)[cite: 1].
- **Wishlist System:** Toggle and save replacement parts to a persistent wishlist[cite: 1].
- **Data Persistence:** Uses browser `localStorage` for cart state, garage fleet, and order receipts without requiring an external database[cite: 1].

---

## 🎨 Design System

In compliance with the project guidelines[cite: 1]:
- **Navy Blue:** `#1A3C5E`[cite: 1]
- **Obsidian Dark Navy:** `#0F243A`
- **Clean White:** `#FFFFFF`[cite: 1]
- **Red Accent:** `#E63946`[cite: 1]
- **Typography:** Chakra Petch (Headings) and Inter (Body)[cite: 1]
- **Layout & Responsiveness:** Fully responsive across mobile, tablet, and desktop screens with an off-canvas navigation drawer[cite: 1].

---

## 📁 Repository Structure

```text
├── index.html       # Semantic HTML5 markup containing all page views & modals
├── style.css        # Responsive CSS3 styling, custom properties, and animations
├── script.js        # ES6 JavaScript application logic, data store, and state
└── README.md        # Project documentation and submission details