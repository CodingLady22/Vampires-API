const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors()) // lets us run server on our local machine after hosting.

// Vampire object
let vampires = {
    'alice' : {
        'birthName': 'Mary Alice Brandon',
        'AKA': 'Alice Cullen',
        'birthDate': '1901', 
        'turnedAge': '19', 
        'birthLocation': 'Biloxi, Mississippi',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': 'precognition',
        'spouse': 'Jasper Hale',   
        'diet': 'animal blood'   
    },
    'jasper' : {
        'birthName': 'Jasper Whitlock',
        'AKA': 'Jasper Hale',
        'birthDate': '1844', 
        'turnedAge': '19', 
        'birthLocation': 'Houston, Texas',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "influence emotions",
        'spouse': 'Alice Cullen',
        'diet': 'animal blood' 
    },
    'edward' : {
        'birthName': 'Edward Anthony Masen, Jr',
        'AKA': 'Edward Cullen',
        'birthDate': '20 June 1901', 
        'turnedAge': '17', 
        'birthLocation': 'Chicago, Illinois',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "Telepathy",
        'spouse': 'Bella Swan',  
        'child': 'Renesmee',
        'diet': 'animal blood'  
    },
    'bella' : {
        'birthName': 'Isabella "Bella" Marie Swan',
        'AKA': 'Bella Cullen',
        'birthDate': '13 September 1987', 
        'turnedAge': '18', 
        'birthLocation': 'Forks, Washington',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "Mental shield",
        'spouse': 'Edward Cullen',  
        'child': 'Renesmee',
        'diet': 'animal blood'  
    },
    'rosalie' : {
        'birthName': 'Rosalie Lillian Hale',
        'AKA': 'Rosalie Hale',
        'birthDate': '1915', 
        'turnedAge': '18', 
        'birthLocation': 'Rochester, New York',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "None",
        'spouse': 'Emmett Cullen',  
        'diet': 'animal blood'  
    },
    'emmett' : {
        'birthName': 'Emmett Dale McCarty',
        'AKA': 'Emmett Cullen',
        'birthDate': '1915', 
        'turnedAge': '20', 
        'birthLocation': 'Gatlinburg, Tennessee',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "Physical strength",
        'spouse': 'Rosalie Hale',  
        'diet': 'animal blood'  
    },
    'carlisle' : {
        'birthName': 'Carlisle Cullen',
        'otherName': 'Stregoni Benefici',
        'birthDate': "1640's", 
        'turnedAge': '23', 
        'birthLocation': 'London, England',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "Physical strength",
        'spouse': 'Esme Cullen',  
        'diet': 'animal blood'  
    },
    'esme' : {
        'birthName': 'Esme Platt neé Cullen',
        'otherName': 'Esme Everson',
        'birthDate': "1895", 
        'turnedAge': '26', 
        'birthLocation': 'Columbus, Ohio',
        // 'origin': 'Atlanta, Georgia',
        'book': 'Twilight',
        'specialAbility': "None",
        'spouse': 'Carlisle Cullen',  
        'diet': 'animal blood'  
    },
    'renesmee' : {
        'birthName': 'Renesmee Carlie "Nessie" Cullen',
        'birthDate': "11 September 2006", 
        'turnedAge': 'Vampire-Human hybrid', 
        'birthLocation': 'Folks, Washingeton',
        'book': 'Twilight',
        'specialAbility': "Transfers thoughts through touch",
        'spouse': 'Jacob Black',  
        'diet': 'animal blood and human food'  
    },
    'jane' : {
        'birthName': 'Jane',
        'birthDate': "800AD", 
        'turnedAge': '13', 
        'birthLocation': 'England',
        'book': 'Twilight',
        'specialAbility': "Inflict burning pain as illusion on one person at a time",
        'spouse': 'None',  
        'diet': 'Human blood'  
    },
    'alec' : {
        'birthName': 'Alec',
        'birthDate': "800AD", 
        'turnedAge': '13', 
        'birthLocation': 'England',
        'book': 'Twilight',
        'specialAbility': "Sensory deprivation",
        'spouse': 'None',  
        'diet': 'Human blood'  
    },
      'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'turnedAge': 'unknown', 
        'birthLocation': 'unknown',
        'book': 'unknown',
        'specialAbility': 'unknown',
        'spouse': 'unknown',
        'diet': 'unknown',
        'children': 'unknown'
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

/*
app.get('/api/:rapperName', (req, res) => {
    console.log(req.params.rapperName); // returns details of selected rappers
    res.json(rappers) // responds with whole json object
})
*/

app.get('/api/:vampName', (req, res) => {
    const vampsName = req.params.vampName.toLowerCase();
    if(vampires[vampsName]) {
        res.json(vampires[vampsName])
    } else {
        res.json(vampires['unknown'])
    }
})

app.listen (process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it`);
})