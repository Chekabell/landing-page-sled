import { defineComponent } from 'vue'
import Policeman from '@/assets/Policeman.svg'
import CustomContainer from './CustomContainer'

export default defineComponent({
  setup() {
    return () => (
      <CustomContainer class="h-[100%] flex justify-center">
        <div class="xxl:w-[90%] 2xl:w-[80%] flex justify-center items-stretch gap-2">
          <div
            class="rounded-[14px] flex justify-center items-center px-3"
            style="box-shadow: 0px 0px 3.1px 0px #00000040"
          >
            <h2 class="text-center text-nowrap text-[clamp(24px,2.5vw+0.5rem,2rem)] font-roboto-condensed text-blue font-semibold uppercase">
              Целевая аудитория
            </h2>
          </div>
          <div class="bg-blue rounded-[14px] px-5 flex justify-center items-center">
            <img class="h-full aspect-square" src={Policeman} />
          </div>
          <div
            class="rounded-[14px] flex justify-center items-center px-3 py-2"
            style="box-shadow: 0px 0px 3.1px 0px #00000040"
          >
            <p class="text-left text-[clamp(24px,2.5vw+0.5rem,1.25rem)] text-blue font-extralight">
              Сотрудники правоохранительных органов, которые осуществляют сбор и фиксацию
              доказательств
            </p>
          </div>
        </div>
      </CustomContainer>
    )
  },
})
