# AeroReady AI — SIH26249: Air Power Predictive Maintenance & Fleet Availability

> **Smart India Hackathon (SIH26249)**  
> **Domain:** Defence Aviation, Predictive Telemetry & Fleet Readiness Analytics  
> **Tagline:** Shift from Unscheduled Reactive Downtime to Proactive Risk-Optimized Readiness.

---

## 1. Executive Summary & Problem Context

In military aviation operations, unscheduled component failure grounds critical airframes, leads to cascading supply chain bottlenecks, and severely degrades fleet mission availability. Traditional scheduled maintenance operates on fixed calendar cycles (e.g. 45 or 60 days) regardless of telemetry degradation, while unexpected in-flight thermal or vibration excursions trigger catastrophic emergency depot overhauls lasting 36+ hours.

**AeroReady AI** introduces an explainable, deterministic predictive maintenance and tactical availability platform:
- Integrates multi-channel synthetic telemetry (Turbine Temperature, Bearing Vibration, Scavenge Oil Pressure, Flight Hours, Cycle Overdue Days).
- Calculates transparent, mathematically explainable risk scores without unverified "black-box" claims.
- Generates priority-ranked maintenance work orders with parts supply chain linkage.
- Models what-if fleet availability trade-offs quantitatively ($A = \frac{N_{\text{serviceable}}}{N_{\text{total}}} \times 100\%$).
- Equips wing maintenance controllers with an offline, rule-based tactical maintenance intelligence console.

---

## 2. Quick Setup & Run Instructions (Windows 11)

AeroReady AI is built with **zero external runtime dependencies** (no Python, Node.js, npm, or Docker required). It runs out-of-the-box on any Windows 11 system.

### Option A: Local Dev Server (Recommended)
Open Windows PowerShell in the project directory:
```powershell
# Navigate to the workspace
cd "c:\Users\Tharun tk\OneDrive\Documents\air_power"

# Launch the lightweight zero-dependency server
powershell -ExecutionPolicy Bypass -File .\start-server.ps1
```
*The script automatically binds to `http://localhost:8080` (or `8081` if busy) and launches your default web browser.*

### Option B: Direct Browser Launch (100% Offline)
Simply double-click `index.html` or run:
```powershell
Start-Process ".\index.html"
```
*AeroReady AI embeds fallback dataset defaults directly inside `app.js` to ensure 100% seamless execution even under `file:///` restrictions without CORS errors.*

---

## 3. System Architecture & Project Structure

```
air_power/
├── index.html            # Semantic HTML5 operations interface & modal dialogs
├── styles.css            # Aviation command dark UI, cyber cyan accents, responsive grids
├── app.js                # Core state store, transparent risk engine, simulator, assistant
├── start-server.ps1      # Pure PowerShell static HTTP server for Windows 11
├── data/
│   └── fleet-data.json   # 22 synthetic aircraft records, telemetry, spares, and feeds
└── README.md             # SIH documentation, architecture, pitch script, innovations
```

### Architectural Pipeline
$$\text{Synthetic Telemetry Feeds} \longrightarrow \text{Deterministic Risk Engine} \longrightarrow \text{Explainable Diagnostics} \longrightarrow \text{Work Order Queue} \longrightarrow \text{What-If Simulator}$$

1. **State Store (`FleetStateStore`)**: Manages the fleet database, work order statuses, and spare parts catalog with browser `localStorage` persistence and single-click default restore.
2. **Deterministic Risk Engine (`PredictiveMaintenanceEngine`)**: Evaluates 7 operational vectors:
   - **Exhaust Gas Temp (EGT)**: Weight 25% (Warning threshold $\Delta > 780^\circ\text{C}$, Critical $\ge 830^\circ\text{C}$)
   - **Bearing Vibration**: Weight 20% (Warning threshold $\Delta > 0.45\text{ IPS}$, Critical $\ge 0.65\text{ IPS}$)
   - **Oil Scavenge Pressure**: Weight 15% (Minimum safe threshold $\Delta < 42\text{ PSI}$, Critical $\le 34\text{ PSI}$)
   - **Periodic Inspection Interval**: Weight 10% ($\Delta > 45\text{ days}$)
   - **Flight Hour Stress**: Weight 10% ($Hours / 1200\text{ hrs}$)
   - **Component Age**: Weight 10% ($Age / 8\text{ yrs}$)
   - **Recorded Fault History**: Weight 10% ($Count \times 1.5$)
