import { defineComponent } from 'vue'
import Logo from '@/assets/FondInnovationLogo.svg'

export default defineComponent({
  setup() {
    return () => (
      <section class="h-screen my-3 flex items-center" id="advantages">
        <svg
          width="204"
          height="896"
          viewBox="0 0 204 896"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.071 878.929C104.771 885.229 94 880.767 94 871.858L94 796C94 790.477 98.4772 786 104 786L179.858 786C188.767 786 193.229 796.771 186.929 803.071L149 841L111.071 878.929Z"
            fill="#273777"
          />
          <path
            d="M-41 816C-41 799.431 -27.5685 786 -11 786L69 786L69 866C69 882.569 55.5686 896 39 896L-41 896L-41 816Z"
            fill="#C8D3FF"
          />
          <rect x="94" y="655" width="110" height="110" rx="55" fill="#C8D3FF" />
          <path
            d="M-41 685C-41 668.431 -27.5685 655 -11 655L39 655C55.5685 655 69 668.431 69 685L69 765L-41 765L-41 685Z"
            fill="black"
          />
          <rect
            x="204"
            y="634"
            width="110"
            height="110"
            rx="30"
            transform="rotate(180 204 634)"
            fill="#C8D3FF"
          />
          <rect
            x="69"
            y="634"
            width="110"
            height="110"
            rx="55"
            transform="rotate(180 69 634)"
            fill="white"
          />
          <rect
            x="204"
            y="503"
            width="110"
            height="110"
            rx="5"
            transform="rotate(180 204 503)"
            fill="#273777"
          />
          <path
            d="M69 503L-11 503C-27.5685 503 -41 489.569 -41 473L-41 393L39 393C55.5685 393 69 406.431 69 423L69 503Z"
            fill="#C8D3FF"
          />
          <path
            d="M186.929 354.929C193.229 361.229 188.767 372 179.858 372L104 372C98.4771 372 94 367.523 94 362L94 286.142C94 277.233 104.771 272.771 111.071 279.071L149 317L186.929 354.929Z"
            fill="black"
          />
          <rect
            x="69"
            y="372"
            width="110"
            height="110"
            rx="30"
            transform="rotate(180 69 372)"
            fill="#273777"
          />
          <path
            d="M204 241L124 241C107.431 241 94 227.569 94 211L94 131L174 131C190.569 131 204 144.431 204 161L204 241Z"
            fill="#C8D3FF"
          />
          <rect
            x="69"
            y="241"
            width="110"
            height="110"
            rx="5"
            transform="rotate(180 69 241)"
            fill="white"
          />
          <rect
            x="204"
            y="110"
            width="110"
            height="110"
            rx="5"
            transform="rotate(180 204 110)"
            fill="white"
          />
          <path
            d="M-23.9289 92.9289C-30.2286 99.2286 -41 94.7669 -41 85.8579L-41 10C-41 4.47715 -36.5229 -1.95703e-07 -31 -4.37114e-07L44.8579 -3.75297e-06C53.7669 -4.14239e-06 58.2286 10.7714 51.9289 17.0711L14 55L-23.9289 92.9289Z"
            fill="#273777"
          />
        </svg>
        <div class="w-full flex flex-col sm:px-3 lg:px-20 gap-6">
          <h2 class="text-center text-[clamp(24px,2.5vw+0.5rem,3.125rem)] text-blue font-semibold uppercase">
            Достижения
          </h2>
          <p class="text-center text-[clamp(24px,2.5vw+0.5rem,1.3rem)] font-light">
            В июне 2024 года проект «SLED: приложение по созданию 3D-модели следа обуви» выиграл
            грант в размере одного миллиона рублей на разработку приложения для смартфона в
            «Студенческий стартап» (очередь V), проводимый Фондом содействия инновациям.
          </p>
          <div class="rounded-[40px] m-auto p-3" style="box-shadow: 0px 0px 6.8px 0px #00000040;">
            <img src={Logo} alt="Компания" />
          </div>
          <p class="text-center text-[clamp(24px,2.5vw+0.5rem,1.3rem)] font-light">
            Презентация проекта в марте 2024 году на Startup Tour 2024 в городе Ханты — Мансийск
            и в июне 2024 года на XV Международный IT-Форум с участием стран БРИКС и ШОС. Проект
            получил одобрение со стороны эксперта на реализацию
          </p>
        </div>
        <svg
          width="203"
          height="896"
          viewBox="0 0 203 896"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="110" height="110" rx="55" fill="white" />
          <rect x="131" width="110" height="110" rx="30" fill="#273777" />
          <rect y="131" width="110" height="110" rx="5" fill="#273777" />
          <path
            d="M131 131H211C227.569 131 241 144.431 241 161V241H161C144.431 241 131 227.569 131 211V131Z"
            fill="white"
          />
          <path
            d="M17.0711 279.071C10.7714 272.771 15.2331 262 24.1421 262H100C105.523 262 110 266.477 110 272V347.858C110 356.767 99.2286 361.229 92.9289 354.929L55 317L17.0711 279.071Z"
            fill="#C8D3FF"
          />
          <rect x="131" y="262" width="110" height="110" rx="30" fill="#273777" />
          <path
            d="M0 393H80C96.5685 393 110 406.431 110 423V503H30C13.4315 503 0 489.569 0 473V393Z"
            fill="#273777"
          />
          <rect x="131" y="393" width="110" height="110" rx="5" fill="black" />
          <rect y="524" width="110" height="110" rx="5" fill="#C8D3FF" />
          <path
            d="M223.929 541.071C230.229 534.771 241 539.233 241 548.142L241 624C241 629.523 236.523 634 231 634L155.142 634C146.233 634 141.771 623.229 148.071 616.929L186 579L223.929 541.071Z"
            fill="#273777"
          />
          <rect y="655" width="110" height="110" rx="55" fill="black" />
          <path
            d="M131 685C131 668.431 144.431 655 161 655L211 655C227.569 655 241 668.431 241 685L241 765L131 765L131 685Z"
            fill="white"
          />
          <path
            d="M17.0711 803.071C10.7714 796.771 15.2331 786 24.1421 786H100C105.523 786 110 790.477 110 796V871.858C110 880.767 99.2286 885.229 92.9289 878.929L55 841L17.0711 803.071Z"
            fill="#273777"
          />
          <path
            d="M131 816C131 799.431 144.431 786 161 786L241 786L241 866C241 882.569 227.569 896 211 896L131 896L131 816Z"
            fill="#C8D3FF"
          />
        </svg>
      </section>
    )
  },
})
