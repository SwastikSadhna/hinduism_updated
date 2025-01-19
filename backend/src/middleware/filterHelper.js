
const getFilterQuery = (query) => {
    let q = "";
    if (query)
    for (const key in query) {
        q += key + "=" + query[key] +" AND "
        }
    q = q.slice(0, -4)
}

module.exports = {getFilterQuery}