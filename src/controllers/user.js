const { User } = require("../../models");
const { showError } = require("./_showError");

exports.createUser = async (req, res) => {
  try {
    const addUser = await User.create(req.body);

    res.send({
      message: "Successfully create a User",
      data: { addUser },
    });
  } catch (err) {
    showError(err);
  }
};

exports.readUser = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["gender", "createdAt", "updatedAt"] },
    });

    res.send({
      message: "Success retrieve data users",
      data: { users },
    });
  } catch (err) {
    showError(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = User.destroy({
      where: { id },
    });

    res.send({
      message: `Successfully deleted user with id ${id}`,
      data: { id },
    });
  } catch (err) {
    showError(err);
  }
};
