const granthquery = {
    GetAllGranth: `SELECT * FROM public."granth";`,
    GetGranthDetails: `SELECT * FROM public."granth_item" WHERE "granth_id" = $1;`,
    AddGranth: `INSERT INTO public."granth" ("title", "description", "images") VALUES ($1,$2,$3);`,
    UpdateGranth: `UPDATE public."granth" SET "title" = $1, "description" = $2, "images" = $3 WHERE "id" = $4;`,
    DeleteGranth: `DELETE FROM public."granth" WHERE "id" = $1;`,
}

module.exports = {granthquery}