
const getFilterQuery = (query) => {
    let q = "";
    let keyword = [];
    for (const key in query) {
        if (key == "keyword") {
            keyword.push(query[key])
        } else {
            q += `"${key}"= '${query[key]}' AND `
        }
    }
    if (keyword.length > 0) {
        q += `"keyword" && ARRAY['`+ keyword[0].join(`','`) +`']`;
    } else {
        q = q.slice(0, -4)
    }
    return q
}

module.exports = {getFilterQuery}