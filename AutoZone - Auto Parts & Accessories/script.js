/**
 * AutoZone Auto Parts & Accessories
 * Domain: E-Commerce | Task ID: WD-EC-006 (Data Alcott Systems)
 * Pure JavaScript Architecture with LocalStorage Persistence
 */

// =============================================================================
// 1. DATA REPOSITORY: VEHICLES, BRANDS & AUTOMOTIVE PRODUCTS
// =============================================================================

const VEHICLE_DATA = {
  Toyota: ["Camry", "Corolla", "RAV4", "Tacoma", "Highlander"],
  Honda: ["Civic", "Accord", "CR-V", "Pilot", "Ridgeline"],
  Ford: ["F-150", "Mustang", "Explorer", "Escape", "Ranger"],
  Chevrolet: ["Silverado 1500", "Malibu", "Equinox", "Tahoe", "Camaro"],
  BMW: ["330i", "540i", "X3", "X5", "M3"],
  Hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade"]
};

// Comprehensive inventory covering Engine, Brakes, Lighting & Accessories
const PRODUCTS = [
  {
    id: 1,
    name: "Bosch Premium High-Filtration Oil Filter",
    brand: "Bosch",
    category: "engine",
    price: 14.99,
    rating: 4.8,
    reviews: 142,
    bodyType: ["Sedan", "SUV", "Truck"],
    compatibleVehicles: ["Toyota Camry", "Toyota Corolla", "Honda Civic", "Ford F-150", "Chevrolet Silverado 1500"],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80",
    description: "Premium FILTECH filtration media captures 99% of harmful engine contaminants to preserve piston ring life.",
    specs: {
      "Filter Type": "Spin-on Oil Filter",
      "Burst Strength": "350 psi",
      "Gasket Material": "High-Temp Nitrile",
      "Warranty": "1-Year Limited"
    }
  },
  {
    id: 2,
    name: "Akebono Ultra-Quiet Ceramic Front Brake Pads",
    brand: "Akebono",
    category: "brakes",
    price: 68.50,
    rating: 4.9,
    reviews: 219,
    bodyType: ["Sedan", "SUV"],
    compatibleVehicles: ["Toyota Camry", "Honda Accord", "Honda Civic", "BMW 330i", "Hyundai Sonata"],
    image: "https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&w=400&q=80",
    description: "Original Equipment formulation ceramic brake pads offering zero rotor wear, minimal dusting, and ultra-quiet stopping.",
    specs: {
      "Pad Material": "Ceramic Composite",
      "Friction Rating": "GG Level",
      "Hardware Kit": "Included (Stainless Steel)",
      "Warranty": "3-Year Roadside"
    }
  },
  {
    id: 3,
    name: "Philips CrystalVision Ultra 6000K LED Headlight Bulbs",
    brand: "Philips",
    category: "lighting",
    price: 94.99,
    rating: 4.7,
    reviews: 87,
    bodyType: ["Sedan", "SUV", "Truck", "Universal"],
    compatibleVehicles: ["Toyota Camry", "Ford F-150", "Honda CR-V", "Chevrolet Silverado 1500", "BMW X5"],
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=400&q=80",
    description: "Diamond-bright 6000K crisp white beam profile providing up to 200% wider road visibility without blinding oncoming drivers.",
    specs: {
      "Bulb Socket": "H11 / 9005 Combo",
      "Luminous Flux": "12,000 Lumens Pair",
      "Cooling Tech": "AirFlux Maglev Turbo Fan",
      "Lifespan": "50,000 Operating Hours"
    }
  },
  {
    id: 4,
    name: "WeatherTech DigitalFit All-Weather Laser Floor Mats",
    brand: "WeatherTech",
    category: "accessories",
    price: 139.95,
    rating: 4.9,
    reviews: 310,
    bodyType: ["Sedan", "SUV", "Truck"],
    compatibleVehicles: ["Toyota Camry", "Ford F-150", "Toyota RAV4", "Honda CR-V", "Chevrolet Tahoe"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    description: "Laser-measured deep ribbed channels trap snow, mud, and motor oil spills, protecting factory carpets permanently.",
    specs: {
      "Material": "High-Density Tri-Extruded (HDTE)",
      "Fitment": "Laser Measured Specific",
      "Cleaning": "Hose-washable in 2 mins",
      "Made in": "United States"
    }
  },
  {
    id: 5,
    name: "Brembo Cross-Drilled & Slotted Performance Rotors",
    brand: "Brembo",
    category: "brakes",
    price: 189.00,
    rating: 4.8,
    reviews: 64,
    bodyType: ["Sedan", "SUV"],
    compatibleVehicles: ["BMW 330i", "BMW M3", "Ford Mustang", "Toyota Camry"],
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80",
    description: "High-carbon iron alloy brake disc with bi-directional ventilation slots to eliminate brake fade under spirited driving.",
    specs: {
      "Rotor Diameter": "345mm Vented",
      "Coating": "UV Anti-Corrosion Zinc Plated",
      "Vane Design": "Pillar Venting Channel",
      "Vibration Damping": "Dynamically Balanced"
    }
  },
  {
    id: 6,
    name: "K&N Cold High-Flow Washable Air Filter",
    brand: "K&N",
    category: "engine",
    price: 59.99,
    rating: 4.6,
    reviews: 178,
    bodyType: ["Sedan", "SUV", "Truck"],
    compatibleVehicles: ["Ford F-150", "Chevrolet Silverado 1500", "Toyota Tacoma", "Honda Civic"],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80",
    description: "Engineered to increase horsepower and throttle torque by improving volumetric airflow by up to 50%.",
    specs: {
      "Media": "4-Layer Oiled Cotton Gauze",
      "Service Interval": "Clean every 75,000 miles",
      "Emissions": "50-State Legal (CARB EO#)",
      "Warranty": "1,000,000 Mile Limited"
    }
  },
  {
    id: 7,
    name: "Mobil 1 Advanced Full Synthetic 5W-30 Motor Oil (5 Qt)",
    brand: "Mobil 1",
    category: "engine",
    price: 32.99,
    rating: 5.0,
    reviews: 580,
    bodyType: ["Sedan", "SUV", "Truck", "Universal"],
    compatibleVehicles: ["Toyota Camry", "Honda Civic", "Ford F-150", "Chevrolet Malibu", "Hyundai Elantra"],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=400&q=80",
    description: "Provides superior thermal breakdown protection for up to 10,000 miles between oil changes.",
    specs: {
      "Viscosity": "SAE 5W-30",
      "Standards": "API SP, ILSAC GF-6A",
      "Volume": "5 US Quarts (4.73 L)",
      "Application": "Gasoline Direct Injection Engines"
    }
  },
  {
    id: 8,
    name: "Optima RedTop AGM Extreme Cranking Battery",
    brand: "Optima",
    category: "lighting",
    price: 249.99,
    rating: 4.8,
    reviews: 93,
    bodyType: ["Truck", "SUV", "Sedan"],
    compatibleVehicles: ["Ford F-150", "Chevrolet Silverado 1500", "Toyota Tacoma", "BMW X5"],
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=400&q=80",
    description: "SpiralCell design delivers strongest 5-second ignition burst and 15x more vibration resistance than standard flooded batteries.",
    specs: {
      "Cold Cranking Amps": "800 CCA at 0°F",
      "Reserve Capacity": "100 Minutes",
      "Cell Type": "Absorbed Glass Mat (AGM)",
      "Spill Proof": "100% Sealed Maintenance Free"
    }
  },
  {
    id: 9,
    name: "Spigen MagFit 15W Qi Magnetic Phone Car Mount",
    brand: "Spigen",
    category: "accessories",
    price: 39.99,
    rating: 4.6,
    reviews: 145,
    bodyType: ["Universal"],
    compatibleVehicles: ["Toyota Camry", "Honda Civic", "Ford F-150", "BMW 330i", "Hyundai Elantra"],
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=400&q=80",
    description: "One-tap magnetic latch with 360-degree ball joint articulation and fast Qi induction charging.",
    specs: {
      "Mount Type": "Air Vent Clamp & Dashboard Plate",
      "Fast Charging": "15W MagSafe Compatible",
      "Magnets": "N52 Rare Earth Neodymium",
      "Cable Included": "USB-C to USB-C Braided"
    }
  },
  {
    id: 10,
    name: "Autel MaxiCheck OBD2 Diagnostic Code Scanner",
    brand: "Autel",
    category: "accessories",
    price: 119.00,
    rating: 4.9,
    reviews: 180,
    bodyType: ["Universal"],
    compatibleVehicles: ["Toyota Camry", "Honda Civic", "Ford F-150", "Chevrolet Silverado 1500", "BMW 330i"],
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=400&q=80",
    description: "Instantly reads Check Engine trouble codes, resets ABS/SRS lights, and generates live sensor graphs.",
    specs: {
      "Protocol": "CAN, OBD-II, EOBD",
      "Display": "2.8-inch TFT Color Screen",
      "Updates": "Lifetime Free Internet Firmware",
      "Functions": "I/M Readiness, O2 Sensor Test"
    }
  }
];

// =============================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// =============================================================================

let state = {
  cart: JSON.parse(localStorage.getItem("az_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("az_wishlist")) || [],
  orders: JSON.parse(localStorage.getItem("az_orders")) || [
    {
      id: "AZ-84920",
      date: "2026-09-24",
      status: "Shipped",
      items: [
        { name: "Bosch Premium High-Filtration Oil Filter", qty: 2, price: 14.99 },
        { name: "Mobil 1 Advanced Full Synthetic 5W-30 Motor Oil", qty: 1, price: 32.99 }
      ],
      total: 62.97,
      carrier: "FedEx Express Priority",
      trackingNumber: "774918239012"
    }
  ],
  garage: JSON.parse(localStorage.getItem("az_garage")) || [
    { year: "2024", make: "Toyota", model: "Camry" },
    { year: "2023", make: "Ford", model: "F-150" }
  ],
  activeVehicle: JSON.parse(localStorage.getItem("az_active_vehicle")) || { year: "2024", make: "Toyota", model: "Camry" },
  currentCategory: "all",
  searchQuery: "",
  selectedBrands: [],
  selectedBodyTypes: [],
  maxPrice: 300,
  minRating: 0,
  sortBy: "featured",
  discountPercent: 0,
  discountCode: ""
};

function saveState() {
  localStorage.setItem("az_cart", JSON.stringify(state.cart));
  localStorage.setItem("az_wishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("az_orders", JSON.stringify(state.orders));
  localStorage.setItem("az_garage", JSON.stringify(state.garage));
  localStorage.setItem("az_active_vehicle", JSON.stringify(state.activeVehicle));
}

// =============================================================================
// 3. APPLICATION INITIALIZATION & NAVIGATION ROUTER
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderActiveVehicleBanner();
  renderBrandFilterOptions();
  renderHomeFeaturedProducts();
  renderCatalogProducts();
  updateCartCounters();
  updateWishlistCounters();
  renderGarageVehicles();
  renderOrderHistoryTable();

  // Populate hero vehicle selector
  populateModels();
});

function navigateTo(viewName, tabTarget = null) {
  document.querySelectorAll(".page-view").forEach(view => view.classList.remove("active-view"));
  
  const targetElement = document.getElementById(`view-${viewName}`);
  if (targetElement) {
    targetElement.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (viewName === "account" && tabTarget) {
    const tabBtn = document.querySelector(`.acc-tab[onclick*="${tabTarget}"]`);
    if (tabBtn) switchAccountTab(tabTarget, tabBtn);
  }

  if (viewName === "checkout") {
    renderCheckoutSummary();
  }
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  msgEl.textContent = message;
  toast.classList.add("active");
  setTimeout(() => {
    toast.classList.remove("active");
  }, 2800);
}

// =============================================================================
// 4. VEHICLE COMPATIBILITY & GARAGE MANAGEMENT (CORE & BONUS FEATURE)
// =============================================================================

function populateModels() {
  const make = document.getElementById("heroMake").value;
  const modelSelect = document.getElementById("heroModel");
  modelSelect.innerHTML = '<option value="">Select Model</option>';

  if (VEHICLE_DATA[make]) {
    VEHICLE_DATA[make].forEach(model => {
      const opt = document.createElement("option");
      opt.value = model;
      opt.textContent = model;
      modelSelect.appendChild(opt);
    });
  }
}

function populateModalModels() {
  const make = document.getElementById("modalVehicleMake").value;
  const modelSelect = document.getElementById("modalVehicleModel");
  modelSelect.innerHTML = '<option value="">Select Model</option>';

  if (VEHICLE_DATA[make]) {
    VEHICLE_DATA[make].forEach(model => {
      const opt = document.createElement("option");
      opt.value = model;
      opt.textContent = model;
      modelSelect.appendChild(opt);
    });
  }
}

function handleHeroVehicleSubmit(e) {
  e.preventDefault();
  const year = document.getElementById("heroYear").value;
  const make = document.getElementById("heroMake").value;
  const model = document.getElementById("heroModel").value;

  if (!year || !make || !model) {
    alert("Please choose Year, Make, and Model to filter compatible parts.");
    return;
  }

  setActiveVehicle(year, make, model);
  filterByCategory("all");
}

function setActiveVehicle(year, make, model) {
  state.activeVehicle = { year, make, model };
  
  // If not already in garage, push
  const exists = state.garage.some(v => v.year === year && v.make === make && v.model === model);
  if (!exists) {
    state.garage.push({ year, make, model });
  }

  saveState();
  renderActiveVehicleBanner();
  renderGarageVehicles();
  applyFilters();
  showToast(`Active Vehicle set to ${year} ${make} ${model}`);
}

function renderActiveVehicleBanner() {
  const activeDisplay = document.getElementById("activeVehicleDisplay");
  const sidebarNotice = document.getElementById("sidebarVehicleNotice");
  const garageNoticeStrip = document.getElementById("garageNoticeCard");
  const garageNoticeName = document.getElementById("garageNoticeVehicleName");
  const profileCarName = document.getElementById("profileCarName");

  if (state.activeVehicle && state.activeVehicle.make) {
    const formatted = `${state.activeVehicle.year} ${state.activeVehicle.make} ${state.activeVehicle.model}`;
    activeDisplay.textContent = formatted;
    profileCarName.textContent = formatted;

    sidebarNotice.innerHTML = `<span><strong>${formatted}</strong></span><button class="btn-xs" onclick="openVehicleModal()">Change</button>`;
    
    garageNoticeStrip.classList.remove("hidden");
    garageNoticeName.textContent = formatted;
  } else {
    activeDisplay.textContent = "Select Garage Car";
    sidebarNotice.innerHTML = `<span>No vehicle chosen</span><button class="btn-xs" onclick="openVehicleModal()">Set Car</button>`;
    garageNoticeStrip.classList.add("hidden");
  }
}

function openVehicleModal() {
  const modal = document.getElementById("vehicleSelectorModal");
  const listContainer = document.getElementById("modalSavedVehicles");
  listContainer.innerHTML = "";

  state.garage.forEach((veh, idx) => {
    const isCurrent = state.activeVehicle && state.activeVehicle.year === veh.year && state.activeVehicle.make === veh.make && state.activeVehicle.model === veh.model;
    const item = document.createElement("div");
    item.className = `garage-select-item ${isCurrent ? 'selected' : ''}`;
    item.innerHTML = `
      <span><i class="fa-solid fa-car-side"></i> ${veh.year} ${veh.make} ${veh.model}</span>
      ${isCurrent ? '<span class="badge-pill"><i class="fa-solid fa-check"></i> Active</span>' : `<button class="btn-xs" onclick="selectGarageVehicle(${idx})">Select</button>`}
    `;
    listContainer.appendChild(item);
  });

  modal.classList.add("active");
}

function closeVehicleModal() {
  document.getElementById("vehicleSelectorModal").classList.remove("active");
}

function selectGarageVehicle(index) {
  const veh = state.garage[index];
  setActiveVehicle(veh.year, veh.make, veh.model);
  closeVehicleModal();
}

function handleSaveVehicleFromModal(e) {
  e.preventDefault();
  const year = document.getElementById("modalVehicleYear").value;
  const make = document.getElementById("modalVehicleMake").value;
  const model = document.getElementById("modalVehicleModel").value;

  setActiveVehicle(year, make, model);
  closeVehicleModal();
}

function renderGarageVehicles() {
  const container = document.getElementById("garageCardsContainer");
  if (!container) return;
  container.innerHTML = "";

  state.garage.forEach((v, index) => {
    const isActive = state.activeVehicle && state.activeVehicle.year === v.year && state.activeVehicle.make === v.make && state.activeVehicle.model === v.model;
    const card = document.createElement("div");
    card.className = `garage-vehicle-card ${isActive ? 'active-car' : ''}`;
    card.innerHTML = `
      <span class="vehicle-card-badge">${isActive ? 'PRIMARY ACTIVE' : 'GARAGE VEHICLE'}</span>
      <h4>${v.year} ${v.make} ${v.model}</h4>
      <div class="vehicle-specs-list">
        <div>Engine: Factory Spec Gasoline Injection</div>
        <div>Chassis: Original OEM Fitment</div>
      </div>
      <div class="vehicle-actions">
        ${!isActive ? `<button class="btn btn-navy btn-xs" onclick="selectGarageVehicle(${index})">Set as Active</button>` : ''}
        <button class="btn btn-outline btn-xs" onclick="deleteGarageVehicle(${index})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    container.appendChild(card);
  });
}

function deleteGarageVehicle(index) {
  if (state.garage.length <= 1) {
    alert("You must retain at least one vehicle in your garage.");
    return;
  }
  state.garage.splice(index, 1);
  saveState();
  renderGarageVehicles();
}

// Fitment helper
function isProductCompatible(product, vehicle) {
  if (!vehicle || !vehicle.make) return "unknown";
  const vehicleFullName = `${vehicle.make} ${vehicle.model}`;
  
  if (product.compatibleVehicles.includes(vehicleFullName) || product.bodyType.includes("Universal")) {
    return "guaranteed";
  }
  return "universal";
}

// =============================================================================
// 5. PRODUCT DISPLAY, SEARCH & ADVANCED FILTERS
// =============================================================================

function renderBrandFilterOptions() {
  const brandListContainer = document.getElementById("brandFilterList");
  if (!brandListContainer) return;
  
  const brands = [...new Set(PRODUCTS.map(p => p.brand))];
  brandListContainer.innerHTML = "";

  brands.forEach(brand => {
    const label = document.createElement("label");
    label.className = "checkbox-container";
    label.innerHTML = `
      <input type="checkbox" value="${brand}" class="filter-brand-check" onchange="applyFilters()">
      <span class="checkmark"></span> ${brand}
    `;
    brandListContainer.appendChild(label);
  });
}

function handlePriceSlider(val) {
  state.maxPrice = parseFloat(val);
  document.getElementById("priceRangeVal").textContent = `$${val}`;
  applyFilters();
}

function filterByCategory(cat) {
  state.currentCategory = cat;
  
  // Highlight sidebar pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.cat === cat);
  });

  // Breadcrumbs & Title
  const titles = {
    all: "All Auto Parts & Inventory",
    engine: "Engine Parts & Mechanical Components",
    brakes: "Brakes, Pads & Rotors",
    lighting: "Lighting & Electrical Systems",
    accessories: "Interior & Exterior Accessories"
  };
  document.getElementById("catalogBreadcrumb").textContent = titles[cat] || "All Parts";
  document.getElementById("catalogCategoryHeading").textContent = titles[cat] || "All Auto Parts";

  navigateTo("catalog");
  applyFilters();
}

function setCategoryFilter(cat, btn) {
  state.currentCategory = cat;
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  applyFilters();
}

function handleGlobalSearch(e) {
  if (e.key === "Enter") {
    triggerSearch();
  }
}

function triggerSearch() {
  const query = document.getElementById("globalSearchInput").value.trim().toLowerCase();
  state.searchQuery = query;
  navigateTo("catalog");
  applyFilters();
}

function resetFilters() {
  state.searchQuery = "";
  state.currentCategory = "all";
  state.maxPrice = 300;
  state.minRating = 0;
  state.selectedBrands = [];
  state.selectedBodyTypes = [];

  document.getElementById("globalSearchInput").value = "";
  document.getElementById("priceRangeInput").value = 300;
  document.getElementById("priceRangeVal").textContent = "$300";
  document.getElementById("ratingFilterSelect").value = "0";
  document.getElementById("catalogSortSelect").value = "featured";
  document.getElementById("onlyCompatibleCheckbox").checked = false;

  document.querySelectorAll(".filter-brand-check").forEach(cb => cb.checked = false);
  document.querySelectorAll(".filter-body-type").forEach(cb => cb.checked = false);
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.cat === "all"));

  applyFilters();
}

function applyFilters() {
  // Collect checkbox inputs
  const brandCheckboxes = document.querySelectorAll(".filter-brand-check:checked");
  state.selectedBrands = Array.from(brandCheckboxes).map(cb => cb.value);

  const bodyCheckboxes = document.querySelectorAll(".filter-body-type:checked");
  state.selectedBodyTypes = Array.from(bodyCheckboxes).map(cb => cb.value);

  state.minRating = parseFloat(document.getElementById("ratingFilterSelect").value) || 0;
  state.sortBy = document.getElementById("catalogSortSelect").value;
  const onlyFit = document.getElementById("onlyCompatibleCheckbox").checked;

  let filtered = PRODUCTS.filter(prod => {
    // Category check
    if (state.currentCategory !== "all" && prod.category !== state.currentCategory) {
      return false;
    }
    // Search keyword check
    if (state.searchQuery) {
      const match = prod.name.toLowerCase().includes(state.searchQuery) ||
                    prod.brand.toLowerCase().includes(state.searchQuery) ||
                    prod.description.toLowerCase().includes(state.searchQuery);
      if (!match) return false;
    }
    // Brand check
    if (state.selectedBrands.length > 0 && !state.selectedBrands.includes(prod.brand)) {
      return false;
    }
    // Price check
    if (prod.price > state.maxPrice) {
      return false;
    }
    // Rating check
    if (prod.rating < state.minRating) {
      return false;
    }
    // Body type check
    if (state.selectedBodyTypes.length > 0) {
      const hasBody = prod.bodyType.some(bt => state.selectedBodyTypes.includes(bt));
      if (!hasBody) return false;
    }
    // Fitment guarantee check
    if (onlyFit && state.activeVehicle && state.activeVehicle.make) {
      const comp = isProductCompatible(prod, state.activeVehicle);
      if (comp !== "guaranteed") return false;
    }

    return true;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (state.sortBy === "price-asc") return a.price - b.price;
    if (state.sortBy === "price-desc") return b.price - a.price;
    if (state.sortBy === "rating-desc") return b.rating - a.rating;
    if (state.sortBy === "name-asc") return a.name.localeCompare(b.name);
    return a.id - b.id; // featured default
  });

  renderCatalogProducts(filtered);
}

function renderCatalogProducts(productList = PRODUCTS) {
  const container = document.getElementById("catalogProductsGrid");
  const countDisplay = document.getElementById("catalogResultCount");
  const emptyState = document.getElementById("noProductsFound");

  if (!container) return;
  container.innerHTML = "";
  countDisplay.textContent = `Showing ${productList.length} parts`;

  if (productList.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  productList.forEach(prod => {
    const card = createProductCard(prod);
    container.appendChild(card);
  });
}

function renderHomeFeaturedProducts() {
  const container = document.getElementById("homeFeaturedGrid");
  if (!container) return;
  container.innerHTML = "";

  // Showcase first 4 high-demand products
  PRODUCTS.slice(0, 4).forEach(prod => {
    const card = createProductCard(prod);
    container.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  const fitment = isProductCompatible(product, state.activeVehicle);
  let fitBadgeHTML = "";
  if (fitment === "guaranteed") {
    fitBadgeHTML = `<span class="fitment-pill fit-guaranteed"><i class="fa-solid fa-check"></i> Exact Fit</span>`;
  } else if (fitment === "universal") {
    fitBadgeHTML = `<span class="fitment-pill fit-universal"><i class="fa-solid fa-globe"></i> Universal Fit</span>`;
  } else {
    fitBadgeHTML = `<span class="fitment-pill fit-check"><i class="fa-solid fa-car"></i> Select Vehicle</span>`;
  }

  const isWishlisted = state.wishlist.some(id => id === product.id);

  card.innerHTML = `
    <div class="product-img-box">
      ${fitBadgeHTML}
      <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id}, this)" title="Save to Wishlist">
        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <img src="${product.image}" alt="${product.name}" onclick="openProductDetail(${product.id})">
    </div>
    <span class="product-brand">${product.brand}</span>
    <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
    <div class="product-rating">
      <span>${'★'.repeat(Math.round(product.rating))}</span>
      <span class="rating-count">(${product.reviews} reviews)</span>
    </div>
    <div class="product-bottom-row">
      <span class="product-price">$${product.price.toFixed(2)}</span>
      <button class="btn-add-cart" onclick="addToCart(${product.id})">
        <i class="fa-solid fa-cart-plus"></i> Add
      </button>
    </div>
  `;
  return card;
}

// =============================================================================
// 6. PRODUCT DETAIL MODAL & RELATED PARTS
// =============================================================================

function openProductDetail(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.getElementById("productDetailModal");
  const modalContainer = document.getElementById("productModalDetails");

  const fitment = isProductCompatible(prod, state.activeVehicle);
  const fitBannerHTML = fitment === "guaranteed" 
    ? `<div class="compatibility-banner fit-pass"><i class="fa-solid fa-circle-check"></i> Guaranteed Exact Fit for your ${state.activeVehicle.year} ${state.activeVehicle.make} ${state.activeVehicle.model}</div>`
    : `<div class="compatibility-banner fit-warn"><i class="fa-solid fa-circle-info"></i> Multi-Fitment or Universal. Verify specifications for your vehicle chassis.</div>`;

  let specsRows = "";
  for (const [key, val] of Object.entries(prod.specs)) {
    specsRows += `<tr><td class="spec-key">${key}</td><td>${val}</td></tr>`;
  }

  modalContainer.innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-image-col">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
      <div class="modal-info-col">
        <span class="product-brand">${prod.brand} • SKU: AZ-${prod.id}092</span>
        <h2>${prod.name}</h2>
        <div class="modal-meta-row">
          <span style="color:#F59E0B;">★ ${prod.rating} (${prod.reviews} customer reviews)</span>
          <span>Category: ${prod.category.toUpperCase()}</span>
        </div>

        ${fitBannerHTML}

        <div class="modal-price-box">
          <span class="modal-price">$${prod.price.toFixed(2)}</span>
          <span class="stock-status"><i class="fa-solid fa-check"></i> In Stock - Dispatches Today</span>
        </div>

        <p class="text-muted" style="margin-bottom:20px; font-size:14px; line-height:1.6;">${prod.description}</p>

        <table class="spec-table">
          <tbody>${specsRows}</tbody>
        </table>

        <div class="modal-actions-row">
          <div class="qty-stepper">
            <button onclick="decrementModalQty()">-</button>
            <input type="text" id="modalQtyInput" value="1" readonly>
            <button onclick="incrementModalQty()">+</button>
          </div>
          <button class="btn btn-accent btn-lg" style="flex:1;" onclick="addModalItemToCart(${prod.id})">
            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
          </button>
          <button class="btn btn-outline" onclick="toggleWishlist(${prod.id})"><i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeProductModal() {
  document.getElementById("productDetailModal").classList.remove("active");
}

function incrementModalQty() {
  const input = document.getElementById("modalQtyInput");
  input.value = parseInt(input.value) + 1;
}

function decrementModalQty() {
  const input = document.getElementById("modalQtyInput");
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

function addModalItemToCart(productId) {
  const qty = parseInt(document.getElementById("modalQtyInput").value) || 1;
  addToCart(productId, qty);
  closeProductModal();
}

// =============================================================================
// 7. SHOPPING CART SYSTEM & DRAWER
// =============================================================================

function addToCart(productId, quantity = 1) {
  const existingItem = state.cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    state.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      brand: prod.brand,
      qty: quantity
    });
  }

  saveState();
  updateCartCounters();
  renderCartDrawer();
  showToast("Part added to your shopping cart!");
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cartDrawerBackdrop").classList.add("active");
  document.getElementById("cartDrawer").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartDrawerBackdrop").classList.remove("active");
  document.getElementById("cartDrawer").classList.remove("active");
}

function updateCartCounters() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCount").textContent = totalCount;
  const drawerCount = document.getElementById("drawerCartCount");
  if (drawerCount) drawerCount.textContent = totalCount;
}

function renderCartDrawer() {
  const container = document.getElementById("cartDrawerItems");
  const subtotalEl = document.getElementById("cartDrawerSubtotal");
  const shippingStatus = document.getElementById("freeShippingStatus");
  const shippingBar = document.getElementById("shippingProgressBar");

  container.innerHTML = "";

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 0; color: #6B7280;">
        <i class="fa-solid fa-cart-flatbed" style="font-size: 42px; margin-bottom: 12px; color: #CBD5E1;"></i>
        <p>Your shopping cart is empty.</p>
        <button class="btn btn-navy btn-xs" style="margin-top:14px;" onclick="closeCartDrawer(); filterByCategory('all');">Explore Parts</button>
      </div>
    `;
    subtotalEl.textContent = "$0.00";
    shippingStatus.innerHTML = `Add <strong>$75.00</strong> more for Free Shipping!`;
    shippingBar.style.width = "0%";
    return;
  }

  let subtotal = 0;

  state.cart.forEach(item => {
    subtotal += item.price * item.qty;
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-meta">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        <div class="cart-item-actions">
          <div class="qty-stepper">
            <button onclick="updateCartItemQty(${item.id}, -1)">-</button>
            <input type="text" value="${item.qty}" readonly>
            <button onclick="updateCartItemQty(${item.id}, 1)">+</button>
          </div>
          <button class="btn-cart-remove" onclick="removeCartItem(${item.id})"><i class="fa-solid fa-trash"></i> Remove</button>
        </div>
      </div>
    `;
    container.appendChild(itemEl);
  });

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping progress logic ($75 limit)
  const remaining = 75 - subtotal;
  if (remaining <= 0) {
    shippingStatus.innerHTML = `<span style="color:#10B981; font-weight:700;"><i class="fa-solid fa-circle-check"></i> You unlocked Free Standard Shipping!</span>`;
    shippingBar.style.width = "100%";
  } else {
    const percent = Math.min((subtotal / 75) * 100, 100);
    shippingStatus.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more for Free Shipping!`;
    shippingBar.style.width = `${percent}%`;
  }
}

function updateCartItemQty(id, delta) {
  const item = state.cart.find(it => it.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeCartItem(id);
    return;
  }

  saveState();
  updateCartCounters();
  renderCartDrawer();
}

function removeCartItem(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  saveState();
  updateCartCounters();
  renderCartDrawer();
  showToast("Item removed from cart.");
}

function proceedToCheckout() {
  if (state.cart.length === 0) {
    alert("Your shopping cart is empty!");
    return;
  }
  closeCartDrawer();
  navigateTo("checkout");
}

// =============================================================================
// 8. CHECKOUT PROCESS & PAYMENT SIMULATION
// =============================================================================

function switchPaymentMode(mode, btn) {
  document.querySelectorAll(".pay-tab").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".payment-panel").forEach(panel => panel.classList.remove("active"));

  btn.classList.add("active");
  if (mode === "card") document.getElementById("payPanelCard").classList.add("active");
  if (mode === "upi") document.getElementById("payPanelUPI").classList.add("active");
  if (mode === "cod") document.getElementById("payPanelCOD").classList.add("active");
}

function applyPromoCode() {
  const code = document.getElementById("promoCodeInput").value.trim().toUpperCase();
  const feedback = document.getElementById("promoFeedback");

  if (code === "DATAALCOTT15") {
    state.discountPercent = 0.15;
    state.discountCode = code;
    feedback.innerHTML = `<span style="color:#10B981;">Code DATAALCOTT15 applied! 15% discount granted.</span>`;
  } else if (code === "SPEED20") {
    state.discountPercent = 0.20;
    state.discountCode = code;
    feedback.innerHTML = `<span style="color:#10B981;">Code SPEED20 applied! 20% discount granted.</span>`;
  } else {
    state.discountPercent = 0;
    feedback.innerHTML = `<span style="color:#E63946;">Invalid promo code. Try DATAALCOTT15</span>`;
  }

  updateCheckoutCalculations();
}

function renderCheckoutSummary() {
  const itemsContainer = document.getElementById("checkoutItemsList");
  itemsContainer.innerHTML = "";

  state.cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "checkout-item-mini";
    row.innerHTML = `
      <span class="checkout-item-mini-title">${item.qty}x ${item.name}</span>
      <strong>$${(item.price * item.qty).toFixed(2)}</strong>
    `;
    itemsContainer.appendChild(row);
  });

  updateCheckoutCalculations();
}

