import type { FC } from "react";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";

const ExampleNavbar: FC = function () {
  return (
    <Navbar fluid>
      <div className="w-full p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Navbar.Brand href="/">
              <img alt="" src="https://github.com/Alexcasanova10/humansoft/blob/master/logomexshoes.jpg?raw=true" className="mr-3 h-full sm:h-8" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                MexShoes Admin
              </span>
            </Navbar.Brand>
          </div>
          <div className="flex items-center gap-3">
            
            <Button color="primary" href="/">
              toglge de logout y nombre deuser 
            </Button>
            
            
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ExampleNavbar;