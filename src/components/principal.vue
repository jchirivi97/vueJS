<template>
    <div>
        <h1>Bievenido</h1>
        <img class="m-2" src="../datastore/img/bienvenida.jpg">
        <label class="m-2">{{nombre}}</label>
        <label>{{cedula}}</label>

        <formulario></formulario>
    </div>
</template>


<script>

import formulario from './formulario'

export default {
    name:'principal',
    data(){
        return{
        }        
    },
    props:{
        nombre: String,
        cedula: String,
    },
    components:{
        formulario
    }
}
</script>

<style>

</style>