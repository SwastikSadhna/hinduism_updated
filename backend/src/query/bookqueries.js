const bookquery = {
    GetAllBooks: `SELECT * FROM public."books";`,
    GetBookById: `SELECT * FROM public."books" WHERE "_id" = $1`,
    GetBookTitles: `SELECT "title" FROM public."books" ORDER BY "title"`,
    DeleteBook: `DELETE FROM public."books" WHERE "_id" = $1`,
    AddBook: `INSERT INTO public."books" ("title", "description", "link", "author", "image") VALUES ($1, $2, $3, $4, $5)`,
    UpdateBook: `UPDATE public."books" SET "title" = $2, "description" = $3, "link" = $4, "author" = $5, "image" = $6, WHERE "_id" = $1`,
    SearchBook: `SELECT "title", "_id" FROM public."books" WHERE "title" ILIKE $1`
}

module.exports = {bookquery};