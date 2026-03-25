# Hluti 1 – Stuttar spurningar

## Hvað gerir while-lykkja?

While loopa athugar hvort einhvað sé true og um leið og það verður false þá hættir hún að loopa

## Hvað þarf að gerast inni í while-lykkju svo hún stoppi?

það sem er inni í while loopunni þarf að verða false til hún stoppi

## Af hverju verður þessi lykkja óendanleg?

```
let i = 0;

while (i < 5) {
console.log(i);
i + 1;
}
```

því að i + 1 bætir bara við 1 að hverju sinni semsagt verður alltaf bara 1 og
kemst ekki upp í 5 til að stoppa loopuna
þarf að vera i = i + 1; eða i++;

## Hver er munurinn á:

i + 1
og
i = i + 1

i + 1 bætir bara við en breytir ekki i
i = i + 1 breytir i í i + 1

## Hvenær gæti verið hentugt að nota for í stað while?

þegar þú vilt að einhvað gerist aftur og aftur þangað til það sem þu setur í while verður false.

# Hluti 2 – Lagfærðu kóðann

## Verkefni A

### Lagaðu þennan kóða svo hann prenti tölurnar 0 til 4:

```
let i = 0;

while (i <= 4) {
console.log(i);
i = i + 1;
}
```

## Verkefni B

### Lagaðu þennan kóða svo hann prenti tölurnar 1 til 5:

```
let i = 1;

while (i <= 5) {
console.log(i);
i = i + 1
}
```

# Hluti 3 – Skrifaðu eigin lykkjur

## Verkefni C

### Skrifaðu while-lykkju sem prentar: 0-4

```
let i = 0;
while (i < 5) {
console.log(i);
i++;
}
```

## Verkefni D

### Skrifaðu for-lykkju sem prentar: 0-4

```
for (let i = 0; i < 5; i++) {
console.log(i);
}
```

## Verkefni E

### Skrifaðu for-lykkju sem prentar tölurnar 5 niður í 1.

```
for (let i = 5; i > 0; i -= 1) {
console.log(i);
}
```

# Hluti 4 – Hugsaðu aðeins

### Skoðaðu þennan kóða:

```
for (let i = 0; i < 5; i = i + 1) {
console.log(i);
}
```

### Hvar byrjar talningin?

hún byrjar á i = 0

### Hvenær stoppar lykkjan?

á tölunni 4

### Hvað gerist eftir hverja umferð?

bætir við 1

### Hverjar tölur birtast?

0, 1, 2, 3, 4

# Aukaverkefni

## Verkefni F

### Skrifaðu lykkju sem leggur saman tölurnar 1 til 5 og prentar summuna.

```
let sum = 0;

for (let i = 1; i <= 5; i++) {
sum += i;
}
console.log(sum);
```

Vænt niðurstaða:

15
