import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, CurrencyPipe, TitleCasePipe],
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css',
})
export class TtcComponent {
  /**
   * var entière
   * elle représente le prix hors taxe du produit
   */
  priceHt = signal(0);
  taxe = signal(18);
  qty = signal(1);
  message = computed(() => {
    console.log('Ne7sseblou')
    if (this.totalTtc() > 1000) {
      return 'Flouss flouss chakhet 3anna';
    } else {
      return '';
    }
  });
  // à vérifier
  unitaireTtc = computed(() => (this.priceHt() * (100 + this.taxe())) / 100);
  discount = computed(() => {
    let discountPercent = 0;
    if (this.qty() > 10 && this.qty() <= 15) {
      discountPercent = 20;
    } else if (this.qty() > 15) {
      discountPercent = 30;
    }
    return (this.unitaireTtc() * discountPercent) / 100;
  });
  totalTtc = computed(() => (this.unitaireTtc() - this.discount()) * this.qty());
  limitBudgetEffect = effect(() => {
    if(this.totalTtc() > 1000) {
      alert("Ya weldi win machi jebt flouss assez !!")
    }
  })
}
