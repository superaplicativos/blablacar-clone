// Base de dados fake usada em todas as páginas
const tripsData = [
  {
    id: 1,
    origem: "São Paulo",
    destino: "Campinas",
    estadoOrigem: "SP",
    estadoDestino: "SP",
    cidadeOrigem: "São Paulo",
    cidadeDestino: "Campinas",
    data: "2026-02-18",
    preco: 52,
    vagas: 3,
    motorista: "Bruna Lima",
    carro: "Toyota Yaris",
    avaliacao: 4.9,
    telefone: "(11) 98821-4450",
    whatsapp: "5511988214450",
    fotoMotorista: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 128
  },
  {
    id: 2,
    origem: "São Paulo",
    destino: "Rio de Janeiro",
    estadoOrigem: "SP",
    estadoDestino: "RJ",
    cidadeOrigem: "São Paulo",
    cidadeDestino: "Rio de Janeiro",
    data: "2026-02-19",
    preco: 168,
    vagas: 2,
    motorista: "Rafael Souza",
    carro: "Chevrolet Onix",
    avaliacao: 4.7,
    telefone: "(11) 97763-9012",
    whatsapp: "5511977639012",
    fotoMotorista: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 92
  },
  {
    id: 3,
    origem: "Rio de Janeiro",
    destino: "Búzios",
    estadoOrigem: "RJ",
    estadoDestino: "RJ",
    cidadeOrigem: "Rio de Janeiro",
    cidadeDestino: "Búzios",
    data: "2026-02-20",
    preco: 74,
    vagas: 4,
    motorista: "Camila Rocha",
    carro: "Honda Fit",
    avaliacao: 4.8,
    telefone: "(21) 97512-3344",
    whatsapp: "5521975123344",
    fotoMotorista: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 74
  },
  {
    id: 4,
    origem: "Belo Horizonte",
    destino: "Ouro Preto",
    estadoOrigem: "MG",
    estadoDestino: "MG",
    cidadeOrigem: "Belo Horizonte",
    cidadeDestino: "Ouro Preto",
    data: "2026-02-21",
    preco: 58,
    vagas: 3,
    motorista: "Eduardo Nunes",
    carro: "Fiat Pulse",
    avaliacao: 4.6,
    telefone: "(31) 98714-5561",
    whatsapp: "5531987145561",
    fotoMotorista: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 65
  },
  {
    id: 5,
    origem: "Curitiba",
    destino: "Florianópolis",
    estadoOrigem: "PR",
    estadoDestino: "SC",
    cidadeOrigem: "Curitiba",
    cidadeDestino: "Florianópolis",
    data: "2026-02-22",
    preco: 112,
    vagas: 2,
    motorista: "Patrícia Menezes",
    carro: "Hyundai HB20",
    avaliacao: 4.9,
    telefone: "(41) 99230-1180",
    whatsapp: "5541992301180",
    fotoMotorista: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 140
  },
  {
    id: 6,
    origem: "Salvador",
    destino: "Aracaju",
    estadoOrigem: "BA",
    estadoDestino: "SE",
    cidadeOrigem: "Salvador",
    cidadeDestino: "Aracaju",
    data: "2026-02-23",
    preco: 132,
    vagas: 3,
    motorista: "Tiago Ramos",
    carro: "Volkswagen Polo",
    avaliacao: 4.5,
    telefone: "(71) 98320-7742",
    whatsapp: "5571983207742",
    fotoMotorista: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 58
  },
  {
    id: 7,
    origem: "Recife",
    destino: "João Pessoa",
    estadoOrigem: "PE",
    estadoDestino: "PB",
    cidadeOrigem: "Recife",
    cidadeDestino: "João Pessoa",
    data: "2026-02-24",
    preco: 48,
    vagas: 2,
    motorista: "Letícia Alves",
    carro: "Renault Sandero",
    avaliacao: 4.7,
    telefone: "(81) 99420-1139",
    whatsapp: "5581994201139",
    fotoMotorista: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 83
  },
  {
    id: 8,
    origem: "Fortaleza",
    destino: "Jericoacoara",
    estadoOrigem: "CE",
    estadoDestino: "CE",
    cidadeOrigem: "Fortaleza",
    cidadeDestino: "Jericoacoara",
    data: "2026-02-25",
    preco: 96,
    vagas: 3,
    motorista: "Daniel Castro",
    carro: "Nissan Kicks",
    avaliacao: 4.8,
    telefone: "(85) 98214-5502",
    whatsapp: "5585982145502",
    fotoMotorista: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 109
  },
  {
    id: 9,
    origem: "Porto Alegre",
    destino: "Gramado",
    estadoOrigem: "RS",
    estadoDestino: "RS",
    cidadeOrigem: "Porto Alegre",
    cidadeDestino: "Gramado",
    data: "2026-02-26",
    preco: 86,
    vagas: 4,
    motorista: "Juliana Pires",
    carro: "Jeep Renegade",
    avaliacao: 4.9,
    telefone: "(51) 99201-3375",
    whatsapp: "5551992013375",
    fotoMotorista: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 134
  },
  {
    id: 10,
    origem: "Brasília",
    destino: "Goiânia",
    estadoOrigem: "DF",
    estadoDestino: "GO",
    cidadeOrigem: "Brasília",
    cidadeDestino: "Goiânia",
    data: "2026-02-27",
    preco: 78,
    vagas: 3,
    motorista: "Lucas Andrade",
    carro: "Chevrolet Tracker",
    avaliacao: 4.6,
    telefone: "(61) 98112-9033",
    whatsapp: "5561981129033",
    fotoMotorista: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 71
  },
  {
    id: 11,
    origem: "São Paulo",
    destino: "Ribeirão Preto",
    estadoOrigem: "SP",
    estadoDestino: "SP",
    cidadeOrigem: "São Paulo",
    cidadeDestino: "Ribeirão Preto",
    data: "2026-02-28",
    preco: 98,
    vagas: 2,
    motorista: "Ana Beatriz",
    carro: "Honda City",
    avaliacao: 4.8,
    telefone: "(11) 97601-8810",
    whatsapp: "5511976018810",
    fotoMotorista: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 96
  },
  {
    id: 12,
    origem: "Rio de Janeiro",
    destino: "Petrópolis",
    estadoOrigem: "RJ",
    estadoDestino: "RJ",
    cidadeOrigem: "Rio de Janeiro",
    cidadeDestino: "Petrópolis",
    data: "2026-03-01",
    preco: 62,
    vagas: 3,
    motorista: "Marcelo Dias",
    carro: "Fiat Argo",
    avaliacao: 4.7,
    telefone: "(21) 97430-6650",
    whatsapp: "5521974306650",
    fotoMotorista: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    carroFoto: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200",
    viagensRealizadas: 88
  }
];

