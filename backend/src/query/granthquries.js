const granthquery = {
    //1. get all granth
    getAllGranth: `SELECT * FROM public."granth";`,
    //2. get granth_item by granth
    getGranthDetails: `SELECT * FROM public."granth_item" WHERE "granth_id" = $1;`,
    //3. create
    addGranth: `INSERT INTO public."granth" ("title", "description", "images") VALUES ($1,$2,$3);`,
    //4. update
    updateGranth: `UPDATE public."granth" SET "title" = $1, "description" = $2, "images" = $3 WHERE "id" = $4;`,
    //5. delete
    deleteGranth: `DELETE FROM public."granth" WHERE "id" = $1;`,
}

module.exports = {granthquery}