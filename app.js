/**
 * AEROREADY AI — SIH26249: AIR POWER PREDICTIVE MAINTENANCE & FLEET AVAILABILITY
 * Core Application Engine, Transparent Risk Algorithm, What-If Simulator, and Ops Assistant
 */

// Embedded default dataset fallback (ensures 100% offline & file:// protocol execution)
const DEFAULT_FLEET_DATA = {
  systemMeta: {
    version: "1.0.4-SIH-PROTOTYPE",
    facility: "Base Air Command - Maintenance Operations Center (MOC)",
    dataClassification: "UNCLASSIFIED - SYNTHETIC BENCHMARK DEMO",
    thresholds: {
      tempWarningC: 780,
      tempCriticalC: 830,
      vibrationWarningIps: 0.45,
      vibrationCriticalIps: 0.65,
      oilPressureMinPsi: 42,
      oilPressureCriticalPsi: 34,
      inspectionCycleDays: 45,
      inspectionOverdueDays: 60,
      flightHoursAlert: 1200
    }
  },
  aircraft: [
    { id: "AR-001", callsign: "GARUDA-01", category: "Multirole", status: "Serviceable", engineTempC: 712, vibrationIps: 0.28, oilPressurePsi: 52, flightHours: 840, componentAgeYears: 3.2, daysSinceInspection: 18, previousFaultCount: 1, assignedSquadron: "No. 45 Flying Daggers", baseLocation: "Air Force Station Sulur", subsystems: { engine: 94, hydraulics: 91, avionics: 96, electrical: 90, airframe: 95 } },
    { id: "AR-002", callsign: "GARUDA-02", category: "Multirole", status: "Serviceable", engineTempC: 725, vibrationIps: 0.31, oilPressurePsi: 50, flightHours: 920, componentAgeYears: 3.5, daysSinceInspection: 24, previousFaultCount: 2, assignedSquadron: "No. 45 Flying Daggers", baseLocation: "Air Force Station Sulur", subsystems: { engine: 89, hydraulics: 88, avionics: 92, electrical: 87, airframe: 91 } },
    { id: "AR-003", callsign: "VAJRA-01", category: "Multirole", status: "Inspection-Due", engineTempC: 755, vibrationIps: 0.42, oilPressurePsi: 46, flightHours: 1150, componentAgeYears: 4.8, daysSinceInspection: 48, previousFaultCount: 4, assignedSquadron: "No. 1 Tigers", baseLocation: "Air Force Station Gwalior", subsystems: { engine: 78, hydraulics: 74, avionics: 85, electrical: 80, airframe: 82 } },
    { id: "AR-004", callsign: "VAJRA-02", category: "Multirole", status: "Serviceable", engineTempC: 708, vibrationIps: 0.25, oilPressurePsi: 54, flightHours: 610, componentAgeYears: 2.1, daysSinceInspection: 12, previousFaultCount: 0, assignedSquadron: "No. 1 Tigers", baseLocation: "Air Force Station Gwalior", subsystems: { engine: 96, hydraulics: 95, avionics: 98, electrical: 94, airframe: 97 } },
    { id: "AR-005", callsign: "GAJRAJ-01", category: "Transport", status: "Maintenance", engineTempC: 790, vibrationIps: 0.49, oilPressurePsi: 40, flightHours: 1420, componentAgeYears: 6.5, daysSinceInspection: 62, previousFaultCount: 5, assignedSquadron: "No. 44 Himalayan Geese", baseLocation: "Air Force Station Chandigarh", subsystems: { engine: 62, hydraulics: 68, avionics: 80, electrical: 71, airframe: 75 } },
    { id: "AR-006", callsign: "GAJRAJ-02", category: "Transport", status: "Serviceable", engineTempC: 718, vibrationIps: 0.29, oilPressurePsi: 51, flightHours: 880, componentAgeYears: 4.0, daysSinceInspection: 29, previousFaultCount: 1, assignedSquadron: "No. 44 Himalayan Geese", baseLocation: "Air Force Station Chandigarh", subsystems: { engine: 91, hydraulics: 90, avionics: 94, electrical: 89, airframe: 92 } },
    { id: "AR-007", callsign: "RUDRA-07", category: "Multirole", status: "Grounded-For-Inspection", engineTempC: 845, vibrationIps: 0.72, oilPressurePsi: 31, flightHours: 1390, componentAgeYears: 5.9, daysSinceInspection: 67, previousFaultCount: 7, assignedSquadron: "No. 17 Golden Arrows", baseLocation: "Air Force Station Ambala", subsystems: { engine: 41, hydraulics: 52, avionics: 70, electrical: 58, airframe: 66 } },
    { id: "AR-008", callsign: "KIRAN-01", category: "Trainer", status: "Serviceable", engineTempC: 695, vibrationIps: 0.22, oilPressurePsi: 55, flightHours: 520, componentAgeYears: 1.8, daysSinceInspection: 14, previousFaultCount: 0, assignedSquadron: "Air Force Academy Stage-II", baseLocation: "Air Force Station Dundigal", subsystems: { engine: 98, hydraulics: 97, avionics: 96, electrical: 95, airframe: 98 } },
    { id: "AR-009", callsign: "KIRAN-02", category: "Trainer", status: "Serviceable", engineTempC: 702, vibrationIps: 0.26, oilPressurePsi: 53, flightHours: 730, componentAgeYears: 2.4, daysSinceInspection: 22, previousFaultCount: 1, assignedSquadron: "Air Force Academy Stage-II", baseLocation: "Air Force Station Dundigal", subsystems: { engine: 93, hydraulics: 92, avionics: 95, electrical: 91, airframe: 94 } },
    { id: "AR-010", callsign: "NETRA-01", category: "Recon", status: "Inspection-Due", engineTempC: 765, vibrationIps: 0.44, oilPressurePsi: 43, flightHours: 1180, componentAgeYears: 5.1, daysSinceInspection: 52, previousFaultCount: 3, assignedSquadron: "Centre for Airborne Systems", baseLocation: "Air Force Station Yelahanka", subsystems: { engine: 75, hydraulics: 80, avionics: 83, electrical: 76, airframe: 85 } },
    { id: "AR-011", callsign: "GARUDA-03", category: "Multirole", status: "Serviceable", engineTempC: 715, vibrationIps: 0.30, oilPressurePsi: 52, flightHours: 810, componentAgeYears: 3.0, daysSinceInspection: 20, previousFaultCount: 1, assignedSquadron: "No. 45 Flying Daggers", baseLocation: "Air Force Station Sulur", subsystems: { engine: 92, hydraulics: 91, avionics: 94, electrical: 90, airframe: 93 } },
    { id: "AR-012", callsign: "GARUDA-04", category: "Multirole", status: "Serviceable", engineTempC: 722, vibrationIps: 0.33, oilPressurePsi: 49, flightHours: 950, componentAgeYears: 3.8, daysSinceInspection: 32, previousFaultCount: 2, assignedSquadron: "No. 45 Flying Daggers", baseLocation: "Air Force Station Sulur", subsystems: { engine: 86, hydraulics: 85, avionics: 90, electrical: 84, airframe: 88 } },
    { id: "AR-013", callsign: "VAJRA-03", category: "Multirole", status: "Maintenance", engineTempC: 805, vibrationIps: 0.58, oilPressurePsi: 38, flightHours: 1310, componentAgeYears: 5.4, daysSinceInspection: 58, previousFaultCount: 6, assignedSquadron: "No. 1 Tigers", baseLocation: "Air Force Station Gwalior", subsystems: { engine: 55, hydraulics: 64, avionics: 72, electrical: 61, airframe: 70 } },
    { id: "AR-014", callsign: "VAJRA-04", category: "Multirole", status: "Serviceable", engineTempC: 710, vibrationIps: 0.27, oilPressurePsi: 53, flightHours: 690, componentAgeYears: 2.5, daysSinceInspection: 16, previousFaultCount: 0, assignedSquadron: "No. 1 Tigers", baseLocation: "Air Force Station Gwalior", subsystems: { engine: 95, hydraulics: 94, avionics: 97, electrical: 93, airframe: 96 } },
    { id: "AR-015", callsign: "GAJRAJ-03", category: "Transport", status: "Serviceable", engineTempC: 730, vibrationIps: 0.35, oilPressurePsi: 48, flightHours: 1020, componentAgeYears: 4.5, daysSinceInspection: 35, previousFaultCount: 2, assignedSquadron: "No. 44 Himalayan Geese", baseLocation: "Air Force Station Chandigarh", subsystems: { engine: 84, hydraulics: 83, avionics: 89, electrical: 85, airframe: 87 } },
    { id: "AR-016", callsign: "GAJRAJ-04", category: "Transport", status: "Inspection-Due", engineTempC: 772, vibrationIps: 0.46, oilPressurePsi: 42, flightHours: 1260, componentAgeYears: 5.8, daysSinceInspection: 55, previousFaultCount: 4, assignedSquadron: "No. 44 Himalayan Geese", baseLocation: "Air Force Station Chandigarh", subsystems: { engine: 71, hydraulics: 75, avionics: 81, electrical: 73, airframe: 79 } },
    { id: "AR-017", callsign: "RUDRA-08", category: "Multirole", status: "Serviceable", engineTempC: 705, vibrationIps: 0.24, oilPressurePsi: 56, flightHours: 490, componentAgeYears: 1.5, daysSinceInspection: 10, previousFaultCount: 0, assignedSquadron: "No. 17 Golden Arrows", baseLocation: "Air Force Station Ambala", subsystems: { engine: 97, hydraulics: 98, avionics: 99, electrical: 96, airframe: 98 } },
    { id: "AR-018", callsign: "RUDRA-09", category: "Multirole", status: "Serviceable", engineTempC: 728, vibrationIps: 0.32, oilPressurePsi: 49, flightHours: 890, componentAgeYears: 3.4, daysSinceInspection: 26, previousFaultCount: 1, assignedSquadron: "No. 17 Golden Arrows", baseLocation: "Air Force Station Ambala", subsystems: { engine: 88, hydraulics: 89, avionics: 93, electrical: 87, airframe: 90 } },
    { id: "AR-019", callsign: "KIRAN-03", category: "Trainer", status: "Serviceable", engineTempC: 712, vibrationIps: 0.28, oilPressurePsi: 52, flightHours: 640, componentAgeYears: 2.0, daysSinceInspection: 19, previousFaultCount: 0, assignedSquadron: "Air Force Academy Stage-II", baseLocation: "Air Force Station Dundigal", subsystems: { engine: 95, hydraulics: 93, avionics: 96, electrical: 92, airframe: 95 } },
    { id: "AR-020", callsign: "KIRAN-04", category: "Trainer", status: "Inspection-Due", engineTempC: 758, vibrationIps: 0.41, oilPressurePsi: 44, flightHours: 1110, componentAgeYears: 4.6, daysSinceInspection: 49, previousFaultCount: 3, assignedSquadron: "Air Force Academy Stage-II", baseLocation: "Air Force Station Dundigal", subsystems: { engine: 77, hydraulics: 79, avionics: 86, electrical: 78, airframe: 83 } },
    { id: "AR-021", callsign: "NETRA-02", category: "Recon", status: "Serviceable", engineTempC: 719, vibrationIps: 0.30, oilPressurePsi: 50, flightHours: 770, componentAgeYears: 3.1, daysSinceInspection: 21, previousFaultCount: 1, assignedSquadron: "Centre for Airborne Systems", baseLocation: "Air Force Station Yelahanka", subsystems: { engine: 92, hydraulics: 90, avionics: 94, electrical: 89, airframe: 93 } },
    { id: "AR-022", callsign: "NETRA-03", category: "Recon", status: "Serviceable", engineTempC: 724, vibrationIps: 0.34, oilPressurePsi: 47, flightHours: 990, componentAgeYears: 4.1, daysSinceInspection: 33, previousFaultCount: 2, assignedSquadron: "Centre for Airborne Systems", baseLocation: "Air Force Station Yelahanka", subsystems: { engine: 85, hydraulics: 84, avionics: 91, electrical: 86, airframe: 89 } }
  ],
  initialWorkOrders: [
    {
      woId: "WO-26249-01",
      aircraftId: "AR-007",
      suspectedIssue: "Turbine Thermal Excursion & Radial Bearing Vibration Anomaly",
      evidence: "EGT 845°C (>830°C limit), Vib 0.72 IPS (>0.65 limit), Oil Pressure degraded to 31 PSI (<34 PSI critical limit)",
      priority: "CRITICAL",
      action: "Immediate Borescope Inspection of High-Pressure Turbine Stage 2 & Bearing Oil Feed Flange Replacement",
      estimatedDurationHours: 14,
      assignedTeam: "Alpha Propulsion Maintenance Wing",
      notes: "Triggered by predictive risk threshold breach. Mandatory borescope inspection before ground engine test.",
      status: "In Progress",
      partsRequired: ["PRT-ENG-084", "PRT-BRG-220"],
      createdTimestamp: "2026-10-20T06:30:00Z"
    },
    {
      woId: "WO-26249-02",
      aircraftId: "AR-013",
      suspectedIssue: "Hydraulic Pump Seal Degradation & High Engine Temperature",
      evidence: "Engine Temp 805°C (>780°C threshold), Vib 0.58 IPS, Oil Pressure 38 PSI",
      priority: "HIGH",
      action: "Hydraulic Actuator Line Pressure Test & Oil Scavenge Filter Flush",
      estimatedDurationHours: 10,
      assignedTeam: "Bravo Hydraulics Technical Team",
      notes: "Scheduled servicing active in Hangar Bay 3.",
      status: "In Progress",
      partsRequired: ["PRT-HYD-502"],
      createdTimestamp: "2026-10-19T14:15:00Z"
    },
    {
      woId: "WO-26249-03",
      aircraftId: "AR-005",
      suspectedIssue: "Heavy Transport 60-Day Periodic Inspection Cycle",
      evidence: "62 days since last depot check, 1420 flight hours",
      priority: "MEDIUM",
      action: "Standard Phase-3 Periodic Structural & Avionics NDT Inspection",
      estimatedDurationHours: 18,
      assignedTeam: "Charlie Heavy Transport Specialist Division",
      notes: "Awaiting ultrasonic crack detection probe clearance.",
      status: "Awaiting Parts",
      partsRequired: ["PRT-NDT-114"],
      createdTimestamp: "2026-10-18T09:00:00Z"
    },
    {
      woId: "WO-26249-04",
      aircraftId: "AR-003",
      suspectedIssue: "Oil Return Line Pressure Drop Early Warning",
      evidence: "Oil Pressure 46 PSI, days since inspection: 48 (>45 cycle)",
      priority: "MEDIUM",
      action: "Secondary Oil Manifold Pressure Transducer Calibration & Seal Inspection",
      estimatedDurationHours: 6,
      assignedTeam: "Delta Avionics & Instrumentation Cell",
      notes: "Pre-flight preventative check recommended.",
      status: "Open",
      partsRequired: ["PRT-SEN-091"],
      createdTimestamp: "2026-10-20T05:00:00Z"
    }
  ],
  spareParts: [
    { partId: "PRT-ENG-084", partName: "High-Pressure Turbine Stage 2 Blade Kit", category: "Propulsion", availableQty: 3, minStockLevel: 4, leadTimeDays: 5, status: "Low Stock Warning", unitCostUsd: 18500 },
    { partId: "PRT-BRG-220", partName: "Engine #3 Radial Roller Bearing Assembly", category: "Bearings & Transmission", availableQty: 1, minStockLevel: 3, leadTimeDays: 7, status: "Critical Reorder", unitCostUsd: 6200 },
    { partId: "PRT-HYD-502", partName: "Main Hydraulic Return Line High-Temp O-Ring Set", category: "Hydraulics", availableQty: 14, minStockLevel: 8, leadTimeDays: 2, status: "Optimal", unitCostUsd: 450 },
    { partId: "PRT-SEN-091", partName: "Digital Optical Oil Pressure Transducer", category: "Avionics Sensors", availableQty: 6, minStockLevel: 5, leadTimeDays: 4, status: "Optimal", unitCostUsd: 1250 },
    { partId: "PRT-NDT-114", partName: "Piezoelectric Ultrasonic Transducer Probe", category: "Inspection Consumables", availableQty: 0, minStockLevel: 2, leadTimeDays: 3, status: "Out of Stock - Shipment En Route", unitCostUsd: 3100 },
    { partId: "PRT-AVN-440", partName: "TACAN Multi-Channel Receiver Module", category: "Avionics", availableQty: 5, minStockLevel: 3, leadTimeDays: 6, status: "Optimal", unitCostUsd: 9800 },
    { partId: "PRT-ACT-310", partName: "Dual-Redundant Rudder Actuator Pack", category: "Flight Controls", availableQty: 2, minStockLevel: 3, leadTimeDays: 8, status: "Low Stock Warning", unitCostUsd: 14200 }
  ],
  integrationFeeds: [
    { feedId: "FEED-01", name: "Aircraft Health & Telemetry Link (AHTL)", type: "Streaming Telemetry", protocol: "STANAG 4586 / UDP Gateway (Simulated)", latencyMs: 42, health: "ONLINE", dataPointsPerSec: 1240, lastPacket: "Just now", details: "Real-time engine exhaust temp, bearing vibration FFT spectrograms, and oil pressures." },
    { feedId: "FEED-02", name: "Base Technical Records & Log (BTR-ML)", type: "Maintenance ERP", protocol: "REST / ISO 10303 STEP Schema (Simulated)", latencyMs: 85, health: "ONLINE", dataPointsPerSec: 85, lastPacket: "12s ago", details: "Tracks flight hour utilization, structural crack monitoring, and depot calendar deadlines." },
    { feedId: "FEED-03", name: "Base Aviation Depot Inventory (BADIS)", type: "Supply Chain & Spares", protocol: "ODBC / XML Supply Gateway (Simulated)", latencyMs: 110, health: "ONLINE", dataPointsPerSec: 45, lastPacket: "28s ago", details: "Tracks real-time inventory balances, warehouse bin allocations, and lead-time alerts." },
    { feedId: "FEED-04", name: "Maintenance Agency & Hangar Link (MA-HRL)", type: "Technician & Bay Capacity", protocol: "Websocket Status Queue (Simulated)", latencyMs: 28, health: "ONLINE", dataPointsPerSec: 18, lastPacket: "3s ago", details: "Monitors 4 active hangar bays, technician certifications, and shift work assignments." }
  ]
};

/**
 * State Management Object with LocalStorage Persistence
 */
class FleetStateStore {
  constructor() {
    this.STORAGE_KEY = 'aeroready_fleet_state_v1';
    this.data = null;
    this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      try {
        this.data = JSON.parse(saved);
      } catch (err) {
        console.warn('Failed parsing saved state, resetting to defaults', err);
        this.data = JSON.parse(JSON.stringify(DEFAULT_FLEET_DATA));
      }
    } else {
      this.data = JSON.parse(JSON.stringify(DEFAULT_FLEET_DATA));
      this.saveState();
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('LocalStorage write error:', e);
    }
  }

  resetState() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_FLEET_DATA));
    this.saveState();
  }

  getThresholds() {
    return this.data.systemMeta.thresholds;
  }

  setThresholds(newThresholds) {
    this.data.systemMeta.thresholds = { ...this.data.systemMeta.thresholds, ...newThresholds };
    this.saveState();
  }

  getAircraftList() {
    return this.data.aircraft;
  }

  getAircraftById(id) {
    return this.data.aircraft.find(a => a.id === id);
  }

  getAircraft(id) {
    return this.getAircraftById(id);
  }

  updateAircraftStatus(id, newStatus) {
    const plane = this.getAircraftById(id);
    if (plane) {
      plane.status = newStatus;
      this.saveState();
    }
  }

  getWorkOrders() {
    return this.data.initialWorkOrders;
  }

  addWorkOrder(wo) {
    this.data.initialWorkOrders.unshift(wo);
    // If work order is for an aircraft that was serviceable or inspection due, set to maintenance or grounded
    const plane = this.getAircraftById(wo.aircraftId);
    if (plane) {
      if (wo.priority === 'CRITICAL') {
        plane.status = 'Grounded-For-Inspection';
      } else if (plane.status === 'Serviceable') {
        plane.status = 'Maintenance';
      }
    }
    this.saveState();
  }

  updateWorkOrderStatus(woId, newStatus) {
    const wo = this.data.initialWorkOrders.find(w => w.woId === woId);
    if (wo) {
      wo.status = newStatus;
      // If completed, return aircraft to Serviceable and reset inspection counter
      if (newStatus === 'Completed') {
        const plane = this.getAircraftById(wo.aircraftId);
        if (plane) {
          plane.status = 'Serviceable';
          plane.daysSinceInspection = 0;
          // Subsystems heal slightly on maintenance completion
          if (plane.subsystems) {
            Object.keys(plane.subsystems).forEach(k => {
              plane.subsystems[k] = Math.min(98, plane.subsystems[k] + 25);
            });
          }
        }
      }
      this.saveState();
    }
  }

  getSpareParts() {
    return this.data.spareParts;
  }

  restockPart(partId, amount = 2) {
    const part = this.data.spareParts.find(p => p.partId === partId);
    if (part) {
      part.availableQty += amount;
      if (part.availableQty >= part.minStockLevel) {
        part.status = 'Optimal';
      } else if (part.availableQty > 0) {
        part.status = 'Low Stock Warning';
      }
      this.saveState();
    }
  }

  getIntegrationFeeds() {
    return this.data.integrationFeeds;
  }
}

