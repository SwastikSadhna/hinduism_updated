const slokaquery = {
    GetAllSloka: `SELECT * FROM public."slokas"`,
    GetSlokaDetails: `SELECT * FROM public."slokas" WHERE "id" = $1;`,
    AddSloka: `INSERT INTO public."slokas" ("title","sloka","explaination","image","description", "keyword") VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`,
    UpdateSloka: `UPDATE public."slokas" SET "title" = $1, "description" = $2, "keyword" = $3, "sloka" = $4, "explaination" = $5, "image" = $6 WHERE "id" = $7 RETURNING *;;`,
    DeleteSloka: `DELETE FROM public."slokas" WHERE "id" = $1`,
    SlokaKeywords: `SELECT ARRAY_AGG(DISTINCT word) AS keyword FROM public."slokas", UNNEST(keyword) AS word;`,
    FilterSloka: `SELECT * FROM public."slokas" WHERE `,
    SearchSloka: `SELECT "title","id" FROM public."slokas" WHERE "title" ILIKE $1`,
}

module.exports = slokaquery