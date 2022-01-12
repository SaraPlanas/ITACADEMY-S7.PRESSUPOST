# ITACADEMY-S7.PRESSUPOST
Séptimo Sprint del curso de IT Academy

En aquest lliurament realitzarem una aplicació per calcular el pressupost d'una pàgina web, afegint més interaccions amb l'usuari que en la pràctica anterior (caselles de selecció, inputs, botons). La nostra web haurà de reaccionar i modificar el preu total en funció de les opcions que triï l'usuari.


Nivell 1

- Exercici 1
La nostra aplicació començarà amb tres checkboxes mitjançant els quals l'usuari podrà decidir si vol obtenir el pressupost d'una pàgina web (500 €), una campanya SEO (300 €) o una campanya de publicitat (200 €).
En funció de les opcions que marqui, es mostrarà un preu diferent.
Simplement hauràs de crear 3 caselles de selecció que executi una funció, passant a aquesta funció l'esdeveniment de la casella de selecció, per a saber quina casella de selecció ha estat clicat. En funció de la casella de selecció que s'hagi premut, hauràs de modificar el preu total en conseqüència. 

- Exercici 2
Una vegada creats les caselles de selecció que permetran a l'usuari seleccionar el tipus de servei que necessita, li oferirem l'opció d'ajustar un dels serveis: crear una pàgina web, podent triar el nombre de pàgines i d'idiomes.
Per a això, cal definir un styled-component anomenat Panell que serà visible quan el client seleccioni que vol fer una pàgina web.
Dins d'aquest component, el client podrà seleccionar el nombre de pàgines i el nombre d'idiomes de la web que desitja fer. 
Al cost total del web haurem d'afegir la següent quantitat:
-  Numero de pàgines * el numero d'idiomes * 30 €.

- Exercici 3
Genial, l'usuari ja pot demanar 3 dels nostres serveis i customizar un d'ells. 
Per a fer la vida més fàcil a l'usuari, en lloc de fer-li teclejar el nombre de pàgines i idiomes que necessites, li posarem uns botons als costats de l'input perquè de manera fàcil pugui modificar la seva selecció.
Per a ells, has que canviar els "<input type = "text" />" de el panell per un nou component fet a mida que tindrà botons d'incrementar i decrementar la quantitat, a més d'un quadre de text en què podrem escriure la quantitat directament:

- Exercici 4
Ja gairebé has completat la base del projecte, et falta guardar les dades dels camps seleccionats per l'usuari en localstorage.
Has d'usar el hook useEffect per a carregar les dades del localstorage quan es  s'inicialitzi el component.

- Exercici 5
Per a acabar aquesta primera fase del projecte, és necessari implementar una pantalla de benvinguda a l'usuari, on s'expliqui el propòsit i funcionament de la web.
És necessari que implementis la navegació entre vistes usant el routing de React.


Nivell 2

- Exercici 6
Sempre hi ha usuaris despistats que podran usar el teu web de pressupostos. Per a garantir que tothom entén el significat dels inputs de número. de pàgines i d'idiomes, hauràs d'implementar un botó que obri un popup d'ajuda.
Has de crear un nou component, consistent en un va botar que quan és premut mostrarà un popup d'informació, que contingui una descripció del servei i el nombre de pàgines seleccionades pel ususari:
A l'prémer a la capa de fons gris de la finestra emergent, aquest ha de desaparèixer.

- Exercici 7
Ja has completat la web, però només funciona per a fer un únic pressupost. Com aquesta web està pensada perquè també els programadors freelance puguin generar els seus pressupostos, falta donar l'opció a l'usuari perquè pugui generar diversos pressupostos.
Per a això, hauràs d'afegir dos inputs: nom de pressupost i client, que juntament amb el servei seleccionat per l'usuari i el preu total calculat, s'haurà d'afegir a un llistat de pressupostos el la part dreta de la pantalla.
A l'hora d'afegir el pressupost al llistat, s'ha d'afegir la data mitjançant el constructor new Dóna't().
Els items d'aquest llistat han de contenir totes les dades citades anteriorment.

- Exercici 8
Hi ha un problema amb el llistat de pressupostos, costa trobar els pressupostos quan hi ha molts, ja que no existeix cap mena de filtre, cercador o opció d'ordenar el llistat.
En aquest exercici hauràs d'implementar 3 botons en la part superior del llistat, els quals efectuen les següents tasques:
- Botó ordenar alfabèticament els pressupostos.
- Botó ordenar per data els pressupostos.
- Botó reinicialitzar ordre.

- Exercici 9
Ordenant els pressupostos gràcies a l'exercici anterior, facilita molt la visa als usuaris, però encara no és suficient. 
Es necessita implementar un cercador de pressupostos, el qual cerca en tots els noms dels pressupostos per a mostrar només els que concorden.

- Exercici 10
Igual que en l'exercici 4 has implementat localstorage per a guardar les preferències dels serveis introduïts per l'usuari, en aquest apartat has d'implementar la persistència del llistat de pressupostos generats.


Nivell 3

- Exercici 11
Ens falta tenir la capacitat que l'usuari pugui compartir la url d'un pressupost i que al receptor li surti la pantalla emplenada. En moltes ocasions un servei es contracta per recomanació, per la qual cosa és fonamental tenir-lo implementat.
A l'anar seleccionant cadascuna de les opcions de l'pressupost, la url de la mateixa ha de canviar en funció d'aquests canvis. D'aquesta manera, si el client comparteix la URL amb algú, aquest podrà visualitzar les mateixes opcions de l'pressupost.