class ModalWindow {
  constructor() {
    this.callModal();
  }

  callModal() {
    document
      .querySelector('.header-btn-entry')
      .addEventListener('click', () => {
        this.init();
        this.scroll();
        this.closeModal();
        this.submitModal();
      });
  }

  closeModal() {
    document.querySelector('.btn-close').addEventListener('click', () => {
      document
        .querySelector('body')
        .removeChild(document.querySelector('.modal'));
      this.scroll();
    });
  }

  submitModal() {
    document
      .querySelector('.btn-submit-modal')
      .addEventListener('click', () => {
        console.log('заявка принята');
      });
  }

  scroll() {
    document.querySelector('body').classList.toggle('scroll');
  }

  init() {
    const windows = document.querySelector('body');
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    windows.append(modalWindow);

    const blockOfForm = document.createElement('div');
    blockOfForm.classList.add('modal-block');
    modalWindow.append(blockOfForm);

    this.render();
  }

  render() {
    const placeToRender = document.querySelector('.modal-block');
    if (!placeToRender) {
      return;
    }

    placeToRender.innerHTML = `
          <div class="online-entry">
          <h2>Оставте заявку <br> и мы свяжемся с вами</h2>
          <button class="btn-close fas fa-times" type="button"></button>
          <form class="modal-form" action="#">
            <input type="text" name="Name" placeholder="Имя" />
            <input
              type="tel"
              name="Phone numberа"
              id="#"
              placeholder="Номер телефона"
            />
            <input
              type="datetime"
              name="Select date"
              id="#"
              placeholder="Выбрать дату"
            />
            <button type="button" class="btn-submit-modal">Отправить</button>
          </form>
        </div>
    `;
  }
}

class RequestModal {
  constructor() {
    this.callRequestModal();
  }

  callRequestModal() {
    document.querySelector('.btn-submit').addEventListener('click', () => {
      this.init();
      this.closeRequestModal();
    });
  }

  closeRequestModal() {
    setTimeout(function () {
      document
        .querySelector('body')
        .removeChild(document.querySelector('.modal'));
    }, 3000);
  }

  init() {
    const windows = document.querySelector('body');
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');
    windows.append(modalWindow);

    const blockOfForm = document.createElement('div');
    blockOfForm.classList.add('modal-block');
    modalWindow.append(blockOfForm);

    this.render();
  }

  render() {
    const placeToRender = document.querySelector('.modal-block');
    if (!placeToRender) {
      return;
    }

    placeToRender.innerHTML = `
        <div class="online-entry-modal">
          <h2>Заявка принята</h2>
          <h3>Спасибо, что выбрали нас</h3>
        </div>
    `;
  }
}

class BurgerMenu {
  constructor() {
    this.show();
  }
  show() {
    const burgerShow = document
      .querySelector('#burger-btn')
      .addEventListener('click', () => {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.header-menu').classList.toggle('open');
        this.link();
        // this.scroll();
        this.hide();
      });
    return burgerShow;
  }
  hide() {
    const linkMenu = document.querySelectorAll('.burgerLink');
    [linkMenu].forEach.call(linkMenu, (el) => {
      el.addEventListener('click', () => {
        document.querySelector('.burger').classList.toggle('active');
        document.querySelector('.header-menu').classList.toggle('open');
        console.log('hide');
        this.link();
        // this.scroll();
      });
    });
    return linkMenu;
  }
  link() {
    const burgerLink = document.querySelectorAll('.header-menu-link');
    [burgerLink].forEach.call(burgerLink, (el) => {
      el.classList.toggle('burgerLink');
    });
    return burgerLink;

    // this.scroll();
  }
  scroll() {
    document.querySelector('body').classList.toggle('scroll');
  }
}

const Burger = new BurgerMenu();
const Request = new RequestModal();
const Modal = new ModalWindow();
