import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PromptService {

    API = 'http://localhost:8000';

    constructor(private http: HttpClient) { }

    getPrompts() {
        return this.http.get(`${this.API}/prompts/`);
    }

    getPrompt(id: string) {
        return this.http.get(`${this.API}/prompts/${id}/`);
    }

    createPrompt(data: any) {
        return this.http.post(`${this.API}/prompts/create/`, data);
    }
}