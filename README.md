# nodejs_projektit
node.js tasks

Tehtäviä Web-sovelluskehitys Syksy 2019

1. Asenna WebStorm, Node.js, Git ja MySQL Workbench (tai vastaava) erillisen ohjeen perustella. Laita myös ESLint toimimaan.
2. Lue seuraava tutoriaali: https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm Asenna Express-sovelluskehys NPM:ää käyttäen ja kopioi tutoriaalin ensimmäinen server.jsversio WebStormiin ja aja se. Totea sriptin toimivuus.
3. Keksi tietosisältö niin, että joudut määrittelemään muutaman taulun relaatiokannan, jossa käytät pääavain - viiteavain pareja. Jos et keksi muuta, niin Oman työtilassa on CreateTestDatabase.sql, jonka voi ajaa tyyliin: mysql > source CreateTestDatabase.sql. Jos olet käyttänyt Mongodb:tä, voit tehdä oman tietokannan myös sillä. Lisää tietokantaan tietoa käsin tyyliin insert into location values ('1', 'Tavastia', 'Urho Kekkosen katu', 'Helsinki', '00100', 'Finland'); koska käyttöliittymä puuttuu vielä. Myös event ja eventDate tauluihin täytyy laittaa jotakin.
4. Liitä tietokantayhteys palvelinskriptiin ja kokeile kyselyä. Yksinkertainen esimerkki löytyy täältä: https://www.w3schools.com/nodejs/nodejs_mysql_select.asp Monimutkaisempi (ja parametroitu)
kysely voisi olla oheisen näköinen. Kokeile esimerkkiä.
5. Jos lopputulos näkyy vain konsolissa, mutta ei selaimessa, katso oheinen keskustelu https://github.com/mysqljs/mysql/issues/1361  ja muuta toteutustasi niin, että vaste näkyy selaimessa saakka. Vaste on suoraan JSON-muotoinen (ainakin uudemmilla MySQLtoteutuksilla). Jos haluat muuntaa JSON-formaattia, voit käsitellä sitä merkkijonona ja tehdä tarpeellisia muunnoksia.
6. Kirjoita html-lomake, joka näyttää tietokannan tiedot siistinä listana, kun lähtötietona annetaan päivämääräväli, jolta tapahtumia halutaan nähdä. Lomakkeen voi tehdä pelkällä Javascriptilla tai Javascript-Vue-yhdistelmällä, jos Vue pysyy käsissä. Huomaa, että lomake täytyy ohjelmallisesti lähettää selaimelle, koska lomake on palvelimen resurssi. Tee tämä.
var q = url.parse(req.url, true).query; var startDate = q.start; var endDate = q.end; var sql = "SELECT event_date.Date, event.Name, event.Type, event.Time, Location.Location_place_name" + " FROM event_date, event, location" + " WHERE event_date.Event_Event_id = event.Event_id and event.Location_Location_id = Location.Location_id" + " and event_date.Date >= ? and event_date.Date <= ?" + " GROUP BY Name" + " ORDER BY event_date.Date";
Tehtäviä Web-sovelluskehitys Syksy 2019

7. Toteuta rajapintaan toiminto, joka palauttaa JSON-muodossa huvittelupaikan osoitteen, kun sen nimi syötetään lähtötietona (kuva).
