# cPanel Deployment (`primedesk.co.in/blogs`)

This project is configured for static export under `/blogs`.

## 1) Build locally

```bash
npm run build
```

With `output: 'export'`, this generates an `out/` folder.

## 2) Upload to cPanel

Upload files to this exact structure:

```text
public_html/
  blogs/
    index.html
    gcc-offices-hyderabad/
      index.html
    _next/
    images/
```

Map these from local `out/`:

- `out/blogs/index.html` -> `public_html/blogs/index.html`
- `out/blogs/gcc-offices-hyderabad/index.html` -> `public_html/blogs/gcc-offices-hyderabad/index.html`
- `out/_next/*` -> `public_html/blogs/_next/*`
- `out/images/*` -> `public_html/blogs/images/*`

## 3) Root `.htaccess` (in `public_html/.htaccess`)

Add this above `# BEGIN WordPress`:

```apache
RewriteEngine On
RewriteRule ^blogs/?$ /blogs/index.html [L]
RewriteRule ^blogs/([^/]+)/?$ /blogs/$1/index.html [L]
```

Inside the WordPress block, ensure WP fallback excludes `/blogs`:

```apache
RewriteCond %{REQUEST_URI} !^/blogs(/|$)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
```

## 4) `public_html/blogs/.htaccess`

```apache
Options -MultiViews
DirectoryIndex index.html
RewriteEngine On
RewriteBase /blogs/

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^([^/]+)/?$ $1/index.html [L]
RewriteRule ^$ index.html [L]
```

## 5) Clear cache

- Purge LiteSpeed cache in WP admin.
- Hard refresh browser.

