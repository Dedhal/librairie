const express = require('express')
const app = express()
let cors = require('cors')
const fs = require('fs')

const livres = require('./livres.json')
app.use(express.json())
app.use(cors())

app.get("/livres", (req, res) => {
    res.status(200).json(livres)
})

app.get("/livres/:id", (req, res) => {
    let livreID = req.params.id
    livreID = parseInt(livreID)
    let valide = Number.isInteger(livreID)

    if (valide) {
        const leLivre = livres.find(livre => livre.id === parseInt(req.params.id))

        if(!leLivre){
            res.status(404).json({message: "Livre inconnu"})
        }
        else{
            res.status(200).json(leLivre)
        }
    }
    else {
        const leLivre = livres.find(livre => livre.titre === req.params.id)

        console.log(leLivre)

        if(!leLivre){
            res.status(404).json({message: "Livre inconnu"})
        }
        else{
            res.status(200).json(leLivre)
        }
    }
})

app.post("/livres", (req, res) => {

    console.log(req.body)
    let toAdd = req.body

    toAdd.id = livres[livres.length -1].id + 1

    console.log(toAdd)

    fs.readFile('./livres.json', 'utf8', (err, data) => {
        console.log(data)

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } 
        else {
            const livres = JSON.parse(data);
            livres.push(toAdd);
            fs.writeFile('./livres.json', JSON.stringify(livres), 'utf8', (err) => {
            if (err) {
                console.log(`Error writing file: ${err}`);
            } 
            else {
                console.log(`File is written successfully!`);
            }
        });
        }
    });

    res.status(200).json(req.body)
})

app.put("/livres/:id", (req, res) => {
    const id = parseInt(req.params.id)
    let valide = Number.isInteger(id)

    if(valide)
    {
        let leLivre = livres.find(livre => livre.id === id)
        let index = livres.findIndex(livre => livre.id === id)

        if(!leLivre){
            res.status(404).json({message: "Livre inconnu"})
        }
        else {
            leLivre.titre = req.body.titre
            leLivre.auteur = req.body.auteur
            leLivre.prix = req.body.prix
            leLivre.description = req.body.description

            fs.readFile('./livres.json', 'utf8', (err, data) => {
            console.log(data)

                if (err) {
                    console.log(`Error reading file from disk: ${err}`);
                } 
                else {
                    const livres = JSON.parse(data)

                    console.log("Before: " + JSON.stringify(livres))
                    console.log(index)

                    livres[index] = leLivre

                    console.log("After: " + JSON.stringify(livres))
                    
                    fs.writeFile('./livres.json', JSON.stringify(livres), 'utf8', (err) => {
                        if (err) {
                            console.log(`Error writing file: ${err}`);
                        }
                        else {
                            console.log(`File is written successfully!`);
                        }
                    })
                }
            })
        }
    }
    else
    {
        res.status(404).json({message: "Mauvais format"})
    }
})


app.delete("/livres/:id", (req, res) => {
    const id = parseInt(req.params.id)
    let leLivre = livres.find(livre => livre.id === id)

    if(!leLivre){
        res.status(404).json({message: "Livre inconnu"})
    }
    else{
        fs.readFile('./livres.json', 'utf8', (err, data) => {
        console.log(data)

        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        }
        else {
            const livres = JSON.parse(data);

            let index = livres.findIndex(livre => livre.id === id)

            console.log("Index of: " + index)

            livres.splice(index, 1)
            fs.writeFile('./livres.json', JSON.stringify(livres), 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                }
                else {
                    console.log(`File is written successfully!`);
                }
            });
        }})
    }
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})