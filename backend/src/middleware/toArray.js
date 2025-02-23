function toArray(str) {
    if(str==null || str =='') return []
    return str.split(',');
}

module.exports = toArray;