/**
 * Transparent, Explainable Predictive Maintenance Risk Engine
 * Mathematical rule-based scoring model.
 * Produces: Score (0-100), Category (LOW, MEDIUM, HIGH, CRITICAL), Health Index, and Contributing Factors
 */
class PredictiveMaintenanceEngine {
  /**
   * Evaluates an aircraft record against configured engineering thresholds
   * @param {Object} aircraft 
   * @param {Object} thresholds 
   * @returns {Object} { riskScore, riskCategory, healthIndex, factors, recommendedAction, priority }
   */
  static evaluateRisk(aircraft, thresholds) {
    const factors = [];
    let score = 0;

    // 1. Turbine Exhaust Gas Temperature (EGT) Factor (Weight: 25%)
    const tempLimit = thresholds.tempWarningC || 780;
    const tempCrit = thresholds.tempCriticalC || 830;
    let tempPoints = 0;
    if (aircraft.engineTempC > tempLimit) {
      const delta = aircraft.engineTempC - tempLimit;
      const maxDelta = tempCrit - tempLimit;
      const ratio = Math.min(1.5, delta / (maxDelta || 1));
      tempPoints = Math.round(15 + ratio * 10); // up to 25 points
      factors.push({
        name: 'Turbine Temperature Excursion',
        param: 'Engine Temp',
        observed: `${aircraft.engineTempC} °C`,
        limit: `${tempLimit} °C (Crit: ${tempCrit} °C)`,
        points: tempPoints,
        severity: aircraft.engineTempC >= tempCrit ? 'CRITICAL' : 'HIGH',
        explanation: `Temperature exceeds warning threshold by +${delta}°C, indicating combustion chamber hot spots or nozzle guide vane erosion.`
      });
    } else {
      tempPoints = Math.max(0, Math.round(((aircraft.engineTempC - 680) / 100) * 5));
    }
    score += tempPoints;

    // 2. Radial Bearing Vibration Factor (Weight: 20%)
    const vibLimit = thresholds.vibrationWarningIps || 0.45;
    const vibCrit = thresholds.vibrationCriticalIps || 0.65;
    let vibPoints = 0;
    if (aircraft.vibrationIps > vibLimit) {
      const delta = aircraft.vibrationIps - vibLimit;
      const maxDelta = vibCrit - vibLimit;
      const ratio = Math.min(1.5, delta / (maxDelta || 1));
      vibPoints = Math.round(12 + ratio * 8); // up to 20 points
      factors.push({
        name: 'Bearing Vibration Anomaly',
        param: 'Vibration',
        observed: `${aircraft.vibrationIps.toFixed(2)} IPS`,
        limit: `${vibLimit.toFixed(2)} IPS (Crit: ${vibCrit.toFixed(2)})`,
        points: vibPoints,
        severity: aircraft.vibrationIps >= vibCrit ? 'CRITICAL' : 'HIGH',
        explanation: `Rotational vibration of ${aircraft.vibrationIps} IPS suggests shaft unbalance, spool misalignment, or roller bearing race spalling.`
      });
    } else {
      vibPoints = Math.max(0, Math.round((aircraft.vibrationIps / vibLimit) * 5));
    }
    score += vibPoints;

    // 3. Engine Oil Pressure Anomaly (Weight: 15%)
    const oilMin = thresholds.oilPressureMinPsi || 42;
    const oilCrit = thresholds.oilPressureCriticalPsi || 34;
    let oilPoints = 0;
    if (aircraft.oilPressurePsi < oilMin) {
      const drop = oilMin - aircraft.oilPressurePsi;
      const maxDrop = oilMin - oilCrit;
      const ratio = Math.min(1.5, drop / (maxDrop || 1));
      oilPoints = Math.round(8 + ratio * 7); // up to 15 points
      factors.push({
        name: 'Low Lubrication Oil Pressure',
        param: 'Oil Pressure',
        observed: `${aircraft.oilPressurePsi} PSI`,
        limit: `Min Safe: ${oilMin} PSI (Crit: ${oilCrit} PSI)`,
        points: oilPoints,
        severity: aircraft.oilPressurePsi <= oilCrit ? 'CRITICAL' : 'HIGH',
        explanation: `Oil pressure is ${drop} PSI below safe limit, risking friction overheating and catastrophic bearing seizure.`
      });
    }
    score += oilPoints;

    // 4. Overdue Periodic Inspection Interval (Weight: 10%)
    const cycleDays = thresholds.inspectionCycleDays || 45;
    const overdueDays = thresholds.inspectionOverdueDays || 60;
    let inspPoints = 0;
    if (aircraft.daysSinceInspection > cycleDays) {
      const overdueDelta = aircraft.daysSinceInspection - cycleDays;
      inspPoints = Math.min(10, Math.round(4 + (overdueDelta / (overdueDays - cycleDays || 1)) * 6));
      factors.push({
        name: 'Overdue Inspection Cycle',
        param: 'Inspection Interval',
        observed: `${aircraft.daysSinceInspection} Days`,
        limit: `Standard Cycle: ${cycleDays} Days`,
        points: inspPoints,
        severity: aircraft.daysSinceInspection >= overdueDays ? 'HIGH' : 'MEDIUM',
        explanation: `Aircraft is ${overdueDelta} days past its scheduled ${cycleDays}-day periodic maintenance check.`
      });
    } else {
      inspPoints = Math.round((aircraft.daysSinceInspection / cycleDays) * 3);
    }
    score += inspPoints;

    // 5. Flight Hour Utilization Load (Weight: 10%)
    const maxFlightHours = thresholds.flightHoursAlert || 1200;
    let hourPoints = 0;
    if (aircraft.flightHours > maxFlightHours) {
      const excess = aircraft.flightHours - maxFlightHours;
      hourPoints = Math.min(10, Math.round(5 + (excess / 300) * 5));
      factors.push({
        name: 'High Utilization Airframe Fatigue',
        param: 'Flight Hours',
        observed: `${aircraft.flightHours} hrs`,
        limit: `Target Interval: ${maxFlightHours} hrs`,
        points: hourPoints,
        severity: 'MEDIUM',
        explanation: `Cumulative flight hours have exceeded standard inspection interval by +${excess} hours.`
      });
    } else {
      hourPoints = Math.round((aircraft.flightHours / maxFlightHours) * 4);
    }
    score += hourPoints;

    // 6. Component Age (Weight: 10%)
    const agePoints = Math.min(10, Math.round((aircraft.componentAgeYears / 8) * 10));
    score += agePoints;
    if (aircraft.componentAgeYears >= 5.0) {
      factors.push({
        name: 'Aging Component Stress',
        param: 'Component Age',
        observed: `${aircraft.componentAgeYears} years`,
        limit: '5.0 years review limit',
        points: agePoints,
        severity: 'LOW',
        explanation: `Component has reached ${aircraft.componentAgeYears} years in operational service environment.`
      });
    }

    // 7. Historical Fault Log Frequency (Weight: 10%)
    const faultPoints = Math.min(10, Math.round(aircraft.previousFaultCount * 1.5));
    score += faultPoints;
    if (aircraft.previousFaultCount >= 4) {
      factors.push({
        name: 'Recurring Fault History',
        param: 'Past Fault Logs',
        observed: `${aircraft.previousFaultCount} past faults`,
        limit: 'Threshold: < 3 faults',
        points: faultPoints,
        severity: aircraft.previousFaultCount >= 6 ? 'HIGH' : 'MEDIUM',
        explanation: `High frequency of prior recorded maintenance events indicates persistent subsystem vulnerability.`
      });
    }

    // Clamp score between 0 and 100
    const riskScore = Math.min(100, Math.max(5, Math.round(score)));
    const healthIndex = Math.max(0, 100 - riskScore);

    // Determine category
    let riskCategory = 'LOW';
    let suggestedPriority = 'LOW';
    let recommendedAction = 'Routine pre-flight line inspection; cleared for regular sortie operations.';

    if (riskScore >= 75) {
      riskCategory = 'CRITICAL';
      suggestedPriority = 'CRITICAL';
      recommendedAction = 'Immediate flight grounding. Perform specialized borescope inspection & scavenge oil line audit.';
    } else if (riskScore >= 55) {
      riskCategory = 'HIGH';
      suggestedPriority = 'HIGH';
      recommendedAction = 'Priority depot turn-in. Conduct ultrasonic crack testing and hydraulic pressure relief verification.';
    } else if (riskScore >= 35) {
      riskCategory = 'MEDIUM';
      suggestedPriority = 'MEDIUM';
      recommendedAction = 'Schedule minor depot check within next 5 sorties; monitor telemetry trends closely.';
    }

    return {
      riskScore,
      riskCategory,
      healthIndex,
      factors,
      recommendedAction,
      suggestedPriority
    };
  }
}

/**
 * ============================================================================
 * FEATURE 4: AIRCRAFT COMPONENT STATUS MAPPING MODULE
 * Maps existing telemetry records, engineering thresholds, and work orders
 * to 8 illustrative aircraft subsystems with explainable status and evidence.
 * ============================================================================
 */
class AircraftComponentMapper {
  /**
   * Evaluates an aircraft record across 8 physical subsystems
   * @param {Object} aircraft 
   * @param {Object} thresholds 
   * @param {Array} workOrders 
   * @returns {Array} Array of 8 mapped component objects
   */
  static mapAircraftToComponents(aircraft, thresholds, workOrders = []) {
    if (!aircraft) return [];

    // Active work orders for this specific aircraft
    const planeWos = workOrders.filter(w => w.aircraftId === aircraft.id && w.status !== 'Completed');

    // 1. ENGINE & PROPULSION CORE (Direct Sensor Telemetry)
    const tempLimit = thresholds.tempWarningC || 780;
    const tempCrit = thresholds.tempCriticalC || 830;
    const vibLimit = thresholds.vibrationWarningIps || 0.45;
    const vibCrit = thresholds.vibrationCriticalIps || 0.65;
    const oilLimit = thresholds.oilPressureMinPsi || 42;
    const oilCrit = thresholds.oilPressureCriticalPsi || 34;

    const tempBreach = aircraft.engineTempC > tempLimit;
    const vibBreach = aircraft.vibrationIps > vibLimit;
    const oilBreach = aircraft.oilPressurePsi < oilLimit;

    let engineStatus = 'healthy';
    let engineSeverity = 'HEALTHY';
    if (aircraft.engineTempC >= tempCrit || aircraft.vibrationIps >= vibCrit || aircraft.oilPressurePsi <= oilCrit) {
      engineStatus = 'critical';
      engineSeverity = 'HIGH RISK (CRITICAL)';
    } else if (tempBreach || vibBreach || oilBreach) {
      engineStatus = 'warning';
      engineSeverity = 'NEEDS ATTENTION';
    }

    const engineHealth = aircraft.subsystems?.engine ?? Math.max(30, 100 - (tempBreach ? 35 : 0) - (vibBreach ? 30 : 0) - (oilBreach ? 25 : 0));
    const engineEvidence = [];
    if (tempBreach) engineEvidence.push(`Turbine EGT: ${aircraft.engineTempC}°C (Warning: ${tempLimit}°C, Crit: ${tempCrit}°C)`);
    if (vibBreach) engineEvidence.push(`Bearing Vibration: ${aircraft.vibrationIps.toFixed(2)} IPS (Limit: ${vibLimit} IPS)`);
    if (oilBreach) engineEvidence.push(`Oil Pressure: ${aircraft.oilPressurePsi} PSI (Safe Min: ${oilLimit} PSI)`);
    if (engineEvidence.length === 0) engineEvidence.push('All turbine parameters operating within nominal aerospace envelope.');

    // 2. AVIONICS & RADOME
    const avHealth = aircraft.subsystems?.avionics ?? 92;
    const avStatus = avHealth < 60 ? 'critical' : avHealth < 80 ? 'warning' : 'healthy';

    // 3. HYDRAULICS CIRCUIT
    const hydHealth = aircraft.subsystems?.hydraulics ?? 88;
    const hydStatus = hydHealth < 60 ? 'critical' : hydHealth < 80 ? 'warning' : 'healthy';

    // 4. ELECTRICAL SYSTEM
    const elHealth = aircraft.subsystems?.electrical ?? 90;
    const elStatus = elHealth < 60 ? 'critical' : elHealth < 80 ? 'warning' : 'healthy';

    // 5. LANDING GEAR & BRAKES
    const lgStress = aircraft.flightHours > 1250;
    const lgHealth = lgStress ? 72 : 96;
    const lgStatus = lgStress ? 'warning' : 'healthy';

    // 6. FUEL SYSTEM
    const fuelStress = aircraft.componentAgeYears > 5.0;
    const fuelHealth = fuelStress ? 74 : 93;
    const fuelStatus = fuelStress ? 'warning' : 'healthy';

    // 7. FLIGHT CONTROLS
    const fcHealth = Math.round((hydHealth + (aircraft.subsystems?.airframe ?? 90)) / 2);
    const fcStatus = fcHealth < 60 ? 'critical' : fcHealth < 80 ? 'warning' : 'healthy';

    // 8. AIRFRAME / STRUCTURE
    const afHealth = aircraft.subsystems?.airframe ?? 92;
    const afStatus = afHealth < 60 ? 'critical' : afHealth < 80 ? 'warning' : 'healthy';

    return [
      {
        id: 'engine',
        name: 'Propulsion & High-Pressure Turbine Core',
        shortName: 'Engine',
        category: 'Propulsion',
        status: engineStatus,
        severity: engineSeverity,
        healthScore: engineHealth,
        sourceType: 'Direct Telemetry (Sensors)',
        measurements: [
          { label: 'Exhaust Gas Temp (EGT)', val: `${aircraft.engineTempC} °C`, limit: `${tempLimit} °C` },
          { label: 'Shaft Vibration', val: `${aircraft.vibrationIps.toFixed(2)} IPS`, limit: `${vibLimit} IPS` },
          { label: 'Oil Scavenge Pressure', val: `${aircraft.oilPressurePsi} PSI`, limit: `Min ${oilLimit} PSI` }
        ],
        evidence: engineEvidence,
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('engine') || w.suspectedIssue.toLowerCase().includes('turbine') || w.suspectedIssue.toLowerCase().includes('oil')),
        nextAction: engineStatus === 'critical'
          ? 'Mandatory flight grounding. Perform immediate borescope inspection of HPT Stage 2 and replace radial bearing oil feed line.'
          : engineStatus === 'warning'
          ? 'Schedule borescope inspection on next turnaround sortie; monitor vibration FFT spectrograms.'
          : 'Cleared for line flight operations. Normal monitoring cycle.'
      },
      {
        id: 'avionics',
        name: 'Avionics, Radome & Flight Navigation Bus',
        shortName: 'Avionics',
        category: 'Avionics',
        status: avStatus,
        severity: avStatus === 'critical' ? 'HIGH RISK' : avStatus === 'warning' ? 'NEEDS MONITORING' : 'HEALTHY',
        healthScore: avHealth,
        sourceType: 'Avionics Bus & Inspection Record',
        measurements: [
          { label: 'Bus Signal Continuity', val: `${avHealth}%`, limit: 'Min 80%' },
          { label: 'TACAN Transceiver Latency', val: '12 ms', limit: '< 25 ms' }
        ],
        evidence: [
          `Telemetry signal health index rated at ${avHealth}%.`,
          aircraft.daysSinceInspection > 45 ? `Periodic calibration is ${aircraft.daysSinceInspection - 45} days overdue.` : 'Periodic NDT electrical continuity verified.'
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('avionic') || w.suspectedIssue.toLowerCase().includes('radar')),
        nextAction: avStatus !== 'healthy'
          ? 'Conduct TACAN multi-channel loopback diagnostic and inspect radome forward antenna feed.'
          : 'Avionics bus nominal. Cleared for all-weather sorties.'
      },
      {
        id: 'hydraulics',
        name: 'Primary Hydraulic Actuator Circuit',
        shortName: 'Hydraulics',
        category: 'Hydraulics',
        status: hydStatus,
        severity: hydStatus === 'critical' ? 'HIGH RISK' : hydStatus === 'warning' ? 'NEEDS INSPECTION' : 'HEALTHY',
        healthScore: hydHealth,
        sourceType: 'Hydraulic Manifold Telemetry',
        measurements: [
          { label: 'Return Line Pressure', val: `${Math.round(2900 * (hydHealth / 100))} PSI`, limit: 'Nominal 3000 PSI' },
          { label: 'Actuator Response Latency', val: `${Math.round(18 + (100 - hydHealth) * 0.4)} ms`, limit: '< 25 ms' }
        ],
        evidence: [
          `Hydraulic health index rated at ${hydHealth}%.`,
          oilBreach ? 'Oil pressure drop indicates potential cross-seal fluid thermal elevation.' : 'Flow rates stable across primary flight surfaces.'
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('hydraulic') || w.suspectedIssue.toLowerCase().includes('actuator')),
        nextAction: hydStatus !== 'healthy'
          ? 'Pressure test left/right wing actuator lines and inspect high-temp O-ring seals.'
          : 'Line pressure stable. Routine maintenance.'
      },
      {
        id: 'electrical',
        name: 'Electrical Generation & Distribution Bus',
        shortName: 'Electrical',
        category: 'Power Systems',
        status: elStatus,
        severity: elStatus === 'critical' ? 'HIGH RISK' : elStatus === 'warning' ? 'NEEDS ATTENTION' : 'HEALTHY',
        healthScore: elHealth,
        sourceType: 'Generator Bus Sensor Record',
        measurements: [
          { label: 'Bus Voltage Regulation', val: '28.4 V DC', limit: '28.0 ± 0.8 V' },
          { label: 'Inverter Alternating Phase', val: '115 V AC', limit: '400 Hz ± 5 Hz' }
        ],
        evidence: [
          `Electrical subsystem integrity computed at ${elHealth}%.`,
          `Alternator stator temperature nominal across 3-phase line.`
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('electric')),
        nextAction: elStatus !== 'healthy'
          ? 'Audit transformer rectifier unit and secondary generator bus relay.'
          : 'Electrical distribution verified ready.'
      },
      {
        id: 'landing_gear',
        name: 'Landing Gear Struts & Braking Assembly',
        shortName: 'Landing Gear',
        category: 'Mechanical',
        status: lgStatus,
        severity: lgStatus === 'warning' ? 'NEEDS INSPECTION' : 'HEALTHY',
        healthScore: lgHealth,
        sourceType: 'Sortie Cycle Stress Meter',
        measurements: [
          { label: 'Cumulative Flight Hours', val: `${aircraft.flightHours} hrs`, limit: 'Standard 1200 hrs' },
          { label: 'Brake Disc Wear Depth', val: `${(3.2 + (aircraft.flightHours / 600)).toFixed(1)} mm`, limit: 'Max 6.0 mm' }
        ],
        evidence: [
          aircraft.flightHours > 1200
            ? `Cumulative flight load (${aircraft.flightHours} hrs) indicates high landing shock cycles.`
            : 'Strut oleo pressure within nominal specification.'
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('gear') || w.suspectedIssue.toLowerCase().includes('brake')),
        nextAction: lgStatus === 'warning'
          ? 'Conduct dye-penetrant inspection on main bogie trunnion pins and verify oleo strut inflation.'
          : 'Landing gear cleared for carrier / runway operations.'
      },
      {
        id: 'fuel_system',
        name: 'Fuel Cells & Transfer Pump Manifold',
        shortName: 'Fuel System',
        category: 'Fuel',
        status: fuelStatus,
        severity: fuelStatus === 'warning' ? 'NEEDS INSPECTION' : 'HEALTHY',
        healthScore: fuelHealth,
        sourceType: 'Depot Fuel Cell Calibration',
        measurements: [
          { label: 'Fuel Filter Differential', val: '0.42 BAR', limit: '< 0.60 BAR' },
          { label: 'Airframe Age Factor', val: `${aircraft.componentAgeYears} yrs`, limit: '5.0 yrs' }
        ],
        evidence: [
          aircraft.componentAgeYears > 5.0
            ? `Airframe operational age (${aircraft.componentAgeYears} years) prompts fuel cell seal elastomer review.`
            : 'Transfer boost pumps operating at nominal flow.'
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('fuel')),
        nextAction: fuelStatus === 'warning'
          ? 'Inspect fuel scavenge filters for seal particulate and verify cross-feed shutoff valves.'
          : 'Fuel system sealed and operational.'
      },
      {
        id: 'flight_controls',
        name: 'Primary Fly-By-Wire Flight Surfaces',
        shortName: 'Flight Controls',
        category: 'Control Surfaces',
        status: fcStatus,
        severity: fcStatus === 'critical' ? 'HIGH RISK' : fcStatus === 'warning' ? 'NEEDS ATTENTION' : 'HEALTHY',
        healthScore: fcHealth,
        sourceType: 'FBW Actuator Sensor Bus',
        measurements: [
          { label: 'Elevon Deflection Delta', val: '± 28°', limit: 'Max ± 30°' },
          { label: 'Control Loop Response', val: '14 ms', limit: '< 20 ms' }
        ],
        evidence: [
          `Control surface responsiveness calculated at ${fcHealth}%.`,
          `Rudder and elevon hinge pins inspected and lubricated.`
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('control') || w.suspectedIssue.toLowerCase().includes('rudder')),
        nextAction: fcStatus !== 'healthy'
          ? 'Calibrate dual-redundant flight control computer servovalves.'
          : 'Full control authority verified.'
      },
      {
        id: 'airframe',
        name: 'Structural Fuselage & Wing Root Spars',
        shortName: 'Airframe',
        category: 'Structure',
        status: afStatus,
        severity: afStatus === 'critical' ? 'HIGH RISK' : afStatus === 'warning' ? 'MONITORING' : 'HEALTHY',
        healthScore: afHealth,
        sourceType: 'Non-Destructive Testing (NDT)',
        measurements: [
          { label: 'Days Since Inspection', val: `${aircraft.daysSinceInspection} Days`, limit: `${thresholds.inspectionCycleDays || 45} Days` },
          { label: 'Wing Root Strain Micro-Yield', val: '420 µε', limit: '< 800 µε' }
        ],
        evidence: [
          aircraft.daysSinceInspection > (thresholds.inspectionCycleDays || 45)
            ? `Aircraft is ${aircraft.daysSinceInspection - (thresholds.inspectionCycleDays || 45)} days overdue for periodic structural inspection.`
            : 'Ultrasonic crack scans confirm zero micro-fractures in wing carry-through structure.'
        ],
        relatedOrders: planeWos.filter(w => w.suspectedIssue.toLowerCase().includes('structure') || w.suspectedIssue.toLowerCase().includes('airframe') || w.suspectedIssue.toLowerCase().includes('inspection')),
        nextAction: afStatus !== 'healthy'
          ? 'Schedule ultrasonic NDT scan on wing root titanium carry-through bulkheads.'
          : 'Airframe structure cleared for high-G maneuvering envelope.'
      }
    ];
  }
}

