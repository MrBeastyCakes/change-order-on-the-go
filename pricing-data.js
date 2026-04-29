// Lumina Pricing Tool — All service & material data
const PRICING_DATA = {
  laborRate: 50,
  multiplier: 2.0,
  adjustRate: 25,

  // Material catalog — canonical entries only
  materials: {
    labour_rf: { name: "Labor", unitCost: 50 },
    GAT: { name: "GAF Timberline HD Shingles", unitCost: 41.26 },
    GASR: { name: "Capping", unitCost: 56.63 },
    GASST: { name: "Starter", unitCost: 57.55 },
    "I&W44": { name: "Ice & Water Shield", unitCost: 66.33 },
    RNSASY: { name: "Synthetic Underlayment", unitCost: 135.90 },
    SDECH: { name: "Drip Edge", unitCost: 6.50 },
    GAVRT65: { name: "Roof Vent", unitCost: 17.10 },
    PRMXV: { name: "Primex Vent", unitCost: 18.18 },
    PRMXA4: { name: "Primex Adaptors 4\"", unitCost: 10.96 },
    FLXHS4: { name: "Boflex Insulated Hose 4\"x25'", unitCost: 66.66 },
    ABSP3: { name: 'ABS Pipe 3" 12\'', unitCost: 28.87 },
    FPQ33: { name: "3x3 Fernco", unitCost: 6.28 },
    DURAF3: { name: '3" Plumbing Boot', unitCost: 12.40 },
    DURAF4: { name: '4" Plumbing Boot', unitCost: 13.11 },
    STFLG: { name: "Step Flashing", unitCost: 1.30 },
    GALVRF: { name: "Galvanized Roll Flashing", unitCost: 85.25 },
    WAFLB: { name: "Wall Flashing Brown Inside", unitCost: 23.55 },
    SCFLDB: { name: "Counter Flashing Dark Brown", unitCost: 21.50 },
    VALF: { name: "Valley Flashing", unitCost: 74.90 },
    CFCSG: { name: "Flintlastic CapSheet", unitCost: 167.90 },
    CFPB: { name: "Flintlastic Plybase", unitCost: 158.00 },
    LMRV30: { name: "Ridgevent", unitCost: 134.00 },
    LOMDAV: { name: "Deck-Air Roof Vent (4' pieces)", unitCost: 31.50 },
    PLY58: { name: 'Plywood 5/8"', unitCost: 54.00 },
    OSB716: { name: 'OSB 7/16"', unitCost: 15.00 },
    sp148: { name: "SPF 1x4x8'", unitCost: 14.88 },
    SP168: { name: "SPF 1x6x8'", unitCost: 12.00 },
    SP188: { name: "SPF 1x8x8'", unitCost: 16.00 },
    SP248: { name: "SPF 2x4x8'", unitCost: 5.00 },
    CLNL114: { name: 'Coil Nails (Box) 1 1/4"', unitCost: 25.00 },
    SUPBL: { name: "Mulco Supra Black", unitCost: 6.21 },
    SUPDB: { name: "Mulco Supra Dark Brown", unitCost: 6.21 },
    SUPCL: { name: "Mulco Supra Clear", unitCost: 6.21 },
    SUP: { name: "Mulco Supra (General)", unitCost: 6.21 },
    CELLWS: { name: "Cellulose Bags", unitCost: 13.50 },
    CTR1216: { name: 'Certainteed Insul. R12x16"', unitCost: 42.80 },
    WS: { name: "Weatherstripping", unitCost: 15.00 },
    TREXGF: { name: "Tremco Exoair LEF Gun Foam", unitCost: 13.07 },
    DGB1212: { name: "Duraflo Gable Vent 12x12", unitCost: 25.67 },
    GGC: { name: '11 7/8" Gutter Coil Gentek Black', unitCost: 1.73 },
    EXTH5: { name: 'Extruded Trough Hangers 5"', unitCost: 0.34 },
    GDLG: { name: '3x3" Downpipe Gentek White', unitCost: 18.74 },
    GELG: { name: '3x3" Elbows Gentek White', unitCost: 2.29 },
    GPS: { name: "Pipe Straps Gentek White", unitCost: 0.56 },
    GS: { name: '16" 4-Panel Vented Soffit Gentek', unitCost: 18.60 },
    GF6: { name: '6" Ribbed Fascia Gentek', unitCost: 11.79 },
    GF8: { name: '8" Ribbed Fascia Gentek', unitCost: 15.90 },
    GF1: { name: '10" Ribbed Fascia Gentek', unitCost: 26.24 },
    GJC: { name: 'J Trim 3/8" Gentek', unitCost: 5.96 },
    GGT: { name: "Gable Sill Trim Gentek", unitCost: 9.04 },
    GPG: { name: "Gentek Touch Up Paint", unitCost: 22.00 },
    GTC: { name: "Trim Coil Gentek", unitCost: 3.61 },
    KTGS: { name: "Tremco Gutter Seal White", unitCost: 8.14 },
    RYCD: { name: "Custom Drip", unitCost: 7.28 },
    GECL: { name: "End Cap Left Gentek White", unitCost: 0.56 },
    GECR: { name: "End Cap Right Gentek White", unitCost: 0.56 },
    REX52: { name: "Alu-Rex M-5200", unitCost: 17.01 },
    REX53: { name: "Alu-Rex M-5300 (retrofit 7ft)", unitCost: 18.15 },
    ZIPHINGE: { name: "Zip Hinge Downpipe Hinges", unitCost: 11.50 },
    H20DVTRLGG: { name: "3x3 Water Diverter", unitCost: 50.00 },
    GP: { name: "Gentek Paint (General)", unitCost: 22.00 },
    Tarp: { name: "Rain Tarp", unitCost: 100.00 },
    Adjust: { name: "Adjustment", unitCost: 25.00 },
  },

  // Case-insensitive material lookup
  materialLookup: function(code) {
    var key = String(code || "").trim();
    if (this.materials[key]) return this.materials[key];
    var lk = key.toLowerCase();
    for (var k in this.materials) {
      if (this.materials.hasOwnProperty(k) && k.toLowerCase() === lk) return this.materials[k];
    }
    return null;
  },

  // Services
  services: [
    { name: "Shingle Repair", basePrice: 450, formula: "GAT-0.5/SUP-1/labour_rf-2/Adjust-3" },
    { name: "Roof Inspection & Report", basePrice: 250, formula: "labour_rf-2/Adjust-1" },
    { name: "Leak Assessment & Repair", basePrice: 250, formula: "SUPCL-1/GAT-0.25/labour_rf-2/Adjust-1" },
    { name: "Plumbing Stack Conversion", basePrice: 525, formula: "ABSP3-0.1/DURAF3-1/I&W44-0.1/FPQ33-1/GAT-0.25/labour_rf-4/Adjust-2" },
    { name: "Cannon Stack Flashing", basePrice: 550, formula: "duraf4-1/supcl-1/labour_rf-3/Adjust-2" },
    { name: "Roof Vent Installation (1)", basePrice: 250, formula: "GAVRT65-1/labour_rf-2/Adjust-2" },
    { name: "Deck Air Vent Install (4')", basePrice: 500, formula: "Lomdav-1/I&W44-0.2/GAT-0.5/labour_rf-4" },
    { name: "Flashing & Shingle Replacement", basePrice: 750, formula: "scfldb-1.5/STFLG-20/WAFLB-1/I&W44-0.25/GAT-1/SUP-2/GALVRF-0.2/clnl114-0.1/labour_rf-6" },
    { name: "Counterflashing Installation (10')", basePrice: 400, formula: "scfldb-1/supcl-2/labour_rf-3" },
    { name: "Metal Chimney Removal", basePrice: 750, formula: "GAT-2/OSB716-1/I&W44-0.1/TREXGF-0.25/ctr1216-1/labour_rf-4" },
    { name: "Brick Chimney Removal", basePrice: 1600, formula: "GAT-2/OSB716-1/I&W44-0.1/TREXGF-0.25/PLY58-1/ctr1216-1/labour_rf-6/Adjust-1" },
    { name: "Chimney Cap Re-sealing", basePrice: 300, formula: "supcl-1/labour_rf-2/Adjust-1" },
    { name: "Animal Entry Point Repair", basePrice: 450, formula: "GGC-10/STFLG-5/rycd-1/labour_rf-2/Adjust-3" },
    { name: "Plumbing Mat Installation", basePrice: 250, formula: "duraf3-1/supbl-1/labour_rf-2/Adjust-3" },
    { name: "Chimney Saddle Build", basePrice: 1000, formula: "sp248-3/osb716-1/gat-3/gasr-0.5/I&W44-0.5/supcl-4/labour_RF-8/scfldb-3/stflg-40" },
    { name: "Downspout Repair Service", basePrice: 250, formula: "GELG-2/GDLG-2/GPS-2/labour_rf-2" },
    { name: "Eaves Sealant Repair", basePrice: 250, formula: "KTGS-1/labour_rf-2" },
    { name: "Fascia Repair", basePrice: 250, formula: "GF6-1/GF8-1/GGT-1/labour_rf-2/Adjust-1" },
    { name: "Fascia Board Repair", basePrice: 7, formula: "SP168-1/labour_rf-2" },
    { name: "Retro Drip Edge Installation", basePrice: 250, formula: "GGC-20/rycd-1/labour_rf-2" },
    { name: "Soffit Repair", basePrice: 250, formula: "GS-1/GJC-1/labour_rf-3" },
    { name: "Downpipe Replacement (1 Story)", basePrice: 250, formula: "GELG-3/GDLG-2/GPS-3/GP-0.25/ZIPHINGE-1/labour_rf-2/Adjust-1" },
    { name: "Downpipe Replacement (2 Story)", basePrice: 350, formula: "GELG-4/GDLG-4/GPS-4/GP-0.25/ZIPHINGE-1/labour_rf-3" },
    { name: "Retrofit Gutter Guard", basePrice: 8.75, formula: "REX53-1/labour_rf-2" },
    { name: "Eavestrough Replacement Service", basePrice: 750, formula: "GGC-25/GECL-1/GECR-1/GELG-3/GDLG-2/GPS-3/GP-0.25/EXTH5-10/KTGS-1/labour_rf-5" },
    { name: "Eavestrough Cleaning", basePrice: 6.5, formula: "labour_rf-3" },
    { name: "Exterior Siding Repair", basePrice: 300, formula: "SUP-2/labour_rf-4" },
    { name: "Roof Tarp", basePrice: 0, formula: "Labour_RF-4/sp148-12/Tarp-1" },
    { name: "Gable Vent Installation", basePrice: 500, formula: "dgb1212-1/SUPCl-2/labour_rf-4/Adjust-1" },
    { name: "Primex Vent Installation", basePrice: 575, formula: "PRMXV-1/PRMXA4-1/supcl-1/labour_rf-2/Adjust-2" },
    { name: "Attic Inspection & Diagnosis", basePrice: 275, formula: "FLXHS-0.25/TREXGF-0.5/labour_rf-2" },
    { name: "Air Sealing", basePrice: 400, formula: "cellws-1/TREXGF-1/labour_rf-4" },
    { name: "Exhaust Ducting Replacement", basePrice: 475, formula: "CELLWS-1/PRMXA-1/PRMXA4-1/FLXHS4-0.25/TREXGF-0.5/labour_rf-3/Adjust-2" },
    { name: "Exhaust Duct & Vent Replacement", basePrice: 625, formula: "CELLWS-1/GAT-0.25/I&W44-0.1/PRMXV-1/PRMXA4-1/FLXHS4-0.25/TREXGF-0.5/labour_rf-4.5/Adjust-2" },
    { name: "Attic Hatch Treatment", basePrice: 500, formula: "WS-0.25/TREXGF-0.5/ply58-0.5/labour_rf-3/Adjust-2" },
    { name: "Thermal Camera Inspection", basePrice: 250, formula: "labour_rf-2/Adjust-3" },
    { name: "Insulate Plumbing Stack", basePrice: 450, formula: "CTR1216-0.25/labour_rf-2/Adjust-4" },
    { name: "Roof Top Snow Clearing", basePrice: 349, formula: "" },
    { name: "Unclog Plumbing Stack (Debris)", basePrice: 300, formula: "labour_rf-2/Adjust-3" },
  ],

  // Difficulty-based pricing per-unit rates
  difficultyRates: {
    Eaves: { Easy: 9.9, Medium: 10.95, Hard: 11.15 },
    Downpipes: { Easy: 9.9, Medium: 10.55, Hard: 11.15 },
    "Soffit & Fascia": { Easy: 16.25, Medium: 18.8, Hard: 21.9 },
    "OS Soffit": { Easy: 8.5, Medium: 9.35, Hard: 10 },
    "Fascia Only": { Easy: 7.15, Medium: 8.2, Hard: 9.5 },
    Cladding: { Easy: 13, Medium: 15, Hard: 16 },
    "Fascia repairs": { Easy: 4.5, Medium: 5, Hard: 5.5 },
    "Retro drip": { Easy: 5, Medium: 6, Hard: 7 },
    "retro alurex": { Easy: 7, Medium: 8, Hard: 9 },
  },

  // Categories
  categories: [
    {
      name: "Roofing",
      services: [
        "Shingle Repair", "Roof Inspection & Report", "Leak Assessment & Repair",
        "Flashing & Shingle Replacement", "Roof Vent Installation (1)",
        "Deck Air Vent Install (4')", "Counterflashing Installation (10')",
        "Gable Vent Installation", "Primex Vent Installation", "Roof Tarp",
        "Thermal Camera Inspection",
      ]
    },
    {
      name: "Chimney & Stacks",
      services: [
        "Plumbing Stack Conversion", "Cannon Stack Flashing", "Chimney Cap Re-sealing",
        "Chimney Saddle Build", "Metal Chimney Removal", "Brick Chimney Removal",
        "Plumbing Mat Installation", "Insulate Plumbing Stack", "Unclog Plumbing Stack (Debris)",
      ]
    },
    {
      name: "Eavestrough & Downpipes",
      services: [
        "Eavestrough Replacement Service", "Eavestrough Cleaning",
        "Downspout Repair Service", "Downpipe Replacement (1 Story)",
        "Downpipe Replacement (2 Story)", "Retrofit Gutter Guard", "Eaves Sealant Repair",
      ]
    },
    {
      name: "Soffit & Fascia",
      services: [
        "Fascia Repair", "Fascia Board Repair", "Soffit Repair",
        "Retro Drip Edge Installation",
      ]
    },
    {
      name: "Attic & Air",
      services: [
        "Attic Inspection & Diagnosis", "Air Sealing",
        "Exhaust Ducting Replacement", "Exhaust Duct & Vent Replacement",
        "Attic Hatch Treatment",
      ]
    },
    {
      name: "Other",
      services: [
        "Animal Entry Point Repair", "Exterior Siding Repair", "Roof Top Snow Clearing",
      ]
    }
  ]
};
