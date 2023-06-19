# Slider

Posuvníky umožňujú používateľom vyberať z rozsahu hodnôt.

## Atributy elementu

### Value

Určuje počiatočnú hodnotu komponenty. 

### Min
#### Minimálna hodnota

Najnižšia hodnota v rozsahu povolených hodnôt. Ak value je hodnota prvku menšia ako táto hodnota, prvok zlyhá pri overení obmedzenia . Ak je zadaná hodnota, minktorá nie je platným číslom, vstup nemá žiadnu minimálnu hodnotu. 

### Max
#### Maximálna hodnota 

Najvyššia hodnota v rozsahu povolených hodnôt. Ak hodnota valuezadaná do prvku túto hodnotu prekročí, prvok zlyhá pri overení obmedzenia . Ak hodnota atribútu maxnie je číslo, prvok nemá maximálnu hodnotu.

Táto hodnota musí byť väčšia alebo rovná hodnote atribútu min. Pozrite si atribút HTML max.

### Step
Atribút stepje číslo, ktoré určuje úroveň podrobnosti, ktorú musí hodnota dodržiavať. Platné sú iba hodnoty, ktoré zodpovedajú zadanému intervalu krokovania ( minak je zadaný, inak, alebo vhodná predvolená hodnota, ak nie je zadaná žiadna z nich).value 

### Color 

[**purple**, danger, complete, warning, success]

Color určuje farbu posuvníka. Ak sa hodnota nezadá, posuvnik bude mať farbu purple.

### Bubble

Atribute bey parametra. Ak existuje atribut s názvom bubble, tak komponenta vykreslí nad tiahlom bublinu s vybranou hodnotou. 
