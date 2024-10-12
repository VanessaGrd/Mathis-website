<template>
  <div class="loginForm">
    <h2>Connexion</h2>
    <form name="login-form">
      <div class="input">
        <label for="email">Email</label>
        <input id="username" type="text" v-model="input.email" />
      </div>
      <div class="input">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" v-model="input.password" />
      </div>
      <button
        class="btn btn-outline-dark"
        type="submit"
        v-on:click.prevent="login()"
      >
        Connexion
      </button>
    </form>
  </div>
</template>

<script>
import supabase from "../../config/supabaseClient";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router"; // Importer useRouter
import { ref } from "vue"; // Importer ref

const toast = useToast();
export default {
  setup() {
    // Utilisation de setup()
    const toast = useToast();
    const router = useRouter(); // Obtenir l'instance du router
    const input = ref({
      // Utilisation de ref pour les inputs
      email: "",
      password: "",
    });
    const login = async () => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: input.value.email, // Accéder aux valeurs avec input.value
          password: input.value.password,
        });
        if (error) throw error;

        if (data.session) {
          localStorage.setItem("sb-access-token", data.session.access_token);
          toast.success("Bienvenue Mathis !");
          router.push("/dashboard"); // Redirection après connexion réussie
        }
      } catch (error) {
        console.error(error);
        toast.error("Erreur lors de la connexion");
      }
    };

    return {
      input,
      login, // Retourner la méthode login
    };
  },
};
</script>

<style>
.loginForm {
  width: 30rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
  background-color: rgba(237, 231, 231, 0.4);
  border-radius: 10px;
}

form {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.loginForm h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #141726;
}

.input {
  display: flex;
  flex-direction: column;
  color: #141726;
}

.input label {
  margin-bottom: 10px;
}
.input input {
  border-radius: 5px;
  height: 30px;
  width: 15rem;
  margin-bottom: 10px;
  padding: 5px;
  border: solid 1.5px #d3d3d3;
  -webkit-transition: 1s; /* Safari */
  transition: 0.5s;
}
.input input:hover {
  box-shadow: 0 0 5pt 0.5pt #d3d3d3;
}
.input input:focus {
  box-shadow: 0 0 5pt 2pt #d3d3d3;
  outline-width: 0px;
}

button {
  border-radius: 5px;
  height: 40px;
  width: auto;
  margin-top: 20px;
  padding: 10px;
  border: none;
  background-color: #141726;
  color: #D6E1FF;
  font-weight: 600;
  font-size: 16px;
}

button:hover {
  cursor: pointer;
  background-color: #D6E1FF;
  color: #141726;
}
</style>
