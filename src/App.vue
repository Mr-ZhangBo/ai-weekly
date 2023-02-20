<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#ads { 
  margin-top: 1rem;
  text-align: center;
}

#copyright {
	text-align: center;
	font-size: 12px;
	color: #677488;
	margin-top: 2.5rem;
	z-index: -999;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}

.flex_row {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;

    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    flex-direction: row;
}

.flex_col {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;

    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
}
</style>
