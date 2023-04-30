import { useConfig } from 'nextra-theme-docs'

export default {
  logo: <strong>Anse Docs</strong>,
  project: {
    link: 'https://github.com/anse-app/anse',
  },
  docsRepositoryBase: 'https://github.com/anse-app/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Anse'
    }
  },
  head: () => {
    const { frontMatter } = useConfig();
    const ogDescription = frontMatter.description || 'Get answers from AI, elegantly.';
    return (
      <>
        <meta property="og:description" content={ogDescription} />
      </>
    );
  },
  footer: false,
  primaryHue: {
    dark: 192,
    light: 278,
  },
}