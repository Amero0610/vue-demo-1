<template>
    <div>
        <Board :username="boardUsername" ></Board>
    </div>
</template>
<script>
import globalfile from "./../assets/globalAssets/global.js";
import Board from '../components/HeaderPage/Board';
export default {
    name: 'Headerpage',
    components:{
        Board
    },
    data() {
        return {
            boardUsername:globalfile.Username
        };
    },
    watch:{
        boardUsername:function(newv,oldv){
            console.log(newv);
            console.log(oldv);
        }
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>