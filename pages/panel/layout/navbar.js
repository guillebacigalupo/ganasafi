import React, { useState, useEffect, memo } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Img from "../../../components/image";

function NavBar(props) {
  return (
    <div>
      <Navbar color="dark" dark expand="sm" fixed="top">
        <NavbarBrand href="/panel">
          <Img s="logo/logo.png" a="Logo" c="admin-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={props.toggle} color="dark" />
        <Collapse isOpen={props.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/panel/products">Productos</NavLink>
            </NavItem>
            {/**
            <NavItem>
              <NavLink href="/panel/users">Slider</NavLink>
            </NavItem>
             */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Usuarios
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="div">
                  <NavLink href="/panel/users/create" className="text-primary">
                    Crear Usuario
                  </NavLink>
                </DropdownItem>
                <DropdownItem tag="div">
                  <NavLink href="/panel/users" className="text-primary">
                    Lista de Usuarios
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag="div">
                  <NavLink
                    href="/panel/users/permissions"
                    className="text-primary"
                  >
                    Permisos
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle caret nav className="text-secondary">
              <NavbarText className="align-self-center text-left font-weight-bold">
                Mi Cuenta
              </NavbarText>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="div">
                <a
                  href="#"
                  className="text-dark"
                  onClick={() => {
                    props.signOut();
                  }}
                >
                  <i className="fas fa-home"></i>
                  Cerrar Sesión
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
