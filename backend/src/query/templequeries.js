const templequery = {
    //1. get all temples (image, title, location)
    getAllTemples: `SELECT "_id", "cover_image", "name", "location" FROM public."temple";`,
    //2. get temple by id
    getTempleById: `SELECT * FROM public."temple" WHERE "_id" = $1;`,
    //3. create
    AddTemple: `INSERT INTO public."temple" ("name", "description", "cover_image", "map_url", "reference_link", "god", "location", "importance", "images", "keywords") 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
    //4. update
    updateTemple: `UPDATE public."temple" SET "name" = $1, "description" = $2, "cover_image" = $3, "map_url" = $4, "reference_link" = $5, "god" = $6, "location " = $7, "importance" = $8, "images" = $9, "keywords" = $10 WHERE "_id" = $11 RETURNING *;`,
    //5. delete
    deleteTemple: `DELETE FROM public."temple" WHERE "_id" = $1 RETURNING *;`,
    //7. get god datails based on temple
    
    //8. search temple
    searchTemple: `SELECT "name", "_id" FROM public."temple" WHERE "name" ILIKE "$1*";`,
    //9. filter temple based on (location, god)
    filterTemple: `SELECT "_id", "cover_image", "name", "location" FROM public."temple" WHERE `,
    //10. get chardham
    getChardham: `SELECT "_id", "cover_image", "name", "location" FROM public."temple" WHERE 'chardham' = ANY("keyword")`
}

module.exports = {templequery}