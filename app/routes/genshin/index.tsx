import { LoaderFunction, redirect } from "remix";

// noinspection JSUnusedGlobalSymbols
export const loader: LoaderFunction = async () =>
  redirect("/genshin/characters");