// Troque pelo endpoint real do Formspree ou EmailJS
const formspreeEndpoint = "https://formspree.io/f/xxxxxxx";

// Lê filtros da URL para pré-preencher busca e filtros
const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    origem: params.get("origem") || "",
    destino: params.get("destino") || "",
    data: params.get("data") || "",
    estado: params.get("estado") || "",
    cidade: params.get("cidade") || ""
  };
};

const normalizeText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();

const filterTrips = (filters) => {
  return tripsData.filter((trip) => {
    const origemMatch = filters.origem
      ? normalizeText(trip.origem).includes(normalizeText(filters.origem))
      : true;
    const destinoMatch = filters.destino
      ? normalizeText(trip.destino).includes(normalizeText(filters.destino))
      : true;
    const dataMatch = filters.data ? trip.data === filters.data : true;
    const estadoMatch = filters.estado
      ? trip.estadoOrigem === filters.estado || trip.estadoDestino === filters.estado
      : true;
    const cidadeMatch = filters.cidade
      ? trip.cidadeOrigem === filters.cidade || trip.cidadeDestino === filters.cidade
      : true;
    return origemMatch && destinoMatch && dataMatch && estadoMatch && cidadeMatch;
  });
};

const formatDate = (value) => {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
};

const tripImages = [
  "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/210115/pexels-photo-210115.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/210113/pexels-photo-210113.jpeg?auto=compress&cs=tinysrgb&w=1200"
];

const cityImages = {
  "São Paulo": "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Rio de Janeiro": "https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Belo Horizonte": "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Curitiba: "https://images.pexels.com/photos/260653/pexels-photo-260653.jpeg?auto=compress&cs=tinysrgb&w=1200"
};

const tripCardTemplate = (trip) => {
  const imageUrl = tripImages[trip.id % tripImages.length];
  return `
    <article class="trip-card">
      <div class="trip-card__image" style="background-image:url('${imageUrl}')"></div>
      <div class="trip-card__body">
        <div class="trip-route">${trip.origem} → ${trip.destino}</div>
        <div class="trip-meta">
          <span>${formatDate(trip.data)}</span>
          <span>${trip.vagas} vagas</span>
          <span>Motorista ${trip.motorista}</span>
        </div>
        <div class="trip-meta">
          <span>${trip.carro}</span>
          <span>${trip.avaliacao} ★</span>
        </div>
        <div class="trip-price">R$ ${trip.preco}</div>
        <div class="trip-actions">
          <a class="btn btn-border-d btn-round btn-sm" href="motorista.html?id=${trip.id}">Quero carona</a>
        </div>
      </div>
    </article>
  `;
};

