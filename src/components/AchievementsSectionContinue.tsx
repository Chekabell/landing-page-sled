import { defineComponent } from 'vue'
import AcceleratorLeft from '@/assets/image/achievements/acceleratorPresenation.png'
import AcceleratorRight from '@/assets/image/achievements/acceleratorCertificate.png'
import GroupPhoto from '@/assets/image/achievements/groupPhotoGubernator.png'
import CustomContainer from './CustomContainer'

export default defineComponent({
  setup() {
    return () => (
      <CustomContainer class="h-[100%]">
        <div class="m-auto h-full w-[90%] space-y-[5%]">
          <div class="relative flex justify-center">
            <div class="flex flex-col w-[90%] justify-center items-center">
              <div class="flex">
                <img class="w-[50%] rounded-[30px] object-cover" src={AcceleratorLeft} alt="" />
                <img class="w-[50%] rounded-[30px] object-cover" src={AcceleratorRight} alt="" />
              </div>
              <h2 class="text-center text-[clamp(24px,2.0vw+0.5rem,1.5rem)] pt-3 pb-5 text-white font-normal font-roboto-condensed uppercase">
                Прохождение в финал «Акселератора технологических стартапов в Югре», проходивший
                с 1 октября по 16 ноября 2024 года.
              </h2>
            </div>
            <div class="absolute z-[-1] bg-blue w-[100%] h-[75%] bottom-0 rounded-[56px]" />
          </div>
          <div class="relative">
            <div class="flex flex-col items-center pb-15">
              <div class="relative w-[90%]">
                <img class="rounded-[30px] object-cover" src={GroupPhoto} alt="" />
                <div
                  class="absolute w-[100%] h-[100%] bottom-0"
                  style="background: linear-gradient(180deg, rgba(39, 55, 119, 0) 50.96%, #273777 100%);"
                />
                <div class="absolute flex bottom-[-1%] px-2">
                  <h2 class="text-[clamp(24px,2.0vw+0.5rem,1.5rem)] text-white font-normal font-roboto-condensed uppercase">
                    Презентация проекта на встрече с губернатором ХМАО-Югры Русланом Кухарук
                  </h2>
                  <svg
                    width="130"
                    height="36"
                    viewBox="0 0 130 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.063 18.7071C112.453 18.3166 112.453 17.6834 112.063 17.2929L105.699 10.9289C105.308 10.5384 104.675 10.5384 104.285 10.9289C103.894 11.3195 103.894 11.9526 104.285 12.3431L109.942 18L104.285 23.6569C103.894 24.0474 103.894 24.6805 104.285 25.0711C104.675 25.4616 105.308 25.4616 105.699 25.0711L112.063 18.7071ZM18.9922 18V19H111.356V18V17H18.9922V18Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="absolute z-[-1] bg-blue w-[100%] h-[75%] bottom-0 rounded-[56px]" />
          </div>
        </div>
      </CustomContainer>
    )
  },
})
