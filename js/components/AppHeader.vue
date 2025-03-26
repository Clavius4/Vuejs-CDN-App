const AppHeader = {
    template: `
      <header class="bg-primary text-primary-content shadow-lg">
        <div class="container mx-auto p-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold">My Vue App</h1>
          <nav class="flex space-x-4">
            <router-link to="/" class="btn btn-ghost">Home</router-link>
            <router-link to="/about" class="btn btn-ghost">About</router-link>
          </nav>
        </div>
      </header>
    `
  }