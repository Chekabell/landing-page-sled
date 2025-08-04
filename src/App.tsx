import { defineComponent } from 'vue'
import Container from './components/CustomContainer'
import Sled2 from '@/assets/logo2.png'
import MockUp from '@/assets/MockUp.png'
import CarouselAboutApplication from './components/CarouselAboutApplication'
import Header from './components/Header'
import ProblemSolution from './components/ProblemSolution'
import AchievementsSectionBegin from './components/AchievementsSectionBegin'
import AchievementsSectionContinue from './components/AchievementsSectionContinue'
import TargetGroup from './components/TargetGroup'
import CustomContainer from './components/CustomContainer'
import Video from '@/assets/video.mp4'
import Constran from '@/assets/Constran.svg'
import Tel from '@/assets/tel.png'
import Email from '@/assets/email.png'
import Vk from '@/assets/vk.png'
import Tg from '@/assets/tg.png'

export default defineComponent({
  setup() {
    return () => (
      <div class={'flex flex-col min-h-dvh overflow-hidden'}>
        <main class={'mb-[20px]'}>
          <Header />

          <section
            class={'flex flex-col min-h-[962px] relative py-[156px]  lg:py-[106px] bg-gradient'}
            style={{
              background:
                'radial-gradient(circle at right, white 0%, #C8D3FF 60%, rgba(124, 131, 159, 0.25) 100%)',
            }}
          >
            <div class="flex flex-1 items-center">
              <div class={'container mx-auto'}>
                <div class="flex flex-col lg:flex-row  lg:items-center items-center relative gap-[1.5rem] ">
                  <div class="flex flex-col gap-[1.5rem]">
                    <img class={'md:max-w-[400px] md:h-[101px] w-full'} src={Sled2} alt="След" />
                    <h1
                      class={
                        'font-extralight text-[clamp(32px,2.5vw+0.5rem,2.7rem)] leading-[100%]'
                      }
                    >
                      Приложение по созданию <br class={'hidden lg:block'} /> 3D-модели следа обуви
                    </h1>
                  </div>
                  <div class="lg:absolute static lg:right-[-10px] xl:right-[30px] md:rotate-[15deg]  max-w-[462px] max-h-[562px] flex xl:max-w-[562px] xl:max-h-[662px] z-1">
                    <img class={'max-w-full max-h-full'} src={MockUp} alt="Телефон" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              class="absolute lg:block hidden right-0 bg-gradient-hero w-[476px] top-0 h-full rounded-[30px]"
              style={{
                background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C8D3FF 100%)',
              }}
            /> */}
          </section>
          <section class={'mt-[20px]'}>
            <Container>
              <div class="flex flex-col">
                <h2
                  class={
                    'text-[clamp(32px,2.5vw+0.5rem,2.7rem)]  relative leading-[140%] text-blue font-semibold'
                  }
                  id="goal"
                >
                  <span class="highlighted relative ">ЦЕЛЬ</span> ПРОЕКТА:
                </h2>

                <p
                  class={
                    'max-w-[734px] w-full font-light md:py-[1.4rem] py-[1.2rem] leading-[100%]'
                  }
                >
                  Разработка MVP приложения, которое из 2D изображений следа обуви с разных ракурсов
                  позволит создать 3D-модель следа обуви и определить с помощью ИИ его базовые
                  параметры, такие как группа обуви, длина следа обуви, длина и ширина его составных
                  частей и др. Так же приложение после анализа параметров следа обуви ИИ сможет
                  их сопоставить с базой данных обуви и указать ссылку на определённую модель обуви,
                  с которой будет выявлено совпадение.
                </p>
              </div>
            </Container>
          </section>

          <ProblemSolution />
          <section id="audiens" class="my-15 scroll-mt-80">
            <TargetGroup />
          </section>
          <section id="about" class="h-[80vh] my-3 lg:h-screen">
            <CarouselAboutApplication />
          </section>
          <section class={'py-[50px]'}>
            <CustomContainer>
              <div class="flex flex-col items-center ">
                <div class="w-full bg-white py-3 px-3  lg:px-40 flex flex-col gap-6">
                  <h2 class="text-center text-[clamp(24px,2.5vw+0.5rem,3.125rem)] text-blue font-semibold uppercase">
                    Обзор функционала приложения
                  </h2>
                </div>

                <div class="w-full max-w-[960px] aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <video
                    controls
                    preload="metadata"
                    muted
                    class="w-full h-full object-cover"
                    src={Video}
                  >
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
              </div>
            </CustomContainer>
          </section>
          <section
            id="advantages"
            class="flex justify-center flex-col gap-5 scroll-mt-5 lg:scroll-mt-[-0.5rem] xl:scroll-mt-3 2xl:scroll-mt-15"
          >
            <AchievementsSectionBegin />
            <AchievementsSectionContinue />
          </section>
          <section id="contacts" class="mt-[20px] mb-[70px]">
            <Container>
              <div class="flex flex-col">
                <h2
                  id="goal"
                  class="text-[clamp(24px,2.5vw+0.5rem,2.7rem)] relative leading-[140%] text-blue font-semibold text-center sm:text-left"
                >
                  <span class="highlighted relative">КОНТАКТНАЯ</span> ИНФОРМАЦИЯ:
                </h2>

                <div class="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[75px] mb-[60px] mt-[50px] text-center">
                  <img src={Constran} alt="Констран" class="w-auto max-w-[200px]" />
                  <h1 class="text-[clamp(24px,5vw,48px)] text-[#AA2423] font-normal leading-[100%]">
                    ООО «Констран»
                  </h1>
                </div>

                <div class="flex flex-col items-center justify-center text-center gap-[22px] mb-[60px] px-4">
                  <h3 class="text-[clamp(20px,2vw,32px)] uppercase text-[#273777] font-normal leading-[120%]">
                    Руководитель проекта «SLED: приложение по созданию 3D-модели следа обуви»,
                    <br />
                    генеральный директор ООО «Констран»:
                  </h3>
                  <h2 class="text-[clamp(22px,2.5vw,40px)] text-[#273777] font-medium leading-[120%]">
                    Масюкова Виктория Алексеевна
                  </h2>
                </div>

                <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-6 text-[clamp(18px,2vw,32px)] text-[#273777] px-4">
                  <div class="flex items-center gap-[10px] justify-center">
                    <img src={Tel} alt="Телефон" class="w-6 h-6" />
                    <h2>+7 922 434-22-68</h2>
                  </div>
                  <div class="flex items-center gap-[10px] justify-center">
                    <img src={Email} alt="Почта" class="w-6 h-6" />
                    <h2>pochtainform10i10@gmail.com</h2>
                  </div>
                  <div class="flex items-center gap-[10px] justify-center">
                    <img src={Vk} alt="ВКонтакте" class="w-6 h-6" />
                    <h2>vic.k.toria</h2>
                  </div>
                  <div class="flex items-center gap-[10px] justify-center">
                    <img src={Tg} alt="Телеграм" class="w-6 h-6" />
                    <h2>vic_k_toria</h2>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>
        <footer class={'bg-[#273777]'}>
          <Container>
            <div class="flex items-center justify-center py-[28px]">
              <h2 class={'text-[32px] text-white font-normal leading-[100%]'}>© 2025</h2>
            </div>
          </Container>
        </footer>
      </div>
    )
  },
})
