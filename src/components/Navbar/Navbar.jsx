import React, { useState } from "react";
import logo from "../Footer/assets/logo.png";
import "./style.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <MDBNavbarBrand href="/">
          <img src={logo} alt="logo" className="py-2" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} center>
          <MDBNavbarNav className="mr-auto mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink href="/SD">Kelas</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/ekskul">Ekskul</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/promo/SD">Promo</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/event">Event</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/testimoni">Testimoni</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBBtn outline onClick={toggleShow}>
            Sign&nbsp;in
          </MDBBtn>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
            <MDBModalDialog>
              <MDBModalContent className="bg-info">
                <MDBModalHeader>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleShow}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="container">
                    <div className="text-center">
                      <img src={logo} alt="logo" />
                      <h3 className="fs-1">Login</h3>
                    </div>
                    <form action="">
                      <div className="row px-2">
                        <input
                          type="text"
                          name=""
                          placeholder="email/username"
                          className="my-3"
                        />
                        <input
                          type="password"
                          name=""
                          placeholder="password"
                          className="mb-3"
                        />
                      </div>
                      <h6>
                        Belum mempunyai akun?
                        <a href="/register">Daftar akun</a>&nbsp; atau &nbsp;
                        <a href="/">Lupa Password?</a>
                      </h6>
                      <div className="row px-2">
                        <button className="btn btn-primary my-3 mx-2">
                          Login
                        </button>
                        <button className="btn btn-danger my-3 mx-2">
                          Login dengan Google
                        </button>
                      </div>
                    </form>
                  </div>
                </MDBModalBody>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>

          <MDBBtn tag="a" href="/register" className="mx-2">
            Sign&nbsp;up
          </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