function updateCheckoutCalculations() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  
  // Shipping selected
  const shippingVal = parseFloat(document.querySelector('input[name="shippingMethod"]:checked')?.value || 0);
  let shippingFinal = shippingVal;
  if (shippingVal === 0 && subtotal >= 75) {
    shippingFinal = 0;
  } else if (shippingVal === 0 && subtotal < 75) {
    shippingFinal = subtotal > 0 ? 8.95 : 0;
  }

  const tax = subtotal * 0.08;
  const discountAmount = subtotal * state.discountPercent;
  const grandTotal = Math.max(0, subtotal + shippingFinal + tax - discountAmount);

  document.getElementById("checkoutSubtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("checkoutShipping").textContent = shippingFinal === 0 ? "FREE" : `$${shippingFinal.toFixed(2)}`;
  document.getElementById("checkoutTax").textContent = `$${tax.toFixed(2)}`;

  const discountRow = document.getElementById("checkoutDiscountRow");
  if (state.discountPercent > 0) {
    discountRow.classList.remove("hidden");
    document.getElementById("checkoutDiscount").textContent = `-$${discountAmount.toFixed(2)}`;
  } else {
    discountRow.classList.add("hidden");
  }

  document.getElementById("checkoutGrandTotal").textContent = `$${grandTotal.toFixed(2)}`;
  document.getElementById("checkoutSubmitTotal").textContent = `$${grandTotal.toFixed(2)}`;
}

