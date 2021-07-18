const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(res)
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(res)
        writeFile('./content/result-sync.txt',
            'hello this is result',
            (err, res) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(res)
            })
    })

})