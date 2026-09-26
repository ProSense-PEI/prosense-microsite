import { defineConfig } from 'astro/config';

// Served from https://prosense-pei.github.io/prosense-microsite/ — if the repo is
// renamed, change `base` to match (or remove it for a <org>.github.io repo).
const base = '/prosense-microsite';

// Markdown content (meeting minutes, milestones) can use site-absolute paths
// like /logo.png; this prefixes them with `base` so they resolve on GitHub Pages.
function rehypePrefixBase() {
  const prefix = base.replace(/\/$/, '');
  const visit = (node) => {
    if (node.type === 'element' && node.properties) {
      for (const attr of ['src', 'href']) {
        const v = node.properties[attr];
        if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && !v.startsWith(prefix + '/')) {
          node.properties[attr] = prefix + v;
        }
      }
    }
    // inline HTML inside Markdown arrives as a raw string
    if (node.type === 'raw' && typeof node.value === 'string') {
      node.value = node.value.replace(/\b(src|href)="\/(?!\/)/g, (m, attr, off, str) =>
        str.startsWith(prefix + '/', off + attr.length + 2) ? m : `${attr}="${prefix}/`
      );
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://prosense-pei.github.io',
  base,
  output: 'static',
  devToolbar: { enabled: false },
  markdown: { rehypePlugins: [rehypePrefixBase] },
});
