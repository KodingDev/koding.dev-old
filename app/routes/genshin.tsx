import { Link, Outlet } from "remix";
import { HeaderNavBar, Layout } from "~/component/layout";
import { Box, Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import React from "react";

// noinspection JSUnusedGlobalSymbols
// export const links: LinksFunction = () => {
//   const characterAssets =
//     GenshinData.characters
//       ?.map((value) => getCharacterAssets(value))
//       ?.flatMap((value) => Object.values(value)) ?? [];
//
//   return characterAssets.map((value) => ({
//     rel: "preload",
//     as: "image",
//     href: value,
//   }));
// };

const Genshin = () => (
  <Layout>
    <HeaderNavBar image="/assets/genshin-banner.webp">
      <Heading fontSize="3xl">Genshin Impact</Heading>
      <Text>
        A comprehensive list of my current progress & stats for characters,
        weapons and artifacts.
      </Text>

      <ButtonGroup spacing={4} pt={4}>
        <Link to="/genshin/characters">
          <Button>Characters</Button>
        </Link>
      </ButtonGroup>
    </HeaderNavBar>
    <Box p={12}>
      <Outlet />
    </Box>
  </Layout>
);

export default Genshin;
