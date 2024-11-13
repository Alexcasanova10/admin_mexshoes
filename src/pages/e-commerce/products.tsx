import { Button, Modal, Table, Textarea, TextInput, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../Redux/hook";
import { RootState } from "../../Redux/store";
import {
  productListAction,
  addProductAction,
  updateProductAction,
  deleteProductAction,
} from "../../Redux/Actions/Product";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { Product } from "../../Redux/types";
import { useDispatch, useSelector } from "react-redux";

// Componente principal
const EcommerceProductsPage = () => {
  const dispatch = useAppDispatch();
  const { products } = useSelector((state: RootState) => state.productListReducer);

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div className="p-4">
      <AddProductModal />
      <ProductsTable products={products} />
    </div>
  );
};

// Modal para añadir productos
const AddProductModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [productData, setProductData] = useState<Partial<Product>>({
    name: "",
    price: 0,
    brand: "",
  });
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addProductAction(productData));
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <FaPlus /> Añadir Producto
      </Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Añadir Producto</Modal.Header>
        <Modal.Body>
          <form>
            <TextInput
              placeholder="Nombre"
              value={productData.name || ""}
              onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            />
            <TextInput
              placeholder="Precio"
              type="number"
              value={productData.price || ""}
              onChange={(e) => setProductData({ ...productData, price: parseFloat(e.target.value) })}
            />
            <Select
              value={productData.brand}
              onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
            >
              <option value="">Seleccionar Marca</option>
              {["Adidas", "Nike", "Puma"].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAddProduct}>Guardar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

// Componente de la tabla para mostrar productos
const ProductsTable = ({ products }: { products: Product[] }) => {
  
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProductAction(id));
  };

  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Nombre</Table.HeadCell>
        <Table.HeadCell>Precio</Table.HeadCell>
        <Table.HeadCell>Acciones</Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {products.map((product: Product) => (
          <Table.Row key={product._id}>
            <Table.Cell>{product._id}</Table.Cell>
            <Table.Cell>{product.name}</Table.Cell>
            <Table.Cell>${product.price}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleDelete(product._id)} color="failure">
                <FaTrash />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default EcommerceProductsPage;
