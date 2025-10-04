// Global site configuration
export const siteConfig = {
  // General site information
  siteName: "Data Wizards",
  
  
  // Navigation menu items
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/documentation" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" }
  ],
  
  // Theme configuration
  theme: {
    colors: {
      primary: "#4F46E5",
      secondary: "#10B981",
      dark: "#1F2937",
      light: "#F9FAFB",
      error: "#EF4444",
      success: "#10B981"
    },
    fonts: {
      primary: '"Inter", sans-serif',
      secondary: '"Roboto", sans-serif'
    }
  }
};

export const homeContent = {
  hero: {
    title: "The first end-to-end TEMPO support",
    subtitle: "Monitoring and forecasting air quality in North America.",
    description: "Resources from NASA and other TEMPO institutions, real-time, user-friendly air quality forecast application and tips to be protected from pollution.",
    cta: {
      primary: "See latest forecasts",
      secondary: "Learn More"
    }
  },
  
  // Slides for the carousel
  slides: [
    {
      buttonText: "See Documentation",
      description: "Curious about NASA TEMPO Project? See our documentation.",
    },
    {
      buttonText: "See latest forecasts",
      description: "Need a real-time air quality forecast? See the latest air quality forecast.",
    },
    {
      buttonText: "Register",
      description: "New to our website? Join us.",
    }
  ],
  
  // Country and state options for the form
  options: [
    {
      country: 'USA',
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    }
  ],
  
  // TEMPO information section
  tempoInfo: {
    title: "What is TEMPO?",
    description: "Tropospheric Emissions: Monitoring of Pollution instrument is the first NASA mission capable of monitoring hourly air pollution over greater North America from a geostationary orbit of ~22,000 miles away.",
    imageAlt: "TEMPO Instrument"
  },
  
  // Forecast form
  forecastForm: {
    labels: {
      name: "Name",
      country: "Country",
      state: "State",
      submit: "Get Forecast"
    },
    placeholders: {
      name: "Enter your name",
      country: "Select a country",
      state: "Select a state"
    }
  }
};

// About Page Content
export const aboutContent = {
  // Hero section
  hero: {
    title: "About Us",
    description: "We are a team gathered by a common goal to innovate and improve public health by providing an advanced air quality monitoring and management solution.",
    subDescription: "Our project is the first user-friendly, end-to-end air quality forecasting solution that incorporates modern Artificial Intelligence (AI) and data analytics technology to provide accurate predictions and forecasts for air quality in North America in real time."
  },
  
  // Insight section
  insight: {
    title: "Our Insight",
    description: "We endeavor to improve public health by helping people understand air quality forecasts in great detail and providing examples of preventive responses. Our solution is useful to users across many scenarios, for example, advising when to wear a mask and suggesting restrictions on outdoor activities. Our solution supports users with actionable responses to enable protection of themselves and their communities."
  },
};

// Footer Content
export const footerContent = {  
  // Quick links
  quickLinks: [
    { title: "Quick Links", links: [
      { text: "Home", url: "/" },
      { text: "Documentation", url: "/documentation" },
      { text: "About Us", url: "/about" },
      { text: "Login", url: "/login" }
    ]},
  ],
};

// North American cities with their coordinates
export const northAmericanCities = [
  { name: 'New York', lat: 40.7128, lon: -74.0060 },
  { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
  { name: 'Chicago', lat: 41.8781, lon: -87.6298 },
  { name: 'Houston', lat: 29.7604, lon: -95.3698 },
  { name: 'Toronto', lat: 43.6510, lon: -79.3470 },
  { name: 'Vancouver', lat: 49.2827, lon: -123.1207 },
  { name: 'Mexico City', lat: 19.4326, lon: -99.1332 },
  { name: 'Miami', lat: 25.7617, lon: -80.1918 },
  { name: 'Seattle', lat: 47.6062, lon: -122.3321 },
  { name: 'Montreal', lat: 45.5017, lon: -73.5673 }
];

// Export all content as a single object for easier imports
export default {
  siteConfig,
  homeContent,
  aboutContent,
  footerContent,
  northAmericanCities
};