3. **What-If Availability Engine**: Computes comparative readiness:
   $$A = \frac{N_{\text{total}} - (N_{\text{scheduled}} + N_{\text{unscheduled\_failures}})}{N_{\text{total}}} \times 100\%$$
4. **Maintenance Intelligence Kernel**: Deterministic offline NLP analyzer matching airframe IDs, anomalies, and work orders with zero external API calls.

---

## 4. Two-Minute Judge Demonstration Script

| Timing | Action / Screen | What to Say / Demonstrate |
| :--- | :--- | :--- |
| **0:00 - 0:25** | Top Header & Dashboard | *"Respected judges, this is **AeroReady AI** for SIH26249. In military aviation, a grounded jet means lost mission readiness. Notice our top KPIs: 22 aircraft across 4 squadrons, 68.2% availability, and 2 high-risk airframes breaching safety margins."* |
| **0:25 - 0:55** | Click **"Run Demo Scenario"** | *"When a telemetry anomaly occurs, AeroReady AI spots it before failure. Clicking 'Run Demo Scenario' highlights airframe **AR-007 (RUDRA-07)**. Rather than a black-box AI guess, our engine explains exactly WHY: Turbine temp hit 845°C (limit 780°C), vibration reached 0.72 IPS, and oil pressure dropped to 31 PSI. Subsystem engine health collapsed to 41%."* |
| **0:55 - 1:20** | Maintenance Queue Tab | *"From the anomaly, the system automatically suggests an actionable work order: Borescope inspection of HPT Stage 2 and roller bearing replacement. We assign the Alpha Propulsion Wing and verify spare parts PRT-ENG-084 are allocated. Once marked complete, the airframe returns to serviceable status."* |
| **1:20 - 1:45** | Availability Simulator Tab | *"Judges, here is our key innovation: The What-If Simulator. In Reactive Maintenance, waiting for catastrophic failure causes 36 hours of unscheduled depot downtime and 59.1% availability. Under AeroReady AI's risk-prioritized planned servicing, turnaround drops to 12 hours, boosting readiness to 81.8% (+22.7% gain)."* |
| **1:45 - 2:00** | Maintenance AI Assistant Tab | *"Finally, our Tactical AI Assistant operates completely offline without external APIs. When an engineer asks 'Which aircraft need attention first?', it cites live sensor values directly from telemetry. AeroReady AI delivers transparent, actionable air power readiness."* |

---

## 5. Three Key Innovations Compared with Reactive Maintenance

1. **Deterministic & Explainable Physics-Based Risk Scoring vs. Black-Box Hallucination**:
   Conventional predictive software frequently applies black-box ML models that fail military certification because engineers cannot audit why an alert was triggered. AeroReady AI provides a 100% transparent scoring equation with exact delta values for temperature, vibration, and lubrication.
2. **Dynamic "What-If" Fleet Availability Trade-Off Modeling**:
   Traditional maintenance systems only register tickets after a pilot reports a defect. AeroReady AI correlates predictive telemetry directly to operational availability percentages, balancing planned hangar downtime against catastrophic runway aborts.
3. **Closed-Loop Spares & Subsystem Health Linkage**:
   Predictive flags directly query warehouse stock levels (e.g. Turbine Blade Kits and Optical Pressure Transducers), preventing the common scenario where an aircraft is disassembled only to sit idle waiting for backordered parts.

---

## 6. Known Limitations & Future Scope

- **Synthetic Telemetry**: Current data is fictional and illustrative for SIH hackathon evaluation; operational deployment will interface with MIL-STD-1553B / STANAG 4586 bus protocols.
- **Offline Client Execution**: Prototype persists state via browser `localStorage`. Future roadmaps include local SQLite / PostgreSQL backend with role-based cryptographic access control.
- **Physics-Informed Digital Twins**: Future iterations will integrate finite element structural crack propagation models and vibration spectrogram fast-Fourier transform (FFT) analysis.

---

*AeroReady AI — Built for SIH26249: Air Power Predictive Maintenance & Fleet Availability.*
