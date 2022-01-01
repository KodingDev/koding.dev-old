import React from "react";
import { Box, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Project from "~/component/project";
import { HeaderNavBar, Layout } from "~/component/layout";
import { FaGithub, FaTwitter } from "react-icons/fa";

const PageHeader = () => {
  return (
    <>
      <Heading fontSize="5xl">Yo! I&apos;m Koding!</Heading>
      <Text fontSize="m" textColor="gray.600">
        An experienced software engineer with 7+ years of experience in the
        gaming industry.
      </Text>
      <HStack pt="4" spacing="4">
        <a href="https://github.com/KodingDev" target="_blank" rel="noreferrer">
          <FaGithub size="25" />
        </a>
        <a
          href="https://twitter.com/KodingDev_"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter size="25" />
        </a>
      </HStack>
    </>
  );
};

// TODO: Art page
const Index = () => (
  <Layout>
    <HeaderNavBar image="/assets/banner.webp">
      <PageHeader />
    </HeaderNavBar>
    <Box px={{ base: 12, xl: 24 }} py="12">
      <Heading fontSize="3xl">Projects</Heading>
      <Text>
        Some of the projects & people I&apos;ve worked with in the past.
      </Text>
      <SimpleGrid pt={4} columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        <Project
          name="koding.dev"
          description="This personal website! Written using Remix + Chakra in TS."
          link="https://github.com/KodingDev/koding.dev"
          tags={["Remix.run", "Chakra-UI", "TypeScript"]}
        />
        <Project
          name="zerite.dev"
          description="Corporate website for Zerite Development, built with Remix + Chakra."
          link="https://zerite.dev"
          tags={["Remix.run", "Chakra-UI", "TypeScript", "GitHub API"]}
        />
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
          name="Lunar"
          description="A multipurpose, highly configurable Discord bot with a powerful web UI."
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
  </Layout>
);

export default Index;