/**
 * ============================================================================
 * FEATURE 2 & 3: INTERACTIVE 3D AIRCRAFT HEALTH VISUALIZER
 * Three.js WebGL procedural fighter jet model with live telemetry mapping,
 * subsystem hotspots, hover raycasting, camera tweening, and 2D canvas fallback.
 * ============================================================================
 */
class Interactive3DAircraftViewer {
  constructor(canvasId, tooltipId) {
    this.canvas = document.getElementById(canvasId);
    this.tooltip = document.getElementById(tooltipId);
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.modelGroup = null;
    this.subsystemMeshes = {};
    this.raycaster = null;
    this.mouse = null;
    this.isThreeAvailable = false;
    this.autoRotate = true;
    this.isWireframe = false;
    this.isExploded = false;
    this.selectedComponentId = 'engine';
    this.currentAircraft = null;
    this.currentComponents = [];
    this.animFrameId = null;
    this.clock = null;
    this.hoveredSubsystem = null;
    this.targetCameraPos = null;

    this.init();
  }

  init() {
    if (!this.canvas) return;

    if (typeof THREE !== 'undefined') {
      try {
        this.initThreeJS();
        this.isThreeAvailable = true;
      } catch (err) {
        console.warn('Three.js init error, falling back to 2D blueprint:', err);
        this.init2DFallback();
      }
    } else {
      console.warn('Three.js CDN not detected, using 2D canvas blueprint fallback.');
      this.init2DFallback();
    }
  }

  initThreeJS() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const width = rect.width || 800;
    const height = 560;

