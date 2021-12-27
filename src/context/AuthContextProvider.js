

// # Stappenplan opdracht maken
// 1. Mapje maken voor de context in de `src` folder
// 2. Bestandje maken met `AuthContextProvider.js`
// 3. In de `AuthContextProvider.js` gaan we twee dingen dingen doen:
//     1. De daadwerkelijke `AuthContextProvider` maken en die exporteren én
//     `export const AuthContextProvider = createContext({})`
// 2. Het custom-ContextProvider component maken (als functie) en die als default exporteren. Vergeet hierbij niet dat
// dit component een `children` property nodig heeft! Wat je returned is het `.Provider`-component dat nu op
// de `AuthContextProvider` beschikbaar is (zie slide 34)
//
// ```javascript
// function AuthContextProvider() {
//   return (<vul zelf in>)
//     }
//     export default AuthContextProvider;
// ```
//
// 4. Wikkel ons custom-provider component om de `<App />` heen (in `index.js`)
// 5. Maak data-object in het custom-provider component en stop er wat zelfbedachte data in
// 6. Geef de data mee aan de context doormiddel van de `value`-property (slide 36)
// 7. Test vervolgens of het werkt, door in één van de componenten van de applicatie gebruik te maken van de context en
// deze te loggen in de console! (slide 40)

// 1. de content zelf maken en exporteren
// 2. de custom ContextProvider maken (als functie) en die ook exporteren
// 3. 1. de daadwerkeklije 'AuthContextProvider' maken en die exporteren
//      `export const  AuthContextProvider = createContext({})`
//
//    2. het custom-ContextProvider component maken (als functie) en die als default exporteren, vergeet hier bij {children} niet want dan kan je makkelijk over de app omheen wikkelen


import React, {createContext, useState} from 'react';
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});


function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState(false);
    const history = useHistory();


    function login() {
        console.log("gebruiker is ingelogd")
        toggleIsAuth(true);
        history.push("/profile");
    }

    function logout() {
        console.log("gebruiker is uitgelogd")
        toggleIsAuth(false);
        history.push("/");
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout

    }

    return (<AuthContext.Provider value={contextData}>
        {children}
    </AuthContext.Provider>);
}

export default AuthContextProvider;






// Reference context - weather app!

// import React, { createContext, useState } from 'react';
// import kelvinToFahrenheit from '../helpers/kelvinToFahrenheit';
// import kelvinToCelsius from '../helpers/kelvinToCelsius';
//
// export const TempContext = createContext({});
//
// function TempContextProvider({ children }) {
//     const [selectedMetric, toggleSelectedMetric] = useState('celsius');
//
//     function toggleTemp() {
//         if (selectedMetric === 'celsius') {
//             toggleSelectedMetric('fahrenheit');
//         } else {
//             toggleSelectedMetric('celsius');
//         }
//     }
//
//     function kelvinToMetric(kelvin) {
//         if (selectedMetric === 'celsius') {
//             return kelvinToCelsius(kelvin);
//         } else {
//             return kelvinToFahrenheit(kelvin);
//         }
//     }
//
//     const contextData = {
//         toggleTemp: toggleTemp,
//         kelvinToMetric: kelvinToMetric,
//     };
//
//     return (
//         <TempContext.Provider value={contextData}>
//             { children }
//         </TempContext.Provider>
//     )
// }
//
// export default TempContextProvider;
