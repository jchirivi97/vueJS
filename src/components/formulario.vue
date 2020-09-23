<template>
    <div>
        <form>

            <label for="cedula">Cedula:</label>
            <input id="cedula" type="number" v-model="cedula" placeholder="cedula...">
            <br/>
            <label for="tipoCed">Tipo de Documento:</label>
            <v-select v-model="tipoid" :options="tipoCC" label="name"></v-select>
            <br/>
            <label for="nombre">Nombre:</label>
            <input id="nombre" type="text" v-model="nombre" placeholder="nombre...">
            <br/>
            <label for="apellido">Apellido:</label>
            <input id="apellido" type="text" v-model="apellido" placeholder="apellido...">
            <br/>
            <label for="correo">Correo:</label>
            <input id="correo" type="email" v-model="correo" placeholder="correo...">            

        </form>
    </div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

export default {
    name:'formulario',
    data(){
        return{
            cedula:null,
            tipoCC:[{value:0,name:"CC"},{value:1,name:"CE"},{value:2,name:"TI"}],
            nombre:null,
            apellido: null,
            correo: null,
            tipoid: null
        }
    },

    
}
</script>

<style>

</style>