function handlePlaceOrder(e) {
  e.preventDefault();

  if (state.cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const btn = document.getElementById("btnPlaceOrder");
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Verifying Authorization...`;
  btn.disabled = true;

  setTimeout(() => {
    const orderId = `AZ-${Math.floor(10000 + Math.random() * 90000)}`;
    const totalAmount = parseFloat(document.getElementById("checkoutGrandTotal").textContent.replace("$", ""));

    const newOrder = {
      id: orderId,
      date: new Date().toISOString().split("T")[0],
      status: "Processing",
      items: [...state.cart],
      total: totalAmount,
      carrier: "Standard Regional Freight",
      trackingNumber: `TRK${Math.floor(10000000 + Math.random() * 90000000)}`
    };

    state.orders.unshift(newOrder);
    state.cart = [];
    saveState();

    updateCartCounters();
    renderOrderHistoryTable();

    btn.innerHTML = `<i class="fa-solid fa-lock"></i> Authorize & Place Order`;
    btn.disabled = false;

    // Direct user to Order Tracker
    alert(`Thank you for your order! Your AutoZone Order ID is ${orderId}`);
    navigateTo("tracking");
    displayTrackingDetails(newOrder);
  }, 1200);
}

// =============================================================================
// 9. SIMULATED ORDER TRACKING (BONUS FEATURE)
// =============================================================================

function handleTrackSearch() {
  const query = document.getElementById("trackingSearchInput").value.trim().toUpperCase();
  const order = state.orders.find(o => o.id.toUpperCase() === query);

  const resultArea = document.getElementById("trackingResultArea");

  if (!order) {
    resultArea.classList.remove("hidden");
    resultArea.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <i class="fa-solid fa-circle-exclamation" style="font-size:36px; color:#E63946; margin-bottom:10px;"></i>
        <h4>Order ID Not Found</h4>
        <p class="text-muted">We could not locate shipment details for <strong>${query}</strong>. Try sample ID <strong>AZ-84920</strong>.</p>
      </div>
    `;
    return;
  }

  displayTrackingDetails(order);
}

