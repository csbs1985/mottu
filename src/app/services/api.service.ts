import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterResponseInterface } from "../models/character-response.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _httpClient = inject(HttpClient);

    private readonly apiBase = 'https://rickandmortyapi.com/api/character';

    getCharacterName(text: string): Observable<CharacterResponseInterface> {
        return this._httpClient.get<CharacterResponseInterface>(`${this.apiBase}/?name=${text}`);
    }

    getCharacterId(list: string[]): Observable<CharacterResponseInterface> {
        return this._httpClient.get<CharacterResponseInterface>(`${this.apiBase}/${list}`);
    }

    getCharacters(): Observable<CharacterResponseInterface> {
        return this._httpClient.get<CharacterResponseInterface>(this.apiBase);
    }
}