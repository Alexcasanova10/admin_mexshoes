import { Sidebar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlineLocalShipping} from "react-icons/md";
import { TbBuildingFactory2 } from "react-icons/tb";
import { MdHome } from "react-icons/md";


const ExampleSidebar: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
        
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="/"
                icon={MdHome}
                className={
                  "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                }
              >
                Inicio
              </Sidebar.Item>
              <Sidebar.Item
                href="/e-commerce/products"
                icon={FaWarehouse}
                className={
                  "/e-commerce/products" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Productos
              </Sidebar.Item>
              <Sidebar.Item
                href="/users/list"
                icon={MdOutlineLocalShipping}
                className={
                  "/users/list" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Lista de pedidos
              </Sidebar.Item>
              <Sidebar.Item
                href="/conveyor"
                icon={TbBuildingFactory2}
                className={
                  "/users/list" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Banda Transportadora
              </Sidebar.Item>
              {/* <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                Sign in
              </Sidebar.Item>
              <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                Sign up
              </Sidebar.Item> */}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="https://github.com/themesberg/flowbite-react/"
                icon={CiLogout}
              >
                Cerrar Sesión
              </Sidebar.Item>
             
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
};

export default ExampleSidebar;
