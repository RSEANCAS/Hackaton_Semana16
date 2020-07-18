<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
$width: 800px;

:root{
  --width: #{$width};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
}

html {
  min-height: 100%;
  position: relative;
}

// body {
//   margin: 0;
//   margin-bottom: auto;
// }

ul,ol{
  list-style: none;
}

a{
  text-decoration: none;
}

#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  .container {
    margin: auto;
    padding: 20px;
  }
  &>.container{
      width: var(--width);
      margin-bottom: 160px;
  }
  & [class*='view']{
    display: flex;
    flex-direction: column;
    // padding: 40px 0px;

	& > h2 {
		align-self: center;
		padding-bottom: 20px;
		font-size: 2em;
	}
  }

  & .list{
        display: grid;
        grid-gap:10px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        &> .card{
          display: flex;
          flex-direction: column;
          box-shadow: black 0px 0px 5px;
          padding: 20px;
          &> .row {
            display: flex;
            flex-direction: column;
            margin-bottom:20px;
            &> a{
              background-color: #2F2F2F;
              color: white;
              padding: 10px;
              align-self: stretch;
              display: flex;
              justify-content: center;
            }
          }

          &> .row.button{
            margin-top: auto;
            margin-bottom: 0px;
          }
        }
    }

	& .single{
		display: flex;
		flex-direction: column;

		& .data {
			display: flex;
			flex-direction: column;

			& h3{
				align-self: center;
				font-size: 1.8em;
			}

			& .row {
				display: flex;
				flex-direction: column;

				& h4{
					font-size: 1.4em;
					margin: 10px 0px;
				}
			}
		}

		& .link-back{
			& a{
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #2F2F2F;
				margin-top: 20px;
				padding: 10px;
				color: white;
			}
		}
	}
}
</style>
