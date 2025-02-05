// Datos de ejemplo de proveedores
const providers = [
  {
    name: "Movistar",
    speeds: {
      100: {
        price: 39.9,
        features: ["100 Mbps Fibra", "Llamadas ilimitadas", "TV básica"],
      },
      300: {
        price: 49.9,
        features: ["300 Mbps Fibra", "Llamadas ilimitadas", "TV premium"],
      },
      600: {
        price: 59.9,
        features: ["600 Mbps Fibra", "Llamadas ilimitadas", "TV total"],
      },
      1000: {
        price: 69.9,
        features: ["1 Gbps Fibra", "Llamadas ilimitadas", "TV total + deportes"],
      },
    },
    pricePerLine: 15,
  },
  {
    name: "Orange",
    speeds: {
      100: {
        price: 35.9,
        features: ["100 Mbps Fibra", "Llamadas ilimitadas"],
      },
      300: {
        price: 45.9,
        features: ["300 Mbps Fibra", "Llamadas ilimitadas", "TV básica"],
      },
      600: {
        price: 55.9,
        features: ["600 Mbps Fibra", "Llamadas ilimitadas", "TV premium"],
      },
      1000: {
        price: 65.9,
        features: ["1 Gbps Fibra", "Llamadas ilimitadas", "TV total"],
      },
    },
    pricePerLine: 12,
  },
  {
    name: "Vodafone",
    speeds: {
      100: {
        price: 37.9,
        features: ["100 Mbps Fibra", "Llamadas ilimitadas"],
      },
      300: {
        price: 47.9,
        features: ["300 Mbps Fibra", "Llamadas ilimitadas", "TV básica"],
      },
      600: {
        price: 57.9,
        features: ["600 Mbps Fibra", "Llamadas ilimitadas", "TV premium"],
      },
      1000: {
        price: 67.9,
        features: ["1 Gbps Fibra", "Llamadas ilimitadas", "TV total"],
      },
    },
    pricePerLine: 13,
  },
]

// Función para calcular el precio total
function calculateTotalPrice(provider, speed, lines) {
  const basePrice = provider.speeds[speed].price
  const linesPrice = provider.pricePerLine * lines
  return basePrice + linesPrice
}

// Función para ordenar proveedores por precio
function sortProvidersByPrice(providers, speed, lines) {
  return providers
    .map((provider) => ({
      ...provider,
      totalPrice: calculateTotalPrice(provider, speed, lines),
    }))
    .sort((a, b) => a.totalPrice - b.totalPrice)
}

// Función para crear la tarjeta de resultado
function createProviderCard(provider, speed, totalPrice) {
  const features = provider.speeds[speed].features
  const card = document.createElement("div")
  card.className = "provider-card"

  card.innerHTML = `
        <h3>${provider.name}</h3>
        <p class="price">€${totalPrice.toFixed(2)}/mes</p>
        <ul>
            ${features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <button class="cta-button" onclick="alert('Función de contratación en desarrollo')">
            Contratar
        </button>
    `

  return card
}

// Manejador del formulario
document.getElementById("compareForm")?.addEventListener("submit", (e) => {
  e.preventDefault()

  const speed = document.getElementById("internetSpeed").value
  const lines = Number.parseInt(document.getElementById("phoneLines").value)
  const location = document.getElementById("location").value

  const resultsDiv = document.getElementById("results")
  resultsDiv.innerHTML = "" // Limpiar resultados anteriores

  // Ordenar y mostrar resultados
  const sortedProviders = sortProvidersByPrice(providers, speed, lines)

  const resultsHeader = document.createElement("h2")
  resultsHeader.textContent = "Resultados de la comparación"
  resultsDiv.appendChild(resultsHeader)

  sortedProviders.forEach((provider) => {
    const card = createProviderCard(provider, speed, provider.totalPrice)
    resultsDiv.appendChild(card)
  })
})

