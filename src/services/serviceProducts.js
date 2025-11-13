const BASE_URL = "https://690e6fb1bd0fefc30a047615.mockapi.io/products";

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear producto correctamente.");
  }
  const data = await res.json();
  return data;

}
export const getProducts = async (category) => {
  let url = BASE_URL;

  if (category) {
    url = `${BASE_URL}?category=${category}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Productos no encontrados.");
  }
  const data = await res.json();
  return data;
}
export const getProductsById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Producto no encontrado.");
  }
  const data = await res.json();
  return data;
};

