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

Nahrát obsah složky `web/` na jakýkoli statický hosting (Netlify, Vercel, GitHub Pages, nebo běžný webhosting přes FTP). Není potřeba žádný build.

## Co je potřeba doplnit před spuštěním ostrého webu

Použité zástupné (placeholder) údaje jsou schválně nápadné, aby se nedaly přehlédnout:

- **Telefon / e-mail**: `+420 123 456 789` a `info@gogoklima.cz` — nahradit skutečnými kontakty v `index.html` (vyskytují se na více místech: hlavička, hero, kontaktní pruh, patička).
- **Adresa, IČO, DIČ**: v patičce (`footer .footer-legal`) — označeno `[doplnit]`.
- **Reference/recenze**: sekce „Co říkají spokojení zákazníci“ obsahuje ukázkové (nikoliv reálné) recenze — nahradit skutečnými hodnoceními od zákazníků.
- **Fotografie**: aktuálně se používá jedna reálná fotka z podkladů (`assets/img/instalace-venkovni-jednotka.jpg`) na třech místech. Doporučuji doplnit další reálné fotky realizací (referenční sekce, sekce "Proč klima od nás") pro větší důvěryhodnost.
- **Oblast působnosti**: „Praha a Střední Čechy“ + města Praha/Kladno/Beroun/Mělník v sekci „Kde působím“ — upravit dle skutečnosti.

## Struktura

```
web/
  index.html
  css/styles.css
  js/main.js
  assets/logo/       – loga v SVG (z podkladové složky)
  assets/img/         – fotografie
```
