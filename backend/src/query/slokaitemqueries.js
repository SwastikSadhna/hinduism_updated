const slokaitemquery = {
    //3. create
    addSlokItem: `INSERT INTO public."sloka_items" ("title", "sloka", "explaination", "image", "slok_id") VALUES ($1,$2,$3,$4,$5);`,
    //4. update
    updateSlokItem: `UPDATE public."sloka_items" SET "title" = $1, "sloka" = $2, "explaination" = $3, "image" = $4 WHERE "id" = $5;`,
    //5. delete
    deleteSlokItem: `DELETE FROM public."sloka_items" WHERE "id" = $1;`
}

module.exports = {slokaitemquery}