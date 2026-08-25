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

Nasazeno přes GitHub Pages z této repository (větev `main`, kořen `/`), na vlastní doméně:
**https://gogoklima.cz/**

(Záložní/výchozí GitHub adresa `https://sabre90.github.io/gogoklima/` funguje dál, ale kanonická je vlastní doména — na tu jsou nastavené canonical/OG/JSON-LD odkazy.)

Jakákoli změna stačí commitnout a pushnout — Pages se do ~1 minuty přebuildí automaticky, žádný build krok není potřeba.

DNS u Active24: `gogoklima.cz` má 4× A záznam na GitHub Pages IP (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), `www.gogoklima.cz` má CNAME na `sabre90.github.io`. Soubor `CNAME` v kořeni repa obsahuje `gogoklima.cz`.

## Co je potřeba doplnit před spuštěním ostrého webu

Použité zástupné (placeholder) údaje jsou schválně nápadné, aby se nedaly přehlédnout:

- **Telefon**: ✅ hotovo — `+420 608 450 430` je reálné číslo, nahrazeno na všech místech (hlavička, hero, kontaktní pruh, patička, `llms.txt`, JSON-LD).
- **E-mail**: `info@gogoklima.cz` — zatím placeholder, nahradit skutečným.
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
