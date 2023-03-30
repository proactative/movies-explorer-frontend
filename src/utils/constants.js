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
const INITIAL_CARD_NUMBER_LARGE_SCREEN = 12;
const INITIAL_CARD_NUMBER_MID_SCREEN = 8;
const INITIAL_CARD_NUMBER_SMALL_SCREEN = 5;
const ADDITIONAL_CARD_NUMBER_LARGE_SCREEN = 3;
const ADDITIONAL_CARD_NUMBER_MID_AND_SMALL_SCREEN = 2;
const SHORT_MOVIES_DURATION_IN_MINUTES = 40;

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
  MESSAGE_LOADING_ERROR,
  INITIAL_CARD_NUMBER_LARGE_SCREEN,
  INITIAL_CARD_NUMBER_MID_SCREEN,
  INITIAL_CARD_NUMBER_SMALL_SCREEN,
  ADDITIONAL_CARD_NUMBER_LARGE_SCREEN,
  ADDITIONAL_CARD_NUMBER_MID_AND_SMALL_SCREEN,
  SHORT_MOVIES_DURATION_IN_MINUTES
}
