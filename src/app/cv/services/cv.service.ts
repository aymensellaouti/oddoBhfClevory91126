import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', '', 44),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', '          ', 8),
    new Cv(3, 'Lamsi', 'Arij', 'Dev', '4444', 'rotating_card_profile.png', 20),
    new Cv(4, 'Masmoudi', 'Bacem', 'Dev', '4444', 'rotating_card_profile3.png', 20),
    new Cv(5, 'Znidi', 'Mohamed Ali', 'Dev', '4444', 'rotating_card_profile2.png', 20),
  ]);
  cvs = this.#cvs.asReadonly();

  #selectedCv = signal<Cv | null>(null)
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
  getCvs(): Signal<Cv[]>{
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
    return this.#cvs().find(cv => cv.id == id) ?? null;
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
}
