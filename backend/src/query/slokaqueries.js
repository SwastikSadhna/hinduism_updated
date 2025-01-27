const slokaquery = {
    GetAllSloka: `SELECT * FROM public."slokas"`,
    GetSlokaDetails: `SELECT * FROM public."slokas" WHERE "id" = $1;`,
    AddSloka: `INSERT INTO public."slokas" ("title", "description", "keyword") VALUES ($1,$2,$3);`,
    UpdateSloka: `UPDATE public."slokas" SET "title" = $1, "description" = $2, "keyword" = $3 WHERE "id" = $4;`,
    DeleteSloka: `DELETE FROM public."slokas" WHERE "id" = $1`,
    SlokaKeywords: `SELECT ARRAY_AGG(DISTINCT word) AS keyword FROM public."slokas", UNNEST(keyword) AS word;`,
    FilterSloka: `SELECT * FROM public."slokas" WHERE `,
    SearchSloka: `SELECT "title","id" FROM public."slokas" WHERE "title" ILIKE $1`,
}

module.exports = slokaquery