<template>
    <nav>
        <ul>
            <li class="active"><h2>Arrived</h2></li>
            <li><h2>Pending</h2></li>
            <li><h2>Cancelled</h2></li>
        </ul>
    </nav>
</template>

<script>
export default {
    
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