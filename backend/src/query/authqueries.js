const authQuery = {
    GetAllUsers: `SELECT * FROM public."avatar";`,
    GetUserByEmail: `SELECT * FROM public."users" WHERE "email" = $1;`,
    CreateUser: `INSERT INTO public."users" ("name", "email", "password", "role") VALUES ($1, $2, $3, '1') RETURNING *;`,
    UpdateUser: `UPDATE public."users" SET "name" = $2, "password" = $3, "role" = $4 WHERE "id" = $1 RETURNING *;`,
    DeleteUser: `DELETE FROM public."users" WHERE "id" = $1; RETURNING *`,
    SearchUser: `SELECT * FROM public."users" WHERE "name" ILIKE $1;`,
    GetPermissions: `SELECT * FROM public."permissions" WHERE "role_id" = $1;`
}

module.exports = {authQuery}