# 1. ¿Qué es VUEX? Ventajas y desventajas

Vuex es un patrón de estados que nos permite controlar el estado de nuestra aplicación

* **Ventajas:**

	**1.** La información que se manejaba en la sección data la podemos almacenar en el state para que pueda ser visible para todos los componentes de la aplicación.
	**2.** Mejora la organización de los estados(data), las mutaciones(métodos) y las acciones(llamadas al api).

* **Desventajas:**

	**1.** Se tendría que pasar las variables de nuestra aplicación mediante los props, el cuál sería muy complicado.

# 2. Cuáles son los principales conceptos de VUEX y ejemplificarlos

Los conceptos son:

**1. States:**

Definición de variables de forma global en toda la aplicación. Ejemplo:

```javascript
const store = new Vuex.Store({
	state: {
		a: 1, //Variable global 1
		b: 2, //Variable global 2
	}
})
```

**2. Mutations:**

Métodos que pueden acceder y controlar el valor de los states. Ejemplo:

```javascript
const store = new Vuex.Store({
	state: {
		a: 1, //Variable global 1
		b: 2, //Variable global 2
	},
	mutations: {
		mutation1() {
			this.state.a: -1; //Controla la información del state variable "a"
		},
		mutation2() {
			this.state.b: -2; //Controla la información del state variable "b"
		}
	}
})
```

**3. Actions:**

Métodos que podrán llamar a una mutation o conjunto de mutations, además de poder consultar a los API's. Ejemplo:

```javascript
const store = new Vuex.Store({
	state: {
		a: 1, //Variable global 1
		b: 2, //Variable global 2
	},
	mutations: {
		mutation1(state, value) {
			state.a: -value; //Controla la información del state variable "a"
		},
		mutation2(state, value) {
			state.b: value; //Controla la información del state variable "b"
		}
	},
	actions: {
		[action1](context){
			let url = `https://jsonplaceholder.typicode.com/posts/1`;
			fetch(url)
			.then(r => r.json())
			.then(j => {
				context.commit('mutation1', j.id);
				context.commit('mutation2', j.userId);
			})
		}
	}
})
```

# 3. ¿Por qué y para qué se necesitaria utilizar un administrador de estados? Y ¿En qué situaciones se usaría?

* **¿Por qué y para qué se necesitaria utilizar un administrador de estados?**

Es necesario un manejador de estados para poder usar la información desde cualquier componente y generar la reactividad.

* **¿En qué situaciones se usaría?**

Por ejemplo, tenemos el siguiente caso:

* Componente A
	* Componente B
		* Componente C
* Componente D
	* Componente E

En este caso, si dentro del componente C, tuviera que actualizar alguna variable que se esté utilizando en el componente E, podría hacer de forma directa, invocando a una action o un mutation para modifique el valor de un state y se genere la reactividad en el componente E.