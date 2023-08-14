<template>
    <div class="home-container">
        <h2>Bem-vindo ao DevInHouse</h2>
        <p>Conectando talento e oportunidade</p>
        <a href="https://devinhouse.tech">
            <button class="home-button">Conheça o projeto</button>
        </a>
    </div>
</template>

<style scoped>
.home-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.home-button {
  background-color:rgb(36, 201, 44);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.home-button:hover {
  background-color: rgb(6, 121, 73)
}

</style>