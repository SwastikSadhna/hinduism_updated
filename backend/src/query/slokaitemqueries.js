const slokaitemquery = {
    AddSlokItem: `INSERT INTO public."sloka_items" ("title", "sloka", "explaination", "image", "slok_id") VALUES ($1,$2,$3,$4,$5);`,
    UpdateSlokItem: `UPDATE public."sloka_items" SET "title" = $1, "sloka" = $2, "explaination" = $3, "image" = $4 WHERE "id" = $5;`,
    DeleteSlokItem: `DELETE FROM public."sloka_items" WHERE "id" = $1;`
}

module.exports = {slokaitemquery}