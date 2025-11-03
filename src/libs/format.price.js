  export const formatPrice = (num) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",   // Podés usar "USD" o la moneda que necesites
    minimumFractionDigits: 0
  }).format(num);
};