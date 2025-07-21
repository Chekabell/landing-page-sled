import { defineComponent } from 'vue'
import Container from './components/Container'
import Sled from '@/assets/logo.svg'
import Sled2 from '@/assets/logo2.png'
import MockUp from '@/assets/MockUp.png'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class={'flex flex-col min-h-dvh overflow-hidden'}>
          <main>
            <header
              class={
                'fixed top-0 w-full py-[1.667rem] z-10 bg-blur backdrop-blur-[10px]   overflow-hidden '
              }
            >
              <Container>
                <div class="flex justify-between">
                  <img src={Sled} alt="След" />
                  <nav class={'flex items-center'}>
                    <ul class={'flex gap-[3.5rem]'}>
                      <li>
                        <a href="#goal">Цель</a>
                      </li>
                      <li>
                        <a href="#problems">Проблемы</a>
                      </li>
                      <li>
                        <a href="#audiens">Аудитория</a>
                      </li>
                      <li>
                        <a href="#about">О приложении</a>
                      </li>
                      <li>
                        <a href="#advantages">Достижения</a>
                      </li>
                      <li>
                        <a href="#contacts">Контакты</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Container>
            </header>
            <section
              class={'flex flex-col h-[900px] relative py-[106px] bg-gradient'}
              style={{
                background:
                  'radial-gradient(circle at right, white 0%, #C8D3FF 60%, rgba(124, 131, 159, 0.25) 100%)',
              }}
            >
              <div class="flex relative">
                <Container>
                  <div class="flex items-center justify-center">
                    {' '}
                    <div class="flex flex-col">
                      <img class={'max-w-[400px] h-[101px]'} src={Sled2} alt="След" />
                      <h1 class={' font-extralight text-[2.7rem]'}>
                        Приложение по созданию <br /> 3D-модели следа обуви
                      </h1>
                    </div>
                    <div class="flex z-20">
                      <img src={MockUp} alt="Телефон" />
                    </div>
                  </div>
                </Container>
              </div>
              <div
                class="absolute right-0 bg-gradient-hero w-[476px] top-0 h-full rounded-[30px]"
                style={{
                  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #C8D3FF 100%)',
                }}
              />
            </section>
          </main>
        </div>
      )
    }
  },
})
