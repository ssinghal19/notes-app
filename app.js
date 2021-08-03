const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')// takes obj with different properties

//const command = process.argv[2]

//console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string',
        },
        body:{
            describe: 'Write your content',
            demandOption: true,
            type:'string',
        }    
    },
    handler(argv){
        notes.addNote(argv.title, argv.body) //passes the info to addNote and the rest of the work is done by addNote
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder: {            // object
        title: {
            describe: 'Remove note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){                          
        notes.removeNote(argv.title)
    }
})

//create a list command
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler(){
        notes.listNotes()
    }
})

//create a read command
yargs.command({
    command:'read',
    describe:'read the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


yargs.parse()
//or console.log(yargs.argv)






















// if(command === 'add'){
//     console.log("Shreya....adding note...")
// }
// else if(command == 'remove'){
//     console.log("....removing....")
// }





// const  print=getNotes()
// console.log(print)

// const greenMsg=chalk.green.inverse.bold("Success")
// console.log(greenMsg)

