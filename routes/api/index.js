const router = require('express').Router();
const categoryRoutes = require('.category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = required('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('Products',productionRoutes);
router.use('/tags', tagRoutes);

module.exports = router;