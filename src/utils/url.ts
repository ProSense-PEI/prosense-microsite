// Prefixes a site-absolute path with the configured `base`, so links and
// assets keep working when the site is served from a sub-path such as
// https://<org>.github.io/<repo>/.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}
