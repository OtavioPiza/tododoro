/**
 * task model
 *
 * @version 1.0.0
 */

// == imports == //

const { DB_TASK } = require('../config/config');
const mongoose = require('mongoose');
const connection = require('../config/mongodb').connect('task');

// == schemas == //

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  due: {
    type: Date,
    required: false
  },
  priority: {
    type: Number,
    required: false,
    max: 4,
    min: 0
  },
  created: {
    type: Date,
    default: Date.now,
    required: true
  },
});

// == properties == //

/**
 * overrides default transformation removing __v form the object
 */
taskSchema.set('toJSON', {
  transform: (document, object) => {
    object.id = object._id.toString();
    delete object._id;
    delete object.__v;
  }
});

// == model == //

const Task = connection.model(DB_TASK, taskSchema);

// == exports == //

module.exports = Task;