/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
} from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiCog,
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiPlus,
  HiTrash,
} from "react-icons/hi";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";

const UserListPage: FC = function () {
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
               <Breadcrumb.Item>Lista de pedidos</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Pedidos
            </h1>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <OrdersTable />
            </div>
          </div>
        </div>
      </div>
     </NavbarSidebarLayout>
  );
};

const OrdersTable: FC = function () {
  return (
    <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>ID de User</Table.HeadCell>
        <Table.HeadCell>Imagen</Table.HeadCell>
        <Table.HeadCell>Nombre</Table.HeadCell>
        <Table.HeadCell>Marca</Table.HeadCell>
        <Table.HeadCell>Precio</Table.HeadCell>
        <Table.HeadCell>Stock</Table.HeadCell>
        <Table.HeadCell>Acciones</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700">
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            #194556
          </Table.Cell>
           <Table.Cell className="w-4 p-4">
              owo
          </Table.Cell> 
          <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
            <div className="text-base font-semibold text-gray-900 dark:text-white">
              Education Dashboard
            </div> 
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            Angular
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            $149
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
            20
          </Table.Cell>
           
        </Table.Row>
    
        
      </Table.Body>
    </Table>
  );
};


 
 

export default UserListPage;
