<template>
    <nav>
        <ul>
            <li :class="[activeRoute === 'all' ? 'active' : '']" @click="changeType('all')"><h2>All</h2></li>
            <li :class="[activeRoute === 'started' ? 'active' : '']" @click="changeType('started')"><h2>Pending</h2></li>
            <li :class="[activeRoute === 'ended' ? 'active' : '']" @click="changeType('ended')"><h2>Arrived</h2></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            activeRoute: 'all'
        }
    },
    methods: {
        changeType(type){
            this.activeRoute = type
            this.$emit('changeType', type)
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

nav{
    width: 100%;
    height: 4rem;
    background-color: white;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    ul{
        width: 50%;
        list-style: none;

        display: flex;
        justify-content: space-around;
        align-items: center;

        @media only screen and (max-width: 500px){
            width: 100%;
        }

        li{
            cursor: pointer;
        }

        li.active{
            border-bottom: 4px solid $primary-color;
        }

        h2{
            color: $primary-color;
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }

}
</style>