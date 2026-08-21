# GogoKlima — web

Statická jednostránková prezentace (čisté HTML/CSS/JS, žádné závislosti ani build krok).

## Spuštění lokálně

Stačí otevřít `index.html` v prohlížeči, nebo pro plnou funkčnost (fetch fontů apod.) spustit lokální server:

```
cd web
python3 -m http.server 8000
```

a otevřít `http://localhost:8000`.

## Nasazení

Aktuálně nasazeno přes GitHub Pages z této repository (větev `main`, kořen `/`):
**https://sabre90.github.io/gogoklima/**

Jakákoli změna stačí commitnout a pushnout — Pages se do ~1 minuty přebuildí automaticky, žádný build krok není potřeba.

### Až bude k dispozici vlastní doména (gogoklima.cz)

1. Přidat soubor `CNAME` do kořene repa s obsahem domény.
2. Nastavit DNS (A záznamy na GitHub Pages IP, nebo CNAME na `sabre90.github.io`).
3. Aktualizovat všechny výskyty `https://sabre90.github.io/gogoklima/` na novou doménu — jsou v `index.html` (canonical, Open Graph, JSON-LD), `robots.txt`, `sitemap.xml` a `llms.txt`.

## Co je potřeba doplnit před spuštěním ostrého webu

Použité zástupné (placeholder) údaje jsou schválně nápadné, aby se nedaly přehlédnout:

- **Telefon / e-mail**: `+420 123 456 789` a `info@gogoklima.cz` — nahradit skutečnými kontakty. Vyskytují se na více místech: hlavička, hero, kontaktní pruh, patička, `llms.txt` a strukturovaná data (JSON-LD) v `<head>` souboru `index.html`.
- **Adresa, IČO, DIČ**: v patičce (`footer .footer-legal`) — označeno `[doplnit]`. Ve strukturovaných datech (JSON-LD) je zatím jen přibližná adresa na úrovni města (Benešov, Středočeský kraj, bez ulice a PSČ) — přesnou adresu doplnit do `address` v `index.html`, pokud ji chcete zveřejnit. IČO/DIČ do JSON-LD záměrně nepatří jako placeholder — fiktivní hodnota by mohla být vyhledávači/AI nástroji vzata jako reálný údaj.
- **Reference/recenze**: sekce „Co říkají spokojení zákazníci“ obsahuje ukázkové (nikoliv reálné) recenze — nahradit skutečnými hodnoceními od zákazníků.
- **Fotografie**: aktuálně se používá jedna reálná fotka z podkladů (`assets/img/instalace-venkovni-jednotka.jpg`) na třech místech. Doporučuji doplnit další reálné fotky realizací (referenční sekce, sekce "Proč klima od nás") pro větší důvěryhodnost.
- **Oblast působnosti**: „Praha a Střední Čechy“ + města Praha/Kladno/Beroun/Mělník v sekci „Kde působím“ — upravit dle skutečnosti. Stejně tak `areaServed` v JSON-LD a text v `llms.txt`.
- **Odkaz „Nastavení cookies“** v patičce je zatím neaktivní placeholder (web nepoužívá žádné cookies ani analytiku). Pokud se v budoucnu přidá Google Analytics, Meta Pixel apod., je potřeba doplnit funkční cookie lištu se souhlasem *před* načtením takových skriptů.

## SEO a AI dohledatelnost

- `robots.txt` — povoluje všem crawlerům včetně AI (GPTBot, ClaudeBot, PerplexityBot…).
- `sitemap.xml` — mapa stránky.
- `llms.txt` — strukturované shrnutí firmy pro LLM nástroje (konvence [llmstxt.org](https://llmstxt.org)).
- JSON-LD (`schema.org/HVACBusiness`) v `<head>` — strukturovaná data pro Google i AI asistenty. Obsahuje pole `dateModified` — při každé obsahové změně webu ho aktualizujte na aktuální datum, je to signál aktuálnosti pro vyhledávače i AI nástroje.
- Open Graph + Twitter card meta tagy vč. vlastního náhledového obrázku (`assets/img/og-image.png`).
- Fonty jsou self-hostované (`assets/fonts/`), web nedělá žádné externí síťové požadavky — rychlejší načtení a bez přenosu IP adresy návštěvníka třetí straně (Google Fonts).

## Struktura

```
web/
  index.html
  css/styles.css
  js/main.js
  robots.txt
  sitemap.xml
  llms.txt
  assets/logo/        – loga v SVG (z podkladové složky)
  assets/img/          – fotografie + OG náhledový obrázek
  assets/fonts/         – self-hostovaný variabilní font (Plus Jakarta Sans)
```
