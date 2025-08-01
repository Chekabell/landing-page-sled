import { defineComponent, ref } from 'vue'

import Container from './CustomContainer'
import Arrow from '@/assets/arrow.png'
import Lineika from '@/assets/Lineika.png'
import PhoneMock from '@/assets/MockUp.png'
import Phone from '@/assets/Phone.png'

export default defineComponent({
  setup() {
    const activeSection = ref<'problem' | 'solution'>('problem')

    const toggleSection = () => {
      activeSection.value = activeSection.value === 'problem' ? 'solution' : 'problem'
    }

    return () => (
      <section
        class="test flex h-[805px] mt-[130px] mb-[30px] overflow-hidden relative"
        id="problems"
      >
        <Container>
          <div class={` flex jusify-start  h-full`}>
            {/* ПРОБЛЕМА */}
            <div
              class={[
                'flex flex-col  h-full transition-all duration-500  max-w-full  lg:max-w-[490px] 2xl:max-w-[728px]',
                activeSection.value === 'problem'
                  ? 'opacity-100 translate-x-0 '
                  : 'opacity-0 -translate-x-20 z-0 pointer-events-none',
              ]}
            >
              <h2 class="text-[2.7rem] text-brown font-semibold uppercase">Проблема</h2>
              <p class="flex-1 font-light py-[1.4rem] leading-[100%]">
                При фиксации следа обуви традиционным методом фиксации (с помощью гипсовой смеси
                и силикона) след обуви может повредиться, в результате чего возникает нечёткая
                передача особенностей следа обуви, особенно на рыхлых и сыпучих типах поверхности.
                Так же для использования гипсовой смеси и силикона сотрудник правоохранительных
                органов должен иметь необходимые навыки в работе с подобным материалом, но,как
                правило, такие навыки не всегда имеются. Застывание гипсовой смеси и силикона
                возможно так же при определённой температуре и в связи с чем материал не всегда
                застывает быстро или вообще не застывает. Под весом гипсовой смеси или силикона
                так же проседает сам след обуви на рыхлой поверхности, что в свою очередь вызывает
                сложности в фиксации следа обуви, как потенциального доказательства.
              </p>

              <button
                onClick={toggleSection}
                class="cursor-pointer flex items-center gap-[50px] self-start uppercase font-normal text-[1.42rem] leading-[100%] border-black border-b pb-[0.6rem]"
              >
                Решение
                <img class="w-[56px] h-[14px]" src={Arrow} alt="Стрелка вправо" />
              </button>
            </div>
            <div
              class={[
                'hidden lg:block absolute top-[10px] 2xl:right-[-20px] right-[-20px] transition-all duration-500',

                activeSection.value === 'problem'
                  ? 'opacity-100 translate-x-0 '
                  : 'opacity-0 translate-x-10  pointer-events-none',
              ]}
            >
              <img
                class={
                  'xl:w-[650px] xl:h-[650px] h-[700px] xxl:w-[700px] xxl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] lg:w-[500px] lg:h-[500px] max-w-full'
                }
                src={Lineika}
                alt="Иллюстрация"
              />
            </div>
            <div
              class={[
                'hidden lg:block absolute top-[10px] 2xl:right-[-20px] right-[-20px] transition-all duration-500',

                activeSection.value === 'solution'
                  ? 'opacity-100 translate-x-0 '
                  : 'opacity-0 -translate-x-10pointer-events-none',
              ]}
            >
              <img
                class={
                  'xl:w-[650px] xl:h-[650px] h-[700px] xxl:w-[700px] xxl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] lg:w-[500px] lg:h-[500px] max-w-full'
                }
                src={Phone}
                alt="Иллюстрация"
              />
            </div>
            <div
              class={[
                'flex h-full flex-col transition-all duration-500 absolute max-w-full  lg:max-w-[490px] 2xl:max-w-[728px]',
                activeSection.value === 'solution'
                  ? 'opacity-100 translate-x-0 '
                  : 'opacity-0 translate-x-20  pointer-events-none',
              ]}
            >
              <h2 class="text-[2.7rem] text-green-700 font-semibold uppercase">Решение</h2>
              <p class="flex-1 font-light py-[1.4rem] leading-[100%]">
                Приложение SLED позволит усовершенствовать процесс фиксации следов обуви (в рамках
                фиксации доказательств) на рыхлых и других сложных типах поверхности в условиях,
                когда традиционные методы (гипсовая смесь и силикон) оказываются неэффективными
                или невозможными. Приложение, обеспечить процесс фиксации вне зависимости
                от климатических и температурных условий, облегчить процесс анализа параметров
                следов обуви за счёт использовании ИИ-инструмента.
              </p>
              <button
                onClick={toggleSection}
                class="cursor-pointer flex items-center gap-[50px] self-start uppercase font-normal text-[1.42rem] leading-[100%] border-black border-b pb-[0.6rem]"
              >
                <img class="w-[56px] h-[14px] rotate-180" src={Arrow} alt="Стрелка вправо" />{' '}
                Проблема
              </button>
            </div>
          </div>
        </Container>
      </section>
    )
  },
})
