import GenshinGood from "./genshin_good.json";
import { ICharacter, IGOOD, IWeapon } from "~/data/genshin/types";

export const GenshinData = GenshinGood as IGOOD;

export type CharacterAssets = {
  namecardBanner: string;
  iconFront: string;
  talentSkill: string;
  talentBurst: string;
};

export type WeaponAssets = {
  icon: string;
  iconAscended: string;
};

export const getCharacterAssets = (character: ICharacter): CharacterAssets => ({
  namecardBanner: `https://github.com/Zerite/genshin-assets/raw/master/images/good/characters/${character.key}/namecard-banner.png`,
  iconFront: `https://github.com/Zerite/genshin-assets/raw/master/images/good/characters/${character.key}/icon-front.png`,
  talentSkill: `https://github.com/Zerite/genshin-assets/raw/master/images/good/characters/${character.key}/talent-skill.png`,
  talentBurst: `https://github.com/Zerite/genshin-assets/raw/master/images/good/characters/${character.key}/talent-burst.png`,
});

export const getCharacterWeapon = (character: ICharacter) =>
  GenshinData.weapons?.find((w) => w.location === character.key);

export const getWeaponAssets = (weapon: IWeapon): WeaponAssets => ({
  icon: `https://github.com/Zerite/genshin-assets/raw/master/images/good/weapons/${weapon.key}/icon.png`,
  iconAscended: `https://github.com/Zerite/genshin-assets/raw/master/images/good/weapons/${weapon.key}/icon-ascended.png`,
});
