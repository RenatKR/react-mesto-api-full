const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ErrorConflict = require('../errors/ErrorConflict');
const UnauthorizedError = require('../errors/UnauthorizedError');
const NotFoundError = require('../errors/NotFoundError');

const { JWT_SECRET } = process.env;

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByIdCredentials(email, password)
    .then((user) => {
      if (!user) {
        throw new UnauthorizedError('Передан неверный логин или пароль');
      }
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });
      res.send({         
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user.id,
        email: user.email,
        token});
      res.send({ message: 'Аутентификация прошла успешно' });
    })
    .catch(next);
};

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const {
    name,
    about,
    avatar,
    password,
    email,
  } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new ErrorConflict('Пользователь с таким email существует');
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => {
      User.create({
        name,
        about,
        avatar,
        password: hash,
        email,
      })
        .then((user) => User.findOne({ _id: user.id }))
        .then((user) => {
          res.send({ user });
        })
        .catch(next);
    })
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь по указанному _id не найден');
      }
      res.send({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user.id,
      });
    })
    .catch(next);
};

module.exports.editUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user.id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new Error('NotFound');
    })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь по указанному _id не найден');
      }
      res.send({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user.id,
      });
    })
    .catch(next);
};

module.exports.editUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user.id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь по указанному _id не найден');
      }
      res.send({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user.id,
      });
    })
    .catch(next);
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user.id)
    .orFail(() => {
      throw new NotFoundError('Пользователь по указанному _id не найден');
    })
    .then((user) => {
      res.send({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        _id: user.id,
        email: user.email,
      });
    })
    .catch(next);
};
