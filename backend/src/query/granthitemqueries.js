const granthitemquery = {
    GetGranthItemsById: `SELECT * FROM public."granth_items" WHERE "granth_id" = $1;`,
    AddGranthItem: `INSERT INTO public."granth_items" ("id", "title", "description", "image", "link", "granth_id", "author") VALUES ($1,$2,$3,$4,$5,$6,$7);`,
    UpdateGranthItem: `UPDATE public."granth_items" SET "title" = $1, "description" = $2, "image" = $3, "link" = $4, "granth_id" = $5, "author" = $6 WHERE "_id"= $7;`,
    DeleteGranthItem: `DELETE FROM public."granth_items" WHERE "id" = $1;`,
    SearchGranthItem: `SELECT "_id","title" FROM public."granth_items" WHERE "title" ILIKE $1`,
    GetGranthItems: `SELECT * FROM public."granth_items"`
}

module.exports = granthitemquery;