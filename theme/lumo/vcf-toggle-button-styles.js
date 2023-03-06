import { html } from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import { css, registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';

const vaadinCheckboxStyles = css`
        :host(.toggle-button) {
          --vaadin-checkbox-size: 1;
          font-size: inherit;
        }

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


        :host(.toggle-button[disabled]) [part='checkbox']::after {
          color: var(--lumo-primary-contrast-color);
        }

        :host(.toggle-button) [part='checkbox']::after {
          width: calc(1.5em - 4px);
          height: calc(1.5em - 4px);
          border-radius: 50%;
          background-color: var(--lumo-primary-contrast-color);
          border: none;
          top: 2px;
          left: 2px;
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
`;

registerStyles('vaadin-checkbox', vaadinCheckboxStyles);

registerStyles('vcf-toggle-button', 
        css`
        :host {}
        `,
        {
          includeId: 'lumo-color',
          moduleId: 'vcf-toggle-button-lumo'
        }
);