function displayTrackingDetails(order) {
  const resultArea = document.getElementById("trackingResultArea");
  resultArea.classList.remove("hidden");

  let itemsSummary = order.items.map(i => `<li>${i.qty}x ${i.name} ($${i.price})</li>`).join("");

  resultArea.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #E2E8F0; padding-bottom:15px; margin-bottom:20px;">
      <div>
        <span class="task-pill">ORDER #${order.id}</span>
        <h3 style="font-family:var(--font-heading); margin-top:6px;">Status: <span style="color:#10B981;">${order.status}</span></h3>
      </div>
      <div style="text-align:right;">
        <div style="font-size:12px; color:#6B7280;">Carrier: <strong>${order.carrier}</strong></div>
        <div style="font-size:12px; color:#6B7280;">Tracking Ref: <strong>${order.trackingNumber}</strong></div>
      </div>
    </div>

    <!-- Timeline -->
    <div class="tracking-timeline">
      <div class="timeline-step completed">
        <div class="timeline-dot"><i class="fa-solid fa-check"></i></div>
        <div class="timeline-label">Order Confirmed</div>
        <div class="timeline-date">${order.date}</div>
      </div>
      <div class="timeline-step ${order.status !== 'Processing' ? 'completed' : 'active'}">
        <div class="timeline-dot"><i class="fa-solid fa-boxes-packing"></i></div>
        <div class="timeline-label">Warehouse Picked</div>
        <div class="timeline-date">Verified Fitment</div>
      </div>
      <div class="timeline-step ${order.status === 'Shipped' ? 'active' : ''}">
        <div class="timeline-dot"><i class="fa-solid fa-truck-fast"></i></div>
        <div class="timeline-label">In Transit</div>
        <div class="timeline-date">Distribution Hub</div>
      </div>
      <div class="timeline-step">
        <div class="timeline-dot"><i class="fa-solid fa-house-chimney"></i></div>
        <div class="timeline-label">Delivered</div>
        <div class="timeline-date">Pending Arrival</div>
      </div>
    </div>

    <div style="background:#F8FAFC; padding:16px; border-radius:6px; font-size:13px;">
      <strong>Enclosed Components:</strong>
      <ul style="margin: 8px 0 0 20px; list-style: disc;">${itemsSummary}</ul>
    </div>
  `;
}

// =============================================================================
// 10. WISHLIST & USER PROFILE GARAGE
// =============================================================================

function toggleWishlist(productId, btn = null) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("Removed from Wishlist");
    if (btn) {
      btn.classList.remove("active");
      btn.querySelector("i").className = "fa-regular fa-heart";
    }
  } else {
    state.wishlist.push(productId);
    showToast("Added to your Wishlist!");
    if (btn) {
      btn.classList.add("active");
      btn.querySelector("i").className = "fa-solid fa-heart";
    }
  }

  saveState();
  updateWishlistCounters();
  renderWishlistGrid();
}

function updateWishlistCounters() {
  document.getElementById("wishlistCount").textContent = state.wishlist.length;
}

function renderWishlistGrid() {
  const container = document.getElementById("wishlistGrid");
  if (!container) return;
  container.innerHTML = "";

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-regular fa-heart empty-icon"></i>
        <h3>Your Wishlist is Empty</h3>
        <p>Save replacement components here to monitor pricing and inventory.</p>
      </div>
    `;
    return;
  }

  const wishlistedItems = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  wishlistedItems.forEach(prod => {
    const card = createProductCard(prod);
    container.appendChild(card);
  });
}

