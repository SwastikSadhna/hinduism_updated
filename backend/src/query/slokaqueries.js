const slokaquery = {
    //1. get all sloka
    getAllSloka: `SELECT * FROM public."slokas" ORDER BY "title"`,
    //2. get sloka with sloka_item
    getSlokaDetails: `SELECT * FROM public."sloka_items" JOIN public."slokas" ON slokas._id = sloka_items.slok_id AND slokas._id = $1;`,
    //3. create
    addSloka: `INSERT INTO public."slokas" ("title", "description", "keyword") VALUES ($1,$2,$3);`,
    //4. update
    updateSloka: `UPDATE public."slokas" SET "title" = $1, "description" = $2, "keyword" = $3 WHERE "id" = $4;`,
    //5. delete
    deleteSloka: `DELETE FROM public."slokas" WHERE "id" = $1`,
    //8. filter sloka by keyword
    filterSloka: `SELECT * FROM public."slokas" WHERE `,
    //9. search sloka by title
    searchSloka: `SELECT ""title","_id" FROM public."slokas" WHERE "title" ILIKE "$1*"`,
}

module.exports = {slokaquery}