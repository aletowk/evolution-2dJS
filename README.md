# Evolution 2DJS 

## Use Vite & React

### Using Docker (after install)
Go into the project folder created using [dedicated section](#using-docker-from-scracth)

And starts the docker container:
```bash
docker run -it -v ${PWD}:/home/app -w /home/app -e "PORT=8000" -p 8000:8000 -u node node:latest /bin/bash
```

And use
```
npm run dev
```

### Using Docker (from scracth)
```bash
docker run -it -v ${PWD}:/home/app -w /home/app -e "PORT=8000" -p 8000:8000 -u node node:latest /bin/bash
```
Then create the vite project (follow the interactive steps)
```bash
npm create vite
```

Then go into your newly created project

And then update vite.config.js :
```js
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  }
})
```

After install packages using
```
npm install
```

Then run 
```
npm run dev
```



* Start using
```
```

### Build & Deploy using NGINX

#### Build

```
npm run build
```

#### Deploy
```
docker run -it --rm -p 8080:80 --name web -v ${PWD}\evolution-2djs\dist:/usr/share/nginx/html nginx
```
> If wanted to run as a Deamon, add `-d` after the `-it` option for example


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
