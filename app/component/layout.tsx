import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdGamepad, MdHome, MdMenu } from "react-icons/md";
import { Link } from "remix";
import React from "react";

const navItems = [
  {
    name: "Home",
    icon: <MdHome />,
    path: "/",
  },
  {
    name: "Genshin",
    icon: <MdGamepad />,
    path: "/genshin",
  },
];

const NavBar = () => (
  <Flex p="6" justifyContent="space-between">
    <Link to="/">
      {/* TODO: Logo */}
      <Heading fontSize="3xl">Koding</Heading>
    </Link>
    <Menu>
      <MenuButton as={IconButton} icon={<MdMenu />} aria-label="Menu" />
      <MenuList>
        {navItems.map((item) => (
          <Link to={item.path} key={item.name}>
            <MenuItem icon={item.icon}>{item.name}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  </Flex>
);

export const BasicNavBar = () => (
  <Box bg="gray.900">
    <NavBar />
  </Box>
);

export type HeaderNavBarProps = {
  children: React.ReactNode;
  image: string;
};

export const HeaderNavBar = ({ children, image }: HeaderNavBarProps) => (
  <Box
    bgImage={`linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`}
    bgSize="cover"
    bgPosition="right top"
  >
    <NavBar />
    <Box p={12} pt={4} pb={16}>
      {children}
    </Box>
  </Box>
);

export const Footer = () => (
  <Box as="footer" py="12" px={{ base: "4", md: "8" }} bg="gray.900">
    <Stack>
      <Text as="b" alignSelf={{ base: "center", sm: "start" }}>
        KodingDev
      </Text>
      <Text fontSize="sm" alignSelf={{ base: "center", sm: "start" }}>
        &copy; {new Date().getFullYear()} All rights reserved.
      </Text>
    </Stack>
  </Box>
);

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
);
