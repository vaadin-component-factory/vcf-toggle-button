const theme = document.createElement('dom-module');
  theme.id = 'vcf-toggle-button-lumo';
    theme.setAttribute('theme-for', 'vcf-toggle-button');
  theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
  theme.register(theme.id);
