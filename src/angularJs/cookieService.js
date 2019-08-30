loginModule.service('CookieService', function($cookies) {
  return {
    setCookie(key, value) {
      $cookies.put(key, value);
    }
  };
});
