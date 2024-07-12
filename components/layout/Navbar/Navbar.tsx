import MobileNavbarContainer from "./containers/MobileNavbarContainer";
import NavbarContainer from "./containers/NavbarContainer";
import MobileNavbar from "./MobileNavbar";
import NavbarLogo from "./NavbarLogo";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <NavbarContainer>
      <MobileNavbarContainer>
        <NavbarLogo />
        <MobileNavbar />
      </MobileNavbarContainer>
      <NavItems className="lg:ml-auto" mobileHidden />
    </NavbarContainer>
  );
}
