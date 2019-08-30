loginModule.service('SessionStorageService', function($cookies) {
  return {
    setItem(item, value){
      sessionStorage.setItem(item, value);
    }
  };
});
