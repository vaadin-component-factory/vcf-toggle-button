import { css, registerStyles } from '@vaadin/vaadin-themable-mixin';

registerStyles(
  'vaadin-checkbox',
  css`
    :host(.toggle-button) [part='checkbox'] {
      width: calc(1.5em * 2 - 12px);
      height: 1.5em;
      border-radius: 0.75em;
      background-color: var(--lumo-contrast-40pct);
      margin: 0;
    }

    :host(.toggle-button[disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-20pct);
    }

    :host(.toggle-button) [part='checkbox']::after {
      border-radius: 50%;
      content: '';
      width: calc(1.5rem - 4px);
      height: calc(1.5rem - 4px);
      top: 2px;
      left: 2px;
      background-color: var(--lumo-primary-contrast-color);
      border: none;
      transform: none;
      opacity: 1;
      transition: transform 0.2s ease;
    }

    :host(.toggle-button[checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    :host(.toggle-button[checked][disabled]) [part='checkbox'] {
      background-color: var(--lumo-primary-color-50pct);
    }

    :host(.toggle-button[active]) [part='checkbox'] {
      transform: none;
    }

    :host(.toggle-button[checked]) [part='checkbox']::after {
      transform: translate(calc(100% - 8px));
    }
  `
);
