loginModule.controller('LoginController', function(
  $scope,
  LoginService,
  CookieService,
  NavigationService,
  SessionStorageService
) {
  $scope.credentials = { username: '', password: '' };

  $scope.navigate = function(username) {
    CookieService.setCookie('token', 'true');
    SessionStorageService.setItem('username', username);
    NavigationService.navigateWithLocation('./angular8');
  };

  $scope.login = function(username, password) {
    if (username && password) {
      LoginService.loginRequestMock(username, password).then(() => {
        this.navigate(username);
      });
    }
  };
});
