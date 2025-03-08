const granthquery = {
    GetAllGranth: `SELECT * FROM public."granth";`,
    GetGranthDetails: `SELECT * FROM public."granth" WHERE "id" = $1;`,
    AddGranth: `INSERT INTO public."granth" ("title", "description", "image") VALUES ($1,$2,$3) RETURNING *`,
    UpdateGranth: `UPDATE public."granth" SET "title" = $1, "description" = $2, "image" = $3 WHERE "id" = $4 RETURNING *`,
    DeleteGranth: `DELETE FROM public."granth" WHERE "id" = $1;`,
}

module.exports = granthquery;