const Home = {
    template: `
      <div class="space-y-6">
        <div class="hero bg-base-200 rounded-lg">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold">Hello there</h1>
              <p class="py-6">Welcome to your Vue.js application with TailwindCSS and DaisyUI!</p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="card in cards" :key="card.id" class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">{{ card.title }}</h2>
              <p>{{ card.content }}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-primary">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        cards: [
          { id: 1, title: 'Feature One', content: 'This is the first amazing feature' },
          { id: 2, title: 'Feature Two', content: 'This is the second amazing feature' },
          { id: 3, title: 'Feature Three', content: 'This is the third amazing feature' }
        ]
      }
    }
  }