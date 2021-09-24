import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaReddit, FaSpotify, FaTwitter } from "react-icons/fa";
import { MdEmail, MdHome, MdMenu, MdPhoto } from "react-icons/md";
import Project from "@/component/project";

// TODO: Art page
const Index = () => (
  <>
    <Flex p="4" bg="gray.900">
      <Spacer />
      <Menu>
        <MenuButton as={IconButton} icon={<MdMenu />} />
        <MenuList>
          <MenuItem icon={<MdHome />}>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem icon={<MdPhoto />}>Art</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
    <Box p="12" bg="gray.900">
      <Center>
        <Heading fontSize="5xl" fontFamily="mono">
          Koding
        </Heading>
      </Center>
      <Center>
        <Text fontSize="xl" fontFamily="mono" textColor="gray.400">
          Full stack.
        </Text>
      </Center>
      <Center>
        <HStack gap={6} pt="2">
          <Link href="mailto:kodingdev@pm.me">
            <IconButton aria-label="Email" icon={<MdEmail />} />
          </Link>
          <Link href="https://github.com/KodingDev" target="_blank">
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
          <Link href="https://twitter.com/KodingDev_" target="_blank">
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
          </Link>
          <Link href="https://reddit.com/u/TotallyNotKoding" target="_blank">
            <IconButton aria-label="Reddit" icon={<FaReddit />} />
          </Link>
          <Link
            href="https://open.spotify.com/user/djitechdude"
            target="_blank"
          >
            <IconButton aria-label="Spotify" icon={<FaSpotify />} />
          </Link>
        </HStack>
      </Center>
    </Box>
    <Box px={{ base: 12, xl: 24 }} py="12">
      <Heading fontSize="3xl" fontFamily="mono">
        Projects
      </Heading>
      <Text>Check out some of the cool stuff I&apos;m working on!</Text>
      <SimpleGrid pt={4} columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        <Project
          name="JetBrains Copilot"
          description="IDE plugin for the IntelliJ platform which adds support for GitHub Copilot."
          link="https://github.com/KodingDev/JetBrainsCopilot"
          tags={["Kotlin", "IntelliJ SDK", "Ktor"]}
        />
        <Project
          name="CraftLib"
          description="Wrapper the entire Minecraft codebase as a Java / Kotlin library. Supports protocol, NBT, chat and schematics. 1.7.x - 1.8.x."
          link="https://github.com/Zerite/CraftLib"
          tags={["Kotlin", "Minecraft", "Netty", "Reverse Engineering", "Ktor"]}
        />
        <Project
          name="Genshin Dashboard"
          description="A unified dashboard which parses Genshin data, handling stat calculation, team optimization, etc."
          link="https://github.com/KodingDev/genshin-dashboard"
          tags={["Next.js", "TypeScript"]}
        />
        <Project
          name="AniTrack"
          description="Anime tracking app written using Flutter to update an AniList profile and view show data."
          link="https://github.com/KodingDev/AniTrack"
          tags={["Flutter", "Dart", "GraphQL", "OAuth2"]}
        />
        <Project
          name="koding.dev"
          description="Personal website, written using NextJS + Chakra in TS."
          link="https://github.com/KodingDev/koding.dev"
          tags={["Next.js", "Chakra-UI", "TypeScript"]}
        />
        <Project
          name="Lunar"
          description="A multipurpose, highly configurable Discord bot with a powerful web UI."
          link=""
          tags={["Kotlin", "MongoDB", "Sentry", "Next.js", "Material UI"]}
        />

        <Project
          name="Craftadia"
          description="A survival Minecraft server, built on a scalable in-house deployment system to provide a smooth player experience. Developed with Katalyst Media."
          link="https://craftadia.com/"
          tags={[
            "Java",
            "Kotlin",
            "MariaDB",
            "Redis",
            "Spigot",
            "Pterodactyl Panel",
            "Ktor",
          ]}
        />
        <Project
          name="Origins Enhanced"
          description="A partnered QOL mod with Origin Realms, fixing inconsistencies with the vanilla client and improving the player experience. Developed with Piston Solutions."
          link="https://originrealms.com/enhanced"
          tags={["Java", "Fabric", "Forge", "Networking"]}
        />
      </SimpleGrid>
    </Box>
  </>
);

export default Index;
