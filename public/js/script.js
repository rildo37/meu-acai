// Inicialize o mapa
var mymap = L.map('mapid').setView([0.0349, -51.0664], 12); // Coordenadas de Macapá, Amapá, com um zoom inicial de 12

// Adicione um tile layer (camada de mosaico) ao mapa. Aqui estamos usando OpenStreetMap como provedor de tiles.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Array de locais comerciais
var locaisComerciais = [
  {
      nome: "Açaí do Amapá Flamengo",
      endereco: "R. Hamilton Silva, 841 - Central, Macapá",
      coordenadas: { lat: 0.0222874, lng: -51.06515479999999 },
      avaliacao: 4.4
  },
  {
      nome: "Açaí & Sorvetes do Cacá",
      endereco: "R. Hamilton Silva, 2050 - Central, Macapá",
      coordenadas: { lat: 0.0311856, lng: -51.0647021 },
      avaliacao: 4.5
  },
  {
      nome: "Açaí do Alan",
      endereco: "R. Paraná, 1716 - Santa Rita, Macapá",
      coordenadas: { lat: 0.029911, lng: -51.077248 },
      avaliacao:  4.9
  },
  {
      nome: "Açaí do Juninho",
      endereco: "Av. Profa. Cora de Carvalho, 2810 - Central, Macapá",
      coordenadas: { lat: 0.0368267, lng: -51.0741756 },
      avaliacao: 4.6
  },
  {
      nome: "Açaí Ananda",
      endereco: "Av. Profa. Cora de Carvalho, 2810 - Central, Macapá",
      coordenadas: { lat: 0.0294182, lng:  -51.06360129999999 },
      avaliacao: 4.3
  },
  {
      nome: "Açaí do BoB",
      endereco: "Av. Marcílio Dias, 718 - Laguinho, Macapá",
      coordenadas: { lat: 0.0505232, lng: -51.0558501 },
      avaliacao: 4.5
  },
  // Adicione os outros locais comerciais aqui...
];

// Iterar sobre os locais comerciais e adicionar marcadores ao mapa
locaisComerciais.forEach(function(local) {
  var marker = L.marker([local.coordenadas.lat, local.coordenadas.lng]).addTo(mymap);
  marker.bindPopup("<b>Nome do local:</b> " + local.nome + "<br><b>Endereço:</b> " + local.endereco + "<br><b>Avaliação:</b> " + local.avaliacao);
});
