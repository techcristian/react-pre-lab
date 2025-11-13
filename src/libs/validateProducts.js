export const validateProduct = (product, file = true) => {
  const errors = {};

  if (!product.name.trim()) {
    errors.name = "El nombre es obligatorio."
  };
  if (!product.price || product.price <= 0) {
    errors.price = "El precio debe ser mayor a cero."
  };
  if (!product.description.trim()) {
    errors.description = "La description es obligatoria."
  };
  if (!product.category.trim()) {
    errors.category = "La categoria debe ser obligatoria."
  };
  if (file && !product.file) {
    errors.file = "Debes seleccionar una imagen."
  }

  return errors;

}