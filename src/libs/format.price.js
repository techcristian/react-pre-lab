  export const formatPrice = (num) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",   // se puede usar "USD" o la moneda que se necesite
    minimumFractionDigits: 0
  }).format(num);
};