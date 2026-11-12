import {  inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { APP_API } from '../../config/api.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_CONST } from '../../config/consts.config';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  httpClient = inject(HttpClient);
  #cvs = signal([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 44),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', '          ', 8),
    new Cv(3, 'Lamsi', 'Arij', 'Dev', '4444', 'rotating_card_profile.png', 20),
    new Cv(4, 'Masmoudi', 'Bacem', 'Dev', '4444', 'rotating_card_profile3.png', 20),
    new Cv(5, 'Znidi', 'Mohamed Ali', 'Dev', '4444', 'rotating_card_profile2.png', 20),
  ]);
  cvs = this.#cvs.asReadonly();

  #selectedCv = signal<Cv | null>(null);
  getSelectedCv() {
    return this.#selectedCv.asReadonly();
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
    this.#cvs.update((cvs) => cvs.filter((cvE) => cvE != cv));
  }

  /**
   *
   * @returns cvs: Observable Cv[]
   */
  getCvsFromApi() {
    return this.httpClient.get<Cv[]>(APP_API.cv);
  }
  getCvByIdFromApi(id: number) {
    return this.httpClient.get<Cv>(APP_API.cv + id);
  }
  deleteCvByIdFromApi(id: number) {
    // const params = new HttpParams().set(APP_CONST.tokenParamName, localStorage.getItem(APP_CONST.token)?? '');
    // const headers = new HttpHeaders().set(APP_CONST.authHeadersName, localStorage.getItem(APP_CONST.token)?? '');
    return this.httpClient.delete<{ count: number }>(APP_API.cv + id);
  }
  /**
   * Recherche les cvs dont le name contient la chaine name passée en paramètre
   * @param name : string
   * @returns cvs Cv[]
   */
  selectByName(name: string) {
    const search = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', search);
    return this.httpClient.get<any>(APP_API.cv, { params });
  }
  /**
   * Recherche les cvs dont la valeur est égale à la chaine passée en paramètre
   * @param property : string, la propriété sur laquelle on va requeter
   * @param value : string, la valeur de la propriété sur laquelle on va requeter
   * @returns cvs Cv[]
   */
  selectByProperty(property: string, value: string) {
    const search = `{"where":{"${property}":"${value}"}}`;
    const params = new HttpParams().set('filter', search);
    return this.httpClient.get<Cv[]>(APP_API.cv, { params });
  }
}
