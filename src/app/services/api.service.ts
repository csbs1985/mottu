import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { CharacterResponseInterface } from "../models/character-response.interface";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private _httpClient = inject(HttpClient);

    private readonly apiUrl = 'https://rickandmortyapi.com/api/character';

    getCharacters(): Observable<CharacterResponseInterface> {
        return this._httpClient.get<CharacterResponseInterface>(this.apiUrl);
    }
}