const renderTrips = (container, trips) => {
  if (!container) return;
  if (trips.length === 0) {
    container.innerHTML =
      "<p>Nenhuma viagem encontrada. Tente ajustar os filtros.</p>";
    return;
  }
  container.innerHTML = trips.map(tripCardTemplate).join("");
};

const populateSelect = (select, options, placeholder) => {
  if (!select) return;
  select.innerHTML = `<option value="">${placeholder}</option>`;
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
};

const uniqueValues = (values) => Array.from(new Set(values)).sort();

const setupSearchForm = (form) => {
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const origem = form.querySelector("[name='origem']").value.trim();
    const destino = form.querySelector("[name='destino']").value.trim();
    const data = form.querySelector("[name='data']").value;
    const params = new URLSearchParams();
    if (origem) params.set("origem", origem);
    if (destino) params.set("destino", destino);
    if (data) params.set("data", data);
    window.location.href = `buscar.html?${params.toString()}`;
  });
};

const initIndexPage = () => {
  const form = document.querySelector("[data-search-form]");
  setupSearchForm(form);
  const popularContainer = document.querySelector("[data-popular-trips]");
  renderTrips(popularContainer, tripsData.slice(0, 6));
  const cityContainer = document.querySelector("[data-city-cards]");
  if (cityContainer) {
    const featuredCities = [
      { cidade: "São Paulo", estado: "SP", url: "cidade-sp.html" },
      { cidade: "Rio de Janeiro", estado: "RJ", url: "cidade-rj.html" },
      { cidade: "Belo Horizonte", estado: "MG", url: "cidade-mg.html" },
      { cidade: "Curitiba", estado: "PR", url: "cidades.html" }
    ];
    cityContainer.innerHTML = featuredCities
      .map((city) => {
        const imageUrl = cityImages[city.cidade] || tripImages[0];
        return `
        <article class="city-card">
          <div class="city-card__image" style="background-image:url('${imageUrl}')"></div>
          <div class="city-card__body">
            <h4>${city.cidade} · ${city.estado}</h4>
            <a class="btn btn-border-d btn-round btn-sm" href="${city.url}">Ver viagens</a>
          </div>
        </article>
      `;
      })
      .join("");
  }
};

const initBuscarPage = () => {
  const filters = getQueryParams();
  const form = document.querySelector("[data-search-form]");
  setupSearchForm(form);
  if (form) {
    form.querySelector("[name='origem']").value = filters.origem;
    form.querySelector("[name='destino']").value = filters.destino;
    form.querySelector("[name='data']").value = filters.data;
  }
  const estadoSelect = document.querySelector("[data-filter-estado]");
  const cidadeSelect = document.querySelector("[data-filter-cidade]");
  populateSelect(
    estadoSelect,
    uniqueValues(tripsData.map((trip) => trip.estadoOrigem).concat(tripsData.map((trip) => trip.estadoDestino))),
    "Todos os estados"
  );
  populateSelect(
    cidadeSelect,
    uniqueValues(tripsData.map((trip) => trip.cidadeOrigem).concat(tripsData.map((trip) => trip.cidadeDestino))),
    "Todas as cidades"
  );
  if (estadoSelect) estadoSelect.value = filters.estado;
  if (cidadeSelect) cidadeSelect.value = filters.cidade;
  const dateInput = document.querySelector("[data-filter-data]");
  if (dateInput) dateInput.value = filters.data;
  const resultsContainer = document.querySelector("[data-results]");
  const applyFilters = () => {
    const nextFilters = {
      origem: form ? form.querySelector("[name='origem']").value.trim() : "",
      destino: form ? form.querySelector("[name='destino']").value.trim() : "",
      data: dateInput ? dateInput.value : "",
      estado: estadoSelect ? estadoSelect.value : "",
      cidade: cidadeSelect ? cidadeSelect.value : ""
    };
    renderTrips(resultsContainer, filterTrips(nextFilters));
  };
  [estadoSelect, cidadeSelect, dateInput].forEach((element) => {
    if (element) {
      element.addEventListener("change", applyFilters);
    }
  });
  applyFilters();
};

