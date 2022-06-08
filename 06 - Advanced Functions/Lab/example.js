function fly() {
    console.log('flying');
    console.log(this);
}

let hero = {
    name: 'Superman',
    fly,
    laserEyes: function() {
        console.log(this.name + ' can shoot lasers');
        console.log(this);
    },
    stopBullets() {
        console.log('can stop bullets');
        console.log(this);
    },
    punch: () => {
        console.log('can punch hard');
        console.log(this);
    }
}
