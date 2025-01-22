const bhaktiquery = {
    GetAllBhakti: `SELECT * FROM public."bhakti";`,
    GetBhaktiById: `SELECT * FROM  public."bhakti" WHERE _id = $1;`,
    AddBhakti: `INSERT INTO public."bhakti" ("title", "description", "keyword", "iamge", "type", "content", "author", "reference_links") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    UpdateBhakti: `UPDATE public."bhakti" SET "title" = $2, "description" = $3, "keyword" = $4, "iamge" = $5, "type" = $6, "content" = $7, "author" = $8, "reference_links" = $9 WHERE _id = $1 RETURNING *;`,
    DeleteBhakti: `DELETE FROM public."bhakti" WHERE _id = $1;`,
    BhaktiByType: `SELECT * FROM public."bhakti" WHERE "category" = $1;`,
    BhaktiByKeyword: `SELECT "_id", "title", "author" FROM public."bhakti" WHERE "keyword" && $1;`,
}

module.exports = {bhaktiquery}