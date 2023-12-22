## Sprendžiamo uždavinio aprašymas

### Sistemos paskirtis

Projekto tikslas – palengvinti vizito tarp paciento ir psichologo planavimą ir pagerinti psichologo teikiamas paslaugas.

Vartotojas norėdamas tapti pacientu turės prisiregistruoti prie sistemos ir galės registruotis į vizitą su norimu psichologu arba į seansą, peržiūrėti savo vizitų aprašymo istoriją. Psichologai galės peržiūrėti turimų pacientų sąrašą, pildyti ir redaguoti vizito aprašymą, kurti grupinius terapinius seansus. patvirtinti paciento pasirinkto vizito laiką, matyti jam priskirtų konsultacijų laikus. Administratorius galės tvirtinti užregistruotus psichologus ir pacientus, redaguoti psichologų konsultacijos laikus, šalinti registruotus vartotojus pridėti įvairių tipų terapijas.

Sistemos ***naudotojas gali būti keturių tipų: svečias, prisijungęs naudotojas, psichologas bei administratorius.*** Atitinkamai pagal naudotoją tipą, leidžiama atlikti skirtingas funkcijas.  
***Objektai: Terapija – Vizitas – Vizito aprašymas.***  

### Funkciniai reikalavimai

Neprisijungęs naudotojas gali:  
1. Registruotis prie internetinės aplikacijos.;  

Pacientas gali:  
1. Prisijungti prie internetinės aplikacijos.
2. Pasirinkti norimą(galimą) vizito laiką.
3. Peržiūrėti vizitų aprašymo istoriją.
4. Atsijungti nuo internetinės aplikacijos. 

Psichologai galės:  
1. Matyti vizitų planą.
2. Kurti vizito su pacientu aprašymą.
3. Redaguoti vizito su pacientu aprašymą.
4. Kurti terapijas

Administratorius galės:
1. Registruoti psichologus.
2. Šalinti vartotojus.
3. Kurti terapijas psichologams.

## Pasirinktų technologijų aprašymas

- Kliento dalies kodas (angl. front-end) kuriamas naudojantis „React“
- Serverio dalies kodas (angl. back-end) kuriamas naudojant „.NET Core 7.0“.
- Duomenų bazė – „MySQL“.  

„React“ - nemokama atvirojo kodo „JavaScript“ biblioteka, skirta kurti vartotojo sąsajas, pagrįstas UI komponentais.  
„.NET Core“ – yra nemokama ir atviro kodo valdoma kompiuterinės programinės įrangos sistema, skirta „Windows“, „Linux“ ir „macOS“ operacinėms sistemoms. Leidžia kurti serverio pusės kodą naudojant C# programavimo kalbą.  
MySQL – viena iš reliacinių duomenų bazių valdymo sistemų, palaikanti daugelį naudotojų, dirbanti SQL kalbos pagrindu.

## Sistemos architektūra

Sistemos architektūrai aiškinti pateikiama UML diegimo diagrama (žr. 1 pav.). Serveris (šiuo atveju kompiuteryje sukurtas serveris) komunikuoja su kitais kompiuteriais naudojant HTTPS protokolą. Sistema galima naudotis ją atidarius per pasirinktą naršyklę.  


