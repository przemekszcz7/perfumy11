# Hurtownia Perfumy 1:1 - Instrukcja Wdrożenia na GitHub Pages

Twoja strona jest gotowa do wdrożenia. Aby działała poprawnie pod adresem `https://przemekszcz7.github.io/perfumy11/`, wykonaj poniższe kroki:

### Opcja 1: Automatyczne wdrożenie (Zalecane - JUŻ SKONFIGUROWANE)
W pliku `.github/workflows/deploy.yml` przygotowałem skrypt, który sam zbuduje i opublikuje Twoją stronę. Aby to zadziałało:
1. Pchnij (push) wszystkie pliki do swojego repozytorium na GitHub (gałąź `main`).
2. Wejdź w **Settings** -> **Pages** swojego repozytorium.
3. W sekcji **Build and deployment** -> **Source** wybierz **GitHub Actions**.
4. To wszystko! Przy każdym `push` strona odświeży się automatycznie.

### Opcja 2: Ręczne wdrożenie (jeśli nie używasz Actions)
1. Uruchom lokalnie `npm run build`.
2. Wypchnij zawartość folderu `dist` na gałąź `gh-pages`.
3. W ustawieniach **Pages** wybierz gałąź `gh-pages` jako źródło.

### Poprawione błędy:
- Skonfigurowano `base: '/perfumy11/'` w `vite.config.ts`, aby ścieżki do obrazów i skryptów były poprawne na serwerach GitHub.
- Błąd `RSS_Basic_Detect.js` jest błędem przeglądarki/wtyczki i nie wpływa na działanie strony.
