const granthitemquery = {
    //2. get granthitem by id
    getGranthItems: `SELECT * FROM public."granth_items" WHERE "granth_id" = $1;`,
    //3. create
    createGranthItem: `INSERT INTO public."granth_items" ("_id", "title", "description", "image", "link", "granth_id", "author") VALUES ($1,$2,$3,$4,$5,$6,$7);`,
    //4. update
    updateGranthItem: `UPDATE public."granth_items" SET "title" = $1, "description" = $2, "image" = $3, "link" = $4, "granth_id" = $5, "author" = $6 WHERE "_id"= $7;`,
    //5. delete
    deleteGranthItem: `DELETE FROM public."granth_items" WHERE "_id" = $1;`,
    //8. search granthitem
    searchGranthItem: `SELECT "_id","title" FROM public."granth_items" WHERE "title" ILIKE "$1*"`,
}

module.exports = {granthitemquery}