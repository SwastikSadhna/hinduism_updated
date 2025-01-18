const bhaktiquery = {
    GetAllBhakti: `SELECT * FROM public."bhakti"`,
    GetBhaktiById: `SELECT * FROM  public."bhakti" WHERE _id = $1`,
    AddBhakti: `INSERT INTO public."bhakti" ("title", "description", "keyword", "iamge", "type", "content", "author", "reference_links") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    UpdateBhakti: `UPDATE public."bhakti" SET "title" = $2, "description" = $3, "keyword" = $4, "iamge" = $5, "type" = $6, "content" = $7, "author" = $8, "reference_links" = $9 WHERE _id = $1`,
    DeleteBhakti: `DELETE FROM public."bhakti" WHERE _id = $1`,
    BhaktiByType: `SELECT * FROM public."bhakti" WHERE type = $1`,
    BhaktiByKeyword: `SELECT * FROM public."bhakti" WHERE $1 = ANY(keyword)`,
}

module.exports = {bhaktiquery}