![architecktura](https://github.com/Labawo/Saitynai/assets/39883632/3627c9d2-de57-4d74-8e0e-a389f6c3375a)  
1 pav. Sistemos diegimo diagrama

## Naudotojo sąsajos projektas
Pradinis (žaidimų) langas:  
![home](https://github.com/Labawo/Saitynai/assets/39883632/399f14bf-6d45-4db6-adbd-a1af78653e20)

Pasirinktas terapijos langas:  
![therapies](https://github.com/Labawo/Saitynai/assets/39883632/6742b3d5-8260-458a-9f43-1e5ab37a713d)

Terapijos kūrimo langas:
![create](https://github.com/Labawo/Saitynai/assets/39883632/a22eecb8-4d03-46e9-84d5-5f303da60601)

Pasirinktas naudotoju langas:  
![users](https://github.com/Labawo/Saitynai/assets/39883632/6b2fbad6-bd4f-486c-b824-2e979f918797)

Pasirinktas mano terapijų langas:
![myappoints](https://github.com/Labawo/Saitynai/assets/39883632/3a897574-ed85-4d3f-a329-e28416d9372b)
![myreccomend](https://github.com/Labawo/Saitynai/assets/39883632/256c3725-76ce-4ba0-b301-62c609c5e598)  

Pasirinktas savaites vizitu sąrašas:
![weeklyappoints](https://github.com/Labawo/Saitynai/assets/39883632/c196b297-3f69-4f16-b938-180881bd8579)


Prisijungimas ir registracija:
![signup](https://github.com/Labawo/Saitynai/assets/39883632/3e391d2a-e3ab-4fb7-9e1c-036590a34c82)
![login](https://github.com/Labawo/Saitynai/assets/39883632/0bb8c7f3-af0e-40dc-8b9f-8270128b146c)


Kitų langų išdėstymas yra panašus

## API specifikacija

Iš viso sukurti 20 API endpoint'ų. Pagal Twitter specifikaciją aprašomi 17 iš jų (likę 2 yra pagalbiniai, failų įkėlimui ir šalinimui iš serverio).
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| GET | https://restls.azurewebsites.net/api/therapies/ | Nėra | Nėra | 200 | Užklausa: https://restls.azurewebsites.net/api/therapies/ |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| GET | https://restls.azurewebsites.net/api/therapies/:therapyId | Nėra | therapyId - terapijos identifikatorius | 200 | Užklausa: https://restls.azurewebsites.net/api/therapies/1 |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| POST | https://restls.azurewebsites.net/api/therapies | JWT Token: reikalinga Admin arba Doctor rolė | Terapijos objektas | 201, 400, 401, 403, 404 | Užklausa: https://restls.azurewebsites.net/api/therapies |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| PUT | https://restls.azurewebsites.net/api/therapies/:therapyId | JWT Token: reikalinga Admin arba Doctor rolė | therapyId - terapijos identifikatorius, Terapijos objektas | 200, 400, 401, 403, 404 | Užklausa: https://restls.azurewebsites.net/api/therapies/1 |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| DELETE | https://restls.azurewebsites.net/api/therapies/:therapyId | JWT Token: reikalinga Admin arba Doctor rolė | therapyId - terapijos identifikatorius | 204, 401, 403, 400 | https://restls.azurewebsites.net/api/therapies/1 |
Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| GET | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments | Nėra | therapyId - terapijos identifikatorius | 200, 400 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| GET | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId | Nėra | therapyId - terapijos identifikatorius, appintmentId - vizito identifikatorius | 200, 400 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1 |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| POST | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments | JWT Token: reikalinga Doctor rolė | therapyId - terapijos identifikatorius, Vizito objektas | 201, 400, 401, 403, 404 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| PUT | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId | JWT Token: reikalinga User/Admin rolė, resuras priklauso User | gameId - žaidimo identifikatorius, id - skelbimo identifikatorius, Skelbimo objektas | 200, 400, 401, 403, 404 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1 |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| DELETE | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId | JWT Token: reikalinga User/Admin rolė, resuras priklauso User | gameId - žaidimo identifikatorius, id - skelbimo identifikatorius | 204, 400, 401, 403 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1 |
Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| GET | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId/recommendations | Nėra | gameId - žaidimo identifikatorius, addId - skelbimo identifikatorius | 200, 400 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1/recommendations |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| GET | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId/recommendations/:recommendationid | Nėra  | gameId - žaidimo identifikatorius, addId - skelbimo identifikatorius, id - komentaro identifikatorius | 200, 400 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1/recommendations/1 |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| POST | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId/recommendations | JWT Token: reikalinga User/Admin rolė | gameId - žaidimo identifikatorius, addId - skelbimo identifikatorius, Komentaro objektas | 201, 400, 401, 403, 404 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1/recommendations |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| PUT | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId/recommendations/:recommendationid | JWT Token: reikalinga User/Admin rolė, resuras priklauso User | gameId - žaidimo identifikatorius, addId - skelbimo identifikatorius, id - komentaro identifikatorius, Komentaro objektas | 200, 400, 401, 403, 404 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1/recommendations/1 |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| DELETE | https://restls.azurewebsites.net/api/therapies/:therapyId/appointments/:appintmentId/recommendations/:recommendationid | JWT Token: reikalinga User/Admin rolė, resuras priklauso User | gameId - žaidimo identifikatorius, addId - skelbimo identifikatorius, id - komentaro identifikatorius | 204, 400, 401, 403 | Užklausa: https://restls.azurewebsites.net/api/therapies/1/appointments/1/recommendations/1 |
Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| POST | https://restls.azurewebsites.net/api/login | Nėra | Naudotojo prisijungimo objektas | 200, 404 | Užklausa: https://restls.azurewebsites.net/api/login |

Atsakas:  
```yaml

```
| Metodas | Endpoint URL | Autentifikavimas | Užklausos parametrai | Atsako kodai | Pavyzdys |
| --- | --- | --- | --- | --- | --- |
| POST | https://restls.azurewebsites.net/api/register | Nėra | Naudotojo registracijos objektas | 200, 404 | Užklausa: https://restls.azurewebsites.net/api/register |

Atsakas:  
```yaml

```

## Išvados
Projekto kūrimo metu buvo įgyvendinti užsibrėžti tiklai ir pagilintos žinios dirbant su .NET ir Reack.