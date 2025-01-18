const godquery = {
    GetAllGod: `SELECT * FROM public."god"`,
    GetGodById: `SELECT * FROM public."god" WHERE _id = $1`,
    AddGod: `INSERT INTO public."god" ("name", "image", "description", "keyword") VALUES ($1, $2, $3, $4)`,
    UpdateGod: `UPDATE public."god" SET "name" = $2, "image" = $3, "description" = $4, "keyword" = $5 WHERE _id = $1`,
    DeleteGod: `DELETE FROM public."god" WHERE _id = $1`,
    SearchGod: `SELECT "name" FROM public."god" WHERE "name" LIKE '$1*'`,
    GetTrimurty: `SELECT * FROM public."god" WHERE $1 = ANY(keyword)`
    //7. get avatar datails based on god
}

module.exports = {godquery}