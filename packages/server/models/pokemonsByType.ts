import { pipe } from "fp-ts/lib/pipeable";
import * as A from "fp-ts/lib/Array";
import { identity } from "fp-ts/lib/function";
import { data } from "../data/pokemons";
import { toConnection } from "../functions";
import { Connection } from "../types";
import Pokemon from "./interfaces/IPokemon";

const SIZE = 10;

export function query(args: {
  type: string;
  limit?: number;
}): Connection<Pokemon> {
  const { type, limit = SIZE } = args;

  const filterByType: (as: Pokemon[]) => Pokemon[] =
    type === undefined
      ? identity
      : A.filter(p => {
          return p.types
            .map(type => type.toLowerCase())
            .includes(type.toLowerCase());
        });

  const results: Pokemon[] = pipe(
    data,
    filterByType
  );
  return toConnection(results, limit);
}
