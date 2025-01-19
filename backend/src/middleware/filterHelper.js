
const getFilterQuery = (query) => {
    let q = "";
    for (const key in query) {
        q += `"${key}"= '${query[key]}' AND `
        }
    q = q.slice(0, -4)
    return q
}

module.exports = {getFilterQuery}