const initMotoristaPage = () => {
  const container = document.querySelector("[data-motorista]");
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const trip = tripsData.find((item) => item.id === id) || tripsData[0];
  const message = encodeURIComponent(
    `Olá ${trip.motorista}, vi sua carona de ${trip.origem} para ${trip.destino} no dia ${formatDate(
      trip.data
    )}. Ainda está disponível?`
  );
  const reviews = [
    { nome: "Fernanda P.", texto: "Motorista pontual e carro confortável." },
    { nome: "Paulo R.", texto: "Viagem tranquila, comunicação rápida." },
    { nome: "Marcos L.", texto: "Recomendo, ótima condução e segurança." }
  ];
  container.innerHTML = `
    <div class="row">
      <div class="col-sm-5">
        <div class="driver-card">
          <img class="driver-photo" src="${trip.fotoMotorista}" alt="${trip.motorista}">
          <h3 class="module-title font-alt align-left">${trip.motorista}</h3>
          <div class="driver-meta">${trip.avaliacao} ★ · ${trip.viagensRealizadas} viagens</div>
          <div class="driver-meta">${trip.carro}</div>
          <div class="driver-meta">Telefone: ${trip.telefone}</div>
          <a class="btn btn-round btn-whatsapp" href="https://wa.me/${trip.whatsapp}?text=${message}" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
        </div>
      </div>
      <div class="col-sm-7">
        <div class="driver-ride">
          <div class="driver-ride__image" style="background-image:url('${trip.carroFoto}')"></div>
          <div class="driver-ride__body">
            <h3 class="module-title font-alt align-left">${trip.origem} → ${trip.destino}</h3>
            <div class="driver-meta">Data: ${formatDate(trip.data)}</div>
            <div class="driver-meta">Vagas: ${trip.vagas} · Preço: R$ ${trip.preco}</div>
            <div class="driver-meta">Saída em ${trip.cidadeOrigem} · Chegada em ${trip.cidadeDestino}</div>
          </div>
        </div>
        <div class="driver-reviews">
          <h3 class="module-title font-alt align-left">Avaliações recentes</h3>
          ${reviews
            .map(
              (review) => `
            <div class="driver-review">
              <div class="driver-review__name">${review.nome}</div>
              <div class="driver-review__text">${review.texto}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
};

const initCityPage = () => {
  const city = document.body.dataset.city;
  const state = document.body.dataset.state;
  const resultsContainer = document.querySelector("[data-results]");
  if (!city && !state) return;
  renderTrips(
    resultsContainer,
    filterTrips({ origem: "", destino: "", data: "", estado: state, cidade: city })
  );
};

const initCidadesPage = () => {
  const container = document.querySelector("[data-city-list]");
  if (!container) return;
  const grouped = tripsData.reduce((acc, trip) => {
    if (!acc[trip.estadoOrigem]) acc[trip.estadoOrigem] = new Set();
    acc[trip.estadoOrigem].add(trip.cidadeOrigem);
    if (!acc[trip.estadoDestino]) acc[trip.estadoDestino] = new Set();
    acc[trip.estadoDestino].add(trip.cidadeDestino);
    return acc;
  }, {});
  const states = Object.keys(grouped).sort();
  container.innerHTML = states
    .map((state) => {
      const cities = Array.from(grouped[state]).sort();
      const cityLinks = cities
        .map((city) => {
          const slug =
            city === "São Paulo"
              ? "cidade-sp.html"
              : city === "Rio de Janeiro"
              ? "cidade-rj.html"
              : city === "Belo Horizonte"
              ? "cidade-mg.html"
              : "cidades.html";
          return `<a href="${slug}" class="btn btn-border-d btn-round btn-sm">${city}</a>`;
        })
        .join(" ");
      return `
        <div class="module">
          <h3 class="module-title font-alt">${state}</h3>
          <div>${cityLinks}</div>
        </div>
      `;
    })
    .join("");
};

const initCadastroForm = () => {
  const form = document.querySelector("[data-cadastro-form]");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.className = "status-message";
    const formData = new FormData(form);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });
      if (!response.ok) {
        throw new Error("Erro no envio");
      }
      status.className = "status-message is-success";
      status.textContent = "Viagem enviada com sucesso. Vamos revisar e publicar.";
      form.reset();
    } catch (error) {
      status.className = "status-message is-error";
      status.textContent =
        "Não foi possível enviar agora. Tente novamente em instantes.";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page === "index") initIndexPage();
  if (page === "buscar") initBuscarPage();
  if (page === "cidade") initCityPage();
  if (page === "cidades") initCidadesPage();
  if (page === "cadastrar") initCadastroForm();
  if (page === "motorista") initMotoristaPage();
});
