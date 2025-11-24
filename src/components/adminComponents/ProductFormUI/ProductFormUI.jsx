import "./ProductFormUI.css";

export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit
}) => {
  return (
    <section>
      <form className="form-images" onSubmit={onSubmit}>
        <h2>Agregar Producto</h2>
        <div className="input">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            placeholder="Ingrese nombre del producto aqui.."
            required
          />
          {errors.name && <p className="er">{errors.name}</p>}
        </div>

        <div className="input">
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            placeholder="Ingrese el precio aqui.."
            required
          />
          {errors.price && <p className="er">{errors.price}</p>}
        </div>
        <div className="input">
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
            placeholder="Ingrese la categoría aqui.."
            required
          />
          {errors.category && <p className="er">{errors.category}</p>}
        </div>

        <div className="input">
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            placeholder="Ingrese descripción aqui .."
            required
          ></textarea>
          {errors.description && <p className="er">{errors.description}</p>}
        </div>

        <div className="input">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <p className="er">{errors.file}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Cargando imagen..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};
