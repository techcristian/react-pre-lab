const BASE_URL = "https://690e6fb1bd0fefc30a047615.mockapi.io/products";
// create product
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
// get all products
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
// get product by Id
export const getProductsById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Producto no encontrado.");
  }
  const data = await res.json();
  return data;
};

// serch product

export const getProductsBySearch = async (keyboard) => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al cargar productos");

  const data = await res.json();

  const k = String(keyboard).toLowerCase(); // 🔥 IMPORTANTE

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(k) ||
    item.category.toLowerCase().includes(k)
  );

  console.log("Filtrados:", filtered);
  return filtered;
};