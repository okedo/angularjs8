loginModule.service('LoginService', function() {
  return {
    loginRequestMock(username, password) {
      const response = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });

      return response;
    }
  };
});
