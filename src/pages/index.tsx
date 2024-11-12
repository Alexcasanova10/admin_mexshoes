/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Dropdown, Table, useTheme } from "flowbite-react";
import type { FC } from "react";
import Chart from "react-apexcharts";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const DashboardPage: FC = function () {
  return (
    <NavbarSidebarLayout>
    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-4">
      
      <div className="bg-purple-600 text-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">$ponercount de ventas</h2>
        </div>
        <p className="mt-2">Total de ventas del día</p>
      </div>


      <div className="bg-blue-500 text-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">cantproductos</h2>
        </div>
        <p className="mt-2">Productos en stock</p>
      </div>

      <div className="bg-yellow-500 text-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">cantidaddecleintes</h2>
        </div>
        <p className="mt-2">Clientes</p>
      </div>
    </div>
  </NavbarSidebarLayout>
  );
};
 

export default DashboardPage;
