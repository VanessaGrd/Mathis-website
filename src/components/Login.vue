<template>
  <div class="loginForm">
    <h2>Connexion</h2>
    <form name="login-form">
      <div class="input">
        <label for="username">Nom</label>
        <input id="username" type="text" v-model="input.username" />
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
export default {
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
       if(this.input.username === "Mathis16" && this.input.password === "16052016!!"){
        console.log("connexion réussie");
       } else{
        console.log("Username ou mot de passe incorrect");
       }
      
      } else {
        console.log("Données manquantes");
      }
    },
  },
};
</script>

<style>
.loginForm {
  width: 30rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
}

form {
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.loginForm h2 {
  margin-bottom: 40px;
}
.input {
  display: flex;
  flex-direction: column;
}

.input label {
  margin-bottom: 10px;
}
.input input {
  border-radius: 5px;
  height: 30px;
  width: 12rem;
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
  width: 100px;
  margin-top: 20px;
  border: none;
  background-color: #2870bd;
  color: aliceblue;
  font-weight: 600;
}

button:hover {
  cursor: pointer;
  background-color: #104d87;
}
</style>
