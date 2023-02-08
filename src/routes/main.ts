import { default as indexRoute } from './pages/index'
import { default as catchAllRoute } from './pages/catch_all'

export default [
  { path: "/", route: indexRoute },
  { path: "*", route: catchAllRoute }, // MUST BE LAST
]