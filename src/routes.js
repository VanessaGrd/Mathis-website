import { useToast } from "vue-toastification";
import Login from "./components/Login.vue";
import Dashboard from "./Dashboard.vue";
import Memory from "./Memory.vue";

function isAuthenticated() {
  return !!localStorage.getItem("sb-access-token"); // Vérifie si le token existe
}

const logout = (to, from, next) => {
localStorage.removeItem("sb-access-token");
const toast = useToast();
toast.success("Déconnexion réussie");
next("/")
}
export const routes = [
  { path: "/", component: Login },
  {
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const toast = useToast();
      if (isAuthenticated()) {
        next();
      } else {
        next("/");
        toast.error("Tu dois être connecté !")
      }
    },
  },
  {path: "/logout", component: Login,
    beforeEnter: logout
  },
  {path: "/dashboard/memory", component: Memory}
];
