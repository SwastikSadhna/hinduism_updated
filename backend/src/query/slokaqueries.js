const slokaquery = {
    GetAllSloka: `SELECT * FROM public."slokas"`,
    GetSlokaDetails: `SELECT * FROM public."sloka_items" JOIN public."slokas" ON slokas._id = sloka_items.slok_id AND slokas._id = $1;`,
    AddSloka: `INSERT INTO public."slokas" ("title", "description", "keyword") VALUES ($1,$2,$3);`,
    UpdateSloka: `UPDATE public."slokas" SET "title" = $1, "description" = $2, "keyword" = $3 WHERE "id" = $4;`,
    DeleteSloka: `DELETE FROM public."slokas" WHERE "id" = $1`,
    FilterSloka: `SELECT * FROM public."slokas" WHERE `,
    SearchSloka: `SELECT ""title","_id" FROM public."slokas" WHERE "title" ILIKE $1`,
}

module.exports = slokaquery