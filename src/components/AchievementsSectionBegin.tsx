import { defineComponent } from 'vue'
import Logo from '@/assets/FondInnovationLogo.svg'
import LeftPattern from '@/assets/patternLeft.svg'
import RightPattern from '@/assets/patternRight.svg'
import CustomContainer from './CustomContainer'

export default defineComponent({
  setup() {
    return () => (
      <CustomContainer class="sm:my-30 lg:my-20 xl:my-30 h-[100%] flex items-center">
        <img class="hidden sm:block absolute h-[100%] left-0 z-[-1]" src={LeftPattern} />
        <div class="w-full bg-white py-3 px-3 border-1 rounded-[30px] lg:bg-transparent lg:border-0 lg:px-40 flex flex-col gap-6">
          <h2 class="text-center text-[clamp(24px,2.5vw+0.5rem,3.125rem)] text-blue font-semibold uppercase">
            Достижения
          </h2>
          <p class="text-center text-[clamp(24px,2.5vw+0.5rem,1.33rem)] font-light">
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
        <img class="hidden sm:block absolute h-[100%] right-0 z-[-1]" src={RightPattern} />
      </CustomContainer>
    )
  },
})
