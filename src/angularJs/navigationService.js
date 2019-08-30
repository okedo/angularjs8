loginModule.service('NavigationService', function() {
  return {
    navigateWithLocation(url) {
      var $window = window;
      $window.location.href = url;
    }
  };
});
