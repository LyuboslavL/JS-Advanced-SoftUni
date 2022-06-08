function listProcessor(arr) {
    let result = [];

    arr.forEach((x) => {
        if (x.includes('add')) {
            let [command, word] = x.split(' ');
            add(word);
        } else if (x.includes('remove')) {
            let [command, word] = x.split(' ');
            remove(word)
        } else {
            print();
        }
    });

    return {
        add,
        remove,
        print
    }

    function add(str) {
        result.push(str);
    }
    
    function remove(str) {
        result = result.filter(x => x != str);
    }

    function print() {
        console.log(result.join(','));
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);