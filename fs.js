fs.readFile('./expo.js', 'utf8', (err, result)=> {
    if(err){
        console.error(err);
        return;
    }
    console.log(result)
});

fs.writeFile('./expo.js', 'Njamanja', (err, res) => {
    if(err){
        console.error(err);
        return
    }
    console.log('done');
})