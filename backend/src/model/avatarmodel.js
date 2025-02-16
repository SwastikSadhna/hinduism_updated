const pool = require("../db");
const {avatarquery} = require("../query/avatarqueries");

const GetAllAvatars = async () => {
    const result = await pool.query(avatarquery.GetAllAvatar);
    return result.rows;
}

const GetAvatarById = async (id) => {
    const result = await pool.query(avatarquery.GetAvatarById, [id]);
    return result.rows;
}

const AddAvatar = async (data) => {
    const result = await pool.query(avatarquery.AddAvatar, [data.name, data.image, data.yuga, data.books, data.description, data.festivals, data.tamples, data.god_ref, data.sloka, data.reference_links]);
    return result.rows;
}

const UpdateAvatar = async (data) => {
    const result = await pool.query(avatarquery.UpdateAvatar, [data.id, data.name, data.image, data.yuga,, data.books, data.description, data.festivals, data.tamples, data.god_ref, data.sloka, data.reference_links]);
    return result.rows;
}

const DeleteAvatar = async (id) => {
    const result = await pool.query(avatarquery.DeleteAvatar, [id]);
    return result.rows;
}

const GetGodByRef = async () => {
    const result = await pool.query(avatarquery.GetGodByRef);
    return result.rows;
}

const SearchAvatar = async (q) => {
    const result = await pool.query(avatarquery.SearchAvatar, [q + "%"]);
    return result.rows;
}

module.exports = {GetAllAvatars, GetAvatarById, AddAvatar, UpdateAvatar, DeleteAvatar, GetGodByRef, SearchAvatar};