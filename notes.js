const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter ((note) => note.title === title) // calls 1 time for each note 
    const duplicateNote = notes.find((note) => note.title == title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    if (!duplicateNote) {
        notes.push({          // push: pushes the object(notes with title and body)
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()               
    const notesToKeep = notes.filter((note) => note.title != title)  //create an array to keep notes to fond all the noteswe want to keep

    if ( notes.length > notesToKeep.length ) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found'))
    }
   
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note) => { 
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)
    
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

// going to take array as an argument 
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)   
    fs.writeFileSync('notes.json', dataJSON) // appends the data to notes.json
}

//to load new data each time this functions gives all the notes
//returns an array of notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') // file where all the reading and writing is done
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) // returns the parsed data
    } catch (e) {
        return [] // returns an empty array in case of no data or error
    }
}

//to export multiple functions
// object is exported with different properties
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes,
}