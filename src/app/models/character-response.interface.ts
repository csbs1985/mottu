import { CharacterInterface } from "./character.interface";

export interface CharacterResponseInterface {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: CharacterInterface[];
}