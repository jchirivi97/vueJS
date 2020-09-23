<template>
    <div>
        
        <br/>
        <input type="text" placeholder="nickname" v-model="nickname">
        <input type="password" placeholder="password" v-model="password">
        <input type="button" v-on:click="mostrar" value="Ver contraseña">
        <label v-if="ver"> {{ nickpass }} </label>
        <br/>
        <input type="button" v-on:click="principal" value="Ingresar">
        
    </div>
</template>

<script>



export default {
    name: 'login',
    components:{
        
    },
    data(){
        return{
            options: [
                {tipo: "cc",value: 1},
                {tipo: "ce",value:2},
                {tipo: "ti",value:3}
            ],
            nickname: null,
            password: null,
            ver: false,
            verName: false
        }
    },
    methods:{
        mostrar(){
            if(this.ver == false){
                this.ver = true;
            }else{
                this.ver = false;
            }           
        },
        principal(){
            this.verName = true
        }
    },
    computed:{
        nickpass(){
            return this.nickname +" "+ this.password
        }
    }
}
</script>

