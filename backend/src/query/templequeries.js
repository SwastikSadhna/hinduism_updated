const templeQueries = {
    GetAllTemples: `SELECT "_id", "cover_image", "name", "location" FROM public."temple";`,
    GetTempleById: `SELECT * FROM public."temple" WHERE "_id" = $1;`,
    AddTemple: `INSERT INTO public."temple" ("name", "description", "cover_image", "map_url", "reference_link", "god", "location", "importance", "images", "keywords") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
    UpdateTemple: `UPDATE public."temple" SET "name" = $1, "description" = $2, "cover_image" = $3, "map_url" = $4, "reference_link" = $5, "god" = $6, "location " = $7, "importance" = $8, "images" = $9, "keywords" = $10 WHERE "_id" = $11 RETURNING *;`,
    DeleteTemple: `DELETE FROM public."temple" WHERE "_id" = $1 RETURNING *;`,
    SearchTemple: `SELECT "name", "_id" FROM public."temple" WHERE "name" ILIKE $1`,
    FilterTemple: `SELECT "_id", "cover_image", "name", "location" FROM public."temple" WHERE `,
    FilterByKeyword: `SELECT "_id", "cover_image", "name", "location" FROM public."temple" WHERE "keyword" && $1;`,
    GetChardham: `SELECT "_id", "cover_image", "name", "location" FROM public."temple" WHERE "keyword" && ARRAY['chardham'];`,
}

module.exports = {templeQueries}