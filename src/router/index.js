import Discover from "@/pages/discover"
import Mine from "../pages/mine"
import Friend from "../pages/friend"
import NotFound from "../components/not-found"

const routes = [
  {
    path: '/',
    exact: true,
    component: Discover
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    component: NotFound
  }
]

export default routes