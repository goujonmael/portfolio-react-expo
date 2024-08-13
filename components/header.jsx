import React, { useContext } from "react";
import { Link, router } from "expo-router";
import "./header.css"; // Import the CSS file
import StoreContextProvider, { StoreContext } from "../app/StoreContext";
import { Pressable, Text } from "react-native";

const Header = () => {
  const { isModalVisible, showModal, hideModal } = useContext(StoreContext);

  const toggleModal = () => {
    if (isModalVisible) {
      hideModal();
      router.push("/");
    } else {
      showModal();
      router.push("/modal");
    }
  };

  return (
    <header className="header">
      <img
        className="profile-image"
        src="https://avatars.githubusercontent.com/u/49766167?v=4"
      />
      <nav>
        <ul className="nav-list">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/experiences" className="nav-link">
              Experiences
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Pressable onPress={toggleModal} className="nav-link">
            <Link href="/modal" className="nav-link">
              Modal
            </Link>
            </Pressable>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;