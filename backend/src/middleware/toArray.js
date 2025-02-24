function toArray(str,json=false) {
    if(str=='null' || str =='' || str == [] || str == null) return []
    if(json) return JSON.parse(str);
    return str.split(',');
}

module.exports = toArray;