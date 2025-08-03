import { defineComponent } from 'vue'
import Policeman from '@/assets/Policeman.svg'
import CustomContainer from './CustomContainer'

export default defineComponent({
  setup() {
    return () => (
      <CustomContainer class="flex justify-center">
        <div class="w-[90%] flex flex-wrap xxl:flex-nowrap justify-center gap-2">
          <div class="bg-blue rounded-[14px] aspect-square px-5 flex justify-center items-center sm:order-2">
            <img class="h-full w-full" src={Policeman} />
          </div>
          <div
            class="rounded-[14px] flex-1 flex justify-center items-center py-3 px-5 sm:order-1"
            style="box-shadow: 0px 0px 3.1px 0px #00000040"
          >
            <h2 class="text-center text-nowrap text-[clamp(24px,2.5vw+0.5rem,2rem)] font-roboto-condensed text-blue font-semibold uppercase">
              Целевая аудитория
            </h2>
          </div>
          <div
            class="rounded-[14px] px-3 py-4 sm:order-3"
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
