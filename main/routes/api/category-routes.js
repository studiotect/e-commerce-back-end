const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    });
    if (!categoryData) {
      return res.status(404).json({ message: 'No Category found with this id!' });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // find one category by its `id` value
  // be sure to include its associated Products

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id 
      }
    });
    if (!categoryData) {
      return res.status(404).json({ message : 'No Category Data found'})
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
    // update a category by its `id` value
});

// Delete new posts, provided seed data is wrong
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categoryData) {
      return res.status(404).json({ message: 'No category data'})
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