    // 1. Scene & Aerospace Atmosphere
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060e1a);
    this.scene.fog = new THREE.FogExp2(0x060e1a, 0.012);

    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    this.camera.position.set(16, 8, 16);

    // 2. High-Precision WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (THREE.ACESFilmicToneMapping) {
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;
    }

    // 3. OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxDistance = 60;
      this.controls.minDistance = 5;
      this.controls.maxPolarAngle = Math.PI / 2 + 0.04; // Don't go below ground
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.5;
      this.controls.target.set(0, 0, 0);
    }

    // 4. Aerospace Lighting (Key, Rim, Fill, & Specular Lights)
    const ambientLight = new THREE.AmbientLight(0x0c1b30, 2.8);
    this.scene.add(ambientLight);

    const keyCyanLight = new THREE.DirectionalLight(0x00e5ff, 2.4);
    keyCyanLight.position.set(20, 28, 22);
    this.scene.add(keyCyanLight);

    const rimBlueLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    rimBlueLight.position.set(-22, 16, -20);
    this.scene.add(rimBlueLight);

    const underWarmLight = new THREE.DirectionalLight(0x1e3a5f, 1.4);
    underWarmLight.position.set(0, -15, 0);
    this.scene.add(underWarmLight);

    // Tarmac Environment & Runway Grid
    this.buildTarmacEnvironment();

    // 5. Build High-Fidelity Procedural Stealth Fighter Model
    this.buildProceduralAircraft();

    // 6. 3D Screen-Space Callout Badges
    this.init3DCalloutPins();

    // 7. Raycasting & Mouse Interaction
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
    this.canvas.addEventListener('click', (e) => this.onMouseClick(e));
    window.addEventListener('resize', () => this.onWindowResize());

    // 8. Animation Loop
    this.clock = new THREE.Clock();
    this.animate();
  }

  buildTarmacEnvironment() {
    // Dark Hangar/Tarmac Floor
    const tarmacGeom = new THREE.PlaneGeometry(80, 80);
    tarmacGeom.rotateX(-Math.PI / 2);
    const tarmacMat = new THREE.MeshStandardMaterial({
      color: 0x091424,
      roughness: 0.45,
      metalness: 0.35
    });
    const tarmacMesh = new THREE.Mesh(tarmacGeom, tarmacMat);
    tarmacMesh.position.y = -2.36;
    this.scene.add(tarmacMesh);

    // Tactical Coordinate Grid with Cyan Accent
    const gridHelper = new THREE.GridHelper(40, 40, 0x00e5ff, 0x112845);
    gridHelper.position.y = -2.35;
    this.scene.add(gridHelper);

    // Yellow/Cyan Runway Centerline Stripe
    const lineGeom = new THREE.PlaneGeometry(0.3, 60);
    lineGeom.rotateX(-Math.PI / 2);
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.4 });
    const centerline = new THREE.Mesh(lineGeom, lineMat);
    centerline.position.set(0, -2.34, 0);
    this.scene.add(centerline);
  }

  buildProceduralAircraft() {
    this.modelGroup = new THREE.Group();
    this.subsystemMeshes = {};
    this.airframeEdges = [];

    // Outer Composite Skin: Frosted Translucent Cyan/Navy Glass
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0x0a223c,
      emissive: 0x002d4d,
      emissiveIntensity: 0.18,
      roughness: 0.2,
      metalness: 0.85,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      side: THREE.DoubleSide
    });

    // Silhouette Edge Material (Razor-sharp CAD contours)
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.65
    });

    // Helper to add contoured mesh with clean silhouette edges
    const addContouredMesh = (geom, parent = this.modelGroup, mat = skinMat) => {
      const mesh = new THREE.Mesh(geom, mat);
      parent.add(mesh);

      const edgesGeom = new THREE.EdgesGeometry(geom, 22);
      const edgeLines = new THREE.LineSegments(edgesGeom, edgeMat);
      mesh.add(edgeLines);
      this.airframeEdges.push(edgeLines);
      return mesh;
    };

    // -----------------------------------------------------------------
    // A. NOSE SECTION & RADOME (Z: 3.5 to 7.4)
    // -----------------------------------------------------------------
    const noseGeom = new THREE.ConeGeometry(0.82, 3.8, 8);
    noseGeom.rotateX(Math.PI / 2);
    noseGeom.scale(1.1, 0.72, 1.0);
    const noseMesh = addContouredMesh(noseGeom);
    noseMesh.position.set(0, 0.1, 5.5);
    noseMesh.name = 'airframe_shell';

    // -----------------------------------------------------------------
    // B. COCKPIT CANOPY (Z: 1.5 to 4.5, Y: 0.75 to 1.35)
    // -----------------------------------------------------------------
    const canopyGeom = new THREE.SphereGeometry(1.0, 16, 12);
    canopyGeom.scale(0.68, 0.55, 2.1);
    const canopyMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      emissive: 0x003b5c,
      emissiveIntensity: 0.25,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.38,
      depthWrite: false
    });
    const canopy = addContouredMesh(canopyGeom, this.modelGroup, canopyMat);
    canopy.position.set(0, 0.82, 2.8);
    canopy.name = 'airframe_shell';

    // -----------------------------------------------------------------
    // C. CENTER FUSELAGE & CHINED CHASSIS (Z: -3.8 to 3.8)
    // -----------------------------------------------------------------
    const centerFuselageGeom = new THREE.BoxGeometry(3.6, 1.1, 7.6);
    centerFuselageGeom.scale(1, 0.85, 1);
    const centerFuselage = addContouredMesh(centerFuselageGeom);
    centerFuselage.position.set(0, 0.05, 0.2);
    centerFuselage.name = 'airframe_shell';

    // Twin Air Intake Ducts (Port & Starboard)
    const intakeGeom = new THREE.BoxGeometry(0.85, 0.8, 3.2);
    const intakeL = addContouredMesh(intakeGeom);
    intakeL.position.set(-1.8, -0.15, 1.0);
    intakeL.rotation.y = -0.08;
    intakeL.name = 'airframe_shell';

    const intakeR = addContouredMesh(intakeGeom);
    intakeR.position.set(1.8, -0.15, 1.0);
    intakeR.rotation.y = 0.08;
    intakeR.name = 'airframe_shell';

    // -----------------------------------------------------------------
    // D. AFT FUSELAGE & NACELLES (Z: -3.8 to -7.2)
    // -----------------------------------------------------------------
    const aftGeom = new THREE.CylinderGeometry(1.4, 1.7, 3.4, 8);
    aftGeom.rotateX(Math.PI / 2);
    aftGeom.scale(1.2, 0.75, 1.0);
    const aftFuselage = addContouredMesh(aftGeom);
    aftFuselage.position.set(0, 0.08, -5.3);
    aftFuselage.name = 'airframe_shell';

    // -----------------------------------------------------------------
    // E. SWEPT TRAPEZOIDAL MAIN WINGS (Span: 12.6, Root: Z: 2.2 to -4.2)
    // -----------------------------------------------------------------
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 2.5);
    wingShape.lineTo(-6.3, -2.4);  // Left wingtip leading edge
    wingShape.lineTo(-6.1, -3.6);  // Left wingtip trailing edge
    wingShape.lineTo(-1.8, -4.2);  // Left root trailing edge
    wingShape.lineTo(0, -3.8);     // Centerline aft
    wingShape.lineTo(1.8, -4.2);   // Right root trailing edge
    wingShape.lineTo(6.1, -3.6);   // Right wingtip trailing edge
    wingShape.lineTo(6.3, -2.4);   // Right wingtip leading edge
    wingShape.closePath();

    const wingGeom = new THREE.ExtrudeGeometry(wingShape, { depth: 0.18, bevelEnabled: false });
    wingGeom.rotateX(Math.PI / 2);
    const mainWings = addContouredMesh(wingGeom);
    mainWings.position.set(0, -0.05, 0);
    mainWings.name = 'airframe_shell';

    // Wingtip Missile Rails / ECM Pods
    const podGeom = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8);
    podGeom.rotateX(Math.PI / 2);
    const podL = addContouredMesh(podGeom);
    podL.position.set(-6.2, -0.05, -3.0);
    const podR = addContouredMesh(podGeom);
    podR.position.set(6.2, -0.05, -3.0);

    // -----------------------------------------------------------------
    // F. TWIN CANTED VERTICAL STABILIZERS (Outward Angle: 20°)
    // -----------------------------------------------------------------
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(-0.8, 2.6);
    finShape.lineTo(0.4, 2.6);
    finShape.lineTo(1.6, 0);
    finShape.closePath();

    const finGeom = new THREE.ExtrudeGeometry(finShape, { depth: 0.12, bevelEnabled: false });
    finGeom.rotateY(Math.PI / 2);

    const leftFin = addContouredMesh(finGeom);
    leftFin.position.set(-1.6, 0.45, -3.8);
    leftFin.rotation.z = 0.32; // Cant outward ~18.5 deg
    leftFin.name = 'airframe_shell';

    const rightFin = addContouredMesh(finGeom);
    rightFin.position.set(1.6, 0.45, -3.8);
    rightFin.rotation.z = -0.32;
    rightFin.name = 'airframe_shell';

    // -----------------------------------------------------------------
    // G. ALL-MOVING HORIZONTAL STABILATORS (Tailplanes)
    // -----------------------------------------------------------------
    const stabShape = new THREE.Shape();
    stabShape.moveTo(0, 0);
    stabShape.lineTo(-2.2, -1.6);
    stabShape.lineTo(-1.8, -2.4);
    stabShape.lineTo(0, -1.8);
    stabShape.closePath();

    const stabGeom = new THREE.ExtrudeGeometry(stabShape, { depth: 0.1, bevelEnabled: false });
    stabGeom.rotateX(Math.PI / 2);

    const leftStab = addContouredMesh(stabGeom);
    leftStab.position.set(-1.8, -0.1, -5.4);
    leftStab.name = 'airframe_shell';

    const rightStabGeom = stabGeom.clone();
    rightStabGeom.scale(-1, 1, 1);
    const rightStab = addContouredMesh(rightStabGeom);
    rightStab.position.set(1.8, -0.1, -5.4);
    rightStab.name = 'airframe_shell';

    // =================================================================
    // 8 INTRICATE, AUTHENTIC INTERNAL SUBSYSTEM MODULES
    // =================================================================
    const createSubsystemMat = (colorHex) => new THREE.MeshStandardMaterial({
      color: colorHex,
      emissive: colorHex,
      emissiveIntensity: 0.85,
      roughness: 0.25,
      metalness: 0.75
    });

    // -----------------------------------------------------------------
    // 1. ENGINE / TURBOFAN PROPULSION CORE (Aft Centerline)
    // -----------------------------------------------------------------
    const engineGroup = new THREE.Group();

    // Compressor Fan Stage
    const fanGeom = new THREE.CylinderGeometry(0.82, 0.82, 0.5, 24);
    fanGeom.rotateX(Math.PI / 2);
    const fanMesh = new THREE.Mesh(fanGeom, createSubsystemMat(0x10b981));
    fanMesh.position.set(0, 0.05, -3.2);
    engineGroup.add(fanMesh);

    // Multi-Ring Turbine Spool & High-Pressure Casing
    const turbineGeom = new THREE.CylinderGeometry(0.78, 0.86, 3.4, 20);
    turbineGeom.rotateX(Math.PI / 2);
    const turbineMesh = new THREE.Mesh(turbineGeom, createSubsystemMat(0x10b981));
    turbineMesh.position.set(0, 0.05, -5.0);
    engineGroup.add(turbineMesh);

    // 4 Circumferential Titanium Cooling Rings
    for (let r = 0; r < 4; r++) {
      const ringGeom = new THREE.TorusGeometry(0.88, 0.06, 8, 24);
      const ringMesh = new THREE.Mesh(ringGeom, createSubsystemMat(0x10b981));
      ringMesh.position.set(0, 0.05, -4.0 - r * 0.7);
      engineGroup.add(ringMesh);
    }

    // Convergent-Divergent Exhaust Petal Nozzle
    const nozzleGeom = new THREE.CylinderGeometry(0.74, 0.88, 1.3, 16, 1, true);
    nozzleGeom.rotateX(Math.PI / 2);
    const nozzleMesh = new THREE.Mesh(nozzleGeom, createSubsystemMat(0x10b981));
    nozzleMesh.position.set(0, 0.05, -7.1);
    engineGroup.add(nozzleMesh);

    // Internal Afterburner Flame Ring
    const flameRingGeom = new THREE.TorusGeometry(0.58, 0.1, 8, 24);
    const flameRing = new THREE.Mesh(flameRingGeom, createSubsystemMat(0x10b981));
    flameRing.position.set(0, 0.05, -6.8);
    engineGroup.add(flameRing);

    engineGroup.userData = { subsystemId: 'engine', name: 'Propulsion & High-Pressure Turbine Core' };
    this.modelGroup.add(engineGroup);
    this.subsystemMeshes['engine'] = {
      group: engineGroup,
      mesh: turbineMesh,
      parts: [fanMesh, turbineMesh, nozzleMesh, flameRing],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, 0, -4.5),
      pinOffset: new THREE.Vector3(0, 1.4, -5.2)
    };

    // -----------------------------------------------------------------
    // 2. AVIONICS (Forward Nose Radome & AESA Radar Array)
    // -----------------------------------------------------------------
    const avionicsGroup = new THREE.Group();

    // Planar AESA Radar Array Face (tilted disc)
    const radarGeom = new THREE.CylinderGeometry(0.62, 0.62, 0.12, 18);
    radarGeom.rotateX(Math.PI / 2 + 0.2); // Tilted forward-up 11 deg
    const radarMesh = new THREE.Mesh(radarGeom, createSubsystemMat(0x10b981));
    radarMesh.position.set(0, 0.15, 6.0);
    avionicsGroup.add(radarMesh);

    // Dual Avionics LRU Processor Chassis
    const lruGeom = new THREE.BoxGeometry(0.8, 0.5, 1.4);
    const lruMesh = new THREE.Mesh(lruGeom, createSubsystemMat(0x10b981));
    lruMesh.position.set(0, 0.1, 4.4);
    avionicsGroup.add(lruMesh);

    // Forward IRST Sensor Ball
    const irstGeom = new THREE.SphereGeometry(0.2, 12, 10);
    const irstMesh = new THREE.Mesh(irstGeom, createSubsystemMat(0x10b981));
    irstMesh.position.set(0, 0.68, 4.6);
    avionicsGroup.add(irstMesh);

    avionicsGroup.userData = { subsystemId: 'avionics', name: 'Avionics, Radome & Mission Sensors' };
    this.modelGroup.add(avionicsGroup);
    this.subsystemMeshes['avionics'] = {
      group: avionicsGroup,
      mesh: radarMesh,
      parts: [radarMesh, lruMesh, irstMesh],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, 0.6, 3.8),
      pinOffset: new THREE.Vector3(0, 1.2, 5.5)
    };

    // -----------------------------------------------------------------
    // 3. HYDRAULICS (Power Manifolds & Cross-Wing Actuator Lines)
    // -----------------------------------------------------------------
    const hydGroup = new THREE.Group();

    // Dual High-Pressure Accumulator Cylinders
    const accumGeom = new THREE.CylinderGeometry(0.22, 0.22, 1.8, 12);
    accumGeom.rotateX(Math.PI / 2);

    const accumL = new THREE.Mesh(accumGeom, createSubsystemMat(0x10b981));
    accumL.position.set(-1.1, 0.18, -0.6);
    hydGroup.add(accumL);

    const accumR = new THREE.Mesh(accumGeom, createSubsystemMat(0x10b981));
    accumR.position.set(1.1, 0.18, -0.6);
    hydGroup.add(accumR);

    // Central Valve Distribution Manifold Block
    const manifoldGeom = new THREE.BoxGeometry(1.2, 0.35, 0.7);
    const manifoldMesh = new THREE.Mesh(manifoldGeom, createSubsystemMat(0x10b981));
    manifoldMesh.position.set(0, 0.12, -0.6);
    hydGroup.add(manifoldMesh);

    // Left & Right Hydraulic Pressure Conduit Lines to Elevons
    const lineTubeGeomL = new THREE.CylinderGeometry(0.04, 0.04, 4.2, 8);
    lineTubeGeomL.rotateZ(Math.PI / 2.3);
    const hydLineL = new THREE.Mesh(lineTubeGeomL, createSubsystemMat(0x10b981));
    hydLineL.position.set(-2.8, 0.05, -2.4);
    hydGroup.add(hydLineL);

    const lineTubeGeomR = new THREE.CylinderGeometry(0.04, 0.04, 4.2, 8);
    lineTubeGeomR.rotateZ(-Math.PI / 2.3);
    const hydLineR = new THREE.Mesh(lineTubeGeomR, createSubsystemMat(0x10b981));
    hydLineR.position.set(2.8, 0.05, -2.4);
    hydGroup.add(hydLineR);

    hydGroup.userData = { subsystemId: 'hydraulics', name: 'Primary Hydraulic Actuator Circuit' };
    this.modelGroup.add(hydGroup);
    this.subsystemMeshes['hydraulics'] = {
      group: hydGroup,
      mesh: manifoldMesh,
      parts: [accumL, accumR, manifoldMesh, hydLineL, hydLineR],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, 1.8, -0.6),
      pinOffset: new THREE.Vector3(-1.4, 1.2, -0.8)
    };

    // -----------------------------------------------------------------
    // 4. ELECTRICAL SYSTEM (Mid-Fuselage APU & Generator Bus)
    // -----------------------------------------------------------------
    const elecGroup = new THREE.Group();

    // Dual Alternator Housings
    const genGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.9, 12);
    genGeom.rotateZ(Math.PI / 2);

    const genL = new THREE.Mesh(genGeom, createSubsystemMat(0x10b981));
    genL.position.set(-0.7, -0.15, 1.2);
    elecGroup.add(genL);

    const genR = new THREE.Mesh(genGeom, createSubsystemMat(0x10b981));
    genR.position.set(0.7, -0.15, 1.2);
    elecGroup.add(genR);

    // Main Power Transformer-Rectifier Unit (TRU)
    const truGeom = new THREE.BoxGeometry(0.9, 0.5, 0.8);
    const truMesh = new THREE.Mesh(truGeom, createSubsystemMat(0x10b981));
    truMesh.position.set(0, -0.12, 1.2);
    elecGroup.add(truMesh);

    elecGroup.userData = { subsystemId: 'electrical', name: 'Electrical Generation & Distribution Bus' };
    this.modelGroup.add(elecGroup);
    this.subsystemMeshes['electrical'] = {
      group: elecGroup,
      mesh: truMesh,
      parts: [genL, genR, truMesh],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, -1.8, 1.2),
      pinOffset: new THREE.Vector3(1.2, 1.0, 1.2)
    };

    // -----------------------------------------------------------------
    // 5. LANDING GEAR (Tricycle Struts with Rubber Wheels Touching Ground)
    // -----------------------------------------------------------------
    const lgGroup = new THREE.Group();

    // Wheel Geometry Helper (Tire + Hub)
    const createWheel = (radius, width) => {
      const wGroup = new THREE.Group();
      const tireGeom = new THREE.CylinderGeometry(radius, radius, width, 16);
      tireGeom.rotateZ(Math.PI / 2);
      const tireMesh = new THREE.Mesh(tireGeom, createSubsystemMat(0x10b981));
      wGroup.add(tireMesh);

      const hubGeom = new THREE.CylinderGeometry(radius * 0.55, radius * 0.55, width + 0.04, 12);
      hubGeom.rotateZ(Math.PI / 2);
      const hubMesh = new THREE.Mesh(hubGeom, createSubsystemMat(0x10b981));
      wGroup.add(hubMesh);
      return { group: wGroup, meshes: [tireMesh, hubMesh] };
    };

    const lgAllParts = [];

    // Nose Gear (Strut + Dual Wheels at Y: -2.35)
    const noseStrutGeom = new THREE.CylinderGeometry(0.08, 0.08, 1.7, 8);
    const noseStrut = new THREE.Mesh(noseStrutGeom, createSubsystemMat(0x10b981));
    noseStrut.position.set(0, -1.35, 4.0);
    noseStrut.rotation.x = 0.12;
    lgGroup.add(noseStrut);
    lgAllParts.push(noseStrut);

    const noseWheelL = createWheel(0.32, 0.15);
    noseWheelL.group.position.set(-0.16, -2.05, 4.1);
    lgGroup.add(noseWheelL.group);
    lgAllParts.push(...noseWheelL.meshes);

    const noseWheelR = createWheel(0.32, 0.15);
    noseWheelR.group.position.set(0.16, -2.05, 4.1);
    lgGroup.add(noseWheelR.group);
    lgAllParts.push(...noseWheelR.meshes);

    // Main Gear Left (Strut + Heavy Main Wheel)
    const mainStrutGeom = new THREE.CylinderGeometry(0.12, 0.1, 1.8, 8);
    const mainStrutL = new THREE.Mesh(mainStrutGeom, createSubsystemMat(0x10b981));
    mainStrutL.position.set(-2.1, -1.25, -1.2);
    mainStrutL.rotation.z = -0.15;
    lgGroup.add(mainStrutL);
    lgAllParts.push(mainStrutL);

    const mainWheelL = createWheel(0.48, 0.28);
    mainWheelL.group.position.set(-2.28, -1.9, -1.2);
    lgGroup.add(mainWheelL.group);
    lgAllParts.push(...mainWheelL.meshes);

    // Main Gear Right (Strut + Heavy Main Wheel)
    const mainStrutR = new THREE.Mesh(mainStrutGeom, createSubsystemMat(0x10b981));
    mainStrutR.position.set(2.1, -1.25, -1.2);
    mainStrutR.rotation.z = 0.15;
    lgGroup.add(mainStrutR);
    lgAllParts.push(mainStrutR);

    const mainWheelR = createWheel(0.48, 0.28);
    mainWheelR.group.position.set(2.28, -1.9, -1.2);
    lgGroup.add(mainWheelR.group);
    lgAllParts.push(...mainWheelR.meshes);

    lgGroup.userData = { subsystemId: 'landing_gear', name: 'Landing Gear & Braking Assembly' };
    this.modelGroup.add(lgGroup);
    this.subsystemMeshes['landing_gear'] = {
      group: lgGroup,
      mesh: noseStrut,
      parts: lgAllParts,
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, -2.4, 0),
      pinOffset: new THREE.Vector3(-2.2, -1.0, -1.2)
    };

    // -----------------------------------------------------------------
    // 6. FUEL SYSTEM (Conformal Wing-Root & Fuselage Bladders)
    // -----------------------------------------------------------------
    const fuelGroup = new THREE.Group();

    // Left Conformal Wing Tank
    const fuelCellGeomL = new THREE.BoxGeometry(2.1, 0.38, 3.4);
    const fuelCellL = new THREE.Mesh(fuelCellGeomL, createSubsystemMat(0x10b981));
    fuelCellL.position.set(-1.8, 0.05, -0.6);
    fuelGroup.add(fuelCellL);

    // Right Conformal Wing Tank
    const fuelCellR = new THREE.Mesh(fuelCellGeomL, createSubsystemMat(0x10b981));
    fuelCellR.position.set(1.8, 0.05, -0.6);
    fuelGroup.add(fuelCellR);

    // Center Fuselage Collector Cell & Transfer Pumps
    const fuelCenterGeom = new THREE.BoxGeometry(1.2, 0.45, 2.0);
    const fuelCenter = new THREE.Mesh(fuelCenterGeom, createSubsystemMat(0x10b981));
    fuelCenter.position.set(0, -0.12, -0.6);
    fuelGroup.add(fuelCenter);

    fuelGroup.userData = { subsystemId: 'fuel_system', name: 'Fuel Cells & Transfer Pump Manifold' };
    this.modelGroup.add(fuelGroup);
    this.subsystemMeshes['fuel_system'] = {
      group: fuelGroup,
      mesh: fuelCenter,
      parts: [fuelCellL, fuelCellR, fuelCenter],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, 2.2, -0.6),
      pinOffset: new THREE.Vector3(1.8, 0.8, -0.6)
    };

    // -----------------------------------------------------------------
    // 7. FLIGHT CONTROLS (Articulated Trailing Elevons & Rudders)
    // -----------------------------------------------------------------
    const fcGroup = new THREE.Group();

    // Left Wing Elevon
    const elevonGeom = new THREE.BoxGeometry(2.8, 0.14, 0.8);
    const elevonL = new THREE.Mesh(elevonGeom, createSubsystemMat(0x10b981));
    elevonL.position.set(-4.2, -0.05, -3.8);
    fcGroup.add(elevonL);

    // Right Wing Elevon
    const elevonR = new THREE.Mesh(elevonGeom, createSubsystemMat(0x10b981));
    elevonR.position.set(4.2, -0.05, -3.8);
    fcGroup.add(elevonR);

    // Rudder Control Tabs
    const rudderGeom = new THREE.BoxGeometry(0.12, 1.8, 0.4);
    const rudderL = new THREE.Mesh(rudderGeom, createSubsystemMat(0x10b981));
    rudderL.position.set(-2.0, 1.6, -4.8);
    rudderL.rotation.z = 0.32;
    fcGroup.add(rudderL);

    const rudderR = new THREE.Mesh(rudderGeom, createSubsystemMat(0x10b981));
    rudderR.position.set(2.0, 1.6, -4.8);
    rudderR.rotation.z = -0.32;
    fcGroup.add(rudderR);

    fcGroup.userData = { subsystemId: 'flight_controls', name: 'Primary Fly-By-Wire Flight Surfaces' };
    this.modelGroup.add(fcGroup);
    this.subsystemMeshes['flight_controls'] = {
      group: fcGroup,
      mesh: elevonL,
      parts: [elevonL, elevonR, rudderL, rudderR],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, 0, -2.8),
      pinOffset: new THREE.Vector3(-4.2, 0.7, -3.8)
    };

    // -----------------------------------------------------------------
    // 8. AIRFRAME / STRUCTURE (Titanium Bulkheads & Wing Spars)
    // -----------------------------------------------------------------
    const airframeGroup = new THREE.Group();

    // Main Wing Carry-Through Bulkhead Ring
    const bulkheadGeom1 = new THREE.BoxGeometry(3.5, 0.9, 0.15);
    const bulkhead1 = new THREE.Mesh(bulkheadGeom1, createSubsystemMat(0x10b981));
    bulkhead1.position.set(0, 0.05, -0.2);
    airframeGroup.add(bulkhead1);

    const bulkhead2 = new THREE.Mesh(bulkheadGeom1, createSubsystemMat(0x10b981));
    bulkhead2.position.set(0, 0.05, -2.4);
    airframeGroup.add(bulkhead2);

    // Spine Longeron
    const spineGeom = new THREE.BoxGeometry(0.2, 0.25, 9.0);
    const spineMesh = new THREE.Mesh(spineGeom, createSubsystemMat(0x10b981));
    spineMesh.position.set(0, 0.5, -0.5);
    airframeGroup.add(spineMesh);

    airframeGroup.userData = { subsystemId: 'airframe', name: 'Structural Fuselage & Wing Root Spars' };
    this.modelGroup.add(airframeGroup);
    this.subsystemMeshes['airframe'] = {
      group: airframeGroup,
      mesh: bulkhead1,
      parts: [bulkhead1, bulkhead2, spineMesh],
      defaultPos: new THREE.Vector3(0, 0, 0),
      explodedPos: new THREE.Vector3(0, 0, 0),
      pinOffset: new THREE.Vector3(0, 1.4, -0.2)
    };

    // Final Assembly
    this.scene.add(this.modelGroup);
  }

  // -----------------------------------------------------------------
  // 3D Callout Badges (Screen-Space Floating Pins Matching Reference)
  // -----------------------------------------------------------------
  init3DCalloutPins() {
    const container = document.getElementById('threeJsViewportContainer');
    if (!container) return;

    // Remove existing pins if any
    const existing = container.querySelectorAll('.callout-pin-3d');
    existing.forEach(e => e.remove());

    this.calloutPins = [];
    const pinsDef = [
      { id: 'engine', name: 'Engine' },
      { id: 'avionics', name: 'Avionics' },
      { id: 'hydraulics', name: 'Hydraulics' },
      { id: 'electrical', name: 'Electrical' },
      { id: 'landing_gear', name: 'Landing Gear' },
      { id: 'fuel_system', name: 'Fuel System' },
      { id: 'flight_controls', name: 'Flight Controls' }
    ];

    pinsDef.forEach(def => {
      const pinEl = document.createElement('div');
      pinEl.className = 'callout-pin-3d';
      pinEl.setAttribute('data-pin-id', def.id);
      pinEl.innerHTML = `
        <span class="pin-status-dot"></span>
        <div class="pin-text-block">
          <span class="pin-name">${def.name}</span>
          <span class="pin-status-val">Healthy</span>
        </div>
      `;
      pinEl.addEventListener('click', (e) => {
        e.stopPropagation();
        AeroApp.select3dComponent(def.id);
      });
      container.appendChild(pinEl);
      this.calloutPins.push({ id: def.id, element: pinEl });
    });
  }

  update3DCalloutPositions() {
    if (!this.calloutPins || !this.renderer || !this.camera) return;

    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    this.calloutPins.forEach(pin => {
      const entry = this.subsystemMeshes[pin.id];
      if (!entry || !entry.pinOffset) return;

      const worldPos = entry.pinOffset.clone();
      if (entry.group) {
        worldPos.add(entry.group.position);
      }
      worldPos.project(this.camera);

      // Behind camera check
      if (worldPos.z > 1) {
        pin.element.style.display = 'none';
        return;
      }

      const screenX = (worldPos.x * 0.5 + 0.5) * width;
      const screenY = (-(worldPos.y * 0.5) + 0.5) * height;

      pin.element.style.display = 'flex';
      pin.element.style.left = `${screenX}px`;
      pin.element.style.top = `${screenY}px`;
    });
  }

  getStatusColorHex(status) {
    switch (status) {
      case 'critical': return 0xef4444; // Tactical Red
      case 'warning': return 0xf59e0b;  // Amber
      case 'healthy': return 0x10b981;  // Ready Green
      default: return 0x64748b;         // Grey / unassessed
    }
  }

  updateComponentStatuses(components) {
    this.currentComponents = components || [];

    if (!this.isThreeAvailable) {
      this.draw2DFallback();
      return;
    }

    // Update 3D materials with live status colors & emissive glows
    this.currentComponents.forEach(comp => {
      const entry = this.subsystemMeshes[comp.id];
      if (!entry) return;

      const hex = this.getStatusColorHex(comp.status);
      const intensity = comp.status === 'critical' ? 1.2 : comp.status === 'warning' ? 0.85 : 0.6;

      if (entry.parts && entry.parts.length) {
        entry.parts.forEach(p => {
          if (p.material) {
            p.material.color.setHex(hex);
            p.material.emissive.setHex(hex);
            p.material.emissiveIntensity = intensity;
          }
        });
      } else if (entry.mesh && entry.mesh.material) {
        entry.mesh.material.color.setHex(hex);
        entry.mesh.material.emissive.setHex(hex);
        entry.mesh.material.emissiveIntensity = intensity;
      }

      // Update callout badge pin text & color
      if (this.calloutPins) {
        const pin = this.calloutPins.find(p => p.id === comp.id);
        if (pin && pin.element) {
          const statusText = comp.status === 'critical' ? `High Risk (${comp.healthScore}%)` : comp.status === 'warning' ? 'Needs Attention' : `Healthy (${comp.healthScore}%)`;
          const statusVal = pin.element.querySelector('.pin-status-val');
          if (statusVal) statusVal.textContent = statusText;

          pin.element.classList.remove('critical', 'warning', 'healthy');
          pin.element.classList.add(comp.status);
        }
      }
    });
  }

  // Dual-method compatibility
  setAircraftData(aircraft, components) {
    this.currentAircraft = aircraft;
    this.updateComponentStatuses(components);
  }

  focusOnSubsystem(compId) {
    this.focusComponent(compId);
  }

  focusComponent(compId) {
    this.selectedComponentId = compId;
    if (!this.isThreeAvailable) {
      this.draw2DFallback();
      return;
    }

    const entry = this.subsystemMeshes[compId];
    if (!entry) return;

    const targetPos = entry.pinOffset ? entry.pinOffset.clone() : new THREE.Vector3(0, 0, 0);
    if (this.controls) {
      this.controls.target.lerp(targetPos, 0.7);
    }

    // Offset camera for close-up inspection view
    this.targetCameraPos = new THREE.Vector3(targetPos.x + 7, targetPos.y + 4.5, targetPos.z + 8);
  }

  resetView() {
    this.selectedComponentId = 'engine';
    this.isExploded = false;
    this.isWireframe = false;

    if (this.controls) {
      this.controls.target.set(0, 0, 0);
      this.controls.autoRotate = this.autoRotate;
    }
    this.targetCameraPos = new THREE.Vector3(16, 8, 16);

    // Reset exploded meshes
    Object.keys(this.subsystemMeshes).forEach(k => {
      const entry = this.subsystemMeshes[k];
      if (entry && entry.defaultPos) {
        entry.group.position.copy(entry.defaultPos);
      }
    });

    if (!this.isThreeAvailable) this.draw2DFallback();
  }

  toggleWireframe() {
    this.isWireframe = !this.isWireframe;
    if (!this.isThreeAvailable) return;

    this.modelGroup.traverse(child => {
      if (child.isMesh && child.name === 'airframe_shell') {
        child.material.opacity = this.isWireframe ? 0.05 : 0.22;
      }
    });

    if (this.airframeEdges) {
      this.airframeEdges.forEach(e => {
        e.material.opacity = this.isWireframe ? 0.9 : 0.65;
      });
    }
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    if (this.controls) {
      this.controls.autoRotate = this.autoRotate;
    }
    const lbl = document.getElementById('lblAutoRotate');
    if (lbl) lbl.textContent = `Auto Orbit: ${this.autoRotate ? 'ON' : 'OFF'}`;
  }

  toggleExploded() {
    this.isExploded = !this.isExploded;
    if (!this.isThreeAvailable) return;

    Object.keys(this.subsystemMeshes).forEach(k => {
      const entry = this.subsystemMeshes[k];
      if (entry && entry.explodedPos && entry.defaultPos) {
        entry.group.position.copy(this.isExploded ? entry.explodedPos : entry.defaultPos);
      }
    });
  }

  toggleCalloutPins() {
    this.showPins = this.showPins !== undefined ? !this.showPins : false;
    const container = document.getElementById('threeJsViewportContainer');
    if (container) {
      const pins = container.querySelectorAll('.callout-pin-3d');
      pins.forEach(p => p.style.visibility = this.showPins ? 'visible' : 'hidden');
    }
    const lbl = document.getElementById('lblTogglePins');
    if (lbl) lbl.textContent = `Callouts: ${this.showPins ? 'ON' : 'OFF'}`;
  }

  onMouseMove(e) {
    if (!this.isThreeAvailable || !this.renderer) return;

    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const objects = [];
    Object.keys(this.subsystemMeshes).forEach(k => {
      const g = this.subsystemMeshes[k].group;
      if (g) objects.push(g);
    });

    const intersects = this.raycaster.intersectObjects(objects, true);

    if (intersects.length > 0) {
      let hitGroup = intersects[0].object;
      while (hitGroup.parent && !hitGroup.userData?.subsystemId && hitGroup !== this.modelGroup) {
        hitGroup = hitGroup.parent;
      }

      const subId = hitGroup.userData?.subsystemId;
      if (subId) {
        this.canvas.style.cursor = 'pointer';
        const comp = this.currentComponents.find(c => c.id === subId);
        if (comp && this.tooltip) {
          this.tooltip.style.display = 'block';
          this.tooltip.style.left = `${e.clientX - rect.left + 15}px`;
          this.tooltip.style.top = `${e.clientY - rect.top - 10}px`;
          this.tooltip.innerHTML = `
            <strong style="color:#fff;">${comp.name}</strong><br>
            <span style="color:${comp.status === 'critical' ? 'var(--red-critical)' : comp.status === 'warning' ? 'var(--amber-warn)' : 'var(--green-ready)'}">
              ● ${comp.severity} (${comp.healthScore}%)
            </span>
          `;
        }
        return;
      }
    }

    this.canvas.style.cursor = 'grab';
    if (this.tooltip) this.tooltip.style.display = 'none';
  }

  onMouseClick(e) {
    if (!this.isThreeAvailable) return;

    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const objects = [];
    Object.keys(this.subsystemMeshes).forEach(k => {
      const g = this.subsystemMeshes[k].group;
      if (g) objects.push(g);
    });

    const intersects = this.raycaster.intersectObjects(objects, true);

    if (intersects.length > 0) {
      let hitGroup = intersects[0].object;
      while (hitGroup.parent && !hitGroup.userData?.subsystemId && hitGroup !== this.modelGroup) {
        hitGroup = hitGroup.parent;
      }

      const subId = hitGroup.userData?.subsystemId;
      if (subId) {
        AeroApp.select3dComponent(subId);
      }
    }
  }

  onWindowResize() {
    if (!this.isThreeAvailable || !this.canvas || !this.renderer) return;

    const rect = this.canvas.parentElement.getBoundingClientRect();
    const width = rect.width || 800;
    const height = 560;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animFrameId = requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    // Pulse critical subsystem emissions (e.g. Engine on AR-007)
    this.currentComponents.forEach(comp => {
      if (comp.status === 'critical') {
        const entry = this.subsystemMeshes[comp.id];
        if (entry && entry.parts) {
          const intensity = 0.9 + Math.sin(time * 6) * 0.5;
          entry.parts.forEach(p => {
            if (p.material) p.material.emissiveIntensity = intensity;
          });
        }
      }
    });

    // Smooth camera tween
    if (this.targetCameraPos) {
      this.camera.position.lerp(this.targetCameraPos, 0.05);
      if (this.camera.position.distanceTo(this.targetCameraPos) < 0.2) {
        this.targetCameraPos = null;
      }
    }

    if (this.controls) this.controls.update();

    // Update screen-space positions of callout pins
    this.update3DCalloutPositions();

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  // -----------------------------------------------------------------
  // 2D Interactive Blueprint Fallback (Zero-Dependency Resilience)
  // -----------------------------------------------------------------
  init2DFallback() {
    this.isThreeAvailable = false;
    this.canvas.addEventListener('click', (e) => this.on2DCanvasClick(e));
    this.draw2DFallback();
  }

  draw2DFallback() {
    const ctx = this.canvas.getContext('2d');
    const w = this.canvas.width = this.canvas.parentElement.clientWidth || 800;
    const h = this.canvas.height = 560;

    ctx.clearRect(0, 0, w, h);

    // Dark grid background
    ctx.fillStyle = '#08111f';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
    for (let y = 0; y < h; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

    const cx = w * 0.45;
    const cy = h * 0.52;

    // Draw Top-down Stealth Fighter Blueprint Outline
    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(0, 229, 255, 0.05)';

    ctx.beginPath();
    ctx.moveTo(cx, cy - 200); // Nose
    ctx.lineTo(cx - 30, cy - 120);
    ctx.lineTo(cx - 160, cy + 80); // Left wingtip
    ctx.lineTo(cx - 140, cy + 120);
    ctx.lineTo(cx - 40, cy + 90);
    ctx.lineTo(cx - 30, cy + 160); // Left tail
    ctx.lineTo(cx, cy + 140); // Center nozzle
    ctx.lineTo(cx + 30, cy + 160); // Right tail
    ctx.lineTo(cx + 40, cy + 90);
    ctx.lineTo(cx + 140, cy + 120);
    ctx.lineTo(cx + 160, cy + 80); // Right wingtip
    ctx.lineTo(cx + 30, cy - 120);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Canopy outline
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.6)';
    ctx.beginPath();
    ctx.ellipse(cx, cy - 80, 18, 55, 0, 0, Math.PI * 2);
    ctx.stroke();

    // 8 Subsystem Hotspot Coordinates on 2D Blueprint
    this.hotspots2D = [
      { id: 'avionics', name: 'Avionics', x: cx, y: cy - 160, r: 16 },
      { id: 'electrical', name: 'Electrical', x: cx, y: cy - 40, r: 16 },
      { id: 'fuel_system', name: 'Fuel System', x: cx, y: cy + 20, r: 18 },
      { id: 'hydraulics', name: 'Hydraulics', x: cx - 65, y: cy + 40, r: 16 },
      { id: 'landing_gear', name: 'Landing Gear', x: cx + 65, y: cy + 40, r: 16 },
      { id: 'flight_controls', name: 'Flight Controls', x: cx - 110, y: cy + 90, r: 16 },
      { id: 'engine', name: 'Engine / Turbine', x: cx, y: cy + 115, r: 20 },
      { id: 'airframe', name: 'Airframe Spars', x: cx + 110, y: cy + 90, r: 16 }
    ];

    // Render Hotspots with live status colors
    this.hotspots2D.forEach(spot => {
      const comp = this.currentComponents.find(c => c.id === spot.id) || { status: 'healthy', healthScore: 90 };
      const color = comp.status === 'critical' ? '#ef4444' : comp.status === 'warning' ? '#f59e0b' : '#10b981';
      const isSelected = this.selectedComponentId === spot.id;

      // Glow circle
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = isSelected ? 20 : 10;
      ctx.beginPath();
      ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Border ring
      ctx.strokeStyle = isSelected ? '#fff' : 'rgba(255,255,255,0.4)';
      ctx.lineWidth = isSelected ? 3 : 1.5;
      ctx.stroke();

      // Label text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(spot.name, spot.x, spot.y - spot.r - 6);
      ctx.fillStyle = color;
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillText(`${comp.healthScore}%`, spot.x, spot.y + 4);
    });

    // Blueprint Watermark
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.font = '11px JetBrains Mono, monospace';
    ctx.fillText('HOLOGRAPHIC 2D BLUEPRINT VIEW (INTERACTIVE)', 20, 30);
    ctx.fillText(`AIRFRAME: ${this.currentAircraft?.id || 'AR-007'} • CLICK ANY SUBSYSTEM NODE TO INSPECT`, 20, 48);
  }

  on2DCanvasClick(e) {
    if (this.isThreeAvailable) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!this.hotspots2D) return;

    this.hotspots2D.forEach(spot => {
      const dist = Math.hypot(spot.x - x, spot.y - y);
      if (dist <= spot.r + 5) {
        AeroApp.select3dComponent(spot.id);
      }
    });
  }
}

