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

export default defineComponent({
  setup() {
    return () => (
      <div class={'flex flex-col min-h-dvh overflow-hidden'}>
        <main>
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
                <div class="flex flex-col lg:flex-row  lg:items-center  relative ">
                  <div class="flex flex-col gap-[1.5rem]">
                    <img class={'max-w-[400px] h-[101px]'} src={Sled2} alt="След" />
                    <h1
                      class={
                        'font-extralight text-[clamp(27px,2.5vw+0.5rem,2.7rem)] leading-[2rem]'
                      }
                    >
                      Приложение по созданию <br class={'hidden lg:block'} /> 3D-модели следа обуви
                    </h1>
                  </div>
                  <div class="lg:absolute static right-[-80px] flex max-w-[762px] max-h-[862px] z-1">
                    <img class={'max-w-full max-h-full'} src={MockUp} alt="Телефон" />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="absolute lg:block hidden right-0 bg-gradient-hero w-[476px] top-0 h-full rounded-[30px]"
              style={{
                background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C8D3FF 100%)',
              }}
            />
          </section>
          <section>
            <Container>
              <div class="flex flex-col">
                <h2
                  class={'text-[2.7rem]  relative leading-[140%] text-blue font-semibold'}
                  id="goal"
                >
                  <span class="highlighted relative ">ЦЕЛЬ</span> ПРОЕКТА:
                </h2>

                <p class={'max-w-[734px] w-full font-light py-[1.4rem] leading-[100%]'}>
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
          <section id="about" class="sm:h-[80vh] lg:h-screen">
            <CarouselAboutApplication />
          </section>
          <section
            id="advantages"
            class="sm:my-10 lg:my-15 xl:my-40 flex justify-center flex-col sm:gap-10 lg:gap-20 xl:gap-50 scroll-mt-40"
          >
            <AchievementsSectionBegin />
            <AchievementsSectionContinue />
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
