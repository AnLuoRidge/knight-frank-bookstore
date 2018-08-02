const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const { Schema } = mongoose;

// Create Schema
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'categories',
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },
});

CategorySchema.plugin(URLSlugs('name', { field: 'slug' }));

module.exports = mongoose.model('categories', CategorySchema);
