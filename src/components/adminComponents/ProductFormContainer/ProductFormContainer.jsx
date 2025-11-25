import { useState } from "react"
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { validateProduct } from "../../../libs/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/serviceProducts";

export const ProductFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [errors, setaErrors] = useState({});
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    const n = name.toLowerCase();
    const v = value.toLowerCase()
    setProduct({ ...product, [n]: v });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setaErrors(newErrors);
      setLoading(false);
      return;
    }
    try {
      const imageUrl = await uploadToImgbb(file);
      const newProduct = {
        ...product,
        price: Number(product.price),
        imageUrl,
      }
      await createProduct(newProduct);
      alert("Producto creado exitosamente.");

      setProduct({
        name: "",
        price: "",
        category: "",
        description: ""
      });
      setFile(null);

    } catch (error) {

    } finally {
      setLoading(false);
    }


  }


  return <ProductFormUI product={product}
    errors={errors}
    onChange={handleChange}
    onFileChange={setFile}
    loading={loading}
    onSubmit={handleSubmit}

  />
}