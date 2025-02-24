const avatarquery = {
    GetAllAvatar: `SELECT * FROM public."avatar";`,
    GetAvatarById: `SELECT * FROM public."avatar" WHERE "id" = $1;`,
    AddAvatar: `INSERT INTO public."avatar" ("name", "image", "yuga", "books", "description", "temples", "god_ref", "sloka", "festivals", "reference_links") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
    UpdateAvatar: `UPDATE public."avatar" SET "name" = $2, "image" = $3, "yuga" = $4, "books" = $5, "description" = $6, "temples" = $7, "god_ref" = $8, "sloka" = $9, "festivals" = $10, "reference_links" = $11 WHERE "id" = $1 RETURNING *;`,
    DeleteAvatar: `DELETE FROM public."avatar" WHERE "id" = $1 RETURNING *;`,
    GetGodByRef: `SELECT god.* FROM avatar JOIN god ON avatar.god_ref = god.id;`,
    SearchAvatar: `SELECT "name", "id" FROM public."avatar" WHERE "name" ILIKE $1;`
}

module.exports = {avatarquery}