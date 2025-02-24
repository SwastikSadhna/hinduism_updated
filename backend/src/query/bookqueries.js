const bookquery = {
    GetAllBooks: `SELECT * FROM public."books";`,
    GetBookById: `SELECT * FROM public."books" WHERE "id" = $1`,
    GetBookTitles: `SELECT "title" FROM public."books" ORDER BY "title"`,
    DeleteBook: `DELETE FROM public."books" WHERE "id" = $1 RETURNING *;`,
    AddBook: `INSERT INTO public."books" ("title", "description", "link", "author", "image", "cover_image", "keyword", "year") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    UpdateBook: `UPDATE public."books" SET "title" = $2, "description" = $3, "link" = $4, "author" = $5, "image" = $6, "cover_image" = $7, "keyword" = $8, "year" = $9 WHERE "id" = $1 RETURNING *;`,
    SearchBook: `SELECT "title", "id" FROM public."books" WHERE "title" ILIKE $1`,
    BookKeywords: `SELECT ARRAY_AGG(DISTINCT word) AS keyword FROM public."books", UNNEST(keyword) AS word;`,
    FilterBook: `SELECT * FROM public."books" WHERE `
}

module.exports = {bookquery};