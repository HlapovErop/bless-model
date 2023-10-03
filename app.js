const navigation = document.querySelector('.header-navigation');

const burgerButton = document.querySelector('.burger-menu');
const burgerButtonClose = navigation.querySelector('.close__button');
const img = document.querySelector('.logo__i')

burgerButton.addEventListener('click', function(){
  img.setAttribute('style', 'display: initial;');
	navigation.classList.toggle('header-navigation-active');
  let list = document.querySelector('.navigation__list');
  list.setAttribute('style', 'min-width:300px; margin-top:100px;');
  navigation.classList.toggle('header-footer')
});

burgerButtonClose.addEventListener('click', function(){
	navigation.classList.remove('header-navigation-active');
  navigation.classList.remove('header-footer')
});


document.addEventListener('mousedown', function(e){
  if(e.target.closest('.navigation') === null){
    navigation.classList.remove('header-navigation-active');
  }
});

document.addEventListener('submit', (e) => { 
  // Отключаем событие по умолчанию 
      e.prevent.Default(); 
  // Очищаем поля формы 
      e.target.reset(); 
  });