const express = require('express');
const jwt = require('../utils/jwt');
const tokenVerifier = require('../middleware/tokenVerifier');
const bodyVerifier = require('../middleware/bodyVerifier');
const Task = require('../models/task');

// == routes == //

const taskRouter = express.Router();

/**
 * verifies if the request contains a valid token
 */
taskRouter.use(tokenVerifier);

/**
 * gets all tasks for a given user
 */
taskRouter.get('/', async (request, response) => {
  const token = jwt.decode(request.get('authorization'));
  response.status(200).send(await Task.find({ user: token.id }));
});

/**
 * creates a new task for a given user
 */
taskRouter.post('/', bodyVerifier(['title']), async (request, response) => {
  const body = request.body;
  const user = request.user;

  const task = new Task({
    user: user.id,
    title: body.title,
    description: 'description' in body ? body.description : null,
    due: 'due' in body ? body.due : null,
    priority: 'priority' in body ? body.priority : null
  });

  task
    .save()
    .then((res) => response.status(201).send({
      id: res._id,
      title: res.title,
      description: 'description' in res ? res.description : null,
      due: 'due' in res ? res.due : null,
      priority: 'priority' in res ? res.priority : -1
    }))
    .catch((e) => {
      if (e.message.startsWith('Task validation failed')) {
        response.status(400).send(e.message);
      }
      throw e;
    });
});

/**
 * updates a given task for a given user
 */
taskRouter.put('/', bodyVerifier(['id']), async (request, response) => {
  const body = request.body;

  const data = {
    title: 'title' in body && body.title ? body.title : null,
    description: 'description' in body ? body.description : null,
    due: 'due' in body ? body.due : null,
    priority: 'priority' in body ? body.priority : null
  };

  if (!('description' in body)) {
    delete data.description;
  }

  if (!('title' in body)) {
    delete data.title;
  }

  if (!('due' in body)) {
    delete data.due;
  }

  if (!('priority' in body)) {
    delete data.priority;
  }

  if (data) Task
    .findByIdAndUpdate(body.id, data).where({ user: request.user.id })
    .then(() => response.status(204).send())
    .catch((e) => {
      if (e.kind === 'ObjectId') {
        response.status(400).send({ error: 'invalid id' });
        return;
      }
      throw e;
    });
});

/**
 * deletes a given task for a given user
 */
taskRouter.delete('/', async (request, response) => {
  const body = request.body;

  if (!body || !('id' in body)) {
    response.send(400).send({ error: 'content missing' });
    return;
  }

  try {
    const token = jwt.decode(request.get('authorization'));
    await Task.findByIdAndDelete(body.id).where({ user: token.id });

  } catch (e) {

    if (e.kind === 'ObjectId') {
      response.status(400).send({ error: 'invalid id' });
      return;
    }
    throw e;
  }
  response.status(204).end();
});

// == exports == //

module.exports = taskRouter;
