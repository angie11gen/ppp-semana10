// 1. Definición de la estructura de datos con la información suministrada
const centrosCulturales = [
  { nombre: "San Miguel", barrio: "Centro", cantidad: 12, tipoPersona: "personas" },
  { nombre: "Arbela", barrio: "San José", cantidad: 5, tipoPersona: "participantes" },
  { nombre: "Altamira", barrio: "Mirador", cantidad: 8, tipoPersona: "estudiantes" },
  { nombre: "Pancitará", barrio: "El libertador", cantidad: 15, tipoPersona: "personas" }
];

// 2. Iteración simple utilizando un bucle forEach
centrosCulturales.forEach(centro => {
  // Se determina el verbo adecuado según el tipo de dato para mantener la redacción original
  let conector = "tiene";
  if (centro.nombre === "Altamira") conector = "cuenta con";
  if (centro.nombre === "Pancitará") conector = "agrupa a";

  // Impresión de cada línea en la consola
  console.log(`El centro cultural de ${centro.nombre} está en el barrio ${centro.barrio} y ${conector} ${centro.cantidad} ${centro.tipoPersona}.`);
});