function switchAccountTab(tabName, btn) {
  document.querySelectorAll(".acc-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".acc-panel").forEach(p => p.classList.remove("active"));

  btn.classList.add("active");
  const panel = document.getElementById(`accTab-${tabName}`);
  if (panel) panel.classList.add("active");

  if (tabName === "wishlist") renderWishlistGrid();
}

function renderOrderHistoryTable() {
  const container = document.getElementById("orderHistoryContainer");
  if (!container) return;

  if (state.orders.length === 0) {
    container.innerHTML = `<p class="text-muted">No orders placed yet.</p>`;
    return;
  }

  let rows = "";
  state.orders.forEach(order => {
    rows += `
      <tr>
        <td><strong>#${order.id}</strong></td>
        <td>${order.date}</td>
        <td>${order.items.length} parts</td>
        <td><strong>$${order.total.toFixed(2)}</strong></td>
        <td><span class="badge-pill">${order.status}</span></td>
        <td>
          <button class="btn-xs btn-outline" onclick="navigateTo('tracking'); displayTrackingDetails(state.orders.find(o => o.id === '${order.id}'))">
            Track
          </button>
        </td>
      </tr>
    `;
  });

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Order Number</th>
          <th>Placed Date</th>
          <th>Quantity</th>
          <th>Total Charged</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function handleSaveSettings(e) {
  e.preventDefault();
  const name = document.getElementById("settingsName").value;
  const email = document.getElementById("settingsEmail").value;

  document.getElementById("profileFullName").textContent = name;
  document.getElementById("profileEmail").textContent = email;
  document.getElementById("navUserName").textContent = name.split(" ")[0];

  showToast("Account details updated successfully!");
}

function logoutUser() {
  alert("Signed out from AutoZone demo portal.");
  document.getElementById("navUserName").textContent = "Sign In";
}

// =============================================================================
// 11. CONTACT US INQUIRY HANDLER
// =============================================================================

function handleContactSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your mechanical fitment inquiry has been forwarded to our technical team. A representative will contact you within 24 hours.");
  e.target.reset();
}