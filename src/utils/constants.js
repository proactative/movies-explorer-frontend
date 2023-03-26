const MESSAGE_REGISTOR_SUCCESS = 'Поздравляем! Вы успешно зарегистрированы!'
const MESSAGE_CONFLICT = 'Пользователь с таким email уже существует.'
const MESSAGE_REGISTOR_ERROR = 'При регистрации пользователя произошла ошибка.'
const MESSAGE_LOGIN_UNAUTHORISED = 'Вы ввели неправильный логин или пароль. '
const MESSAGE_TOKEN_ERROR =
  'При авторизации произошла ошибка. Токен не передан или передан не в том формате.'
const MESSAGE_TOKEN_INCORRECT =
  'При авторизации произошла ошибка. Переданный токен некорректен.'
const MESSAGE_PROFILE_SUCCESS = 'Ваш профиль успешно обновлен.'
const MESSAGE_PROFILE_ERROR = 'При обновлении профиля произошла ошибка.'
const MESSAGE_SERVER_ERROR ='На сервере произошла ошибка.'
const MESSAGE_LOADING_ERROR ='Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'

module.exports = {
  MESSAGE_PROFILE_SUCCESS,
  MESSAGE_PROFILE_ERROR,
  MESSAGE_REGISTOR_SUCCESS,
  MESSAGE_REGISTOR_ERROR,
  MESSAGE_CONFLICT,
	MESSAGE_LOGIN_UNAUTHORISED,
	MESSAGE_TOKEN_ERROR,
	MESSAGE_TOKEN_INCORRECT,
	MESSAGE_SERVER_ERROR,
  MESSAGE_LOADING_ERROR
}
