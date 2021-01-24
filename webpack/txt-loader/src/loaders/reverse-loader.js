function loader(source){
    source = source.split('').reverse().join('');
    return source;  
}

module.exports = loader;