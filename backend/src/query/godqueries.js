const godquery = {
    GetAllGod: `SELECT * FROM public."god"`,
    GetGodById: `SELECT * FROM public."god" WHERE _id = $1`,
    AddGod: `INSERT INTO public."god" ("name", "image", "description", "keyword") VALUES ($1, $2, $3, $4) RETURNING *;`,
    UpdateGod: `UPDATE public."god" SET "name" = $2, "image" = $3, "description" = $4, "keyword" = $5 WHERE _id = $1 RETURNING *;`,
    DeleteGod: `DELETE FROM public."god" WHERE _id = $1 RETURNING *;`,
    SearchGod: `SELECT "_id", "name" FROM public."god" WHERE "name" ILIKE $1;`,
    GodKeywords: `SELECT ARRAY_AGG(DISTINCT word) AS keyword FROM public."god", UNNEST(keyword) AS word;`,
    GetTrimurty: `SELECT "_id", "image", "name", "description" FROM public."god" WHERE "keyword" && ARRAY['trimurti'];`,
    GetAvatarByGod: `SELECT * FROM public."avatar", public."god" WHERE god._id = god_ref AND god._id = $1;`
}

module.exports = {godquery}