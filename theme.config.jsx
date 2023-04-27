import { useConfig } from 'nextra-theme-docs'

export default {
  logo: <strong>Anse</strong>,
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
    const { frontMatter, title } = useConfig();

    const ogTitle = title ? `${title} – Anse` : `Anse`;
    const ogDescription = frontMatter.description || 'Get answers from AI, elegantly.';

    return (
      <>
        <meta property="og:description" content={ogDescription} />
      </>
    );
  },
  footer: {
    text: 'Nextra Docs Template',
  },
  primaryHue: 250,
}