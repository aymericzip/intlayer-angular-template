import { Component } from '@angular/core';

import { useIntlayer } from 'angular-intlayer';
import { LocaleSwitcherComponent } from './locale-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocaleSwitcherComponent],
  template: `
    <app-locale-switcher></app-locale-switcher>
    @if (content(); as c) {
      <div class="content">
        <h1>{{ c.title }}</h1>
        <p>{{ c.congratulations }}</p>
        <hr />
        <h2>Markdown</h2>
        <div [innerHTML]="c.markdownContent"></div>
        <h2>Enumeration</h2>
        <p>0 cars: {{ c.cars(0) }}</p>
        <p>1 car: {{ c.cars(1) }}</p>
        <p>5 cars: {{ c.cars(5) }}</p>
        <h2>HTML</h2>
        <div [innerHTML]="c.htmlContent"></div>
        <h2>Nested</h2>
        <p>{{ c.nested.deep.text }}</p>
        <h2>Condition</h2>
        <p>True: {{ c.conditionalContent(true) }}</p>
        <p>False: {{ c.conditionalContent(false) }}</p>
        <h2>Gender</h2>
        <p>Male: {{ c.genderContent('male') }}</p>
        <p>Female: {{ c.genderContent('female') }}</p>
        <h2>Function Fetching</h2>
        <p>Sync: {{ c.functionContent }}</p>
        <p>Async: {{ c.asyncFunctionContent }}</p>
        <h2>File</h2>
        <pre>{{ c.fileContent }}</pre>
      </div>
    }
    `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: sans-serif;
    }
    .content {
      max-width: 800px;
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  content = useIntlayer('app');
}
