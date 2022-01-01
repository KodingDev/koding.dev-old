import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdHome, MdMenu } from "react-icons/md";
import { Link } from "remix";
import React from "react";

const NavBar = () => (
  <Flex p="6" justifyContent="space-between">
    <Text>Koding</Text> {/* TODO: Logo */}
    <Menu>
      <MenuButton as={IconButton} icon={<MdMenu />} aria-label="Menu" />
      <MenuList>
        <MenuItem icon={<MdHome />}>
          <Link to="/">Home</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  </Flex>
);

export const BasicNavBar = () => (
  <Box bg="gray.900">
    <NavBar />
  </Box>
);

export const HeaderNavBar = ({ children }: { children: React.ReactNode }) => (
  <Box
    bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/banner.webp)"
    bgPosition="right top"
    bgRepeat="no-repeat"
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
        Koding Dev
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