/**
 * Main Application Controller (AeroApp)
 */
const AeroApp = {
  state: null,
  activeTab: 'dashboard',
  selectedAircraftId: 'AR-007',
  activeWoFilter: 'ALL',
  chartTrendInstance: null,
  chartHealthInstance: null,
  active3dViewer: null,
  selected3dAircraftId: 'AR-007',
  selected3dComponentId: 'engine',

  init() {
    this.state = new FleetStateStore();
    this.checkAuthSession();
    this.setupLoginEvents();
    this.initClock();
    this.setupEventListeners();
    this.populateExplainDropdown();
    this.populate3dAircraftDropdown();
    this.renderAllViews();
    this.initCharts();
    this.init3DViewer();
    console.log('AeroReady AI Initialized Successfully');
  },

  // -------------------------------------------------------------
  // Live Clock & User Role
  // -------------------------------------------------------------
  initClock() {
    const clockEl = document.getElementById('opsClockTime');
    const updateTime = () => {
      const now = new Date();
      const utcString = now.toUTCString().split(' ')[4] + ' UTC';
      if (clockEl) clockEl.textContent = utcString;
    };
    updateTime();
    setInterval(updateTime, 1000);
  },

  // -------------------------------------------------------------
  // Event Listeners
  // -------------------------------------------------------------
  setupEventListeners() {
    // Sidebar Navigation
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.getAttribute('data-tab');
        if (tab) this.switchTab(tab);
      });
    });

    // Run Demo Scenario
    const btnRunScenario = document.getElementById('btnRunDemoScenario');
    if (btnRunScenario) {
      btnRunScenario.addEventListener('click', () => this.executeDemoScenario());
    }

    // Quick Scenario Button in Dashboard
    const btnQuickAR007 = document.getElementById('btnQuickScenarioAR007');
    if (btnQuickAR007) {
      btnQuickAR007.addEventListener('click', () => this.openAircraftDetailModal('AR-007'));
    }

    // Reset Demo Data
    const btnResetData = document.getElementById('btnResetData');
    if (btnResetData) {
      btnResetData.addEventListener('click', () => {
        if (confirm('Reset synthetic fleet database to default baseline scenario?')) {
          this.state.resetState();
          this.renderAllViews();
          this.showToast('Demo Data Reset', 'Synthetic fleet state restored to default initial benchmark.', 'info');
        }
      });
    }

    // Fleet Table Filters & Search
    const searchInput = document.getElementById('fleetSearchInput');
    const filterStatus = document.getElementById('filterStatus');
    const filterRisk = document.getElementById('filterRisk');
    const filterCategory = document.getElementById('filterCategory');
    const sortFleet = document.getElementById('sortFleet');

    [searchInput, filterStatus, filterRisk, filterCategory, sortFleet].forEach(el => {
      if (el) el.addEventListener('input', () => this.renderFleetTable());
    });

    // Threshold Sliders
    const cfgTempWarn = document.getElementById('cfgTempWarn');
    const cfgVibWarn = document.getElementById('cfgVibWarn');
    const cfgOilMin = document.getElementById('cfgOilMin');
    const cfgInspDays = document.getElementById('cfgInspDays');

    if (cfgTempWarn) {
      cfgTempWarn.addEventListener('input', (e) => {
        document.getElementById('valTempWarn').textContent = `${e.target.value} °C`;
      });
    }
    if (cfgVibWarn) {
      cfgVibWarn.addEventListener('input', (e) => {
        document.getElementById('valVibWarn').textContent = `${parseFloat(e.target.value).toFixed(2)} IPS`;
      });
    }
    if (cfgOilMin) {
      cfgOilMin.addEventListener('input', (e) => {
        document.getElementById('valOilMin').textContent = `${e.target.value} PSI`;
      });
    }
    if (cfgInspDays) {
      cfgInspDays.addEventListener('input', (e) => {
        document.getElementById('valInspDays').textContent = `${e.target.value} Days`;
      });
    }

    const btnApplyThresholds = document.getElementById('btnApplyThresholds');
    if (btnApplyThresholds) {
      btnApplyThresholds.addEventListener('click', () => {
        this.state.setThresholds({
          tempWarningC: parseFloat(cfgTempWarn.value),
          vibrationWarningIps: parseFloat(cfgVibWarn.value),
          oilPressureMinPsi: parseFloat(cfgOilMin.value),
          inspectionCycleDays: parseFloat(cfgInspDays.value)
        });
        this.renderAllViews();
        this.showToast('Thresholds Updated', 'Recalculated deterministic risk scores across all 22 aircraft.', 'success');
      });
    }

    const btnResetThresholds = document.getElementById('btnResetThresholds');
    if (btnResetThresholds) {
      btnResetThresholds.addEventListener('click', () => {
        cfgTempWarn.value = 780;
        cfgVibWarn.value = 0.45;
        cfgOilMin.value = 42;
        cfgInspDays.value = 45;
        document.getElementById('valTempWarn').textContent = '780 °C';
        document.getElementById('valVibWarn').textContent = '0.45 IPS';
        document.getElementById('valOilMin').textContent = '42 PSI';
        document.getElementById('valInspDays').textContent = '45 Days';
        btnApplyThresholds.click();
      });
    }

    // Explainability Dropdown
    const selectExplainAircraft = document.getElementById('selectExplainAircraft');
    if (selectExplainAircraft) {
      selectExplainAircraft.addEventListener('change', (e) => {
        this.renderExplainabilityCard(e.target.value);
      });
    }

    // Work Order Filter Chips
    document.querySelectorAll('.wo-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.wo-filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeWoFilter = chip.getAttribute('data-wo-filter');
        this.renderWorkOrders();
      });
    });

    // Create Work Order Modal Triggers
    const btnOpenCreateWoModal = document.getElementById('btnOpenCreateWoModal');
    if (btnOpenCreateWoModal) {
      btnOpenCreateWoModal.addEventListener('click', () => this.openCreateWoModal());
    }

    const btnCloseCreateWo = document.getElementById('btnCloseCreateWoModal');
    const btnCancelCreateWo = document.getElementById('btnCancelCreateWo');
    if (btnCloseCreateWo) btnCloseCreateWo.addEventListener('click', () => this.closeCreateWoModal());
    if (btnCancelCreateWo) btnCancelCreateWo.addEventListener('click', () => this.closeCreateWoModal());

    // Work Order Form Submission
    const formCreateWo = document.getElementById('formCreateWo');
    if (formCreateWo) {
      formCreateWo.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleCreateWorkOrderSubmit();
      });
    }

    // Aircraft Detail Modal Controls
    const btnCloseDetailModal = document.getElementById('btnCloseDetailModal');
    const btnDetailClose = document.getElementById('btnDetailClose');
    if (btnCloseDetailModal) btnCloseDetailModal.addEventListener('click', () => this.closeAircraftDetailModal());
    if (btnDetailClose) btnDetailClose.addEventListener('click', () => this.closeAircraftDetailModal());

    const btnDetailCreateWo = document.getElementById('btnDetailCreateWo');
    if (btnDetailCreateWo) {
      btnDetailCreateWo.addEventListener('click', () => {
        const planeId = this.selectedAircraftId;
        this.closeAircraftDetailModal();
        this.openCreateWoModal(planeId);
      });
    }

    // Simulator Sliders
    const simProactiveTurnaround = document.getElementById('simProactiveTurnaround');
    const simReactiveDowntime = document.getElementById('simReactiveDowntime');
    const simHangarCapacity = document.getElementById('simHangarCapacity');
    const simAdherenceRate = document.getElementById('simAdherenceRate');

    if (simProactiveTurnaround) {
      simProactiveTurnaround.addEventListener('input', (e) => {
        document.getElementById('valSimProactiveTurnaround').textContent = `${e.target.value} hrs`;
        document.getElementById('lblProactiveMeanHrs').textContent = e.target.value;
        this.calculateSimulation();
      });
    }
    if (simReactiveDowntime) {
      simReactiveDowntime.addEventListener('input', (e) => {
        document.getElementById('valSimReactiveDowntime').textContent = `${e.target.value} hrs`;
        document.getElementById('lblReactiveMeanHrs').textContent = e.target.value;
        this.calculateSimulation();
      });
    }
    if (simHangarCapacity) {
      simHangarCapacity.addEventListener('input', (e) => {
        document.getElementById('valSimHangarCapacity').textContent = `${e.target.value} bays`;
        this.calculateSimulation();
      });
    }
    if (simAdherenceRate) {
      simAdherenceRate.addEventListener('input', (e) => {
        document.getElementById('valSimAdherenceRate').textContent = `${e.target.value} %`;
        this.calculateSimulation();
      });
    }

    const btnExecuteSimulation = document.getElementById('btnExecuteSimulation');
    if (btnExecuteSimulation) {
      btnExecuteSimulation.addEventListener('click', () => {
        this.calculateSimulation();
        this.showToast('Simulator Computed', 'Updated mathematical availability projections based on latest parameters.', 'info');
      });
    }

    const btnResetSimParams = document.getElementById('btnResetSimParams');
    if (btnResetSimParams) {
      btnResetSimParams.addEventListener('click', () => {
        simProactiveTurnaround.value = 12;
        simReactiveDowntime.value = 36;
        simHangarCapacity.value = 4;
        simAdherenceRate.value = 85;
        document.getElementById('valSimProactiveTurnaround').textContent = '12 hrs';
        document.getElementById('valSimReactiveDowntime').textContent = '36 hrs';
        document.getElementById('valSimHangarCapacity').textContent = '4 bays';
        document.getElementById('valSimAdherenceRate').textContent = '85 %';
        document.getElementById('lblProactiveMeanHrs').textContent = '12';
        document.getElementById('lblReactiveMeanHrs').textContent = '36';
        this.calculateSimulation();
      });
    }

    // Assistant Preset Query Chips
    document.querySelectorAll('.query-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        if (query) this.handleAssistantQuery(query);
      });
    });

    // Assistant Chat Input
    const btnSendChat = document.getElementById('btnSendChat');
    const chatInputText = document.getElementById('chatInputText');
    if (btnSendChat && chatInputText) {
      const sendHandler = () => {
        const q = chatInputText.value.trim();
        if (q) {
          this.handleAssistantQuery(q);
          chatInputText.value = '';
        }
      };
      btnSendChat.addEventListener('click', sendHandler);
      chatInputText.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendHandler();
      });
    }

    const btnClearChat = document.getElementById('btnClearChat');
    if (btnClearChat) {
      btnClearChat.addEventListener('click', () => {
        const container = document.getElementById('chatMessagesContainer');
        if (container) {
          container.innerHTML = `
            <div class="chat-msg system">
              <div class="msg-avatar">AI</div>
              <div class="msg-body">
                <div class="msg-meta">AeroReady Intelligence Kernel &bull; Active &bull; Ready</div>
                <div class="msg-content">
                  <p>Console cleared. Ready for your maintenance or telemetry query.</p>
                </div>
              </div>
            </div>
          `;
        }
      });
    }

    // Export CSV
    const btnExportFleetCsv = document.getElementById('btnExportFleetCsv');
    if (btnExportFleetCsv) {
      btnExportFleetCsv.addEventListener('click', () => this.exportFleetCsv());
    }
  },

  // -------------------------------------------------------------
  // Navigation Tab Switching
  // -------------------------------------------------------------
  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
      if (pane.id === `tab-${tabId}`) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    if (tabId === 'dashboard') {
      setTimeout(() => this.initCharts(), 50);
    }
    if (tabId === 'aircraft3d') {
      setTimeout(() => {
        if (this.active3dViewer) {
          this.active3dViewer.onWindowResize();
        }
        this.select3dAircraft(this.selected3dAircraftId || 'AR-007');
      }, 50);
    }
  },

  // -------------------------------------------------------------
  // Master Render Cycle
  // -------------------------------------------------------------
  renderAllViews() {
    this.renderKPIs();
    this.renderDashboardTables();
    this.renderFleetTable();
    this.renderExplainabilityCard(this.selectedAircraftId);
    this.renderWorkOrders();
    this.calculateSimulation();
    this.renderIntegrationFeeds();
    this.renderSpareParts();
    this.updateCounters();
    if (typeof this.select3dAircraft === 'function') {
      this.select3dAircraft(this.selected3dAircraftId || 'AR-007');
    }
  },

  updateCounters() {
    const aircraft = this.state.getAircraftList();
    const workOrders = this.state.getWorkOrders();
    const spareParts = this.state.getSpareParts();

    const openWos = workOrders.filter(w => w.status !== 'Completed').length;
    const partsAlerts = spareParts.filter(p => p.availableQty < p.minStockLevel).length;

    const navFleetCount = document.getElementById('navFleetCount');
    const navOpenWoCount = document.getElementById('navOpenWoCount');
    const navSparesAlertCount = document.getElementById('navSparesAlertCount');

    if (navFleetCount) navFleetCount.textContent = aircraft.length;
    if (navOpenWoCount) navOpenWoCount.textContent = openWos;
    if (navSparesAlertCount) navSparesAlertCount.textContent = partsAlerts;
  },

  // -------------------------------------------------------------
  // Dashboard Overview & KPIs
  // -------------------------------------------------------------
  renderKPIs() {
    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();
    const workOrders = this.state.getWorkOrders();

    const total = aircraft.length;
    let serviceable = 0;
    let underMaint = 0;
    let highRiskCount = 0;

    aircraft.forEach(plane => {
      if (plane.status === 'Serviceable') serviceable++;
      if (plane.status === 'Maintenance' || plane.status === 'Grounded-For-Inspection') underMaint++;

      const evalResult = PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds);
      if (evalResult.riskCategory === 'CRITICAL' || evalResult.riskCategory === 'HIGH') {
        highRiskCount++;
      }
    });

    const availabilityPct = total > 0 ? ((serviceable / total) * 100).toFixed(1) : '0.0';
    const activeOrders = workOrders.filter(w => w.status !== 'Completed').length;

    // Header pills
    const hReadiness = document.getElementById('headerReadinessPct');
    const hCritical = document.getElementById('headerCriticalCount');
    const hOrders = document.getElementById('headerActiveOrders');
    if (hReadiness) hReadiness.textContent = `${availabilityPct}%`;
    if (hCritical) hCritical.textContent = highRiskCount;
    if (hOrders) hOrders.textContent = activeOrders;

    // KPI Cards
    const kpiTotal = document.getElementById('kpiTotalAircraft');
    const kpiServ = document.getElementById('kpiServiceable');
    const kpiServPct = document.getElementById('kpiServiceablePct');
    const kpiMaint = document.getElementById('kpiUnderMaint');
    const kpiHigh = document.getElementById('kpiHighRisk');
    const kpiAvail = document.getElementById('kpiAvailabilityPct');
    const kpiOpen = document.getElementById('kpiOpenOrders');

    if (kpiTotal) kpiTotal.textContent = total;
    if (kpiServ) kpiServ.textContent = serviceable;
    if (kpiServPct) kpiServPct.textContent = `${availabilityPct}%`;
    if (kpiMaint) kpiMaint.textContent = underMaint;
    if (kpiHigh) kpiHigh.textContent = highRiskCount;
    if (kpiAvail) kpiAvail.textContent = `${availabilityPct}%`;
    if (kpiOpen) kpiOpen.textContent = activeOrders;
  },

  renderDashboardTables() {
    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();
    const tbody = document.getElementById('tbodyHighRiskPriority');
    const anomalyContainer = document.getElementById('anomalyStreamContainer');
    const inspectionGrid = document.getElementById('inspectionScheduleGrid');

    // High risk priority list
    const evaluated = aircraft.map(plane => ({
      ...plane,
      eval: PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds)
    })).sort((a, b) => b.eval.riskScore - a.eval.riskScore);

    const highRisks = evaluated.filter(p => p.eval.riskScore >= 50);

    if (tbody) {
      if (highRisks.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted" style="padding: 20px;">No high-risk aircraft detected in fleet.</td></tr>`;
      } else {
        tbody.innerHTML = highRisks.map(plane => {
          const factorsText = plane.eval.factors.map(f => f.name).slice(0, 2).join(', ') || 'Standard monitoring';
          return `
            <tr class="${plane.eval.riskCategory === 'CRITICAL' ? 'row-critical' : ''}">
              <td>
                <div class="aircraft-cell-id">
                  <span>${plane.id}</span>
                  <span class="aircraft-callsign">(${plane.callsign})</span>
                </div>
              </td>
              <td>${plane.category}</td>
              <td>
                <span class="risk-tag ${plane.eval.riskCategory.toLowerCase()}">${plane.eval.riskScore} &bull; ${plane.eval.riskCategory}</span>
              </td>
              <td><span class="text-xs">${factorsText}</span></td>
              <td><span class="text-xs text-secondary">${plane.eval.recommendedAction}</span></td>
              <td>
                <div style="display: flex; gap: 4px;">
                  <button class="btn btn-outline btn-xs" onclick="AeroApp.openAircraftDetailModal('${plane.id}')">Inspect</button>
                  <button class="btn btn-cyan btn-xs" onclick="AeroApp.inspectAircraftIn3D('${plane.id}')" title="Inspect Subsystems in Interactive 3D Model"><svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px;margin-right:2px;display:inline-block;"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>3D</button>
                </div>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // Anomaly Stream
    if (anomalyContainer) {
      const anomalies = [];
      aircraft.forEach(p => {
        if (p.engineTempC > thresholds.tempWarningC) {
          anomalies.push({
            id: p.id,
            severity: p.engineTempC >= thresholds.tempCriticalC ? 'critical' : 'warning',
            text: `Engine EGT ${p.engineTempC}°C exceeds safety threshold (${thresholds.tempWarningC}°C)`
          });
        }
        if (p.vibrationIps > thresholds.vibrationWarningIps) {
          anomalies.push({
            id: p.id,
            severity: p.vibrationIps >= thresholds.vibrationCriticalIps ? 'critical' : 'warning',
            text: `Shaft vibration ${p.vibrationIps.toFixed(2)} IPS exceeds limit (${thresholds.vibrationWarningIps.toFixed(2)} IPS)`
          });
        }
        if (p.oilPressurePsi < thresholds.oilPressureMinPsi) {
          anomalies.push({
            id: p.id,
            severity: p.oilPressurePsi <= thresholds.oilPressureCriticalPsi ? 'critical' : 'warning',
            text: `Oil pressure ${p.oilPressurePsi} PSI below minimum safe (${thresholds.oilPressureMinPsi} PSI)`
          });
        }
      });

      if (anomalies.length === 0) {
        anomalyContainer.innerHTML = `<div class="text-xs text-muted" style="padding: 10px;">All telemetry vectors operating within nominal margins.</div>`;
      } else {
        anomalyContainer.innerHTML = anomalies.slice(0, 5).map(a => `
          <div class="anomaly-item ${a.severity}">
            <div>
              <span class="anomaly-id">${a.id}</span> &bull; 
              <span class="anomaly-desc">${a.text}</span>
            </div>
            <button class="btn btn-outline btn-xs" onclick="AeroApp.openAircraftDetailModal('${a.id}')">Review</button>
          </div>
        `).join('');
      }
    }

    // Upcoming Inspections
    if (inspectionGrid) {
      const cycle = thresholds.inspectionCycleDays;
      const sortedByCycle = [...aircraft].sort((a, b) => b.daysSinceInspection - a.daysSinceInspection);
      const dueSoon = sortedByCycle.slice(0, 4);

      inspectionGrid.innerHTML = dueSoon.map(p => {
        const isOverdue = p.daysSinceInspection > cycle;
        const delta = isOverdue ? `${p.daysSinceInspection - cycle}d overdue` : `${cycle - p.daysSinceInspection}d left`;
        return `
          <div class="inspection-chip ${isOverdue ? 'overdue' : ''}">
            <div>
              <strong style="color:#fff;">${p.id}</strong> <span class="text-muted">(${p.category})</span>
              <div class="text-xs ${isOverdue ? 'text-red' : 'text-secondary'}">${p.daysSinceInspection} days elapsed &bull; ${delta}</div>
            </div>
            <span class="status-pill ${p.status.toLowerCase()}">${p.status}</span>
          </div>
        `;
      }).join('');
    }
  },

  // -------------------------------------------------------------
  // Fleet Telemetry & Management Table
  // -------------------------------------------------------------
  renderFleetTable() {
    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();
    const tbody = document.getElementById('masterFleetTbody');
    const counter = document.getElementById('fleetTableCounter');

    const search = (document.getElementById('fleetSearchInput')?.value || '').toLowerCase();
    const statusFilter = document.getElementById('filterStatus')?.value || 'ALL';
    const riskFilter = document.getElementById('filterRisk')?.value || 'ALL';
    const categoryFilter = document.getElementById('filterCategory')?.value || 'ALL';
    const sortVal = document.getElementById('sortFleet')?.value || 'risk-desc';

    // Evaluate risks
    let list = aircraft.map(plane => ({
      ...plane,
      eval: PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds)
    }));

    // Filter
    list = list.filter(p => {
      if (search) {
        const matchId = p.id.toLowerCase().includes(search);
        const matchCall = p.callsign.toLowerCase().includes(search);
        const matchSq = (p.assignedSquadron || '').toLowerCase().includes(search);
        if (!matchId && !matchCall && !matchSq) return false;
      }
      if (statusFilter !== 'ALL' && p.status !== statusFilter) return false;
      if (riskFilter !== 'ALL' && p.eval.riskCategory !== riskFilter) return false;
      if (categoryFilter !== 'ALL' && p.category !== categoryFilter) return false;
      return true;
    });

    // Sort
    list.sort((a, b) => {
      switch (sortVal) {
        case 'risk-desc': return b.eval.riskScore - a.eval.riskScore;
        case 'risk-asc': return a.eval.riskScore - b.eval.riskScore;
        case 'health-asc': return a.eval.healthIndex - b.eval.healthIndex;
        case 'hours-desc': return b.flightHours - a.flightHours;
        case 'days-desc': return b.daysSinceInspection - a.daysSinceInspection;
        default: return b.eval.riskScore - a.eval.riskScore;
      }
    });

    if (counter) counter.textContent = `Showing ${list.length} of ${aircraft.length} aircraft`;

    if (tbody) {
      if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="11" class="text-center text-muted" style="padding: 24px;">No aircraft match current filter criteria.</td></tr>`;
      } else {
        tbody.innerHTML = list.map(p => {
          const isCrit = p.eval.riskCategory === 'CRITICAL';
          const tempWarn = p.engineTempC > thresholds.tempWarningC;
          const vibWarn = p.vibrationIps > thresholds.vibrationWarningIps;
          const oilWarn = p.oilPressurePsi < thresholds.oilPressureMinPsi;

          return `
            <tr class="${isCrit ? 'row-critical' : ''}">
              <td>
                <div class="aircraft-cell-id">
                  <span>${p.id}</span>
                </div>
              </td>
              <td>
                <div style="color: #fff; font-weight: 500;">${p.callsign}</div>
                <div class="text-xs text-muted">${p.category}</div>
              </td>
              <td>
                <span class="status-pill ${p.status.toLowerCase()}">${p.status}</span>
              </td>
              <td class="${tempWarn ? 'text-red font-mono' : 'font-mono'}">${p.engineTempC} °C</td>
              <td class="${vibWarn ? 'text-red font-mono' : 'font-mono'}">${p.vibrationIps.toFixed(2)} IPS</td>
              <td class="${oilWarn ? 'text-red font-mono' : 'font-mono'}">${p.oilPressurePsi} PSI</td>
              <td class="font-mono">${p.flightHours} hrs</td>
              <td class="font-mono">${p.daysSinceInspection} d</td>
              <td>
                <strong style="color: ${p.eval.healthIndex < 60 ? 'var(--red-critical)' : 'var(--green-ready)'}">${p.eval.healthIndex}%</strong>
              </td>
              <td>
                <span class="risk-tag ${p.eval.riskCategory.toLowerCase()}">${p.eval.riskScore} &bull; ${p.eval.riskCategory}</span>
              </td>
              <td>
                <div style="display: flex; gap: 4px;">
                  <button class="btn btn-outline btn-xs" onclick="AeroApp.openAircraftDetailModal('${p.id}')">Inspect</button>
                  <button class="btn btn-cyan btn-xs" onclick="AeroApp.inspectAircraftIn3D('${p.id}')" title="Inspect Subsystems in Interactive 3D Model"><svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:11px;height:11px;margin-right:2px;display:inline-block;"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>3D</button>
                </div>
              </td>
            </tr>
          `;
        }).join('');
      }
    }
  },

  // -------------------------------------------------------------
  // Explainability Card (Predictive Maintenance Tab)
  // -------------------------------------------------------------
  populateExplainDropdown() {
    const select = document.getElementById('selectExplainAircraft');
    if (!select) return;
    const aircraft = this.state.getAircraftList();
    select.innerHTML = aircraft.map(p => `
      <option value="${p.id}" ${p.id === this.selectedAircraftId ? 'selected' : ''}>${p.id} &bull; ${p.callsign} (${p.category})</option>
    `).join('');
  },

  renderExplainabilityCard(aircraftId) {
    this.selectedAircraftId = aircraftId;
    const plane = this.state.getAircraftById(aircraftId);
    if (!plane) return;

    const thresholds = this.state.getThresholds();
    const evalResult = PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds);

    const summaryBox = document.getElementById('explainSummaryBox');
    const factorsList = document.getElementById('explainFactorsList');

    if (summaryBox) {
      summaryBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; color: #fff;">${plane.id} &bull; ${plane.callsign}</h4>
            <span class="text-xs text-muted">${plane.category} &bull; ${plane.assignedSquadron} &bull; ${plane.baseLocation}</span>
          </div>
          <div style="text-align: right;">
            <span class="risk-tag ${evalResult.riskCategory.toLowerCase()}">${evalResult.riskScore} / 100</span>
            <div class="text-xs text-muted" style="margin-top: 4px;">Health Index: ${evalResult.healthIndex}%</div>
          </div>
        </div>
        <div class="text-xs" style="color: var(--text-secondary); margin-top: 6px; padding: 6px 10px; background: rgba(0,0,0,0.2); border-radius: 4px;">
          <strong>Prescribed Action:</strong> ${evalResult.recommendedAction}
        </div>
      `;
    }

    if (factorsList) {
      if (evalResult.factors.length === 0) {
        factorsList.innerHTML = `<div class="text-xs text-muted" style="padding: 10px;">All monitored parameters are within standard baseline tolerances. Risk index is LOW.</div>`;
      } else {
        factorsList.innerHTML = evalResult.factors.map(f => {
          const color = f.severity === 'CRITICAL' ? 'var(--red-critical)' : f.severity === 'HIGH' ? '#f87171' : 'var(--amber-warn)';
          return `
            <div class="factor-bar-item">
              <div class="factor-bar-header">
                <div>
                  <span class="factor-name" style="font-weight: 600; color: #fff;">${f.name}</span>
                  <span class="text-xs text-muted"> (${f.observed} vs limit ${f.limit})</span>
                </div>
                <span class="factor-pct" style="color: ${color};">+${f.points} pts (${f.severity})</span>
              </div>
              <div class="factor-progress-bg">
                <div class="factor-progress-fill" style="width: ${Math.min(100, f.points * 4)}%; background: ${color};"></div>
              </div>
              <span class="text-xs text-secondary">${f.explanation}</span>
            </div>
          `;
        }).join('');
      }
    }
  },

  // -------------------------------------------------------------
  // Work Orders & Maintenance Planning
  // -------------------------------------------------------------
  renderWorkOrders() {
    const workOrders = this.state.getWorkOrders();
    const container = document.getElementById('woCardsContainer');

    // Counts for filter chips
    const countAll = workOrders.length;
    const countProgress = workOrders.filter(w => w.status === 'In Progress').length;
    const countOpen = workOrders.filter(w => w.status === 'Open').length;
    const countParts = workOrders.filter(w => w.status === 'Awaiting Parts').length;
    const countCompleted = workOrders.filter(w => w.status === 'Completed').length;

    const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setEl('woFilterCountAll', countAll);
    setEl('woFilterCountProgress', countProgress);
    setEl('woFilterCountOpen', countOpen);
    setEl('woFilterCountParts', countParts);
    setEl('woFilterCountCompleted', countCompleted);

    let filtered = workOrders;
    if (this.activeWoFilter !== 'ALL') {
      filtered = workOrders.filter(w => w.status === this.activeWoFilter);
    }

    if (container) {
      if (filtered.length === 0) {
        container.innerHTML = `<div class="text-center text-muted" style="grid-column: 1 / -1; padding: 40px;">No work orders found in "${this.activeWoFilter}" status.</div>`;
      } else {
        container.innerHTML = filtered.map(wo => {
          const partsStr = (wo.partsRequired && wo.partsRequired.length) ? wo.partsRequired.join(', ') : 'Standard Shop Consumables';
          return `
            <div class="wo-card ${wo.priority.toLowerCase()}">
              <div class="wo-card-top">
                <span class="wo-id-badge">${wo.woId}</span>
                <span class="risk-tag ${wo.priority.toLowerCase()}">${wo.priority}</span>
              </div>
              <div>
                <h4 class="wo-card-title">${wo.suspectedIssue}</h4>
                <div class="text-xs text-muted" style="margin-top: 2px;">Target Airframe: <strong style="color: #fff;">${wo.aircraftId}</strong></div>
              </div>
              <div class="wo-evidence-box">
                <strong style="color: var(--cyan-primary);">Evidence:</strong> ${wo.evidence}
              </div>
              <div class="text-xs" style="color: var(--text-secondary);">
                <strong>Action:</strong> ${wo.action}
              </div>
              <div class="wo-meta-row">
                <div>Team: <strong>${wo.assignedTeam}</strong></div>
                <div>Est. Turnaround: <strong>${wo.estimatedDurationHours} hrs</strong></div>
                <div style="grid-column: 1 / -1;">Required Spares: <strong>${partsStr}</strong></div>
              </div>
              <div class="wo-action-row">
                <div class="filter-group">
                  <label for="status_${wo.woId}">Status:</label>
                  <select id="status_${wo.woId}" class="filter-select sm" onchange="AeroApp.handleWoStatusChange('${wo.woId}', this.value)">
                    <option value="Open" ${wo.status === 'Open' ? 'selected' : ''}>Open</option>
                    <option value="In Progress" ${wo.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Awaiting Parts" ${wo.status === 'Awaiting Parts' ? 'selected' : ''}>Awaiting Parts</option>
                    <option value="Completed" ${wo.status === 'Completed' ? 'selected' : ''}>Completed</option>
                  </select>
                </div>
                ${wo.status !== 'Completed' ? `
                  <button class="btn btn-outline btn-xs" onclick="AeroApp.handleWoStatusChange('${wo.woId}', 'Completed')">
                    Mark Completed &check;
                  </button>
                ` : `
                  <span class="text-xs text-green" style="font-weight: 600;">Work Complete &check;</span>
                `}
              </div>
            </div>
          `;
        }).join('');
      }
    }
  },

  handleWoStatusChange(woId, newStatus) {
    this.state.updateWorkOrderStatus(woId, newStatus);
    this.renderAllViews();
    this.showToast('Work Order Updated', `Work order ${woId} transitioned to ${newStatus}.`, 'success');
  },

  openCreateWoModal(targetAircraftId = null) {
    const modal = document.getElementById('modalCreateWo');
    const select = document.getElementById('formWoAircraftSelect');
    if (!modal || !select) return;

    const aircraft = this.state.getAircraftList();
    select.innerHTML = aircraft.map(p => `
      <option value="${p.id}" ${p.id === targetAircraftId ? 'selected' : ''}>${p.id} &bull; ${p.callsign} (${p.category})</option>
    `).join('');

    // If pre-selecting an aircraft, auto-fill evidence & issue
    if (targetAircraftId) {
      select.value = targetAircraftId;
      this.autoFillWoFormForAircraft(targetAircraftId);
    }

    select.onchange = (e) => this.autoFillWoFormForAircraft(e.target.value);

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  },

  autoFillWoFormForAircraft(aircraftId) {
    const plane = this.state.getAircraftById(aircraftId);
    if (!plane) return;

    const evalResult = PredictiveMaintenanceEngine.evaluateRisk(plane, this.state.getThresholds());
    const issueInput = document.getElementById('formWoIssue');
    const evidenceInput = document.getElementById('formWoEvidence');
    const actionInput = document.getElementById('formWoAction');
    const prioritySelect = document.getElementById('formWoPriority');

    if (prioritySelect) prioritySelect.value = evalResult.suggestedPriority;
    if (issueInput) {
      issueInput.value = evalResult.factors.length > 0 
        ? `${evalResult.factors[0].name} & Subsystem Stress`
        : 'Routine 45-Day Periodic Servicing Check';
    }
    if (evidenceInput) {
      const evidenceList = evalResult.factors.map(f => `${f.param}: ${f.observed} (limit ${f.limit})`).join('; ');
      evidenceInput.value = evidenceList || `Flight hours: ${plane.flightHours}h; Days since inspection: ${plane.daysSinceInspection}d`;
    }
    if (actionInput) {
      actionInput.value = evalResult.recommendedAction;
    }
  },

  closeCreateWoModal() {
    const modal = document.getElementById('modalCreateWo');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  },

  handleCreateWorkOrderSubmit() {
    const aircraftId = document.getElementById('formWoAircraftSelect').value;
    const priority = document.getElementById('formWoPriority').value;
    const issue = document.getElementById('formWoIssue').value.trim();
    const evidence = document.getElementById('formWoEvidence').value.trim();
    const action = document.getElementById('formWoAction').value.trim();
    const team = document.getElementById('formWoTeam').value;
    const duration = parseInt(document.getElementById('formWoDuration').value) || 12;
    const part = document.getElementById('formWoParts').value;
    const notes = document.getElementById('formWoNotes').value.trim();

    // Check duplicate open work order
    const existing = this.state.getWorkOrders().find(w => w.aircraftId === aircraftId && w.status !== 'Completed');
    if (existing) {
      if (!confirm(`Aircraft ${aircraftId} already has an active work order (${existing.woId}: ${existing.status}). Create another work order?`)) {
        return;
      }
    }

    const randomSuffix = Math.floor(100 + Math.random() * 900);
    const newWo = {
      woId: `WO-26249-${randomSuffix}`,
      aircraftId,
      suspectedIssue: issue,
      evidence,
      priority,
      action,
      estimatedDurationHours: duration,
      assignedTeam: team,
      notes: notes || 'Standard technician protocol applied.',
      status: 'Open',
      partsRequired: part !== 'NONE' ? [part] : [],
      createdTimestamp: new Date().toISOString()
    };

    this.state.addWorkOrder(newWo);
    this.closeCreateWoModal();
    this.renderAllViews();
    this.showToast('Work Order Created', `Dispatched ${newWo.woId} for ${aircraftId} (${priority}).`, 'success');
  },

  // -------------------------------------------------------------
  // Aircraft Deep Diagnostics Modal
  // -------------------------------------------------------------
  openAircraftDetailModal(aircraftId) {
    this.selectedAircraftId = aircraftId;
    const plane = this.state.getAircraftById(aircraftId);
    if (!plane) return;

    const modal = document.getElementById('modalAircraftDetail');
    if (!modal) return;

    const thresholds = this.state.getThresholds();
    const evalResult = PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds);

    // Titles
    document.getElementById('modalAircraftCategoryTag').textContent = `${plane.category.toUpperCase()} AIRFRAME`;
    document.getElementById('modalAircraftTitle').textContent = `${plane.id} • ${plane.callsign}`;

    // Summary Cards
    document.getElementById('modalStatusBadge').innerHTML = `<span class="status-pill ${plane.status.toLowerCase()}">${plane.status}</span>`;
    document.getElementById('modalRiskScoreVal').innerHTML = `<span class="risk-tag ${evalResult.riskCategory.toLowerCase()}">${evalResult.riskScore} • ${evalResult.riskCategory}</span>`;
    document.getElementById('modalHealthIndexVal').innerHTML = `<span style="color: ${evalResult.healthIndex < 60 ? 'var(--red-critical)' : 'var(--green-ready)'}">${evalResult.healthIndex}%</span>`;
    document.getElementById('modalBaseVal').textContent = `${plane.assignedSquadron} (${plane.baseLocation})`;

    // Telemetry Table
    const tbody = document.getElementById('modalTelemetryTbody');
    const tempVar = plane.engineTempC - thresholds.tempWarningC;
    const vibVar = plane.vibrationIps - thresholds.vibrationWarningIps;
    const oilVar = plane.oilPressurePsi - thresholds.oilPressureMinPsi;

    tbody.innerHTML = `
      <tr>
        <td><strong>Exhaust Gas Temperature (EGT)</strong></td>
        <td class="font-mono">${plane.engineTempC} °C</td>
        <td class="font-mono">Warn: ${thresholds.tempWarningC} °C / Crit: ${thresholds.tempCriticalC} °C</td>
        <td>
          <span class="status-pill ${tempVar > 0 ? (plane.engineTempC >= thresholds.tempCriticalC ? 'grounded-for-inspection' : 'inspection-due') : 'serviceable'}">
            ${tempVar > 0 ? `+${tempVar}°C Thermal Excursion` : 'Nominal Margin'}
          </span>
        </td>
      </tr>
      <tr>
        <td><strong>Radial Bearing Vibration</strong></td>
        <td class="font-mono">${plane.vibrationIps.toFixed(2)} IPS</td>
        <td class="font-mono">Warn: ${thresholds.vibrationWarningIps.toFixed(2)} IPS</td>
        <td>
          <span class="status-pill ${vibVar > 0 ? (plane.vibrationIps >= thresholds.vibrationCriticalIps ? 'grounded-for-inspection' : 'inspection-due') : 'serviceable'}">
            ${vibVar > 0 ? `+${vibVar.toFixed(2)} IPS Imbalance` : 'Nominal Smooth'}
          </span>
        </td>
      </tr>
      <tr>
        <td><strong>Main Oil Scavenge Pressure</strong></td>
        <td class="font-mono">${plane.oilPressurePsi} PSI</td>
        <td class="font-mono">Min Safe: ${thresholds.oilPressureMinPsi} PSI</td>
        <td>
          <span class="status-pill ${oilVar < 0 ? 'grounded-for-inspection' : 'serviceable'}">
            ${oilVar < 0 ? `${oilVar} PSI Degradation` : 'Adequate Film'}
          </span>
        </td>
      </tr>
      <tr>
        <td><strong>Flight Hour Accumulation</strong></td>
        <td class="font-mono">${plane.flightHours} hrs</td>
        <td class="font-mono">Standard Cycle: ${thresholds.flightHoursAlert} hrs</td>
        <td><span class="status-pill serviceable">Service Metered</span></td>
      </tr>
      <tr>
        <td><strong>Days Since Periodic Inspection</strong></td>
        <td class="font-mono">${plane.daysSinceInspection} Days</td>
        <td class="font-mono">Target: ${thresholds.inspectionCycleDays} Days</td>
        <td>
          <span class="status-pill ${plane.daysSinceInspection > thresholds.inspectionCycleDays ? 'inspection-due' : 'serviceable'}">
            ${plane.daysSinceInspection > thresholds.inspectionCycleDays ? `${plane.daysSinceInspection - thresholds.inspectionCycleDays}d Overdue` : 'Current'}
          </span>
        </td>
      </tr>
    `;

    // Subsystem Health Grid
    const subGrid = document.getElementById('modalSubsystemsGrid');
    const subs = plane.subsystems || { engine: 85, hydraulics: 88, avionics: 92, electrical: 86, airframe: 90 };
    subGrid.innerHTML = Object.keys(subs).map(k => {
      const val = subs[k];
      const color = val < 60 ? 'var(--red-critical)' : val < 80 ? 'var(--amber-warn)' : 'var(--green-ready)';
      return `
        <div class="subsystem-item">
          <span class="subsystem-name">${k}</span>
          <span class="subsystem-score" style="color: ${color};">${val}%</span>
          <div class="factor-progress-bg" style="height: 4px;">
            <div class="factor-progress-fill" style="width: ${val}%; background: ${color};"></div>
          </div>
        </div>
      `;
    }).join('');

    // Factors & Recommendation
    const factorsContainer = document.getElementById('modalFactorsContainer');
    if (evalResult.factors.length === 0) {
      factorsContainer.innerHTML = `<div class="text-xs text-muted" style="padding: 10px;">All parameters within normal limits. Ready for flight dispatch.</div>`;
    } else {
      factorsContainer.innerHTML = `
        <div style="margin-bottom: 12px;">
          ${evalResult.factors.map(f => `
            <div class="text-xs" style="margin-bottom: 6px; color: var(--text-secondary);">
              &bull; <strong style="color: #fff;">${f.name}:</strong> ${f.explanation} (+${f.points} risk points)
            </div>
          `).join('')}
        </div>
        <div class="wo-evidence-box" style="margin-top: 8px;">
          <strong style="color: var(--cyan-primary);">Advisory Recommendation:</strong> ${evalResult.recommendedAction}
        </div>
      `;
    }

    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
  },

  closeAircraftDetailModal() {
    const modal = document.getElementById('modalAircraftDetail');
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  },

  // -------------------------------------------------------------
  // Availability Simulator & What-If Engine
  // -------------------------------------------------------------
  calculateSimulation() {
    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();
    const total = aircraft.length;
    if (total === 0) return;

    // Evaluate risks across the fleet
    const evaluated = aircraft.map(p => PredictiveMaintenanceEngine.evaluateRisk(p, thresholds));
    const highRiskAirframes = evaluated.filter(e => e.riskScore >= 55).length;
    const nominalAirframes = total - highRiskAirframes;

    // Simulation Parameters
    const plannedTurnaround = parseFloat(document.getElementById('simProactiveTurnaround')?.value || 12);
    const unscheduledDowntime = parseFloat(document.getElementById('simReactiveDowntime')?.value || 36);
    const hangarCapacity = parseInt(document.getElementById('simHangarCapacity')?.value || 4);
    const adherenceRate = (parseFloat(document.getElementById('simAdherenceRate')?.value || 85)) / 100;

    // Scenario A: Reactive (Run to failure)
    // High-risk aircraft inevitably fail during sorties causing long unplanned downtime and depot bottleneck
    const reactiveFailures = Math.min(total, highRiskAirframes + 3);
    const reactiveServiceable = Math.max(0, total - reactiveFailures);
    const reactiveAvailPct = ((reactiveServiceable / total) * 100).toFixed(1);

    // Scenario B: Proactive Risk-Prioritized
    // By acting on early telemetry, adherenceRate % of high-risk aircraft undergo fast planned minor servicing
    // (within hangar capacity), preventing cascading failure.
    const proactiveServicingNeeded = Math.min(hangarCapacity, Math.ceil(highRiskAirframes * adherenceRate));
    const proactiveResidualFailures = Math.max(0, Math.round(highRiskAirframes * (1 - adherenceRate)));
    const proactiveUnavailable = proactiveServicingNeeded + proactiveResidualFailures;
    const proactiveServiceable = Math.max(0, total - proactiveUnavailable);
    const proactiveAvailPct = ((proactiveServiceable / total) * 100).toFixed(1);

    const delta = (parseFloat(proactiveAvailPct) - parseFloat(reactiveAvailPct)).toFixed(1);

    // Update UI elements
    const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    setEl('simReactiveAvailPct', `${reactiveAvailPct}%`);
    setEl('simReactiveServiceable', reactiveServiceable);
    setEl('simReactiveUnavailable', reactiveFailures);

    setEl('simProactiveAvailPct', `${proactiveAvailPct}%`);
    setEl('simProactiveServiceable', proactiveServiceable);
    setEl('simProactiveUnavailable', proactiveUnavailable);

    setEl('simNetDeltaPct', `+${delta}% Availability Boost`);
    setEl('simGainExplanation', `By adopting early warning thresholds, the wing prevents ${reactiveFailures - proactiveUnavailable} catastrophic depot groundings. Average turnaround is compressed from ${unscheduledDowntime} hrs (reactive) to ${plannedTurnaround} hrs (proactive inspection), keeping ${proactiveServiceable} aircraft mission-ready.`);
  },

  // -------------------------------------------------------------
  // Data Feeds & Spare Parts Logistics
  // -------------------------------------------------------------
  renderIntegrationFeeds() {
    const feeds = this.state.getIntegrationFeeds();
    const container = document.getElementById('integrationFeedsContainer');
    if (!container) return;

    container.innerHTML = feeds.map(f => `
      <div class="feed-card">
        <div class="feed-card-header">
          <span class="feed-id">${f.feedId}</span>
          <span class="status-pill serviceable">${f.health}</span>
        </div>
        <h4 class="feed-title">${f.name}</h4>
        <div class="feed-meta-row">
          <span>Latency: ${f.latencyMs} ms</span>
          <span>Flow: ${f.dataPointsPerSec} pkt/s</span>
        </div>
        <p class="feed-desc">${f.details}</p>
        <div class="text-xs text-muted" style="margin-top: auto; padding-top: 6px; border-top: 1px solid var(--border-subtle);">
          Protocol: <code style="color: var(--cyan-primary);">${f.protocol}</code> &bull; Last: ${f.lastPacket}
        </div>
      </div>
    `).join('');
  },

  renderSpareParts() {
    const parts = this.state.getSpareParts();
    const tbody = document.getElementById('sparesTbody');
    if (!tbody) return;

    tbody.innerHTML = parts.map(p => {
      const isCritical = p.availableQty === 0;
      const isLow = p.availableQty < p.minStockLevel;
      const badgeClass = isCritical ? 'red' : isLow ? 'amber' : 'green';

      return `
        <tr>
          <td><strong class="font-mono text-cyan">${p.partId}</strong></td>
          <td><strong>${p.partName}</strong></td>
          <td>${p.category}</td>
          <td>
            <span class="font-mono" style="font-weight: 700; color: ${isCritical ? 'var(--red-critical)' : isLow ? 'var(--amber-warn)' : '#fff'};">
              ${p.availableQty}
            </span> 
            <span class="text-muted">/ min ${p.minStockLevel}</span>
          </td>
          <td class="font-mono">${p.leadTimeDays} days</td>
          <td class="font-mono">$${p.unitCostUsd.toLocaleString()}</td>
          <td>
            <span class="kpi-badge ${badgeClass}">${p.status}</span>
          </td>
          <td>
            <button class="btn btn-outline btn-xs" onclick="AeroApp.handleRestockPart('${p.partId}')">Restock +2</button>
          </td>
        </tr>
      `;
    }).join('');
  },

  handleRestockPart(partId) {
    this.state.restockPart(partId, 2);
    this.renderSpareParts();
    this.updateCounters();
    this.showToast('Inventory Updated', `Restocked part ${partId} by +2 units.`, 'success');
  },

  // -------------------------------------------------------------
  // Maintenance Intelligence Assistant (100% Offline Rule Engine)
  // -------------------------------------------------------------
  handleAssistantQuery(userQuery) {
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;

    // Append user message
    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'chat-msg user';
    userMsgEl.innerHTML = `
      <div class="msg-avatar">YOU</div>
      <div class="msg-body">
        <div class="msg-meta">Tactical Operator</div>
        <div class="msg-content"><p>${this.escapeHtml(userQuery)}</p></div>
      </div>
    `;
    container.appendChild(userMsgEl);

    // Generate rule-based answer
    const answer = this.generateAssistantAnswer(userQuery);

    // Append system message
    const sysMsgEl = document.createElement('div');
    sysMsgEl.className = 'chat-msg system';
    sysMsgEl.innerHTML = `
      <div class="msg-avatar">AI</div>
      <div class="msg-body">
        <div class="msg-meta">AeroReady Intelligence Kernel &bull; Direct Telemetry Query</div>
        <div class="msg-content">${answer}</div>
      </div>
    `;
    container.appendChild(sysMsgEl);
    container.scrollTop = container.scrollHeight;
  },

  generateAssistantAnswer(query) {
    const q = query.toLowerCase();
    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();
    const workOrders = this.state.getWorkOrders();
    const parts = this.state.getSpareParts();

    // 1. Specific Aircraft Check (e.g. AR-007, AR-013, AR-001)
    const matchPlane = q.match(/ar-0\d{2}/i);
    if (matchPlane) {
      const planeId = matchPlane[0].toUpperCase();
      const plane = this.state.getAircraftById(planeId);
      if (plane) {
        const evalResult = PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds);
        const relatedWo = workOrders.find(w => w.aircraftId === planeId && w.status !== 'Completed');

        let factorsHtml = evalResult.factors.map(f => `
          <tr>
            <td>${f.param}</td>
            <td><strong>${f.observed}</strong></td>
            <td>${f.limit}</td>
            <td style="color:${f.severity === 'CRITICAL' ? 'var(--red-critical)' : 'var(--amber-warn)'}">${f.severity} (+${f.points}pts)</td>
          </tr>
        `).join('');

        return `
          <p><strong>Diagnostics Dossier for ${plane.id} (${plane.callsign}):</strong></p>
          <p>Current Status: <strong>${plane.status}</strong> | Risk Category: <strong class="text-${evalResult.riskCategory.toLowerCase()}">${evalResult.riskCategory} (Score: ${evalResult.riskScore}/100)</strong> | Health Index: <strong>${evalResult.healthIndex}%</strong>.</p>
          <table class="msg-telemetry-table">
            <thead>
              <tr><th>Parameter</th><th>Observed</th><th>Threshold</th><th>Risk Delta</th></tr>
            </thead>
            <tbody>
              ${factorsHtml || '<tr><td colspan="4">All telemetry values within normal margins.</td></tr>'}
            </tbody>
          </table>
          <p><strong>Actionable Advisory:</strong> ${evalResult.recommendedAction}</p>
          ${relatedWo ? `<p><strong>Active Work Order:</strong> ${relatedWo.woId} (${relatedWo.priority}) — <em>${relatedWo.action}</em> [Status: ${relatedWo.status}]</p>` : `<p><em>No active work order currently dispatched for ${plane.id}.</em></p>`}
        `;
      }
    }

    // 2. "Which aircraft need attention first?"
    if (q.includes('attention') || q.includes('first') || q.includes('urgent') || q.includes('critical')) {
      const evaluated = aircraft.map(p => ({
        ...p,
        eval: PredictiveMaintenanceEngine.evaluateRisk(p, thresholds)
      })).sort((a, b) => b.eval.riskScore - a.eval.riskScore);

      const top3 = evaluated.slice(0, 3);
      const rows = top3.map(p => `
        <tr>
          <td><strong style="color:#fff;">${p.id}</strong> (${p.callsign})</td>
          <td><span class="risk-tag ${p.eval.riskCategory.toLowerCase()}">${p.eval.riskScore} &bull; ${p.eval.riskCategory}</span></td>
          <td>${p.eval.factors.map(f => f.name).join(', ') || 'Nominal'}</td>
          <td>${p.eval.recommendedAction}</td>
        </tr>
      `).join('');

      return `
        <p><strong>Top Priority Airframes Requiring Immediate Maintenance Intervention:</strong></p>
        <p>Ranked deterministically by composite risk score against configured engineering limits:</p>
        <table class="msg-telemetry-table">
          <thead>
            <tr><th>Airframe</th><th>Risk Category</th><th>Dominant Factors</th><th>Prescribed Action</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <p><em>Recommendation: Inspect ${top3[0].id} immediately via the Fleet Telemetry Register.</em></p>
      `;
    }

    // 3. "What is reducing fleet availability?"
    if (q.includes('availability') || q.includes('reducing') || q.includes('downtime')) {
      const unavailable = aircraft.filter(p => p.status !== 'Serviceable');
      const criticals = aircraft.filter(p => PredictiveMaintenanceEngine.evaluateRisk(p, thresholds).riskCategory === 'CRITICAL');
      const openWos = workOrders.filter(w => w.status !== 'Completed');

      return `
        <p><strong>Fleet Availability Bottleneck Root-Cause Analysis:</strong></p>
        <p>Currently, <strong>${unavailable.length} of ${aircraft.length} aircraft (${((unavailable.length / aircraft.length) * 100).toFixed(1)}%)</strong> are unavailable for flight dispatch.</p>
        <ul>
          <li><strong>Grounded / Severe Risk:</strong> ${criticals.map(c => c.id).join(', ') || 'None'} (due to telemetry threshold breaches).</li>
          <li><strong>Active Maintenance Work Orders:</strong> ${openWos.length} open orders, including long-duration heavy depot servicing on AR-005 (18h) and AR-007 (14h).</li>
          <li><strong>Supply Chain Friction:</strong> Component backorders (e.g., Turbine Blade Kit PRT-ENG-084 and Radial Bearings PRT-BRG-220) increase queue holding time.</li>
        </ul>
        <p><em>Check the <strong>Availability Simulator</strong> tab to see how proactive turnaround mitigates this downtime.</em></p>
      `;
    }

    // 4. "Which aircraft have overdue inspections?"
    if (q.includes('overdue') || q.includes('inspection') || q.includes('cycle')) {
      const cycle = thresholds.inspectionCycleDays;
      const overdueList = aircraft.filter(p => p.daysSinceInspection > cycle)
                                  .sort((a, b) => b.daysSinceInspection - a.daysSinceInspection);

      const rows = overdueList.map(p => `
        <tr>
          <td><strong style="color:#fff;">${p.id}</strong></td>
          <td>${p.category}</td>
          <td>${p.daysSinceInspection} Days</td>
          <td style="color:var(--red-critical);">+${p.daysSinceInspection - cycle} days past limit</td>
          <td>${p.status}</td>
        </tr>
      `).join('');

      return `
        <p><strong>Aircraft Exceeding Standard ${cycle}-Day Periodic Inspection Interval:</strong></p>
        <p>Found <strong>${overdueList.length} aircraft</strong> currently overdue for depot structural review:</p>
        <table class="msg-telemetry-table">
          <thead>
            <tr><th>Airframe</th><th>Category</th><th>Days Elapsed</th><th>Overdue Margin</th><th>Status</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    }

    // 5. "What are the highest-priority open work orders?"
    if (q.includes('work order') || q.includes('orders') || q.includes('queue')) {
      const openWos = workOrders.filter(w => w.status !== 'Completed')
                                .sort((a, b) => (a.priority === 'CRITICAL' ? -1 : 1));

      const rows = openWos.map(w => `
        <tr>
          <td><strong>${w.woId}</strong></td>
          <td>${w.aircraftId}</td>
          <td><span class="risk-tag ${w.priority.toLowerCase()}">${w.priority}</span></td>
          <td>${w.action}</td>
          <td>${w.status}</td>
        </tr>
      `).join('');

      return `
        <p><strong>Active Priority Maintenance Queue (${openWos.length} Open Work Orders):</strong></p>
        <table class="msg-telemetry-table">
          <thead>
            <tr><th>WO ID</th><th>Airframe</th><th>Priority</th><th>Action</th><th>Status</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    }

    // 6. "Show critical spare part shortages"
    if (q.includes('part') || q.includes('spare') || q.includes('inventory') || q.includes('shortage')) {
      const shortages = parts.filter(p => p.availableQty < p.minStockLevel);
      const rows = shortages.map(p => `
        <tr>
          <td><strong>${p.partId}</strong></td>
          <td>${p.partName}</td>
          <td style="color:var(--red-critical); font-weight:700;">${p.availableQty} / min ${p.minStockLevel}</td>
          <td>${p.leadTimeDays} days</td>
          <td>${p.status}</td>
        </tr>
      `).join('');

      return `
        <p><strong>Critical Spare Parts Inventory Deficits:</strong></p>
        <table class="msg-telemetry-table">
          <thead>
            <tr><th>Part ID</th><th>Name</th><th>Stock / Min</th><th>Lead Time</th><th>Warning</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <p><em>Note: Turbine Blades and Roller Bearings directly impact active work orders on AR-007 and AR-013.</em></p>
      `;
    }

    // Default Fallback
    return `
      <p>I parsed your query: <em>"${this.escapeHtml(query)}"</em>.</p>
      <p>AeroReady AI operates on deterministic client-side telemetry. You can ask:</p>
      <ul>
        <li><em>"Which aircraft need attention first?"</em></li>
        <li><em>"Why is AR-007 high risk?"</em></li>
        <li><em>"What is reducing fleet availability?"</em></li>
        <li><em>"Which aircraft have overdue inspections?"</em></li>
        <li><em>"Show critical spare part shortages"</em></li>
      </ul>
    `;
  },

  escapeHtml(str) {
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[m]);
  },

  // -------------------------------------------------------------
  // Primary Demo Walkthrough Scenario
  // -------------------------------------------------------------
  executeDemoScenario() {
    this.showToast('Demo Walkthrough Initiated', 'Activating seeded high-risk scenario for aircraft AR-007...', 'info');

    // 1. Switch to dashboard first
    this.switchTab('dashboard');

    // 2. Open AR-007 detail inspection modal
    setTimeout(() => {
      this.openAircraftDetailModal('AR-007');
      this.showToast('AR-007 Anomaly Spotlighted', 'Exhaust Temp 845°C & Vibration 0.72 IPS breached critical safety limits.', 'error');
    }, 700);
  },

  // -------------------------------------------------------------
  // Toast Notifications
  // -------------------------------------------------------------
  showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button style="background:none; border:none; color:var(--text-muted); cursor:pointer;" onclick="this.parentElement.remove()">&times;</button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 250);
      }
    }, 4500);
  },

  // -------------------------------------------------------------
  // Chart Visualizations (With Canvas Fallback if offline)
  // -------------------------------------------------------------
  initCharts() {
    this.initAvailabilityTrendChart();
    this.initHealthDistributionChart();
  },

  initAvailabilityTrendChart() {
    const canvas = document.getElementById('chartAvailabilityTrend');
    if (!canvas) return;

    const labels = ['D-13', 'D-11', 'D-9', 'D-7', 'D-5', 'D-3', 'D-1', 'Today (Sim)'];
    const reactiveData = [68, 65, 71, 62, 59, 64, 61, 59.1];
    const proactiveData = [68, 70, 74, 76, 78, 80, 81, 81.8];

    if (window.Chart) {
      if (this.chartTrendInstance) this.chartTrendInstance.destroy();
      const ctx = canvas.getContext('2d');
      this.chartTrendInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Reactive Availability (%)',
              data: reactiveData,
              borderColor: '#00e5ff',
              backgroundColor: 'rgba(0, 229, 255, 0.1)',
              tension: 0.35,
              fill: true,
              borderWidth: 2,
              pointBackgroundColor: '#00e5ff',
              pointRadius: 3
            },
            {
              label: 'Proactive Optimized (%)',
              data: proactiveData,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              tension: 0.35,
              fill: true,
              borderWidth: 2,
              borderDash: [5, 4],
              pointBackgroundColor: '#10b981',
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#121e33',
              titleColor: '#00e5ff',
              bodyColor: '#f1f5f9',
              borderColor: 'rgba(56, 189, 248, 0.25)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255, 255, 255, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 10 } }
            },
            y: {
              min: 40,
              max: 100,
              grid: { color: 'rgba(255, 255, 255, 0.05)' },
              ticks: { color: '#94a3b8', font: { size: 10 }, callback: v => `${v}%` }
            }
          }
        }
      });
    } else {
      // Graceful offline 2D canvas fallback
      this.drawTrendFallback(canvas, reactiveData, proactiveData);
    }
  },

  drawTrendFallback(canvas, reactiveData, proactiveData) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = '#172640';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    reactiveData.forEach((val, i) => {
      const x = (i / (reactiveData.length - 1)) * (w - 40) + 20;
      const y = h - ((val - 40) / 60) * (h - 40) - 20;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    ctx.strokeStyle = '#10b981';
    ctx.beginPath();
    proactiveData.forEach((val, i) => {
      const x = (i / (proactiveData.length - 1)) * (w - 40) + 20;
      const y = h - ((val - 40) / 60) * (h - 40) - 20;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  },

  initHealthDistributionChart() {
    const canvas = document.getElementById('chartHealthDistribution');
    if (!canvas) return;

    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();

    let low = 0, med = 0, high = 0, crit = 0;
    aircraft.forEach(p => {
      const evalRes = PredictiveMaintenanceEngine.evaluateRisk(p, thresholds);
      if (evalRes.riskCategory === 'LOW') low++;
      else if (evalRes.riskCategory === 'MEDIUM') med++;
      else if (evalRes.riskCategory === 'HIGH') high++;
      else if (evalRes.riskCategory === 'CRITICAL') crit++;
    });

    if (window.Chart) {
      if (this.chartHealthInstance) this.chartHealthInstance.destroy();
      const ctx = canvas.getContext('2d');
      this.chartHealthInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Low Risk (>80 Health)', 'Medium Risk (65-80)', 'High Risk (45-64)', 'Critical Risk (<45)'],
          datasets: [{
            data: [low, med, high, crit],
            backgroundColor: ['#10b981', '#f59e0b', '#f87171', '#ef4444'],
            borderColor: '#0e1828',
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 12 }
            }
          },
          cutout: '65%'
        }
      });
    }
  },

  // -------------------------------------------------------------
  // Export Fleet CSV
  // -------------------------------------------------------------
  exportFleetCsv() {
    const aircraft = this.state.getAircraftList();
    const thresholds = this.state.getThresholds();

    const headers = ['AircraftID', 'Callsign', 'Category', 'Status', 'EngineTempC', 'VibrationIps', 'OilPressurePsi', 'FlightHours', 'DaysSinceInspection', 'HealthIndex', 'RiskScore', 'RiskCategory', 'Squadron', 'BaseLocation'];
    const rows = aircraft.map(p => {
      const evalRes = PredictiveMaintenanceEngine.evaluateRisk(p, thresholds);
      return [
        p.id, p.callsign, p.category, p.status, p.engineTempC, p.vibrationIps, p.oilPressurePsi,
        p.flightHours, p.daysSinceInspection, evalRes.healthIndex, evalRes.riskScore, evalRes.riskCategory,
        `"${p.assignedSquadron}"`, `"${p.baseLocation}"`
      ].join(',');
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `aeroready_fleet_telemetry_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast('Export Complete', 'Exported 22 synthetic aircraft records to CSV.', 'success');
  },

  // -------------------------------------------------------------
  // FEATURE 1: Authentication & Demo Access Controller
  // -------------------------------------------------------------
  checkAuthSession() {
    const authData = sessionStorage.getItem('aeroready_session_auth');
    const loginWrap = document.getElementById('loginScreenWrap');
    if (!loginWrap) return;

    if (authData) {
      try {
        const session = JSON.parse(authData);
        loginWrap.style.display = 'none';
        const roleSelect = document.getElementById('userRoleSelect');
        if (roleSelect && session.roleKey) {
          roleSelect.value = session.roleKey;
        }
      } catch (err) {
        sessionStorage.removeItem('aeroready_session_auth');
        loginWrap.style.display = 'flex';
      }
    } else {
      loginWrap.style.display = 'flex';
    }
  },

  setupLoginEvents() {
    // Demo Mode Button
    const btnDemo = document.getElementById('btnTryDemoMode');
    if (btnDemo) {
      btnDemo.addEventListener('click', () => this.handleDemoMode());
    }

    // Toggle Password Visibility
    const btnToggle = document.getElementById('btnTogglePassword');
    if (btnToggle) {
      btnToggle.addEventListener('click', () => this.togglePasswordVisibility());
    }

    // Logout Button in Header
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => this.handleLogout());
    }
  },

  handleLogin() {
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    const errorEl = document.getElementById('loginErrorMsg');

    const username = (usernameInput?.value || '').trim();
    const password = (passwordInput?.value || '').trim();

    if (!username || !password) {
      if (errorEl) {
        errorEl.textContent = 'Please provide both username and password, or select Try Demo Mode.';
        errorEl.style.display = 'block';
      }
      return;
    }

    if (errorEl) errorEl.style.display = 'none';

    // Demo-only authentication flow (clearly labelled demonstration environment)
    const sessionObj = {
      username: username,
      role: 'Flight Operations Controller',
      roleKey: 'controller',
      timestamp: new Date().toISOString(),
      isDemoSession: true
    };

    sessionStorage.setItem('aeroready_session_auth', JSON.stringify(sessionObj));

    const loginWrap = document.getElementById('loginScreenWrap');
    if (loginWrap) {
      loginWrap.classList.add('fade-out');
      setTimeout(() => {
        loginWrap.style.display = 'none';
        loginWrap.classList.remove('fade-out');
      }, 350);
    }

    this.showToast('Login Successful', `Authenticated as ${username} (Demonstration Environment)`, 'success');
  },

  quickLoginRole(roleKey) {
    const roleMap = {
      controller: { name: 'wing.controller', title: 'Wing Maintenance Controller', selectKey: 'controller' },
      engineer: { name: 'chief.propulsion', title: 'Chief Propulsion Engineer', selectKey: 'engineer' },
      commander: { name: 'sqn.commander', title: 'Squadron Operations Commander', selectKey: 'commander' },
      auditor: { name: 'qa.auditor', title: 'QA & Airworthiness Auditor', selectKey: 'controller' }
    };

    const sel = roleMap[roleKey] || roleMap.controller;
    const userInput = document.getElementById('loginUsername');
    const passInput = document.getElementById('loginPassword');
    if (userInput) userInput.value = sel.name;
    if (passInput) passInput.value = 'aeroready2026';

    const sessionObj = {
      username: sel.name,
      role: sel.title,
      roleKey: sel.selectKey,
      timestamp: new Date().toISOString(),
      isDemoSession: true
    };

    sessionStorage.setItem('aeroready_session_auth', JSON.stringify(sessionObj));

    const loginWrap = document.getElementById('loginScreenWrap');
    if (loginWrap) {
      loginWrap.classList.add('fade-out');
      setTimeout(() => {
        loginWrap.style.display = 'none';
        loginWrap.classList.remove('fade-out');
      }, 350);
    }

    const roleSelect = document.getElementById('userRoleSelect');
    if (roleSelect && ['controller', 'engineer', 'commander'].includes(sel.selectKey)) {
      roleSelect.value = sel.selectKey;
    }

    this.showToast('Authenticated', `Active Session: ${sel.title}`, 'success');
  },

  handleDemoMode() {
    const sessionObj = {
      username: 'demo.evaluator',
      role: 'SIH Hackathon Evaluator (Demo Mode)',
      roleKey: 'controller',
      timestamp: new Date().toISOString(),
      isDemoSession: true
    };

    sessionStorage.setItem('aeroready_session_auth', JSON.stringify(sessionObj));

    const loginWrap = document.getElementById('loginScreenWrap');
    if (loginWrap) {
      loginWrap.classList.add('fade-out');
      setTimeout(() => {
        loginWrap.style.display = 'none';
        loginWrap.classList.remove('fade-out');
      }, 350);
    }

    this.showToast('Demo Mode Activated', 'Instant access granted with live synthetic fleet telemetry.', 'info');
  },

  handleLogout() {
    sessionStorage.removeItem('aeroready_session_auth');
    const loginWrap = document.getElementById('loginScreenWrap');
    if (loginWrap) {
      loginWrap.style.display = 'flex';
      loginWrap.classList.remove('fade-out');
    }
    const errorEl = document.getElementById('loginErrorMsg');
    if (errorEl) errorEl.style.display = 'none';
    this.showToast('Session Ended', 'Logged out of AeroReady AI. Preserved fleet telemetry cache.', 'info');
  },

  togglePasswordVisibility() {
    const input = document.getElementById('loginPassword');
    const eyeIcon = document.getElementById('eyeIcon');
    if (!input) return;

    if (input.type === 'password') {
      input.type = 'text';
      if (eyeIcon) {
        eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
      }
    } else {
      input.type = 'password';
      if (eyeIcon) {
        eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
      }
    }
  },

  // -------------------------------------------------------------
  // FEATURE 2, 3, 4, 5: Interactive 3D Aircraft Health Controller
  // -------------------------------------------------------------
  init3DViewer() {
    try {
      this.active3dViewer = new Interactive3DAircraftViewer('threeJsCanvas', 'threeJsTooltip');

      // Toolbar Controls
      const btnReset = document.getElementById('btnReset3dCamera');
      if (btnReset) btnReset.addEventListener('click', () => this.active3dViewer.resetView());

      const btnWireframe = document.getElementById('btnToggleWireframe');
      if (btnWireframe) btnWireframe.addEventListener('click', () => this.active3dViewer.toggleWireframe());

      const btnRotate = document.getElementById('btnToggleAutoRotate');
      if (btnRotate) btnRotate.addEventListener('click', () => this.active3dViewer.toggleAutoRotate());

      const btnExplode = document.getElementById('btnToggleExploded');
      if (btnExplode) btnExplode.addEventListener('click', () => this.active3dViewer.toggleExploded());

      const btnPins = document.getElementById('btnTogglePins');
      if (btnPins) btnPins.addEventListener('click', () => this.active3dViewer.toggleCalloutPins());

      const select3d = document.getElementById('select3dAircraft');
      if (select3d) {
        select3d.addEventListener('change', (e) => this.select3dAircraft(e.target.value));
      }

      const btnQuick3d = document.getElementById('btnQuick3dAR007');
      if (btnQuick3d) {
        btnQuick3d.addEventListener('click', () => {
          this.select3dAircraft('AR-007');
          if (select3d) select3d.value = 'AR-007';
          this.select3dComponent('engine');
        });
      }

      // Initial load
      this.select3dAircraft(this.selected3dAircraftId || 'AR-007');
    } catch (err) {
      console.warn('3D Viewer Initialization notice:', err);
    }
  },

  populate3dAircraftDropdown() {
    const select = document.getElementById('select3dAircraft');
    if (!select) return;
    const aircraft = this.state.getAircraftList();
    select.innerHTML = aircraft.map(p => `
      <option value="${p.id}" ${p.id === this.selected3dAircraftId ? 'selected' : ''}>
        ${p.id} &bull; ${p.callsign} [${p.category}] - ${p.status}
      </option>
    `).join('');
  },

  select3dAircraft(planeId) {
    if (!planeId) planeId = 'AR-007';
    this.selected3dAircraftId = planeId;
    const plane = this.state.getAircraftById(planeId) || this.state.getAircraft(planeId) || (this.state.getAircraftList && this.state.getAircraftList().find(a => a.id === planeId));
    if (!plane) {
      console.warn('Airframe record not found for ID:', planeId);
      return;
    }

    // Keep dropdown selection visually in sync
    const select = document.getElementById('select3dAircraft');
    if (select && select.value !== planeId) {
      select.value = planeId;
    }

    const thresholds = this.state.getThresholds();
    const workOrders = this.state.getWorkOrders();
    const evalRes = PredictiveMaintenanceEngine.evaluateRisk(plane, thresholds);

    // Map all 8 subsystems deterministically
    const mappedSubsystems = AircraftComponentMapper.mapAircraftToComponents(plane, thresholds, workOrders);

    // Update 3D model meshes
    if (this.active3dViewer) {
      this.active3dViewer.setAircraftData(plane, mappedSubsystems);
    }

    // Render 3D UI panels
    this.render3dAirframeBanner(plane, evalRes, mappedSubsystems);
    this.render3dSubsystemsList(mappedSubsystems);
    this.render3dComponentDetails(this.selected3dComponentId || 'engine', mappedSubsystems, plane);
  },

  select3dComponent(compId) {
    this.selected3dComponentId = compId;
    const plane = this.state.getAircraftById(this.selected3dAircraftId) || this.state.getAircraft(this.selected3dAircraftId) || (this.state.getAircraftList && this.state.getAircraftList().find(a => a.id === this.selected3dAircraftId));
    if (!plane) return;

    const thresholds = this.state.getThresholds();
    const workOrders = this.state.getWorkOrders();
    const mappedSubsystems = AircraftComponentMapper.mapAircraftToComponents(plane, thresholds, workOrders);

    // Update active highlight in side matrix
    document.querySelectorAll('.subsystem-item-row, .subsystem-row-item').forEach(row => {
      if (row.getAttribute('data-subsystem-id') === compId) {
        row.classList.add('active');
      } else {
        row.classList.remove('active');
      }
    });

    // Focus camera on component in 3D viewer
    if (this.active3dViewer) {
      this.active3dViewer.focusOnSubsystem(compId);
    }

    // Render detailed component dossier
    this.render3dComponentDetails(compId, mappedSubsystems, plane);
  },

  render3dAirframeBanner(plane, evalRes, mappedSubsystems) {
    const banner = document.getElementById('banner3dAirframeStatus');
    if (!banner) return;

    const criticalCount = mappedSubsystems.filter(c => c.status === 'critical').length;
    const warningCount = mappedSubsystems.filter(c => c.status === 'warning').length;
    const healthyCount = mappedSubsystems.filter(c => c.status === 'healthy').length;

    const statusBadgeClass = plane.status === 'Serviceable' ? 'green' : plane.status.includes('Grounded') ? 'red' : 'amber';

    banner.innerHTML = `
      <div class="explain-summary-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; width: 100%;">
        <div class="summary-metric">
          <span class="metric-label">Selected Airframe</span>
          <span class="metric-value font-mono" style="color: #fff; font-size: 1.3rem;">${plane.id} <span style="font-size:0.85rem; color:var(--cyan-primary);">(${plane.callsign})</span></span>
          <span class="text-xs text-muted">${plane.category} &bull; ${plane.assignedSquadron || 'HQ Air Command'}</span>
        </div>

        <div class="summary-metric">
          <span class="metric-label">Serviceability Status</span>
          <span class="metric-value">
            <span class="status-pill ${statusBadgeClass}">${plane.status}</span>
          </span>
          <span class="text-xs text-muted">Base: ${plane.baseLocation || 'AFS Station'}</span>
        </div>

        <div class="summary-metric">
          <span class="metric-label">Fleet Risk Assessment</span>
          <span class="metric-value">
            <span class="risk-tag ${evalRes.riskCategory.toLowerCase()}">${evalRes.riskScore} &bull; ${evalRes.riskCategory}</span>
          </span>
          <span class="text-xs text-muted">Health Index: <strong style="color:#fff;">${evalRes.healthIndex}%</strong></span>
        </div>

        <div class="summary-metric">
          <span class="metric-label">Subsystems Breakdown</span>
          <div style="display: flex; gap: 8px; margin-top: 4px; align-items: center;">
            <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: var(--green-ready); border: 1px solid rgba(16, 185, 129, 0.4);">${healthyCount} Healthy</span>
            <span class="badge" style="background: rgba(245, 158, 11, 0.2); color: var(--amber-warn); border: 1px solid rgba(245, 158, 11, 0.4);">${warningCount} Attention</span>
            <span class="badge" style="background: rgba(239, 68, 68, 0.2); color: var(--red-critical); border: 1px solid rgba(239, 68, 68, 0.4);">${criticalCount} Critical</span>
          </div>
          <span class="text-xs text-muted" style="margin-top: 4px;">Direct Telemetry &bull; Explainable Rules</span>
        </div>
      </div>
    `;
  },

  render3dSubsystemsList(mappedSubsystems) {
    const container = document.getElementById('subsystems3dListContainer');
    if (!container) return;

    container.innerHTML = mappedSubsystems.map(sub => {
      const isSelected = sub.id === this.selected3dComponentId;
      const statusClass = sub.status === 'critical' ? 'critical' : sub.status === 'warning' ? 'warning' : 'healthy';
      const badgeText = sub.status === 'critical' ? 'High Risk' : sub.status === 'warning' ? 'Attention' : 'Healthy';

      return `
        <div class="subsystem-row-item subsystem-item-row ${isSelected ? 'active' : ''}" data-subsystem-id="${sub.id}" onclick="AeroApp.select3dComponent('${sub.id}')">
          <div class="subsystem-row-left">
            <span class="subsystem-status-indicator ${statusClass}"></span>
            <div style="display:flex; flex-direction:column;">
              <span class="subsystem-item-name" style="color:#fff; font-weight:600; font-size:0.75rem;">${sub.shortName || sub.name}</span>
              <span class="subsystem-item-type" style="font-size:0.62rem; color:var(--text-muted);">${sub.sourceType}</span>
            </div>
          </div>
          <div class="subsystem-row-right">
            <span class="subsystem-score-badge" style="color: ${sub.status === 'critical' ? 'var(--red-critical)' : sub.status === 'warning' ? 'var(--amber-warn)' : 'var(--green-ready)'}">${sub.healthScore}%</span>
            <span class="status-pill ${statusClass}" style="font-size:0.62rem; padding: 2px 6px;">${badgeText}</span>
          </div>
        </div>
      `;
    }).join('');
  },

  render3dComponentDetails(compId, mappedSubsystems = null, plane = null) {
    const container = document.getElementById('compDetailCard');
    if (!container) return;

    if (!plane) plane = this.state.getAircraftById(this.selected3dAircraftId) || this.state.getAircraft(this.selected3dAircraftId) || (this.state.getAircraftList && this.state.getAircraftList().find(a => a.id === this.selected3dAircraftId));
    if (!plane) return;

    if (!mappedSubsystems) {
      const thresholds = this.state.getThresholds();
      const workOrders = this.state.getWorkOrders();
      mappedSubsystems = AircraftComponentMapper.mapAircraftToComponents(plane, thresholds, workOrders);
    }

    const comp = mappedSubsystems.find(c => c.id === compId) || mappedSubsystems[0];
    if (!comp) return;

    const statusColor = comp.status === 'critical' ? 'var(--red-critical)' : comp.status === 'warning' ? 'var(--amber-warn)' : 'var(--green-ready)';

    const telemetryHtml = (comp.measurements && comp.measurements.length) ? `
      <div style="margin-top: 10px;">
        <span class="text-xs text-muted" style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Direct Telemetry &amp; Limit Checks:</span>
        <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 6px;">
          ${comp.measurements.map(m => `
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; padding: 4px 8px; background: rgba(0,0,0,0.25); border-radius: 4px; border-left: 2px solid ${statusColor};">
              <span style="color: var(--text-secondary);">${m.label}:</span>
              <span class="font-mono"><strong>${m.val}</strong> <span class="text-muted">(${m.limit})</span></span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const evidenceHtml = (comp.evidence && comp.evidence.length) ? `
      <div style="margin-top: 10px;">
        <span class="text-xs text-muted" style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Rule-Based Contributing Evidence:</span>
        <ul style="margin: 6px 0 0 16px; padding: 0; font-size: 0.75rem; color: #cbd5e1; line-height: 1.4;">
          ${comp.evidence.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    const workOrdersHtml = (comp.relatedOrders && comp.relatedOrders.length) ? `
      <div style="margin-top: 10px;">
        <span class="text-xs text-muted" style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Active Maintenance Work Orders (${comp.relatedOrders.length}):</span>
        <div style="margin-top: 6px; display: flex; flex-direction: column; gap: 4px;">
          ${comp.relatedOrders.map(wo => `
            <div style="background: rgba(14, 24, 40, 0.7); border: 1px solid var(--border-subtle); padding: 6px 8px; border-radius: 4px; font-size: 0.72rem;">
              <div style="display: flex; justify-content: space-between;">
                <strong style="color: var(--cyan-primary);">${wo.woId}</strong>
                <span class="risk-tag ${wo.priority.toLowerCase()}">${wo.priority}</span>
              </div>
              <div style="color: #fff; margin-top: 2px;">${wo.suspectedIssue}</div>
              <div class="text-muted text-xs" style="margin-top: 2px;">Assigned: ${wo.assignedTeam} &bull; Est: ${wo.estimatedDurationHours} hrs</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : `
      <div style="margin-top: 10px; font-size: 0.75rem; color: var(--text-secondary);">
        No active work orders currently open for this component.
      </div>
    `;

    container.innerHTML = `
      <div class="comp-card-header" style="align-items: flex-start;">
        <div>
          <span class="text-xs" style="color: var(--cyan-primary); font-weight: 700; letter-spacing: 0.5px;">SUBSYSTEM DOSSIER</span>
          <h3 class="comp-card-title" style="margin-top: 2px; font-size: 1.05rem;">${comp.name}</h3>
        </div>
        <span class="risk-tag ${comp.status === 'critical' ? 'critical' : comp.status === 'warning' ? 'medium' : 'low'}">
          ${comp.severity}
        </span>
      </div>

      <!-- Health Score Bar -->
      <div style="margin-top: 12px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 4px;">
          <span class="text-muted">Subsystem Integrity Index</span>
          <strong style="color: ${statusColor};">${comp.healthScore}%</strong>
        </div>
        <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
          <div style="width: ${comp.healthScore}%; height: 100%; background: ${statusColor};"></div>
        </div>
      </div>

      <div style="margin-top: 10px; font-size: 0.75rem;">
        <span class="text-muted">Data Source:</span>
        <strong style="color: #fff; margin-left: 4px;">${comp.sourceType}</strong>
      </div>

      ${telemetryHtml}
      ${evidenceHtml}

      <!-- Suggested Action Box -->
      <div style="margin-top: 12px; padding: 8px 10px; background: rgba(0, 229, 255, 0.05); border-left: 3px solid var(--cyan-primary); border-radius: 4px; font-size: 0.75rem;">
        <strong style="color: var(--cyan-primary);">Recommended Action:</strong>
        <p style="margin: 3px 0 0 0; color: #e2e8f0; line-height: 1.3;">${comp.nextAction}</p>
      </div>

      ${workOrdersHtml}

      <!-- Action Button -->
      <div style="margin-top: 14px; display: flex; gap: 8px;">
        <button class="btn btn-primary btn-sm" style="flex: 1;" onclick="AeroApp.openCreateWoModalForComponent('${plane.id}', '${comp.shortName || comp.name}', '${comp.severity}')">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Create Work Order
        </button>
        <button class="btn btn-outline btn-sm" onclick="AeroApp.switchTab('predictive')">
          Risk Rules
        </button>
      </div>
    `;
  },

  inspectAircraftIn3D(planeId) {
    this.selected3dAircraftId = planeId;
    const select = document.getElementById('select3dAircraft');
    if (select) select.value = planeId;

    this.switchTab('aircraft3d');
    this.select3dAircraft(planeId);

    // Auto-select engine or most critical component
    const plane = this.state.getAircraft(planeId);
    if (plane) {
      const thresholds = this.state.getThresholds();
      const mapped = AircraftComponentMapper.mapAircraftToComponents(plane, thresholds);
      const crit = mapped.find(m => m.status === 'critical') || mapped.find(m => m.status === 'warning') || mapped[0];
      if (crit) {
        this.select3dComponent(crit.id);
      }
    }
  },

  openCreateWoModalForComponent(planeId, compName, severity) {
    this.openCreateWoModal();
    const planeSelect = document.getElementById('woTargetAircraft');
    const issueInput = document.getElementById('woSuspectedIssue');
    const prioritySelect = document.getElementById('woPriority');

    if (planeSelect) planeSelect.value = planeId;
    if (issueInput) issueInput.value = `${compName} telemetry anomaly & scheduled inspection`;
    if (prioritySelect) {
      if (severity.includes('CRITICAL') || severity.includes('HIGH')) prioritySelect.value = 'CRITICAL';
      else if (severity.includes('ATTENTION') || severity.includes('INSPECTION')) prioritySelect.value = 'HIGH';
      else prioritySelect.value = 'MEDIUM';
    }
  }
};

// Auto-boot on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  AeroApp.init();
});
