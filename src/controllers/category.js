const { Category } = require("../../models");
const { showError } = require("./_showError");

exports.readCategory = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.send({
      message: "Successfully get categories",
      data: { categories },
    });
  } catch (err) {
    showError(err);
  }
};

exports.detailCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const detailCategory = await Category.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.send({
      message: `Successfully get Category with id ${id}`,
      data: { detailCategory },
    });
  } catch (err) {
    showError(err);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const addCategory = await Category.create(req.body, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.send({
      message: "Success created a Category",
      newCategory: addCategory, //data addCategory ditampilkan dengan nama alias "newCategory"
    });
  } catch (err) {
    showError(err);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.update(req.body, {
      where: { id },
    });

    const updatedCategory = await Category.findOne({
      where: { id },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    res.send({
      message: `Successfully update category with id ${id}`,
      updatedCategory, //data updatedCategory ditampilkan dengan nama updatedCategory
    });
  } catch (err) {
    showError(err);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.destroy({ where: { id } });

    res.send({
      message: `Successfully delete category with id ${id}`,
      id,
    });
  } catch (err) {
    showError(err);
  }
};
