
const getFilterQuery = (query) => {
    let q = "";
    for (const key in query) {
        if (typeof (query[key]) == "object") {
            q += `"${key}" && ARRAY['`+ query[key].join(`','`) +`'] AND `;
        }
        else if (typeof (query[key]) == "string" && key.startsWith('_')) {
            q += `"${key.slice(1)}" = '${query[key]}' AND `;
        } else {
            q += `"${key}" && ARRAY['${query[key]}'] AND `;
        }
    }
    q = q.slice(0, -4)
    console.log(q)
    return q
}

module.exports = {getFilterQuery}