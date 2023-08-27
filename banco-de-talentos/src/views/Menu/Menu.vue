<template>
    <div class="navbar-container">
      <h1 class="title">Banco de talentos</h1>
      <ul class="navbar">
        <RouterLink to="/" class="nav-link">
          <li class="item-nav">
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/home.png" alt="home" />
            <span>Home</span>
          </li>
        </RouterLink>
        <RouterLink to="/about" class="nav-link">
          <li class="item-nav">
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/info.png" alt="info" />
            <span>Sobre</span>
          </li>
        </RouterLink>
        <RouterLink to="/talent/new" class="nav-link">
          <li class="item-nav">
            <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/000000/task.png" alt="task" />
            <span>Cadastro</span>
          </li>
        </RouterLink>
      </ul>
    </div>
  </template>

<style>
:root {
    font-family: sans-serif;
}

.title {
    font-size: 32px;
    font-weight: bold;
    color: rgb(6, 121, 73);
    text-align: center;
    margin-left: 50px;
}

.navbar {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 20px;
}

.item-nav {
    display: flex;
    padding: 5px;
    gap: 8px;
    align-items: center;

    color: rgb(36, 201, 44);

    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  text-align: center;
  margin-bottom: 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.item-nav {
  display: flex;
  padding: 8px;
  gap: 8px;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.item-nav:hover {
  background-color: rgb(200, 200, 200);
  transform: scale(1.02);
}
</style>