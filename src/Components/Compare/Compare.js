import React, { useEffect } from "react";
import axios from "axios";
import { SeaTable } from "../SeaTable/SeaTable";

const Compare = () => {
    let providers = [];

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    authorization: `Bearer ${SeaTable.access_token}`
                }
            };

            const response = await axios.get(`https://cloud.seatable.io/api-gateway/api/v2/dtables/${SeaTable.dtable_uuid}/rows/?table_name=${SeaTable.table_name}&convert_keys=true`, options);
            if (response.data) {
                providers = response.data.rows;
            }
        };

        fetchData();

        document.getElementById("compareForm")?.addEventListener("submit", (e) => {
            e.preventDefault()

            console.log(providers)

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
                const card = createProviderCard(provider, provider.totalPrice)
                resultsDiv.appendChild(card)
            })
        })
    }, [SeaTable.dtable_uuid, SeaTable.access_token, SeaTable.table_name]);

    const calculateTotalPrice = (provider, lines) => {
        const basePrice = provider.price;
        const linesPrice = provider.pricePerLine * lines;
        return basePrice + linesPrice;
    };

    const sortProvidersByPrice = (providers, speed, lines) => {
        const filtersProviders = providers.filter(provider => provider.speed == speed);
        return filtersProviders
            .map((provider) => ({
                ...provider,
                totalPrice: calculateTotalPrice(provider, lines),
            }))
            .sort((a, b) => a.totalPrice - b.totalPrice);
    }

    const createProviderCard = (provider, totalPrice) => {
        const features = provider.features.split(',');
        const card = document.createElement("div");
        card.className = "provider-card";

        card.innerHTML = `
              <h3>${provider.Name}</h3>
              <p class="price">€${totalPrice.toFixed(2)}/mes</p>
              <ul>
                  ${features.map((feature) => `<li>${feature}</li>`).join("")}
              </ul>
              <button class="cta-button" onclick="alert('Función de contratación en desarrollo')">
                  Contratar
              </button>
          `;

        return card;
    }

    return (
        <main className="compare-main">
            <section className="compare-section _grid section">
                <div className="section-title">
                    <h2>Compara y encuentra tu mejor</h2> <h1>opción</h1>

                </div>
                <div className="comparison-form">
                    <form id="compareForm" action="" method="GET">
                        <div className="form-group">
                            <label htmlFor="location">Ubicación en Albacete</label>
                            <input type="text" id="location" required placeholder="Tu dirección" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="internetSpeed">Velocidad de Internet deseada</label>
                            <select id="internetSpeed" required>
                                <option value="">Selecciona velocidad</option>
                                <option value="100">100 Mbps</option>
                                <option value="300">300 Mbps</option>
                                <option value="600">600 Mbps</option>
                                <option value="1000">1000 Mbps</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneLines">Número de líneas móviles</label>
                            <input type="number" id="phoneLines" min="0" max="10" required />
                        </div>

                        <button type="submit" className="cta-button">Comparar Ofertas</button>
                    </form>
                </div>

                <div id="results" className="comparison-results">
                </div>
            </section>
        </main>
    );
}

export default Compare;