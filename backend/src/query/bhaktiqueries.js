const bhaktiquery = {
    GetAllBhakti: `SELECT * FROM public."bhakti";`,
    GetBhaktiById: `SELECT * FROM  public."bhakti" WHERE id = $1;`,
    AddBhakti: `INSERT INTO public."bhakti" ("title", "description", "keyword", "image", "category", "content", "author", "reference_links", "file") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    UpdateBhakti: `UPDATE public."bhakti" SET "title" = $2, "description" = $3, "keyword" = $4, "image" = $5, "category" = $6, "content" = $7, "author" = $8, "reference_links" = $9, "file" = $10 WHERE id = $1 RETURNING *;`,
    DeleteBhakti: `DELETE FROM public."bhakti" WHERE id = $1;`,
    BhaktiByType: `SELECT * FROM public."bhakti" WHERE "category" = $1;`,
    BhaktiKeywords: `SELECT ARRAY_AGG(DISTINCT word) AS keyword FROM public."bhakti", UNNEST(keyword) AS word;`,
    FilterBhakti: `SELECT * FROM public."bhakti" WHERE `,
}

const bhakticategory = {
    getAllCategories: `SELECT * FROM public."bhakti_category";`,
    getCategoryById: `SELECT * FROM public."bhakti_category" WHERE id = $1;`,
    addCategory: `INSERT INTO public."bhakti_category" ("name", "image", "description") VALUES($1, $2, $3) RETURNING *;`,
    updateCategory: `UPDATE public."bhakti_category" SET "name" = $2, "image" = $3, "description" = $4 WHERE id = $1 RETURNING *;`,
    deleteCategory: `DELETE FROM public."bhakti_category" WHERE id = $1;`,
}

module.exports = {bhaktiquery, bhakticategory}