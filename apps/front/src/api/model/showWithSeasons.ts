/**
 * Generated by otqs v1.0.0 🍺
 * Do not edit manually.
 * @beast/server
 * OpenAPI spec version: 0.0.1
 */
import type { Season } from "./season";

export interface ShowWithSeasons {
  id: string;
  images: string[];
  libraryId: string;
  name: string;
  overview: string | null;
  path: string;
  seasons: Season[];
  tvmazeId: number;
}
