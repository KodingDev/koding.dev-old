import { LoaderFunction, useLoaderData } from "remix";
import {
  GenshinData,
  getCharacterAssets,
  getCharacterWeapon,
  getWeaponAssets,
} from "~/data/genshin/data";
import { ICharacter, IGOOD } from "~/data/genshin/types";
import {
  Badge,
  Box,
  BoxProps,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

type LoaderData = {
  genshin: IGOOD;
};

// noinspection JSUnusedGlobalSymbols
export const loader: LoaderFunction = () => ({
  genshin: GenshinData,
});

interface CharacterTalentProps {
  name: string;
  detail: string;
  image?: string;
}

const CharacterDetail = ({ name, detail, image }: CharacterTalentProps) => (
  <HStack px={2}>
    {image && <Image height={10} width={10} src={image} />}
    <Text fontWeight="semibold">{name}</Text>
    <Spacer />
    <Text>{detail}</Text>
  </HStack>
);

interface CharacterCardProps extends BoxProps {
  character: ICharacter;
}

const CharacterCard = ({ character, ...props }: CharacterCardProps) => {
  const assets = getCharacterAssets(character);
  const weapon = getCharacterWeapon(character);
  const weaponAssets = weapon ? getWeaponAssets(weapon) : undefined;

  return (
    <Box boxShadow="lg" borderRadius="6" overflow="hidden" {...props}>
      <Box bgImage={assets.namecardBanner} height={{ base: "20", md: "40" }}>
        <HStack>
          <Image
            src={assets.iconFront}
            alt={character.key}
            width={{ base: "20", md: "40" }}
          />
          <Stack>
            {/* TODO: Remap name to display name */}
            <Heading fontSize="xl" fontWeight="semibold">
              {character.key}
            </Heading>
            <HStack>
              <Badge>Level {character.level}</Badge>
              <Badge>Ascension {character.ascension}</Badge>
            </HStack>
          </Stack>
        </HStack>
      </Box>
      <Box bg="gray.700" py={2} px={4}>
        {weaponAssets && weapon && (
          <>
            <Text fontWeight="semibold" py={2}>
              Weapon
            </Text>
            <CharacterDetail
              name={weapon?.key}
              detail={`Lvl. ${weapon?.level} | R${weapon?.refinement}`}
              image={weaponAssets.icon}
            />
          </>
        )}

        {/* TODO: Change this from sword to the weapon type */}
        <Text fontWeight="semibold" py={2}>
          Talents
        </Text>
        <CharacterDetail
          name="Normal Attack"
          detail={character.talent.auto.toString()}
          image="https://github.com/Zerite/genshin-assets/raw/master/images/good/attacks/sword.png"
        />
        <CharacterDetail
          name="Skill (E)"
          detail={character.talent.skill.toString()}
          image={assets.talentSkill}
        />
        <CharacterDetail
          name="Burst (Q)"
          detail={character.talent.burst.toString()}
          image={assets.talentBurst}
        />
      </Box>
    </Box>
  );
};

const Index = () => {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <Heading>Characters</Heading>
      <Text>All my unlocked characters and their stats!</Text>
      <SimpleGrid pt={4} columns={{ base: 1, md: 2, xl: 4 }} spacing={4}>
        {data.genshin.characters
          ?.filter((character) => character.key !== "Traveler")
          ?.sort((a, b) => b.level - a.level)
          ?.map((character) => (
            <CharacterCard key={character.key} character={character} />
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Index;
