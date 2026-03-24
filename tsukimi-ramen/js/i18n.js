/* =============================================
   TSUKIMI RAMEN — i18n.js
   Language: EN / NL / JA
   ============================================= */

(function () {
  var t = {
    en: {
      /* Nav */
      'nav.home': 'Home',
      'nav.menu': 'Menu',
      'nav.about': 'About',
      'nav.reserve': 'Reserve',

      /* Hero */
      'hero.tagline': 'A ramen break upstairs<br>in the heart of Amsterdam',
      'hero.address': 'Damrak 45 · Floor 2<br>Amsterdam',
      'hero.reserveBtn': 'Reserve a table',
      'hero.viewMenu': 'View Menu',
      'hero.hours': 'Open daily<br>09:00 – 23:00',

      /* Index – Menu preview */
      'menuPreview.label': "A taste of what's upstairs",
      'menuPreview.heading': 'Fresh, simple <em>ramen.</em>',
      'card.tonkotsu.name': 'Tonkotsu Ramen',
      'card.tonkotsu.desc': 'Rich pork bone broth with noodles, chashu pork, bok choy and soft-boiled egg',
      'card.chicken.name': 'Chicken Ramen',
      'card.chicken.desc': 'Clear chicken broth with noodles, chicken fillet, bok choy and soft-boiled egg',
      'card.shrimp.name': 'Shrimp Miso Ramen',
      'card.shrimp.desc': 'Miso broth with noodles, fried shrimp, bok choy and soft-boiled egg',
      'menuPreview.cta': 'Our Ramen \u2192',

      /* Index – Concept */
      'concept.label': 'Our story',
      'concept.text': 'Located just above the busy streets of Damrak, Tsukimi Ramen offers a quiet escape in the heart of Amsterdam. Step upstairs and enjoy a warm, casual ramen experience away from the crowds.',

      /* Index – Reserve CTA */
      'reserve.label': 'Reservations',
      'reserve.heading': '<em>Reserve your</em> table',
      'reserve.sub': 'Skip the wait and secure your spot upstairs.',
      'reserve.btn': 'Reserve now',
      'reserve.note': "We'll integrate online reservations soon.",

      /* Index – Location */
      'location.label': 'Find us',
      'location.heading': "We're <em>upstairs</em>",
      'location.desc': 'Located inside At James on Damrak 45, floor 2.<br>Step upstairs and discover Tsukimi Ramen.',
      'location.addrKey': 'Address',
      'location.addrVal': 'Damrak 45, Floor 2, Amsterdam',
      'location.hoursKey': 'Hours',
      'location.hoursVal': '09:00 \u2013 23:00 daily',
      'location.phoneKey': 'Phone',
      'location.note': "<strong>Look for At James on Damrak 45</strong> \u2014 we're on the second floor. Take the stairs up and you'll find us.",

      /* Footer */
      'footer.tagline': 'Ramen upstairs in the heart of Amsterdam',
      'footer.menu': 'Menu',
      'footer.about': 'About',

      /* Menu page */
      'menu.pageTitle': 'Our Menu',
      'menu.subtitle': 'Fresh ramen upstairs in the heart of Amsterdam',
      'menu.ramenCat': 'Ramen',
      'menu.sidesCat': 'Side Dishes',
      'menu.friedCat': 'Fried Dishes',
      'menu.dessertCat': 'Desserts',
      'menu.toppingsCat': 'Extra Toppings',
      'menu.saucesCat': 'Sauces',

      /* Menu – Ramen */
      'ramen.tonkotsu.name': 'Tonkotsu Ramen',
      'ramen.tonkotsu.desc': 'Rich pork bone broth with noodles, chashu pork, bok choy, bamboo shoots, narutomaki, soft-boiled egg, seaweed, sesame and scallions',
      'ramen.chicken.name': 'Chicken Ramen',
      'ramen.chicken.desc': 'Clear chicken broth with noodles, chicken fillet, bok choy, bamboo shoots, narutomaki, soft-boiled egg and scallions',
      'ramen.shrimp.name': 'Shrimp Miso Ramen',
      'ramen.shrimp.desc': 'Miso broth with noodles, fried shrimp, bok choy, bamboo shoots, narutomaki, soft-boiled egg, bonito flakes and scallions',
      'ramen.veg.name': 'Vegetable Soy-Sauce Ramen',
      'ramen.veg.desc': 'Soy sauce broth with noodles, bok choy, corn, broccoli, bamboo shoots, seaweed, dry onions and scallions',

      /* Menu – Sides */
      'sides.seaweed': 'Seasoned seaweed salad',
      'sides.edamame': 'Edamame',
      'sides.kimchi': 'Kimchi <em>(Korean fermented vegetables)</em>',
      'sides.eggs': 'Soft boiled seasoned eggs',
      'sides.dumplings': 'Pan-fried chicken dumplings',
      'sides.gyoza': 'Pan-fried vegetable gyoza',
      'sides.pancake': 'Japanese savory pancake sticks (2 pieces)',

      /* Menu – Fried */
      'fried.octopus': 'Octopus balls (4 pieces)',
      'fried.chicken': 'Japanese fried chicken (5 pieces)',
      'fried.spring': 'Spring rolls (5 rolls)',
      'fried.shrimp': 'Ebifry / fried shrimp (4 pieces)',
      'fried.skewers': 'Chicken onion skewers (2 pieces)',
      'fried.dumplingsC': 'Fried chicken dumplings',
      'fried.dumplingsV': 'Fried vegetable dumplings',

      /* Menu – Desserts */
      'dessert.dango': 'Dango sticks',
      'dessert.mochi': 'Mochi ice cream',
      'dessert.tofu': 'Tofu pudding (almond flavor)',

      /* Toppings */
      'topping.chashu': 'Chashu pork (3\u00d7)',
      'topping.chicken': 'Chicken fillet (3\u00d7)',
      'topping.shrimp': 'Shrimp (3\u00d7)',
      'topping.egg': 'Ajitama egg',
      'topping.scallions': 'Scallions',
      'topping.corn': 'Corn',
      'topping.bamboo': 'Bamboo shoots',
      'topping.bokchoy': 'Boiled bok choy',
      'topping.noodles': 'Portion noodles',
      'topping.seaweed': 'Dry seaweed',

      /* Sauces */
      'sauce.mayo': 'Japanese mayonnaise',
      'sauce.sweetChili': 'Sweet chili sauce',
      'sauce.hot': 'Hot sauce (Sriracha)',
      'sauce.takoyaki': 'Takoyaki sauce',
      'sauce.okono': 'Okonomiyaki sauce',
      'sauce.soy': 'Soy sauce',
      'sauce.teriyaki': 'Teriyaki sauce',

      /* About page */
      'about.label': 'About us',
      'about.p1': 'Tsukimi Ramen is a casual ramen spot located in the heart of Amsterdam, on the second floor of Damrak 45 \u2014 inside At James, which has been welcoming guests since 2011.',
      'about.p2': 'Inspired by the energy of the city, we offer a simple and welcoming space just above the busy streets. Step upstairs and take a break from the crowds.',
      'about.p3': 'Our focus is on fresh, quality ramen made for a quick, comfortable meal in the city.',
      'about.viewMenu': 'View our menu',
      'about.reserve': 'Reserve a table',
    },

    nl: {
      /* Nav */
      'nav.home': 'Home',
      'nav.menu': 'Menu',
      'nav.about': 'Over ons',
      'nav.reserve': 'Reserveer',

      /* Hero */
      'hero.tagline': 'Een ramen pauze op de 2e etage<br>in het hart van Amsterdam',
      'hero.address': 'Damrak 45 · Verdieping 2<br>Amsterdam',
      'hero.reserveBtn': 'Reserveer een tafel',
      'hero.viewMenu': 'Bekijk menu',
      'hero.hours': 'Dagelijks open<br>09:00 \u2013 23:00',

      /* Index – Menu preview */
      'menuPreview.label': 'Een voorproefje van boven',
      'menuPreview.heading': 'Vers, eenvoudig <em>ramen.</em>',
      'card.tonkotsu.name': 'Tonkotsu Ramen',
      'card.tonkotsu.desc': 'Rijke varkensbouillon met noedels, chashu varkensvlees, paksoi en zacht gekookt ei',
      'card.chicken.name': 'Kip Ramen',
      'card.chicken.desc': 'Heldere kippenbouillon met noedels, kipfilet, paksoi en zacht gekookt ei',
      'card.shrimp.name': 'Garnalen Miso Ramen',
      'card.shrimp.desc': 'Miso bouillon met noedels, gefrituurde garnalen, paksoi en zacht gekookt ei',
      'menuPreview.cta': 'Ons Ramen \u2192',

      /* Index – Concept */
      'concept.label': 'Ons verhaal',
      'concept.text': 'Net boven de drukke straten van Damrak biedt Tsukimi Ramen een rustige plek in het hart van Amsterdam. Ga naar boven en geniet van een warm, casual ramen-ervaring weg van de drukte.',

      /* Index – Reserve CTA */
      'reserve.label': 'Reserveringen',
      'reserve.heading': '<em>Reserveer je</em> tafel',
      'reserve.sub': 'Sla het wachten over en zeker je plek boven.',
      'reserve.btn': 'Nu reserveren',
      'reserve.note': 'Online reserveringen komen binnenkort.',

      /* Index – Location */
      'location.label': 'Vind ons',
      'location.heading': 'Wij zitten <em>boven</em>',
      'location.desc': 'Gelegen in At James op Damrak 45, verdieping 2.<br>Loop naar boven en ontdek Tsukimi Ramen.',
      'location.addrKey': 'Adres',
      'location.addrVal': 'Damrak 45, Verdieping 2, Amsterdam',
      'location.hoursKey': 'Openingstijden',
      'location.hoursVal': '09:00 \u2013 23:00 dagelijks',
      'location.phoneKey': 'Telefoon',
      'location.note': '<strong>Zoek naar At James op Damrak 45</strong> \u2014 wij zitten op de tweede verdieping. Neem de trap omhoog en je vindt ons.',

      /* Footer */
      'footer.tagline': 'Ramen boven in het hart van Amsterdam',
      'footer.menu': 'Menu',
      'footer.about': 'Over ons',

      /* Menu page */
      'menu.pageTitle': 'Ons Menu',
      'menu.subtitle': 'Verse ramen op de tweede verdieping in het hart van Amsterdam',
      'menu.ramenCat': 'Ramen',
      'menu.sidesCat': 'Bijgerechten',
      'menu.friedCat': 'Gefrituurde Gerechten',
      'menu.dessertCat': 'Nagerechten',
      'menu.toppingsCat': 'Extra Toppings',
      'menu.saucesCat': 'Sauzen',

      /* Menu – Ramen */
      'ramen.tonkotsu.name': 'Tonkotsu Ramen',
      'ramen.tonkotsu.desc': 'Rijke varkensbouillon met noedels, chashu varkensvlees, paksoi, bamboescheuten, narutomaki, zacht gekookt ei, zeewier, sesam en lente-ui',
      'ramen.chicken.name': 'Kip Ramen',
      'ramen.chicken.desc': 'Heldere kippenbouillon met noedels, kipfilet, paksoi, bamboescheuten, narutomaki, zacht gekookt ei en lente-ui',
      'ramen.shrimp.name': 'Garnalen Miso Ramen',
      'ramen.shrimp.desc': 'Miso bouillon met noedels, gefrituurde garnalen, paksoi, bamboescheuten, narutomaki, zacht gekookt ei, bonitovlokken en lente-ui',
      'ramen.veg.name': 'Groente Sojasaus Ramen',
      'ramen.veg.desc': 'Sojasausbouillon met noedels, paksoi, mais, broccoli, bamboescheuten, zeewier, droge ui en lente-ui',

      /* Menu – Sides */
      'sides.seaweed': 'Gekruide zeewier salade',
      'sides.edamame': 'Edamame',
      'sides.kimchi': 'Kimchi <em>(Koreaanse gefermenteerde groenten)</em>',
      'sides.eggs': 'Zacht gekookte gemarineerde eieren',
      'sides.dumplings': 'Gebakken kip dumplings',
      'sides.gyoza': 'Gebakken groente gyoza',
      'sides.pancake': 'Japanse hartige pannenkoekstokjes (2 stuks)',

      /* Menu – Fried */
      'fried.octopus': 'Octopusballen (4 stuks)',
      'fried.chicken': 'Japans gefrituurde kip (5 stuks)',
      'fried.spring': "Loempia's (5 stuks)",
      'fried.shrimp': 'Ebifry / gefrituurde garnalen (4 stuks)',
      'fried.skewers': 'Kip-uispiesjes (2 stuks)',
      'fried.dumplingsC': 'Gefrituurde kip dumplings',
      'fried.dumplingsV': 'Gefrituurde groente dumplings',

      /* Menu – Desserts */
      'dessert.dango': 'Dango stokjes',
      'dessert.mochi': 'Mochi ijs',
      'dessert.tofu': 'Tofu pudding (amandelsmaak)',

      /* Toppings */
      'topping.chashu': 'Chashu varkensvlees (3\u00d7)',
      'topping.chicken': 'Kipfilet (3\u00d7)',
      'topping.shrimp': 'Garnalen (3\u00d7)',
      'topping.egg': 'Ajitama ei',
      'topping.scallions': 'Lente-ui',
      'topping.corn': 'Ma\u00efs',
      'topping.bamboo': 'Bamboescheuten',
      'topping.bokchoy': 'Gekookte paksoi',
      'topping.noodles': 'Portie noedels',
      'topping.seaweed': 'Gedroogd zeewier',

      /* Sauces */
      'sauce.mayo': 'Japanse mayonaise',
      'sauce.sweetChili': 'Zoete chilisaus',
      'sauce.hot': 'Hete saus (Sriracha)',
      'sauce.takoyaki': 'Takoyaki saus',
      'sauce.okono': 'Okonomiyaki saus',
      'sauce.soy': 'Sojasaus',
      'sauce.teriyaki': 'Teriyaki saus',

      /* About page */
      'about.label': 'Over ons',
      'about.p1': 'Tsukimi Ramen is een casual ramen restaurant in het hart van Amsterdam, op de tweede verdieping van Damrak 45 \u2014 in At James, dat gasten verwelkomt sinds 2011.',
      'about.p2': 'Ge\u00efnspireerd door de energie van de stad bieden wij een eenvoudige en gastvrije plek net boven de drukke straten. Ga naar boven en neem een pauze van de drukte.',
      'about.p3': 'Onze focus ligt op vers, kwalitatief ramen voor een snelle, comfortabele maaltijd in de stad.',
      'about.viewMenu': 'Bekijk ons menu',
      'about.reserve': 'Reserveer een tafel',
    },

    ja: {
      /* Nav */
      'nav.home': 'ホーム',
      'nav.menu': '\u30e1\u30cb\u30e5\u30fc',
      'nav.about': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',
      'nav.reserve': '\u4e88\u7d04',

      /* Hero */
      'hero.tagline': '\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u3067<br>2\u968e\u306e\u30e9\u30fc\u30e1\u30f3\u4f11\u61a9',
      'hero.address': '\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u30fb2\u968e<br>\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0',
      'hero.reserveBtn': '\u30c6\u30fc\u30d6\u30eb\u3092\u4e88\u7d04\u3059\u308b',
      'hero.viewMenu': '\u30e1\u30cb\u30e5\u30fc\u3092\u898b\u308b',
      'hero.hours': '\u6bce\u65e5\u55b6\u696d<br>09:00 \u2013 23:00',

      /* Index – Menu preview */
      'menuPreview.label': '2\u968e\u306e\u304a\u5473\u3092\u3069\u3046\u305e',
      'menuPreview.heading': '\u65b0\u9bae\u3067\u30b7\u30f3\u30d7\u30eb\u306a<em>\u30e9\u30fc\u30e1\u30f3\u3002</em>',
      'card.tonkotsu.name': '\u8c5a\u9aa8\u30e9\u30fc\u30e1\u30f3',
      'card.tonkotsu.desc': '\u6fc3\u539a\u306a\u8c5a\u9aa8\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\u3001\u767d\u83dc\u3001\u534a\u71df\u5375',
      'card.chicken.name': '\u30c1\u30ad\u30f3\u30e9\u30fc\u30e1\u30f3',
      'card.chicken.desc': '\u6e05\u3093\u3060\u9d8f\u30ac\u30e9\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u9d8f\u30d5\u30a3\u30ec\u3001\u767d\u83dc\u3001\u534a\u71df\u5375',
      'card.shrimp.name': '\u30a8\u30d3\u5473\u564c\u30e9\u30fc\u30e1\u30f3',
      'card.shrimp.desc': '\u5473\u564c\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u63da\u3052\u30a8\u30d3\u3001\u767d\u83dc\u3001\u534a\u71df\u5375',
      'menuPreview.cta': '\u30e9\u30fc\u30e1\u30f3\u30e1\u30cb\u30e5\u30fc \u2192',

      /* Index – Concept */
      'concept.label': '\u30b9\u30c8\u30fc\u30ea\u30fc',
      'concept.text': '\u30c0\u30e0\u30e9\u30af\u306e\u8ce1\u308f\u3044\u901a\u308a\u306e\u3059\u3050\u4e0a\u306b\u4f4d\u7f6e\u3059\u308b\u30c4\u30ad\u30df\u30e9\u30fc\u30e1\u30f3\u306f\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u306b\u9759\u304b\u306a\u3072\u3068\u3068\u304d\u3092\u3054\u63d0\u4f9b\u3057\u307e\u3059\u30022\u968e\u306b\u4e0a\u304c\u308a\u3001\u559d\u9a12\u304b\u3089\u96e2\u308c\u305f\u6e29\u304b\u304f\u30ab\u30b8\u30e5\u30a2\u30eb\u306a\u30e9\u30fc\u30e1\u30f3\u4f53\u9a13\u3092\u3069\u3046\u305e\u3002',

      /* Index – Reserve CTA */
      'reserve.label': '\u3054\u4e88\u7d04',
      'reserve.heading': '<em>\u30c6\u30fc\u30d6\u30eb\u3092</em>\u3054\u4e88\u7d04',
      'reserve.sub': '\u5f85\u3061\u6642\u9593\u306a\u3057\u30672\u968e\u306e\u304a\u5e2d\u3092\u78ba\u4fdd\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'reserve.btn': '\u4eca\u3059\u3050\u4e88\u7d04',
      'reserve.note': '\u30aa\u30f3\u30e9\u30a4\u30f3\u4e88\u7d04\u306f\u8fd1\u65e5\u516c\u958b\u4e88\u5b9a\u3067\u3059\u3002',

      /* Index – Location */
      'location.label': '\u30a2\u30af\u30bb\u30b9',
      'location.heading': '\u79c1\u305f\u3061\u306f<em>2\u968e</em>\u306b\u3044\u307e\u3059',
      'location.desc': '\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u306eAt James\u306e\u4e2d\u30012\u968e\u306b\u3054\u3056\u3044\u307e\u3059\u3002<br>\u968e\u6bb5\u3092\u4e0a\u304c\u3063\u3066\u30c4\u30ad\u30df\u30e9\u30fc\u30e1\u30f3\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002',
      'location.addrKey': '\u4f4f\u6240',
      'location.addrVal': '\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u30fb2\u968e\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0',
      'location.hoursKey': '\u55b6\u696d\u6642\u9593',
      'location.hoursVal': '\u6bce\u65e5 09:00 \u2013 23:00',
      'location.phoneKey': '\u96fb\u8a71',
      'location.note': '<strong>\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u306eAt James\u3092\u304a\u63a2\u3057\u304f\u3060\u3055\u3044</strong> \u2014 2\u968e\u306b\u3054\u3056\u3044\u307e\u3059\u3002\u968e\u6bb5\u3092\u4e0a\u304c\u308b\u3068\u3059\u3050\u898b\u3064\u304b\u308a\u307e\u3059\u3002',

      /* Footer */
      'footer.tagline': 'アムステルダムの中心で、上の階のラーメン',
      'footer.menu': '\u30e1\u30cb\u30e5\u30fc',
      'footer.about': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',

      /* Menu page */
      'menu.pageTitle': '\u30e1\u30cb\u30e5\u30fc',
      'menu.subtitle': '\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u30012\u968e\u3067\u65b0\u9bae\u306a\u30e9\u30fc\u30e1\u30f3\u3092',
      'menu.ramenCat': '\u30e9\u30fc\u30e1\u30f3',
      'menu.sidesCat': '\u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc',
      'menu.friedCat': '\u63da\u3052\u7269',
      'menu.dessertCat': '\u30c7\u30b6\u30fc\u30c8',
      'menu.toppingsCat': '\u30c8\u30c3\u30d4\u30f3\u30b0',
      'menu.saucesCat': '\u30bd\u30fc\u30b9',

      /* Menu – Ramen */
      'ramen.tonkotsu.name': '\u8c5a\u9aa8\u30e9\u30fc\u30e1\u30f3',
      'ramen.tonkotsu.desc': '\u6fc3\u539a\u306a\u8c5a\u9aa8\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\u3001\u767d\u83dc\u3001\u7b4b\u306e\u5b50\u3001\u306a\u308b\u3068\u3001\u534a\u71df\u5375\u3001\u6d77\u82d3\u3001\u3054\u307e\u3001\u30cd\u30ae',
      'ramen.chicken.name': '\u30c1\u30ad\u30f3\u30e9\u30fc\u30e1\u30f3',
      'ramen.chicken.desc': '\u6e05\u3093\u3060\u9d8f\u30ac\u30e9\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u9d8f\u30d5\u30a3\u30ec\u3001\u767d\u83dc\u3001\u7b4b\u306e\u5b50\u3001\u306a\u308b\u3068\u3001\u534a\u71df\u5375\u3001\u30cd\u30ae',
      'ramen.shrimp.name': '\u30a8\u30d3\u5473\u564c\u30e9\u30fc\u30e1\u30f3',
      'ramen.shrimp.desc': '\u5473\u564c\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u63da\u3052\u30a8\u30d3\u3001\u767d\u83dc\u3001\u7b4b\u306e\u5b50\u3001\u306a\u308b\u3068\u3001\u534a\u71df\u5375\u3001\u9d3a\u7bc0\u3001\u30cd\u30ae',
      'ramen.veg.name': '\u91ce\u83dc\u91a4\u6cb9\u30e9\u30fc\u30e1\u30f3',
      'ramen.veg.desc': '\u91a4\u6cb9\u30b9\u30fc\u30d7\u3001\u9eba\u3001\u767d\u83dc\u3001\u30b3\u30fc\u30f3\u3001\u30d6\u30ed\u30c3\u30b3\u30ea\u30fc\u3001\u7b4b\u306e\u5b50\u3001\u6d77\u82d3\u3001\u4e7e\u71e5\u5396\u9ebb\u3001\u30cd\u30ae',

      /* Menu – Sides */
      'sides.seaweed': '\u5473\u4ed8\u3051\u6d77\u85fb\u30b5\u30e9\u30c0',
      'sides.edamame': '\u679d\u8c46',
      'sides.kimchi': '\u30ad\u30e0\u30c1 <em>\uff08\u97d3\u56fd\u767a\u9175\u91ce\u83dc\uff09</em>',
      'sides.eggs': '\u5473\u4ed8\u3051\u534a\u71df\u5375',
      'sides.dumplings': '\u713c\u304d\u9d8f\u8089\u9913\u5b50',
      'sides.gyoza': '\u713c\u304d\u91ce\u83dc\u9913\u5b50',
      'sides.pancake': '\u304a\u597d\u307f\u713c\u304d\u30b9\u30c6\u30a3\u30c3\u30af\uff082\u672c\uff09',

      /* Menu – Fried */
      'fried.octopus': '\u305f\u3053\u713c\u304d\uff084\u500b\uff09',
      'fried.chicken': '\u5510\u63da\u3052\uff085\u500b\uff09',
      'fried.spring': '\u6625\u5dfb\u304d\uff085\u672c\uff09',
      'fried.shrimp': '\u30a8\u30d3\u30d5\u30e9\u30a4\uff084\u500b\uff09',
      'fried.skewers': '\u9d8f\u306d\u304e\u4e32\uff082\u672c\uff09',
      'fried.dumplingsC': '\u63da\u3052\u9d8f\u8089\u9913\u5b50',
      'fried.dumplingsV': '\u63da\u3052\u91ce\u83dc\u9913\u5b50',

      /* Menu – Desserts */
      'dessert.dango': '\u3060\u3093\u3054',
      'dessert.mochi': '\u3082\u3061\u30a2\u30a4\u30b9\u30af\u30ea\u30fc\u30e0',
      'dessert.tofu': '\u8c46\u8150\u30d7\u30ea\u30f3\uff08\u30a2\u30fc\u30e2\u30f3\u30c9\u5473\uff09',

      /* Toppings */
      'topping.chashu': '\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\uff083\u679a\uff09',
      'topping.chicken': '\u9d8f\u30d5\u30a3\u30ec\uff083\u679a\uff09',
      'topping.shrimp': '\u30a8\u30d3\uff083\u500b\uff09',
      'topping.egg': '\u5473\u7389',
      'topping.scallions': '\u30cd\u30ae',
      'topping.corn': '\u30b3\u30fc\u30f3',
      'topping.bamboo': '\u7b4b\u306e\u5b50',
      'topping.bokchoy': '\u767d\u83dc',
      'topping.noodles': '\u66ff\u3048\u7389',
      'topping.seaweed': '\u6d77\u82d3',

      /* Sauces */
      'sauce.mayo': '\u30de\u30e8\u30cd\u30fc\u30ba',
      'sauce.sweetChili': '\u30b9\u30a4\u30fc\u30c8\u30c1\u30ea\u30bd\u30fc\u30b9',
      'sauce.hot': '\u30db\u30c3\u30c8\u30bd\u30fc\u30b9\uff08\u30b9\u30ea\u30e9\u30c1\u30e3\uff09',
      'sauce.takoyaki': '\u305f\u3053\u713c\u304d\u30bd\u30fc\u30b9',
      'sauce.okono': '\u304a\u597d\u307f\u30bd\u30fc\u30b9',
      'sauce.soy': '\u91a4\u6cb9',
      'sauce.teriyaki': '\u7167\u308a\u713c\u304d\u30bd\u30fc\u30b9',

      /* About page */
      'about.label': '\u79c1\u305f\u3061\u306b\u3064\u3044\u3066',
      'about.p1': '\u30c4\u30ad\u30df\u30e9\u30fc\u30e1\u30f3\u306f\u3001\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u306e\u4e2d\u5fc3\u306b\u4f4d\u7f6e\u3059\u308b\u30ab\u30b8\u30e5\u30a2\u30eb\u306a\u30e9\u30fc\u30e1\u30f3\u5c02\u9580\u5e97\u3067\u3059\u3002\u30c0\u30e0\u30e9\u30af45\u756a\u5730\u30022\u968e\u3001At James\u306e\u4e2d\u306b\u3054\u3056\u3044\u307e\u3059\u30022011\u5e74\u304b\u3089\u55b6\u696d\u3057\u3066\u3044\u307e\u3059\u3002',
      'about.p2': '\u90fd\u5e02\u306e\u30a8\u30cd\u30eb\u30ae\u30fc\u306b\u30a4\u30f3\u30b9\u30d1\u30a4\u30a2\u3055\u308c\u3001\u8ce1\u308f\u3044\u901a\u308a\u306e\u3059\u3050\u4e0a\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u6e29\u304b\u3044\u7a7a\u9593\u3092\u3054\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u30022\u968e\u306b\u4e0a\u304c\u308a\u3001\u559d\u9a12\u304b\u3089\u9000\u3044\u3066\u30ea\u30e9\u30c3\u30af\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      'about.p3': '\u65b0\u9bae\u3067\u8cea\u306e\u9ad8\u3044\u30e9\u30fc\u30e1\u30f3\u3092\u30011\u56de\u306e\u5feb\u9069\u306a\u98df\u4e8b\u3068\u3057\u3066\u63d0\u4f9b\u3059\u308b\u3053\u3068\u304c\u79c1\u305f\u3061\u306e\u76ee\u6a19\u3067\u3059\u3002',
      'about.viewMenu': '\u30e1\u30cb\u30e5\u30fc\u3092\u898b\u308b',
      'about.reserve': '\u30c6\u30fc\u30d6\u30eb\u3092\u4e88\u7d04\u3059\u308b',
    }
  };

  function applyLang(lang) {
    if (!t[lang]) return;
    var dict = t[lang];

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('.lang-switcher button').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('tsukimi-lang', lang);
    document.documentElement.lang = lang === 'ja' ? 'ja' : (lang === 'nl' ? 'nl' : 'en');
  }

  function initHamburger() {
    var btn = document.getElementById('nav-toggle-btn');
    var nav = document.querySelector('.site-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function() {
      nav.classList.toggle('nav-open');
    });
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('nav-open');
      });
    });
  }

  function init() {
    var saved = localStorage.getItem('tsukimi-lang') || 'en';
    applyLang(saved);
    document.querySelectorAll('.lang-switcher button').forEach(function(btn) {
      btn.addEventListener('click', function() { applyLang(btn.dataset.lang); });
    });
    initHamburger();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
