<template>
    <nav class="nav_contain">
        <div class="nav_section home">
            <img class="home_img" src="#">
            <a href= '/home' >首页</a>
        </div>
        <div class="nav_section" v-for="(item, index) in navData"  :key="index">
            <a href= item.href >{{item.text}}</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data(){
        return{
            navData: [
                {
                    href: '#',
                    text: '首页'
                },
                {
                    href: '#',
                    text: '国内'
                },
                {
                    href: '#',
                    text: '国际',
                },
                {
                    href: '#',
                    text: '励志',
                },
                {
                    href: '#',
                    text: '学习',
                },
                {
                    href: '#',
                    text: '娱乐',
                },
                {
                    href: '#',
                    text: '体育',
                },
                {
                    href: '#',
                    text: '科技',
                },

            ]
        }
    }

}
</script>

<style scoped>
.nav_contain{
    display: flex;
    justify-content: space-between;
}

.nav_section{
    flex: 1;
    padding: 0.5rem;
    background-color: pink;
}

.nav_section a{
    text-decoration: none;
}
</style>