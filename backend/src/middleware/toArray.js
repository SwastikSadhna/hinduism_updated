function toArray(str,json=false) {
    if(str=='null' || str =='' || str == [] || str == null) return []
    if(json) return JSON.stringify(JSON.parse(str).map(obj=>JSON.parse(obj)));
    return str.split(',');
}

module.exports = toArray;