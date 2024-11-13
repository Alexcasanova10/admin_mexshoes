/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Breadcrumb,
    Button,
    Checkbox,
    Label,
    Modal,
    Table,
    Textarea,
    TextInput,
    Select
  } from "flowbite-react";
  
  import type { FC } from "react";
  
  import { FaEdit, FaPlus } from "react-icons/fa";
  import {
    HiCog,
    HiDotsVertical,
    HiExclamationCircle,
    HiHome,
    HiOutlineExclamationCircle,
    HiPencilAlt,
    HiTrash,
    HiUpload,
  } from "react-icons/hi";
  import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
  
  import { useEffect, useState } from "react";
  import { useAppDispatch } from "../../Redux/hook";
  import { RootState } from "../../Redux/store";
  import {
    productListAction,
    addProductAction,
    updateProductAction,
    deleteProductAction,
  } from "../../Redux/Actions/Product";
  import { Product } from "../../Redux/types";
  import { useDispatch, useSelector } from "react-redux";
  
   
  const enumSizes = [24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5];
  const enumBrand = ["Adidas","Nike","Puma","Reebok","Charly","Vans","Panam","Otras"];
  
  
  const EcommerceProductsPageDos: FC = function () {
  
    const dispatch = useAppDispatch();
    const { products } = useSelector((state: RootState) => state.productListReducer);
  
    useEffect(() => {
      dispatch(productListAction());
    }, [dispatch]);
  
    return (
      <NavbarSidebarLayout isFooter={false}>
        <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
          <div className="mb-1 w-full">
            <div className="mb-4">
              <Breadcrumb className="mb-4">
                <Breadcrumb.Item href="#">
                  <div className="flex items-center gap-x-3">
                    <HiHome className="text-xl" />
                    <span className="dark:text-white">Inicio</span>
                  </div>
                </Breadcrumb.Item> 
                <Breadcrumb.Item>Productos</Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Todos los productos
              </h1>
            </div>
            <div className="block items-center sm:flex">
               
              <div className="flex w-full items-center sm:justify-end">
                <AddProductModal />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <ProductsTable products={products}/>
                
              </div>
            </div>
          </div>
        </div>
       </NavbarSidebarLayout>
    );
  };
  
  
  const AddProductModal=  ()=> {
    const [isOpen, setOpen] = useState(false);
    const [productData, setProductData] = useState<Partial<Product>>({
      name: "",
      image:"",
      price: 0,
      brand: "",
      countInStock:0,
      description:""     
    });

    const dispatch = useAppDispatch();

    const handleAddProduct = () => {
      dispatch(addProductAction(productData));
      setOpen(false);
    };

    return (
      <>
        <Button color="primary" onClick={() => setOpen(!isOpen)}>
          <FaPlus className="mr-3 text-sm" />
          Añadir Producto
        </Button>
        <Modal onClose={() => setOpen(false)} show={isOpen}>
          <Modal.Header className="border-b border-gray-200 dark:border-gray-700">
            <strong>Agregar producto</strong>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <Label htmlFor="productName">Nombre </Label>
                  <TextInput
                    id="productName"
                    name="productName"
                    placeholder='Ejemplo: Adidas Forum'
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="productName">Imagen </Label>
                  <TextInput
                    id="productName"
                    name="productName"
                    placeholder='Url de imagen'
                    className="mt-1"
                  />
                </div>
                 
                <div>
                  <Label htmlFor="brand">Marca</Label>
                  <Select>
                    <option value="">Filtro por marca</option>
                    {enumBrand.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Select>
                  
                </div>
                <div>
                  <Label htmlFor="price">Precio</Label>
                  <TextInput
                    id="price"
                    name="price"
                    type="number"
                    placeholder="$1800"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Tallas</Label>
                  <TextInput
                    id="price"
                    name="price"
                    type="text"
                    placeholder="meter logica de tallas (poner cuadros)?"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Cantidad</Label>
                  <TextInput
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    placeholder="Ejemplo: 10 unidades "
                    className="mt-1"
                  />
                </div>
                <div className="lg:col-span-2">
                  <Label htmlFor="producTable.Celletails">Detalles de productos</Label>
                  <Textarea
                    id="producTable.Celletails"
                    name="producTable.Celletails"
                    placeholder="Ejemplo: Calzado cómodo y con un gran estilo"
                    rows={6}
                    className="mt-1"
                  />
                </div>
              
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" onClick={() => setOpen(false)}>
              Añadir Producto
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  const EditProductModal: FC = function () {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <>
        <Button color="primary" onClick={() => setOpen(!isOpen)}>
          <FaEdit className="mr-3 text-sm" />
          Editar
        </Button>
        <Modal onClose={() => setOpen(false)} show={isOpen}>
          <Modal.Header className="border-b border-gray-200 dark:border-gray-700">
            <strong>Editar producto</strong>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <Label htmlFor="productName">Nombre </Label>
                  <TextInput
                    id="productName"
                    name="productName"
                    placeholder='Ejemplo: Adidas Forum'
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="productName">Imagen </Label>
                  <TextInput
                    id="productName"
                    name="productName"
                    placeholder='Url de imagen'
                    className="mt-1"
                  />
                </div>
                 
                <div>
                  <Label htmlFor="brand">Marca</Label>
                  <Select>
                    <option value="">Filtro por marca</option>
                    {enumBrand.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </Select>
                  
                </div>
                <div>
                  <Label htmlFor="price">Precio</Label>
                  <TextInput
                    id="price"
                    name="price"
                    type="number"
                    placeholder="$1800"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Tallas</Label>
                  <TextInput
                    id="price"
                    name="price"
                    type="text"
                    placeholder="meter logica de tallas (poner cuadros)?"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="price">Cantidad</Label>
                  <TextInput
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    placeholder="Ejemplo: 10 unidades "
                    className="mt-1"
                  />
                </div>
                <div className="lg:col-span-2">
                  <Label htmlFor="producTable.Celletails">Detalles de productos</Label>
                  <Textarea
                    id="producTable.Celletails"
                    name="producTable.Celletails"
                    placeholder="Ejemplo: Calzado cómodo y con un gran estilo"
                    rows={6}
                    className="mt-1"
                  />
                </div>
              
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="primary" onClick={() => setOpen(false)}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  const DeleteProductModal: FC = function () {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <>
        <Button color="failure" onClick={() => setOpen(!isOpen)}>
          <HiTrash className="mr-2 text-lg" />
          Eliminar Producto
        </Button>
        <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
          <Modal.Header className="px-3 pt-3 pb-0">
            <span className="sr-only">Delete product</span>
          </Modal.Header>
          <Modal.Body className="px-6 pb-6 pt-0">
            <div className="flex flex-col items-center gap-y-6 text-center">
              <HiOutlineExclamationCircle className="text-7xl text-red-600" />
              <p className="text-lg text-gray-500 dark:text-gray-300">
                ¿Seguro que quieres dar de baja el producto?
              </p>
              <div className="flex items-center gap-x-3">
                <Button color="failure" onClick={() => setOpen(false)}>
                  Aceptar
                </Button>
                <Button color="gray" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  
  const ProductsTable = ({ products }: { products: Product[] }) => {
    return (
      <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
        <Table.Head className="bg-gray-100 dark:bg-gray-700">
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Imagen</Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Descripcion</Table.HeadCell>
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>Precio</Table.HeadCell>
          <Table.HeadCell>Stock</Table.HeadCell>
          <Table.HeadCell>Acciones</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        
        {products.map((product: Product) => (
          <Table.Row key={product._id}   className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {product._id}
            </Table.Cell>
             <Table.Cell className="w-4 p-4">
             <img 
                src={product.image} 
                alt={product.name} 
                className="h-16 w-16 object-cover rounded"
              />
             
            </Table.Cell> 
            <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
              {product.name}
              </div> 
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {product.description}
            </Table.Cell>

            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {product.brand}
            </Table.Cell>
            
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {product.price}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                {product.countInStock}
            </Table.Cell>
            <Table.Cell className="space-x-2 whitespace-nowrap p-4">
              <div className="flex items-center gap-x-3">
                <EditProductModal />
                <DeleteProductModal />
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
          
        </Table.Body>
      </Table>
    );
  };
  
  export default EcommerceProductsPageDos;
 