// Вспомогательные модули блокировки прокрутки и скачка ====================================================================================================================================================================================================================================================================================
import {bodyLockStatus, bodyLockToggle, bodyUnlock} from './scripts/popup.js'

// Меню бургер ====================================================================================================================================================================================================================================================================================
export function menuInit() {
	const iconMenu = document.querySelector(".icon-menu");
	const menuLink = document.querySelectorAll(".menu__link");
	if (iconMenu) {
		iconMenu.addEventListener("click", function (e) {
			if (bodyLockStatus && e.target.closest('.icon-menu')) {
				bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
				document.documentElement.classList.toggle("__active-menu-burger");
			}
		});

		menuLink.forEach(menuLinkItem => {
		menuLinkItem.addEventListener("click", function (e) {
			bodyUnlock(500);
			document.documentElement.classList.remove('menu-open')
			document.documentElement.classList.remove('__active-menu-burger')
		});
	});
	};
}
