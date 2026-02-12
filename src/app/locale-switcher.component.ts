import { Component } from "@angular/core";

import { useLocale } from "angular-intlayer";

@Component({
  selector: "app-locale-switcher",
  standalone: true,
  imports: [],
  template: `
    <div class="locale-switcher">
      <span class="locale-label">Current Locale: {{ locale() }}</span>
      <select
        [value]="locale()"
        (change)="setLocale($any($event.target).value)"
        class="locale-select"
        >
        @for (loc of availableLocales; track loc) {
          <option [value]="loc">
            {{ loc }}
          </option>
        }
      </select>
    </div>
    `,
  styles: [
    `
      .locale-switcher {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        margin-bottom: 2rem;
      }
      .locale-label {
        font-weight: bold;
        color: #333;
      }
      .locale-select {
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-size: 1rem;
        cursor: pointer;
      }
    `,
  ],
})
export class LocaleSwitcherComponent {
  localeCtx = useLocale();

  locale = this.localeCtx.locale;
  availableLocales = this.localeCtx.availableLocales;
  setLocale = this.localeCtx.setLocale;
}
