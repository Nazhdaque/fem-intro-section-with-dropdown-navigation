import "./css/main.css";

class mobileMenu {
	constructor() {
		this.toggle = document.querySelector(".nav-panel-toggle");
		this.icon = document.querySelector(".hamburger-icon");
		this.nav = document.querySelector(".nav-panel");
		this.navLinks = document.querySelectorAll(".nav-link");
	}

	toggleNav = () => this.nav.classList.toggle("display-flex");
	disableNav = () => this.nav.classList.remove("display-flex");

	changeIcon = () => {
		let path = this.icon.getAttribute("src");
		path.includes("icon-menu")
			? (path = path.replace("icon-menu", "icon-close-menu"))
			: (path = path.replace("icon-close-menu", "icon-menu"));
		this.icon.setAttribute("src", path);
	};

	handleClick = () => {
		this.toggleNav();
		this.changeIcon();
	};

	handleEsc = event => {
		if (
			this.nav.classList.contains("display-flex") &&
			event.code === "Escape"
		) {
			this.disableNav();
			this.changeIcon();
		}
	};

	setState = isMobile => {
		if (isMobile) {
			this.toggle.addEventListener("click", this.handleClick);
			window.addEventListener("keydown", this.handleEsc);
			this.navLinks.forEach(link =>
				link.addEventListener("click", this.handleClick)
			);
		} else {
			this.toggle.removeEventListener("click", this.handleClick);
			window.removeEventListener("keydown", this.handleEsc);
			this.navLinks.forEach(link =>
				link.removeEventListener("click", this.handleClick)
			);
		}
	};

	checkState = breakpoint =>
		window.innerWidth <= breakpoint && this.setState(true);

	toggleState = isMobileSize =>
		isMobileSize ? this.setState(true) : this.setState(false);

	watchState = breakpoint => {
		const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);
		mediaQueryList.addEventListener("change", event =>
			this.toggleState(event.matches)
		);
	};

	initMobileMenuOn = breakpoint => {
		navPanel.checkState(breakpoint);
		navPanel.watchState(breakpoint);
	};
}

const navPanel = new mobileMenu();
navPanel.initMobileMenuOn(900);

console.log(
	"%c			Coded by ✨Nazhdaque✨			  \n	https://www.frontendmentor.io/profile/Nazhdaque	  ",
	"background: #222; color: chartreuse; font-size: 1.25rem"
);
