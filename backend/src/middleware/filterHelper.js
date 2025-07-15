
const getFilterQuery = (query) => {
    let q = "";
    for (const key in query) {
        if (key.startsWith('_')) {
            const fieldName = key.slice(1);
            if (typeof (query[key]) == "object") {
                q += `"${fieldName}" && ARRAY['`+ query[key].join(`','`) +`'] AND `;
            } else {
                q += `"${fieldName}" && ARRAY['${query[key]}'] AND `;
            }
        }
        else if (typeof (query[key]) == "object") {
            q += `"${key}" && ARRAY['`+ query[key].join(`','`) +`'] AND `;
        } else {
            q += `"${key}" && ARRAY['${query[key]}'] AND `;
        }
    }
    q = q.slice(0, -4)
    console.log(q)
    return q
}

module.exports = {getFilterQuery}