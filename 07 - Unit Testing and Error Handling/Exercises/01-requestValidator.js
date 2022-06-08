function requestValidator(obj) {
    if (obj.method === undefined || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (obj.uri === undefined || !/^\*|^[a-zA-Z0-9\.]+$/.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (obj.version === undefined || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (obj.message === undefined || !/^[^<>\\&'"]*$/.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

function requestValidatorFunctions(obj) {
    validateMethod(obj);
    validateUri(obj);
    validateVersion(obj);
    validateMessage(obj);
    return obj;
    
    function validateMethod(httpObj) {
        let propName = 'method';
        let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
        
        if (httpObj[propName] === undefined || !validMethod.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    function validateUri(httpObj) {
        let propName = 'uri';
        let uriRegex = /^\*|^[a-zA-Z0-9\.]+$/;

        if (httpObj[propName] === undefined || !uriRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid URI');
        }
    }

    function validateVersion(httpObj) {
        let propName = 'version';
        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (httpObj[propName] === undefined || !validVersions.includes(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Version');
        }
    }

    function validateMessage(httpObj) {
        let propName = 'message';
        let messageRegex = /^[^<>\\&'"]*$/;

        if (httpObj[propName] === undefined || !messageRegex.test(httpObj[propName])) {
            throw new Error('Invalid request header: Invalid Message');
        }
    }
}


// console.log(requestValidatorFunctions({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));

// console.log(requestValidatorFunctions({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));

// console.log(requestValidatorFunctions({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));
